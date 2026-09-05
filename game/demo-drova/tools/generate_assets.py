#!/usr/bin/env python3
"""DROVA-style pixel demo generator for SichWorld — HD pass (48px native tiles).
Gritty desaturated look, dense hand-detailed sprites. Run:
  uvx --with pillow python tools/generate_assets.py
Outputs: assets/*.png, map.json, preview.png, sheet.png, index.html (standalone, playable).
"""
import base64, io, json, math, os, random

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
ASSETS = os.path.join(ROOT, "assets")
random.seed(20260904)

T = 48  # native tile px (3x the original 16)

PAL = {
    "g1": (74, 82, 48), "g2": (90, 97, 64), "g3": (58, 64, 40),
    "g4": (66, 74, 44), "g5": (82, 88, 56), "tuft": (104, 110, 72),
    "tuft_d": (50, 56, 34), "blade_l": (112, 118, 78), "moss": (70, 84, 52),
    "dirt": (111, 98, 80), "dirt_d": (84, 73, 58), "dirt_dd": (66, 57, 45),
    "dirt_l": (128, 116, 96), "stone": (125, 116, 102), "stone_d": (87, 80, 63),
    "peb_l": (150, 142, 128),
    "water": (44, 66, 70), "water_d": (34, 54, 58), "water_dd": (26, 42, 46),
    "water_l": (92, 124, 132), "foam": (142, 168, 163), "foam_d": (108, 134, 130),
    "wet": (104, 95, 77), "wet_d": (86, 78, 62),
    "bark": (74, 56, 40), "bark_d": (50, 36, 25), "bark_l": (96, 76, 56),
    "root": (62, 46, 32),
    "leaf": (52, 62, 38), "leaf_d": (36, 44, 27), "leaf_dd": (28, 35, 21),
    "leaf_l": (90, 98, 62), "leaf_ll": (108, 114, 76),
    "pine": (43, 55, 39), "pine_d": (29, 39, 27), "pine_dd": (22, 30, 21),
    "pine_l": (72, 86, 57), "pine_ll": (92, 104, 70),
    "ol": (22, 24, 18),
    "wall": (138, 122, 92), "wall_d": (102, 88, 64), "wall_l": (158, 142, 110),
    "beam": (70, 52, 36), "thatch": (160, 140, 90), "thatch_d": (126, 108, 68),
    "thatch_dd": (100, 84, 54), "thatch_l": (182, 162, 110),
    "door": (44, 33, 24), "door_l": (66, 50, 36), "glow": (222, 174, 76),
    "glow_d": (180, 132, 54), "stone_f": (110, 106, 98),
    "coat": (140, 60, 52), "coat_d": (102, 42, 37), "coat_l": (168, 84, 72),
    "trim": (196, 164, 96), "skin": (204, 170, 134), "skin_d": (170, 138, 106),
    "skin_dd": (140, 112, 86), "trous": (54, 52, 60), "trous_d": (40, 38, 46),
    "trous_l": (74, 72, 82), "boot": (62, 46, 32), "boot_l": (84, 64, 44),
    "steel": (152, 152, 150), "steel_d": (110, 110, 108), "brass": (184, 152, 92),
    "hair": (26, 22, 18), "strap": (88, 66, 44),
    "plank": (92, 72, 52), "plank_d": (46, 36, 24), "plank_l": (112, 90, 66),
    "rail": (64, 48, 34),
    "fire1": (222, 122, 50), "fire2": (242, 202, 102), "ember": (198, 78, 38),
    "ember_d": (140, 52, 28),
    "rock": (106, 104, 100), "rock_d": (74, 72, 68), "rock_l": (142, 140, 134),
    "bush": (58, 70, 42), "bush_d": (40, 50, 29), "bush_l": (88, 100, 62),
    "berry": (150, 60, 56),
    "reed": (74, 92, 58), "reed_d": (52, 66, 40), "reed_l": (100, 116, 76),
    "cattail": (92, 64, 40), "flower_w": (214, 210, 196), "flower_y": (216, 188, 110),
}

from PIL import Image, ImageDraw


def new(w=T, h=T):
    return Image.new("RGBA", (w, h), (0, 0, 0, 0))


def C(c, a=255):
    return c + (a,) if len(c) == 3 else c


def R(d, x0, y0, x1, y1, c, a=255):
    d.rectangle([x0, y0, x1, y1], fill=C(c, a))


def E(d, x0, y0, x1, y1, c, a=255):
    d.ellipse([x0, y0, x1, y1], fill=C(c, a))


_BAYER = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]]


def spray(d, box, color, density, kind="ellipse"):
    """Ordered-Bayer dithered OPAQUE shading (DROVA-style; avoids fragile
    semi-transparent pixels which flatten to black in some compositors)."""
    x0, y0, x1, y1 = (int(v) for v in box)
    W_, H_ = d._image.size
    m = Image.new("L", (x1 - x0 + 1, y1 - y0 + 1), 0)
    md = ImageDraw.Draw(m)
    getattr(md, kind)([0, 0, x1 - x0, y1 - y0], fill=255)
    mp = m.load()
    thr = density * 16
    for y in range(max(0, y0), min(H_, y1 + 1)):
        row = _BAYER[y & 3]
        for x in range(max(0, x0), min(W_, x1 + 1)):
            if mp[x - x0, y - y0] and row[x & 3] < thr:
                d.point((x, y), fill=C(color))


def pick(weighted):
    r = random.random() * sum(w for _, w in weighted)
    for c, w in weighted:
        r -= w
        if r <= 0:
            return c
    return weighted[-1][0]


GRASS_W = [(PAL["g1"], 30), (PAL["g2"], 22), (PAL["g3"], 20), (PAL["g4"], 18), (PAL["g5"], 10)]


def grass_base(d):
    px = d._image.load()
    for y in range(T):
        for x in range(T):
            px[x, y] = C(pick(GRASS_W))
    # large soft patches
    for _ in range(3):
        cx, cy = random.randrange(T), random.randrange(T)
        rx, ry = random.randint(8, 16), random.randint(6, 12)
        spray(d, [cx - rx, cy - ry, cx + rx, cy + ry],
              random.choice([PAL["g3"], PAL["g2"], PAL["moss"]]), 0.16)


def tuft_clump(d, x, y, s=1):
    for i in range(-2 * s, 3 * s):
        h = random.randint(2, 4) * s
        c = PAL["tuft"] if i % 2 == 0 else PAL["g2"]
        d.line([(x + i, y), (x + i + random.randint(-1, 1), y - h)], fill=C(c))


def grass_tile(variant):
    im, d = new(), None
    im = new()
    d = ImageDraw.Draw(im)
    grass_base(d)
    for _ in range(2 + (variant % 2)):
        tuft_clump(d, random.randrange(4, 44), random.randrange(8, 46))
    px = im.load()
    for _ in range(14):  # pebbles / dry flecks
        x, y = random.randrange(T), random.randrange(T)
        px[x, y] = C(random.choice([PAL["stone_d"], PAL["tuft_d"], PAL["dirt_d"]]))
    if variant % 2 == 0:  # tiny steppe flowers
        for _ in range(3):
            x, y = random.randrange(4, 44), random.randrange(4, 44)
            d.ellipse([x - 1, y - 2, x + 1, y], fill=C(random.choice([PAL["flower_w"], PAL["flower_y"]])))
            d.line([(x, y), (x, y + 3)], fill=C(PAL["tuft_d"]))
    return im


def road_h():
    im = new()
    d = ImageDraw.Draw(im)
    grass_base(d)
    R(d, 0, 8, 47, 39, PAL["dirt"])
    # soft wear blotches
    for _ in range(8):
        x0, x1 = sorted((random.randrange(48) - 10, random.randrange(48) + 10))
        y0, y1 = sorted((random.randrange(8, 40) - 5, random.randrange(8, 40) + 5))
        spray(d, [x0, y0, x1, y1], random.choice([PAL["dirt_l"], PAL["dirt_d"]]), 0.18)
    for y in (13, 34):  # wheel ruts
        R(d, 0, y - 2, 47, y + 2, PAL["dirt_d"])
        R(d, 0, y, 47, y, PAL["dirt_dd"])
    px = im.load()
    for _ in range(90):  # stones & grit
        px[random.randrange(48), random.randrange(8, 40)] = C(
            random.choice([PAL["stone"], PAL["peb_l"], PAL["dirt_l"], PAL["dirt_dd"]]))
    for x in range(0, 48, 3):  # grass encroachment
        if random.random() < 0.8:
            tuft_clump(d, x, 9, 1)
        if random.random() < 0.8:
            tuft_clump(d, x + 1, 39, 1)
    return im


def road_cross():
    im = road_h()
    d = ImageDraw.Draw(im)
    R(d, 18, 0, 29, 47, PAL["dirt"])
    for _ in range(5):
        x0, x1 = sorted((random.randrange(18, 30) - 8, random.randrange(18, 30) + 8))
        y0, y1 = sorted((random.randrange(48) - 6, random.randrange(48) + 6))
        spray(d, [x0, y0, x1, y1], random.choice([PAL["dirt_l"], PAL["dirt_d"]]), 0.28)
    R(d, 19, 0, 21, 47, PAL["dirt_dd"])
    R(d, 26, 0, 28, 47, PAL["dirt_dd"])
    px = im.load()
    for _ in range(40):
        px[random.randrange(18, 30), random.randrange(48)] = C(
            random.choice([PAL["stone"], PAL["peb_l"], PAL["dirt_l"]]))
    return im


def water_frame(phase):
    im = new()
    d = ImageDraw.Draw(im)
    px = im.load()
    for y in range(T):
        for x in range(T):
            px[x, y] = C(pick([(PAL["water"], 65), (PAL["water_d"], 25), (PAL["water_dd"], 10)]))
    for _ in range(3):  # deep soft blotches
        x0, x1 = sorted((random.randrange(48) - 12, random.randrange(48) + 12))
        y0, y1 = sorted((random.randrange(48) - 8, random.randrange(48) + 8))
        spray(d, [x0, y0, x1, y1], PAL["water_d"], 0.18)
    for i in range(5):  # drifting glints
        x = (phase * 11 + i * 13) % 48
        y = (i * 11 + phase * 5) % 48
        d.line([(x, y), (x + 5, y)], fill=C(PAL["water_l"]))
        d.line([(x + 1, y + 1), (x + 3, y + 1)], fill=C(PAL["foam_d"]))
    # sparkles
    for _ in range(3):
        x = (phase * 17 + random.randrange(48)) % 48
        y = random.randrange(48)
        d.point((x, y), fill=C(PAL["foam"]))
    return im


def shore_edge():
    im = new()
    d = ImageDraw.Draw(im)
    grass_base(d)
    for _ in range(3):
        tuft_clump(d, random.randrange(48), 8, 1)
    R(d, 0, 30, 47, 36, PAL["wet"])          # wet sand band
    R(d, 0, 33, 47, 36, PAL["wet_d"])
    R(d, 0, 37, 47, 47, PAL["water"])
    px = im.load()
    for y in range(37, 48):
        for x in range(48):
            if random.random() < 0.35:
                px[x, y] = C(PAL["water_d"])
    # foam: bubbly broken line + wash tongues
    for x in range(0, 48, 2):
        if random.random() < 0.85:
            d.line([(x, 37), (x + 1, 37)], fill=C(PAL["foam"]))
            if random.random() < 0.5:
                d.point((x, 36), fill=C(PAL["foam"]))
        if random.random() < 0.18:  # wash tongue up the bank
            d.line([(x, 34), (x, 36)], fill=C(PAL["foam_d"]))
    for _ in range(10):
        d.point((random.randrange(48), random.randrange(38, 44)), fill=C(PAL["water_l"]))
    return im


def bridge_mid():
    im = new()
    d = ImageDraw.Draw(im)
    R(d, 0, 0, 47, 47, PAL["plank_d"])       # gaps
    for x in range(2, 48, 12):               # deck planks
        R(d, x, 4, x + 9, 43, PAL["plank"])
        R(d, x, 4, x + 2, 43, PAL["plank_l"])
        for _ in range(6):                   # grain
            gx = random.randrange(x + 1, x + 9)
            d.line([(gx, 6), (gx, 41)], fill=C(PAL["rail"]))
        d.point((x + 5, 8), fill=C(PAL["plank_d"]))   # pegs
        d.point((x + 5, 39), fill=C(PAL["plank_d"]))
    for y in (0, 44):                        # rails + posts
        R(d, 0, y, 47, y + 3, PAL["rail"])
        R(d, 0, y, 47, y, PAL["beam"])
    for x in (2, 23, 44):
        R(d, x, 0, x + 3, 47, PAL["beam"])
        R(d, x, 0, x + 1, 47, PAL["bark_l"])
    return im


def leaf_blobs(d, cx, cy, r, n, c_dark, c_mid, c_light, ol, bmin=5, bmax=11, squash=0.82):
    pts = []
    for _ in range(n):
        a = random.random() * 2 * math.pi
        rr = r * math.sqrt(random.random())
        bx, by = cx + rr * math.cos(a), cy + rr * squash * math.sin(a)
        br = random.randint(bmin, bmax)
        pts.append((bx, by, br))
    for bx, by, br in pts:  # outline pass
        E(d, bx - br - 2, by - br - 2, bx + br + 2, by + br + 2, ol)
    for bx, by, br in pts:  # fill pass
        E(d, bx - br, by - br, bx + br, by + br, c_mid)
    for bx, by, br in pts:  # shade low-right (dithered)
        if bx > cx and by > cy - r * 0.2:
            spray(d, [bx - br + 1, by - br + 2, bx + br, by + br], c_dark, 0.55)
    for bx, by, br in pts:  # lit top-left (dithered)
        if bx < cx and by < cy:
            spray(d, [bx - br, by - br, bx + br - 3, by + br - 3], c_light, 0.6)
    return pts


def tree_oak():
    S = 96
    im = new(S, S)
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    spray(d, [14, 84, 82, 94], (12, 14, 10), 0.35)          # dithered shadow
    R(d, 43, 58, 53, 88, O)                               # trunk outline
    R(d, 45, 58, 51, 88, PAL["bark"])
    for _ in range(7):                                    # bark grooves
        gx = random.randrange(45, 52)
        d.line([(gx, 60), (gx + random.randint(-2, 2), 87)], fill=C(PAL["bark_d"]))
    d.line([(46, 62), (46, 86)], fill=C(PAL["bark_l"]))
    for rx, ry in ((38, 88), (58, 88)):                   # roots
        d.line([(48, 80), (rx, ry)], fill=C(PAL["root"]))
        d.line([(48, 80), (rx, ry)], fill=C(PAL["bark_d"]))
    d.line([(47, 62), (30, 44)], fill=C(PAL["bark_d"]))   # skeletal limbs
    d.line([(49, 58), (68, 42)], fill=C(PAL["bark_d"]))
    d.line([(48, 54), (48, 30)], fill=C(PAL["bark_d"]))
    leaf_blobs(d, 34, 34, 20, 26, PAL["leaf_d"], PAL["leaf"], PAL["leaf_l"], O)
    leaf_blobs(d, 62, 32, 21, 28, PAL["leaf_d"], PAL["leaf"], PAL["leaf_l"], O)
    leaf_blobs(d, 48, 20, 17, 22, PAL["leaf_dd"], PAL["leaf"], PAL["leaf_ll"], O)
    px = im.load()                                        # dither holes + acorns
    for _ in range(60):
        x, y = random.randrange(14, 82), random.randrange(4, 62)
        r, g, b, a = px[x, y]
        if a and abs(int(g) - 62) < 30:
            px[x, y] = C(PAL["leaf_dd"] if random.random() < 0.6 else PAL["leaf_l"])
    return im


def tree_pine():
    S = 96
    im = new(S, S)
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    spray(d, [20, 84, 76, 94], (12, 14, 10), 0.35)
    R(d, 45, 66, 51, 88, PAL["bark"])
    d.line([(48, 66), (48, 88)], fill=C(PAL["bark_d"]))
    tiers = [(78, 30), (66, 27), (54, 23), (42, 19), (31, 14), (21, 9)]
    for y, w in tiers:
        d.polygon([(48 - w // 2 - 3, y), (48 + w // 2 + 3, y), (48, y - 22)], fill=C(O))
        d.polygon([(48 - w // 2, y), (48 + w // 2, y), (48, y - 22)], fill=C(PAL["pine"]))
        d.polygon([(48 - w // 2, y), (48, y), (48, y - 22)], fill=C(PAL["pine_l"]))  # lit flank
        d.polygon([(48 + 2, y - 2), (48 + w // 2 - 2, y - 2), (48 + 2, y - 18)], fill=C(PAL["pine_d"]))
        for _ in range(w):  # needle strokes
            nx = random.randrange(48 - w // 2, 48 + w // 2 + 1)
            ny = random.randrange(y - 20, y)
            d.line([(nx, ny), (nx, ny + 3)], fill=C(PAL["pine_d"] if nx > 48 else PAL["pine_ll"]))
    d.line([(48, 4), (48, 0)], fill=C(O))  # spike
    return im


def bush():
    im = new()
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    spray(d, [4, 38, 43, 46], (12, 14, 10), 0.35)
    leaf_blobs(d, 24, 26, 15, 20, PAL["bush_d"], PAL["bush"], PAL["bush_l"], O, 4, 8)
    for _ in range(7):  # sloe berries
        x, y = random.randrange(10, 38), random.randrange(14, 34)
        d.ellipse([x - 1, y - 1, x + 1, y + 1], fill=C(PAL["berry"]))
        d.point((x - 1, y - 1), fill=C(PAL["flower_w"]))
    return im


def rock():
    im = new()
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    spray(d, [4, 38, 43, 46], (12, 14, 10), 0.35)
    d.polygon([(8, 40), (14, 14), (32, 10), (41, 40)], fill=C(O))
    d.polygon([(10, 38), (15, 16), (31, 12), (39, 38)], fill=C(PAL["rock"]))
    d.polygon([(10, 38), (15, 16), (22, 14), (19, 38)], fill=C(PAL["rock_l"]))
    d.line([(24, 14), (28, 30)], fill=C(PAL["rock_d"]))   # cracks
    d.line([(28, 30), (34, 36)], fill=C(PAL["rock_d"]))
    for _ in range(4):  # moss
        mx0, mx1 = sorted((random.randrange(10, 36), random.randrange(10, 36) + 5))
        my0, my1 = sorted((random.randrange(28, 38), random.randrange(28, 38) + 3))
        E(d, mx0, my0, mx1, my1, PAL["moss"])
    return im


def fence_h():
    im = new()
    d = ImageDraw.Draw(im)
    grass_base(d)
    tuft_clump(d, 6, 44, 1)
    tuft_clump(d, 40, 44, 1)
    O = PAL["ol"]
    for y in (16, 30):  # rails
        R(d, 0, y, 47, y + 5, O)
        R(d, 0, y, 47, y + 4, PAL["rail"])
        R(d, 0, y, 47, y + 1, PAL["bark_l"])
    for x in (5, 22, 40):  # posts
        R(d, x, 8, x + 6, 42, O)
        R(d, x + 1, 8, x + 5, 42, PAL["bark"])
        d.line([(x + 2, 10), (x + 2, 40)], fill=C(PAL["bark_l"]))
        d.polygon([(x, 8), (x + 6, 8), (x + 3, 4)], fill=C(PAL["beam"]))
    return im


def fire_frame(phase):
    im = new()
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    spray(d, [8, 36, 39, 45], (12, 14, 10), 0.35)
    for i, ax in enumerate((12, 24, 35)):  # stone ring
        E(d, ax - 5, 34 - (i % 2) * 2, ax + 5, 42 - (i % 2) * 2, O)
        E(d, ax - 4, 35 - (i % 2) * 2, ax + 4, 41 - (i % 2) * 2, PAL["stone_f"])
        E(d, ax - 4, 35 - (i % 2) * 2, ax, 38 - (i % 2) * 2, PAL["peb_l"])
    d.line([(14, 36), (33, 32)], fill=C(PAL["bark_d"]))   # charred logs
    d.line([(14, 32), (33, 36)], fill=C(PAL["bark_d"]))
    d.line([(14, 36), (33, 32)], fill=C(PAL["ember_d"]))
    shapes = [
        [(16, 34), (32, 34), (24, 8)],
        [(14, 34), (34, 34), (21, 6)],
        [(17, 34), (31, 34), (27, 10)],
    ][phase]
    (x0, y0), (x1, y1), (xt, yt) = shapes
    d.polygon([(x0, y0), (x1, y1), (xt, yt)], fill=C(PAL["ember"]))
    d.polygon([(x0 + 3, y0), (x1 - 3, y1), ((xt + 24) // 2, (yt + 20) // 2)], fill=C(PAL["fire1"]))
    d.polygon([(x0 + 6, y0), (x1 - 5, y1), ((xt + 24) // 2, (yt + 26) // 2)], fill=C(PAL["fire2"]))
    for _ in range(4):  # sparks
        d.point((random.randrange(16, 33), random.randrange(2, yt + 6)), fill=C(PAL["fire2"]))
    return im


def hut():
    Wd, Ht = 144, 120
    im = new(Wd, Ht)
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    spray(d, [6, 104, 137, 117], (12, 14, 10), 0.35)         # dithered shadow
    for i, sx in enumerate((14, 50, 86, 118)):            # foundation stones
        E(d, sx - 9, 98, sx + 9, 110, O)
        E(d, sx - 8, 99, sx + 8, 109, PAL["stone_f"])
    R(d, 24, 56, 119, 102, O)                            # log walls
    R(d, 26, 58, 117, 100, PAL["wall"])
    for y in range(60, 101, 7):                           # log courses
        R(d, 26, y + 5, 117, y + 6, PAL["wall_d"])
        R(d, 26, y, 117, y + 1, PAL["wall_l"])
        for _ in range(6):                                # grain
            gx = random.randrange(28, 114)
            d.line([(gx, y + 2), (gx + 4, y + 2)], fill=C(PAL["wall_d"]))
    for x in (24, 115):                                   # corner posts
        R(d, x, 56, x + 4, 102, PAL["beam"])
    R(d, 62, 70, 82, 100, O)                             # door
    R(d, 64, 72, 80, 100, PAL["door"])
    for x in (68, 74):                                    # door planks
        d.line([(x, 72), (x, 100)], fill=C(PAL["door_l"]))
    d.line([(64, 84), (80, 78)], fill=C(PAL["beam"]))    # brace
    d.ellipse([77, 86, 80, 89], fill=C(PAL["brass"]))    # ring handle
    R(d, 92, 64, 112, 82, O)                             # window
    R(d, 94, 66, 110, 80, PAL["glow"])
    R(d, 94, 66, 110, 70, PAL["glow_d"])
    d.line([(102, 66), (102, 80)], fill=C(PAL["beam"]))  # cross frame
    d.line([(94, 73), (110, 73)], fill=C(PAL["beam"]))
    for x in (88, 114):                                   # shutters
        R(d, x, 62, x + 5, 84, PAL["beam"])
    d.polygon([(12, 62), (72, 12), (132, 62)], fill=C(O))         # thatch mass
    d.polygon([(16, 62), (72, 16), (128, 62)], fill=C(PAL["thatch"]))
    for row in range(58, 20, -6):                                   # layered straw
        for x in range(20, 126, 4):
            if random.random() < 0.85:
                d.line([(x, row), (x + 2, row - 7)], fill=C(
                    PAL["thatch_l"] if (x + row) % 8 < 3 else PAL["thatch_d"]))
    d.line([(72, 14), (72, 4)], fill=C(O))                          # ridge post
    R(d, 66, 2, 78, 6, PAL["beam"])
    spray(d, [16, 58, 128, 64], (30, 32, 22), 0.3, "rectangle")  # eave shade
    return im


def reeds():
    im = new()
    d = ImageDraw.Draw(im)
    for i in range(7):
        x = 6 + i * 6 + random.randint(-2, 2)
        h = random.randint(26, 42)
        lean = random.randint(-4, 4)
        d.line([(x, 47), (x + lean, 47 - h)], fill=C(PAL["reed_d"]))
        d.line([(x + 1, 47), (x + lean + 1, 47 - h)], fill=C(PAL["reed"]))
        d.line([(x, 47), (x + lean, 47 - h)], fill=C(PAL["reed_l"]))
        if i % 2 == 0:  # cattail head
            hx, hy = x + lean, 47 - h
            d.ellipse([hx - 2, hy - 8, hx + 2, hy], fill=C(PAL["cattail"]))
            d.line([(hx, hy - 8), (hx, hy - 12)], fill=C(PAL["reed_l"]))
    return im


def stump():
    im = new()
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    spray(d, [8, 38, 39, 46], (12, 14, 10), 0.35)
    d.polygon([(12, 40), (14, 22), (34, 22), (36, 40)], fill=C(O))
    d.polygon([(13, 39), (15, 23), (33, 23), (35, 39)], fill=C(PAL["bark"]))
    E(d, 13, 16, 35, 28, O)
    E(d, 15, 18, 33, 26, PAL["plank_l"])
    E(d, 19, 20, 29, 24, PAL["plank"])          # rings
    E(d, 22, 21, 26, 23, PAL["bark_d"])
    for _ in range(5):                          # moss + mushrooms
        d.point((random.randrange(12, 36), random.randrange(34, 41)), fill=C(PAL["moss"]))
    for mx in (10, 38):
        d.ellipse([mx - 2, 34, mx + 2, 38], fill=C(PAL["flower_w"]))
        d.point((mx, 34), fill=C(PAL["berry"]))
    return im


def tuft_decor():
    im = new()
    d = ImageDraw.Draw(im)
    for _ in range(4):
        tuft_clump(d, random.randrange(8, 40), random.randrange(20, 44), 2)
    return im


def pebbles():
    im = new()
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    for _ in range(5):
        x, y = random.randrange(8, 40), random.randrange(16, 42)
        s = random.randint(2, 4)
        E(d, x - s, y - s, x + s, y + s, O)
        E(d, x - s + 1, y - s + 1, x + s - 1, y + s - 1, PAL["rock"])
        E(d, x - s + 1, y - s + 1, x, y, PAL["rock_l"])
    return im


def flowers():
    im = new()
    d = ImageDraw.Draw(im)
    for _ in range(6):
        x, y = random.randrange(6, 42), random.randrange(10, 42)
        h = random.randint(6, 12)
        d.line([(x, y), (x, y - h)], fill=C(PAL["tuft_d"]))
        c = random.choice([PAL["flower_w"], PAL["flower_y"], PAL["berry"]])
        for dx, dy in ((0, 0), (-2, 1), (2, 1), (0, -2), (-1, 2)):
            d.point((x + dx, y - h + dy), fill=C(c))
        d.point((x, y - h), fill=C(PAL["fire2"]))
    return im


# ---------------- outpost props (all 48px base unless noted) ----------------
def well():
    im = new()
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    spray(d, [6, 36, 42, 45], (12, 14, 10), 0.35)
    for x in (9, 33):  # posts + crossbar + mini roof
        R(d, x, 6, x + 5, 32, O)
        R(d, x + 1, 6, x + 4, 32, PAL["bark"])
    R(d, 8, 8, 39, 12, PAL["beam"])
    d.polygon([(4, 10), (24, -6), (44, 10)], fill=C(O))
    d.polygon([(7, 10), (24, -3), (41, 10)], fill=C(PAL["thatch"]))
    for x in range(10, 40, 4):
        d.line([(x, 9), (x + 2, 2)], fill=C(PAL["thatch_d"]))
    E(d, 7, 26, 41, 42, O)  # stone ring
    E(d, 9, 28, 39, 40, PAL["stone_f"])
    E(d, 13, 30, 35, 38, (16, 22, 24))  # dark water mouth
    for _ in range(8):
        d.point((random.randrange(10, 38), random.randrange(28, 40)), fill=C(PAL["rock_l"]))
    d.line([(24, 12), (24, 26)], fill=C(PAL["strap"]))  # rope + bucket
    R(d, 21, 26, 27, 31, O)
    R(d, 22, 27, 26, 30, PAL["plank"])
    return im


def woodpile():
    im = new()
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    spray(d, [4, 38, 44, 46], (12, 14, 10), 0.35)
    rows = [(6, 5), (14, 4), (22, 3)]
    for y, n in rows:
        x = 24 - n * 5
        for i in range(n):
            E(d, x + i * 10, y, x + i * 10 + 9, y + 9, O)
            E(d, x + i * 10 + 1, y + 1, x + i * 10 + 8, y + 8, PAL["bark"])
            E(d, x + i * 10 + 3, y + 3, x + i * 10 + 6, y + 6, PAL["plank_l"])
    return im


def tent():
    im = new(96, 72)
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    spray(d, [8, 60, 88, 70], (12, 14, 10), 0.35)
    canvas, canvas_d = (164, 150, 118), (128, 114, 86)
    d.polygon([(6, 64), (48, 6), (90, 64)], fill=C(O))  # main wedge
    d.polygon([(9, 64), (48, 9), (87, 64)], fill=C(canvas))
    d.polygon([(48, 9), (87, 64), (66, 64)], fill=C(canvas_d))  # shaded flank
    d.line([(48, 9), (48, 64)], fill=C(canvas_d))  # seam
    d.polygon([(9, 64), (30, 64), (24, 44)], fill=C((110, 98, 74)))  # open flap (dark)
    d.line([(48, 9), (48, 0)], fill=C(PAL["beam"]))  # ridge pole
    for px, py, dx in ((9, 64, -6), (87, 64, 6)):  # guy ropes + pegs
        d.line([(px, 50), (px + dx, 68)], fill=C(PAL["strap"]))
        d.line([(px + dx, 64), (px + dx, 70)], fill=C(PAL["beam"]))
    for _ in range(10):  # weather stains
        d.point((random.randrange(14, 82), random.randrange(20, 62)), fill=C(canvas_d))
    return im


def cart():
    im = new(64, 48)
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    spray(d, [4, 40, 60, 46], (12, 14, 10), 0.35)
    d.line([(52, 18), (63, 12)], fill=C(PAL["beam"]))  # shafts
    d.line([(52, 22), (63, 22)], fill=C(PAL["beam"]))
    R(d, 6, 12, 54, 26, O)  # bed
    R(d, 7, 13, 53, 25, PAL["plank"])
    for x in range(10, 52, 6):
        d.line([(x, 13), (x, 25)], fill=C(PAL["plank_d"]))
    for _ in range(12):  # hay
        d.point((random.randrange(10, 50), random.randrange(8, 14)), fill=C(PAL["thatch_l"]))
    for wx in (14, 46):  # wheels
        E(d, wx - 11, 18, wx + 11, 40, O)
        E(d, wx - 10, 19, wx + 10, 39, PAL["bark"])
        for a in range(0, 180, 30):
            dx, dy = int(8 * math.cos(math.radians(a))), int(8 * math.sin(math.radians(a)))
            d.line([(wx, 29), (wx + dx, 29 + dy)], fill=C(PAL["beam"]))
        E(d, wx - 3, 26, wx + 3, 32, PAL["strap"])
    return im


def barrel():
    im = new(32, 40)
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    spray(d, [2, 34, 30, 39], (12, 14, 10), 0.35)
    E(d, 3, 26, 29, 38, O)
    R(d, 4, 6, 28, 32, O)
    E(d, 4, 2, 28, 12, O)
    R(d, 5, 6, 27, 32, PAL["bark"])
    E(d, 5, 3, 27, 11, PAL["plank_l"])
    for x in (10, 16, 22):
        d.line([(x, 6), (x, 32)], fill=C(PAL["bark_d"]))
    for y in (10, 26):  # hoops
        R(d, 4, y, 28, y + 2, PAL["hair"])
    return im


def crate():
    im = new(40, 36)
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    spray(d, [2, 30, 38, 35], (12, 14, 10), 0.35)
    R(d, 4, 6, 35, 32, O)
    R(d, 5, 7, 34, 31, PAL["plank"])
    for y in (13, 20, 26):
        d.line([(5, y), (34, y)], fill=C(PAL["plank_d"]))
    d.line([(5, 31), (34, 7)], fill=C(PAL["beam"]))  # brace
    for x, y in ((7, 9), (32, 9), (7, 29), (32, 29)):
        d.point((x, y), fill=C(PAL["hair"]))  # nails
    return im


def lantern():
    im = new(24, 72)
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    spray(d, [2, 66, 22, 71], (12, 14, 10), 0.35)
    R(d, 8, 18, 13, 68, O)  # post
    R(d, 9, 18, 12, 68, PAL["bark"])
    R(d, 9, 14, 23, 18, PAL["beam"])  # arm
    R(d, 17, 18, 23, 34, O)  # lamp frame
    R(d, 18, 20, 22, 33, PAL["glow"])
    R(d, 18, 20, 22, 24, PAL["glow_d"])
    R(d, 16, 16, 24, 19, O)  # cap
    return im


def palisade():
    im = new(48, 64)
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    spray(d, [2, 58, 46, 63], (12, 14, 10), 0.3)
    for i in range(5):
        x = 2 + i * 9
        d.polygon([(x, 16), (x + 8, 16), (x + 4, 8)], fill=C(O))
        R(d, x, 16, x + 8, 60, O)
        R(d, x + 1, 16, x + 7, 60, PAL["bark"] if i % 2 else PAL["beam"])
        d.line([(x + 2, 18), (x + 2, 58)], fill=C(PAL["bark_l"]))
    for y in (26, 46):  # binding beams + rope
        R(d, 0, y, 47, y + 4, PAL["rail"])
        for i in range(5):
            d.line([(6 + i * 9, y), (6 + i * 9, y + 4)], fill=C(PAL["strap"]))
    return im


def shrine():
    im = new(32, 64)
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    spray(d, [2, 56, 30, 63], (12, 14, 10), 0.35)
    E(d, 4, 50, 28, 60, O)  # mound
    E(d, 5, 51, 27, 59, PAL["g3"])
    R(d, 13, 8, 19, 54, O)  # cross
    R(d, 14, 9, 18, 53, PAL["rock"])
    R(d, 6, 18, 26, 24, O)
    R(d, 7, 19, 25, 23, PAL["rock"])
    R(d, 14, 9, 15, 53, PAL["rock_l"])
    R(d, 20, 19, 25, 23, PAL["flower_w"])  # rushnyk cloth
    d.point((22, 21), fill=C(PAL["berry"]))
    d.point((24, 21), fill=C(PAL["berry"]))
    for _ in range(3):  # moss
        d.point((random.randrange(14, 19), random.randrange(30, 50)), fill=C(PAL["moss"]))
    d.point((9, 48), fill=C(PAL["glow"]))  # vigil candles
    d.point((23, 49), fill=C(PAL["glow"]))
    return im


def beehive():
    im = new(32, 44)
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    spray(d, [2, 38, 30, 43], (12, 14, 10), 0.35)
    R(d, 8, 34, 24, 40, PAL["beam"])  # stand
    E(d, 5, 12, 27, 38, O)  # skep
    E(d, 6, 13, 26, 37, PAL["thatch"])
    for y in (18, 24, 30):  # coil bands
        d.arc([6, 13, 26, 37], 200, 340, fill=C(PAL["thatch_d"]))
        d.line([(6, y), (26, y)], fill=C(PAL["thatch_d"]))
    E(d, 13, 30, 19, 36, O)  # entrance
    E(d, 14, 31, 18, 35, (16, 14, 10))
    for bx, by in ((4, 10), (28, 22)):  # bees
        d.point((bx, by), fill=C(PAL["fire2"]))
        d.point((bx + 1, by), fill=C(PAL["hair"]))
    return im


def dummy():
    im = new(32, 64)
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    spray(d, [4, 58, 28, 63], (12, 14, 10), 0.35)
    R(d, 13, 22, 18, 60, O)  # post
    R(d, 14, 22, 17, 60, PAL["bark"])
    R(d, 5, 26, 27, 31, O)  # crossbar arms
    R(d, 6, 27, 26, 30, PAL["beam"])
    E(d, 9, 6, 23, 20, O)  # straw head
    E(d, 10, 7, 22, 19, PAL["thatch_l"])
    d.line([(16, 19), (16, 22)], fill=C(PAL["strap"]))
    R(d, 9, 32, 23, 52, O)  # straw torso
    R(d, 10, 33, 22, 51, PAL["thatch"])
    for _ in range(8):  # straw strokes + cuts
        d.line([(random.randrange(10, 22), random.randrange(33, 51)),
                (random.randrange(10, 22), random.randrange(33, 51))], fill=C(PAL["thatch_d"]))
    d.line([(10, 40), (22, 40)], fill=C(PAL["coat_d"]))  # old saber cut
    return im


def tower():
    im = new(64, 128)
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    spray(d, [4, 120, 60, 127], (12, 14, 10), 0.35)
    for lx, rx in ((14, 26), (38, 50)):  # splayed legs
        d.line([(lx, 122), (lx + 4, 52)], fill=C(O))
        d.line([(lx + 1, 122), (lx + 4, 52)], fill=C(PAL["bark"]))
    d.line([(16, 100), (48, 76)], fill=C(PAL["beam"]))  # braces
    d.line([(48, 100), (16, 76)], fill=C(PAL["beam"]))
    R(d, 24, 60, 36, 122, PAL["beam"])  # ladder
    for y in range(66, 120, 8):
        d.line([(24, y), (36, y)], fill=C(PAL["bark_l"]))
    R(d, 6, 44, 58, 54, O)  # platform
    R(d, 7, 45, 57, 53, PAL["plank"])
    for x in (8, 24, 40, 54):  # railing
        R(d, x, 28, x + 3, 45, PAL["beam"])
    R(d, 6, 28, 58, 32, PAL["rail"])
    d.polygon([(2, 30), (32, 2), (62, 30)], fill=C(O))  # roof
    d.polygon([(5, 30), (32, 5), (59, 30)], fill=C(PAL["thatch"]))
    for x in range(10, 56, 5):
        d.line([(x, 29), (x + 3, 12)], fill=C(PAL["thatch_d"]))
    E(d, 24, 36, 40, 44, O)  # brazier bowl + cold logs
    E(d, 26, 37, 38, 43, PAL["rock_d"])
    d.line([(28, 40), (36, 38)], fill=C(PAL["bark_d"]))
    return im


def table_prop():
    im = new(64, 40)
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    spray(d, [4, 34, 60, 39], (12, 14, 10), 0.35)
    for lx in (8, 52):
        R(d, lx, 20, lx + 5, 36, O)
        R(d, lx + 1, 20, lx + 4, 36, PAL["beam"])
    R(d, 2, 12, 62, 21, O)  # top
    R(d, 3, 13, 61, 20, PAL["plank"])
    for x in range(6, 60, 8):
        d.line([(x, 13), (x, 20)], fill=C(PAL["plank_d"]))
    E(d, 14, 8, 26, 15, O)  # bowl
    E(d, 15, 9, 25, 14, PAL["glow_d"])
    E(d, 40, 10, 48, 18, O)  # mug
    R(d, 41, 11, 47, 17, PAL["beam"])
    E(d, 30, 12, 38, 17, PAL["thatch_l"])  # bread
    return im


def boat():
    im = new(96, 48)
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    spray(d, [6, 40, 90, 47], (12, 14, 10), 0.35)
    d.polygon([(2, 18), (10, 10), (86, 10), (94, 18), (80, 40), (16, 40)], fill=C(O))
    d.polygon([(5, 19), (12, 13), (84, 13), (91, 19), (78, 37), (18, 37)], fill=C(PAL["bark"]))
    d.polygon([(10, 20), (15, 16), (81, 16), (86, 20), (75, 34), (21, 34)], fill=C(PAL["plank_d"]))
    for x in range(22, 76, 8):  # ribs
        d.line([(x, 18), (x - 3, 34)], fill=C(PAL["beam"]))
    d.line([(14, 12), (10, 2)], fill=C(PAL["beam"]))  # prow post
    d.line([(82, 12), (86, 2)], fill=C(PAL["beam"]))
    E(d, 60, 24, 72, 34, O)  # coiled rope
    E(d, 62, 26, 70, 32, PAL["strap"])
    d.line([(30, 36), (70, 8)], fill=C(PAL["beam"]))  # shipped oar
    E(d, 66, 4, 74, 12, PAL["plank_l"])
    return im


# ---------------- NPC factory: parametrized Cossacks ----------------
def cossack(direction, step, o):
    """o: coat, coat_d, coat_l, trim(bool), mustache(None|'black'|'gray'),
    beard(None|'gray'), hair, cap(bool), lock(bool, oseledets), prop
    (None|'bow'|'cleaver'|'mace'|'staff'|'spear'), apron(bool), skin."""
    Wd, Ht = 48, 72
    im = new(Wd, Ht)
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    skin = o.get("skin", PAL["skin"])
    spray(d, [8, 64, 40, 71], (12, 14, 10), 0.35)
    legs = [(17, 0), (27, 0)] if step == 0 else [(14, -2), (30, 2)]
    for lx, dy in legs:
        R(d, lx - 1, 42 + dy, lx + 6, 60, O)
        R(d, lx, 42 + dy, lx + 5, 59, PAL["trous"])
        d.line([(lx + 1, 44 + dy), (lx + 1, 58)], fill=C(PAL["trous_d"]))
        d.line([(lx + 4, 44 + dy), (lx + 4, 58)], fill=C(PAL["trous_l"]))
        R(d, lx - 1, 59, lx + 6, 66, O)
        R(d, lx, 59, lx + 5, 65, PAL["boot"])
        R(d, lx, 59, lx + 1, 65, PAL["boot_l"])
    R(d, 13, 22, 35, 46, O)  # coat
    R(d, 14, 23, 34, 45, o["coat"])
    R(d, 14, 23, 17, 45, o["coat_d"])
    R(d, 31, 23, 34, 45, o["coat_d"])
    if o.get("trim"):
        d.line([(24, 23), (24, 45)], fill=C(PAL["trim"]))
        for by in (27, 32, 37, 42):
            d.ellipse([22, by, 26, by + 3], fill=C(PAL["brass"]))
    R(d, 14, 43, 34, 48, O)  # belt
    R(d, 15, 44, 33, 47, PAL["hair"])
    R(d, 21, 44, 27, 47, PAL["brass"])
    if o.get("apron"):  # work apron over coat
        R(d, 17, 26, 31, 45, O)
        R(d, 18, 27, 30, 44, (122, 96, 66))
        d.line([(24, 27), (24, 44)], fill=C((96, 74, 50)))
    d.line([(15, 24), (33, 44)], fill=C(PAL["strap"]))  # baldric
    prop = o.get("prop")
    if direction == "side":
        if prop == "bow":
            d.arc([2, 20, 20, 48], 270, 90, fill=C(PAL["bark"]))
            d.line([(11, 22), (11, 46)], fill=C(PAL["wall_l"]))
        elif prop == "spear":
            d.line([(36, 2), (36, 66)], fill=C(PAL["beam"]))
            d.polygon([(36, 2), (33, 10), (39, 10)], fill=C(PAL["steel"]))
        elif prop == "staff":
            d.line([(8, 6), (8, 66)], fill=C(PAL["bark"]))
        R(d, 9, 24, 13, 42, O)
        R(d, 10, 25, 12, 41, o["coat_d"])
    else:
        if prop == "bow":
            d.arc([30, 4, 44, 30], 200, 340, fill=C(PAL["bark"]))  # bow on back
            d.line([(31, 8), (43, 8)], fill=C(PAL["wall_l"]))
        elif prop == "mace":
            d.line([(37, 22), (37, 40)], fill=C(PAL["beam"]))
            E(d, 33, 12, 41, 22, O)
            E(d, 34, 13, 40, 21, PAL["brass"])
        elif prop == "staff":
            d.line([(38, 6), (38, 48)], fill=C(PAL["bark"]))
            d.point((38, 5), fill=C(PAL["brass"]))
        elif prop == "spear":
            d.line([(39, 0), (39, 50)], fill=C(PAL["beam"]))
            d.polygon([(39, 0), (36, 8), (42, 8)], fill=C(PAL["steel"]))
        elif prop == "cleaver":
            R(d, 36, 40, 42, 46, PAL["steel_d"])
            d.line([(39, 34), (39, 40)], fill=C(PAL["beam"]))
        R(d, 9, 24, 13, 42, O)
        R(d, 35, 24, 39, 42, O)
        R(d, 10, 25, 12, 41, o["coat"])
        R(d, 36, 25, 38, 41, o["coat"])
        R(d, 10, 42, 12, 47, skin)
        R(d, 36, 42, 38, 47, skin)
    R(d, 17, 4, 31, 22, O)  # head
    R(d, 18, 5, 30, 21, skin)
    R(d, 18, 16, 30, 21, PAL["skin_d"])
    hair = o.get("hair", PAL["hair"])
    if o.get("cap"):  # sheepskin cap
        R(d, 16, 0, 32, 9, O)
        R(d, 17, 1, 31, 8, (52, 44, 38))
        for x in range(18, 31, 3):
            d.line([(x, 1), (x, 8)], fill=C((66, 56, 48)))
    elif direction == "up":
        R(d, 18, 5, 30, 14, hair)
    else:
        R(d, 18, 5, 30, 8, hair)
    if o.get("lock") and not o.get("cap") and direction == "down":
        d.line([(31, 4), (31, 20)], fill=C(hair))  # oseledets
        d.line([(32, 6), (32, 16)], fill=C(hair))
    mst = o.get("mustache")
    if mst:
        mc = (200, 200, 196) if mst == "gray" else PAL["hair"]
        if direction == "down":
            for ex in (21, 27):
                d.point((ex, 12), fill=C(O))
                d.line([(ex - 1, 10), (ex + 1, 10)], fill=C(hair))
            d.line([(20, 17), (28, 17)], fill=C(mc))
            d.line([(22, 18), (26, 18)], fill=C(PAL["skin_dd"]))
        elif direction == "side":
            d.point((28, 12), fill=C(O))
            d.point((30, 14), fill=C(PAL["skin_d"]))
            d.line([(26, 17), (30, 17)], fill=C(mc))
    else:
        if direction == "down":
            for ex in (21, 27):
                d.point((ex, 12), fill=C(O))
        elif direction == "side":
            d.point((28, 12), fill=C(O))
            d.point((30, 14), fill=C(PAL["skin_d"]))
    if o.get("beard"):  # old gray beard covers jaw
        R(d, 19, 15, 29, 22, (190, 188, 180))
        for x in range(20, 29, 2):
            d.line([(x, 15), (x, 22)], fill=C((160, 158, 150)))
    return im


# id, name, role, look, anchors (pre-nearest_walkable), dialogue hooks
ROSTER = [
    {"id": "naum", "name": "Naum Lysenko", "sub": "kurinnyi of Ingulsk", "role": "elder",
     "look": {"coat": (84, 92, 128), "coat_d": (62, 68, 98), "coat_l": (104, 112, 148),
              "trim": True, "mustache": "gray", "hair": (150, 148, 140), "cap": True, "prop": "mace"},
     "home": [44, 13], "work": [46, 10], "fire": [41, 14],
     "spots": [[46, 10], [48, 12], [42, 12]],
     "bark": "The palanka stands.",
     "talk": ["The Sich takes in strays, but Ingulsk takes only hunters. Prove yourself and we will talk.",
              "Livestock first — Khoma will point you to the meadow. Earn my respect and the palanka is yours."]},
    {"id": "taras", "name": "Taras Chub", "sub": "hunter", "role": "hunter",
     "look": {"coat": (74, 96, 64), "coat_d": (54, 72, 46), "coat_l": (94, 116, 82),
              "trim": False, "mustache": "black", "hair": PAL["hair"], "lock": True, "prop": "bow"},
     "home": [38, 10], "work": [12, 17], "fire": [39, 14],
     "spots": [[8, 13], [14, 19], [9, 22]],
     "bark": "...tracks. Fresh.",
     "talk": ["Wolves. Third sheep this week. Something drives them from the steppe — something bigger.",
              "You found wounds on their backs? Then you know. Ask old Ostap about the night howling."]},
    {"id": "honta", "name": "Honta", "sub": "bowyer", "role": "crafter",
     "look": {"coat": (110, 88, 60), "coat_d": (84, 66, 44), "coat_l": (132, 108, 78),
              "trim": False, "mustache": "black", "hair": PAL["hair"], "apron": True, "prop": "bow"},
     "home": [47, 10], "work": [45, 11], "fire": [39, 16],
     "spots": [[45, 11], [47, 12], [43, 10]],
     "bark": "*shaves wood*",
     "talk": ["A bow is not a stick with string. Bring wood, bring patience.",
              "Old males keep apart from the herd. Approach against the wind — and take these poisoned shafts."]},
    {"id": "yatsko", "name": "Yatsko Lysytsia", "sub": "archer & trader", "role": "crafter",
     "look": {"coat": (60, 90, 88), "coat_d": (44, 66, 64), "coat_l": (80, 112, 108),
              "trim": False, "mustache": "black", "hair": PAL["hair"], "cap": True, "prop": "bow"},
     "home": [39, 10], "work": [49, 23], "fire": [41, 16],
     "spots": [[49, 23], [47, 22], [50, 21]],
     "bark": "*tests the string*",
     "talk": ["My fletching? I cut feathers so — see? None else does.",
              "Bring me a proper fur and you will get my price, not the stranger's price."]},
    {"id": "khoma", "name": "Khoma Riznyk", "sub": "butcher", "role": "crafter",
     "look": {"coat": (96, 94, 88), "coat_d": (72, 70, 66), "coat_l": (118, 116, 108),
              "trim": False, "mustache": "black", "hair": PAL["hair"], "apron": True, "prop": "cleaver"},
     "home": [45, 13], "work": [40, 13], "fire": [38, 15],
     "spots": [[40, 13], [42, 12], [39, 12]],
     "bark": "*thunk* Hah!",
     "talk": ["Opanas says HE killed the deer? Ha! My arrow stopped it mid-gallop!",
              "The hide is mine — skinned with these hands. Go on, ask Dovbnia what he saw. If he trusts you."]},
    {"id": "opanas", "name": "Opanas Kryvyi", "sub": "hunter", "role": "hunter",
     "look": {"coat": (88, 96, 80), "coat_d": (66, 72, 60), "coat_l": (108, 116, 98),
              "trim": False, "mustache": "gray", "hair": (120, 116, 108), "prop": None},
     "home": [48, 10], "work": [20, 9], "fire": [42, 15],
     "spots": [[18, 7], [24, 10], [21, 14]],
     "bark": "...quiet. Listen.",
     "talk": ["Khoma's arrow went in soft. Mine found the neck. That is the truth of it.",
              "Dovbnia watched from the bushes. If the lad trusts you, he will talk."]},
    {"id": "hryts", "name": "Hryts Dovbnia", "sub": "apprentice", "role": "youth",
     "look": {"coat": (168, 158, 132), "coat_d": (140, 130, 108), "coat_l": (188, 178, 152),
              "trim": False, "mustache": None, "hair": (90, 66, 44), "lock": False, "prop": None},
     "home": [38, 10], "work": [49, 23], "fire": [40, 14],
     "spots": [[49, 23], [45, 11], [40, 14]],
     "bark": "Watch this! ...almost!",
     "talk": ["Take me hunting! Please! I almost hit a rabbit once! Honestly!",
              "Teach me to shoot straight and I will follow you anywhere. Even to the swamp."]},
    {"id": "pechy", "name": "Pechyborshch", "sub": "healer & trader", "role": "crafter",
     "look": {"coat": (96, 76, 58), "coat_d": (72, 56, 42), "coat_l": (118, 96, 74),
              "trim": False, "mustache": None, "beard": "gray", "hair": (150, 148, 140),
              "cap": True, "prop": "staff"},
     "home": [43, 13], "work": [41, 12], "fire": [39, 15],
     "spots": [[41, 12], [43, 12], [40, 13]],
     "bark": "*stirs the pot*",
     "talk": ["Fever took three in the palanka. I need black-willow root from the swamp.",
              "Ostap guards that tree like a Turk guards gold. Bring him wax — he has a weakness for wax."]},
    {"id": "sentry", "name": "Sentry", "sub": "night watch", "role": "guard",
     "look": {"coat": (110, 62, 52), "coat_d": (84, 46, 38), "coat_l": (132, 82, 68),
              "trim": False, "mustache": "black", "hair": PAL["hair"], "cap": True, "prop": "spear"},
     "home": [51, 17], "work": [44, 9], "fire": [40, 16],
     "spots": [[38, 9], [46, 9], [50, 12], [46, 15], [38, 15]],
     "bark": "All quiet.",
     "talk": ["Night watch. The steppe hears everything, so mind your step.",
              "It walks when the moon is over the ravine. Stay by the fire, stranger."]},
]


def hero(direction, step):
    Wd, Ht = 48, 72
    im = new(Wd, Ht)
    d = ImageDraw.Draw(im)
    O = PAL["ol"]
    spray(d, [8, 64, 40, 71], (12, 14, 10), 0.35)            # dithered shadow
    if step == 0:
        legs = [(17, 0), (27, 0)]
    else:
        legs = [(14, -2), (30, 2)]
    for lx, dy in legs:                                   # baggy sharovary + boots
        R(d, lx - 1, 42 + dy, lx + 6, 60, O)
        R(d, lx, 42 + dy, lx + 5, 59, PAL["trous"])
        d.line([(lx + 1, 44 + dy), (lx + 1, 58)], fill=C(PAL["trous_d"]))
        d.line([(lx + 4, 44 + dy), (lx + 4, 58)], fill=C(PAL["trous_l"]))
        R(d, lx - 1, 59, lx + 6, 66, O)                   # boots
        R(d, lx, 59, lx + 5, 65, PAL["boot"])
        R(d, lx, 59, lx + 1, 65, PAL["boot_l"])
    R(d, 13, 22, 35, 46, O)                              # zhupan coat
    R(d, 14, 23, 34, 45, PAL["coat"])
    R(d, 14, 23, 17, 45, PAL["coat_d"])                   # shade side
    R(d, 31, 23, 34, 45, PAL["coat_d"])
    d.line([(24, 23), (24, 45)], fill=C(PAL["trim"]))     # gold trim
    for by in (27, 32, 37, 42):                           # buttons
        d.ellipse([22, by, 26, by + 3], fill=C(PAL["brass"]))
    R(d, 14, 43, 34, 48, O)                              # belt + buckle
    R(d, 15, 44, 33, 47, PAL["hair"])
    R(d, 21, 44, 27, 47, PAL["brass"])
    R(d, 23, 45, 25, 46, PAL["hair"])
    d.line([(15, 24), (33, 44)], fill=C(PAL["strap"]))    # baldric
    if direction == "side":
        d.line([(8, 16), (38, 42)], fill=C(O))            # saber across back
        d.line([(8, 16), (37, 41)], fill=C(PAL["steel"]))
        d.line([(8, 16), (37, 41)], fill=C(PAL["steel_d"]))
        E(d, 36, 40, 41, 45, O)
        E(d, 37, 41, 40, 44, PAL["brass"])
        R(d, 9, 24, 13, 42, O)                            # far arm
        R(d, 10, 25, 12, 41, PAL["coat_d"])
    else:
        d.line([(29, 20), (38, 10)], fill=C(PAL["steel"]))  # hilt over shoulder
        E(d, 36, 7, 40, 11, PAL["brass"])
        R(d, 9, 24, 13, 42, O)                            # arms
        R(d, 35, 24, 39, 42, O)
        R(d, 10, 25, 12, 41, PAL["coat"])
        R(d, 36, 25, 38, 41, PAL["coat"])
        R(d, 10, 42, 12, 47, PAL["skin"])                 # hands
        R(d, 36, 42, 38, 47, PAL["skin"])
    R(d, 17, 4, 31, 22, O)                               # head
    R(d, 18, 5, 30, 21, PAL["skin"])
    R(d, 18, 16, 30, 21, PAL["skin_d"])                   # jaw shade
    if direction == "down":
        for ex in (21, 27):                               # eyes + brows
            d.point((ex, 12), fill=C(O))
            d.line([(ex - 1, 10), (ex + 1, 10)], fill=C(PAL["hair"]))
        d.line([(21, 17), (27, 17)], fill=C(PAL["hair"]))  # mustache
        d.line([(22, 18), (26, 18)], fill=C(PAL["skin_dd"]))
        d.line([(31, 4), (31, 20)], fill=C(PAL["hair"]))   # oseledets lock
        d.line([(32, 6), (32, 16)], fill=C(PAL["hair"]))
    elif direction == "up":
        R(d, 18, 5, 30, 14, PAL["hair"])                   # back of head
        d.line([(31, 6), (31, 18)], fill=C(PAL["hair"]))
    else:
        d.point((28, 12), fill=C(O))                       # profile eye + nose
        d.point((30, 14), fill=C(PAL["skin_d"]))
        d.line([(27, 17), (30, 17)], fill=C(PAL["hair"]))  # mustache tip
        R(d, 18, 5, 24, 12, PAL["hair"])
    return im


# ---------------- map (tile logic, resolution independent) ----------------
W, H = 56, 40


def river_cx(y):
    return 36 + round(4 * math.sin(y * 0.25) + 2 * math.sin(y * 0.07 + 1))


def road_y(x):
    return 20 + round(1.5 * math.sin(x * 0.15))


def build_map():
    water = [[False] * W for _ in range(H)]
    for y in range(H):
        cx = river_cx(y)
        for x in range(max(0, cx - 1), min(W, cx + 2)):
            water[y][x] = True
    BY = 20
    bridge = [(x, BY) for x in range(river_cx(BY) - 1, river_cx(BY) + 2)]
    bridge_set = set(bridge)
    road = set()
    for x in range(1, 54):
        y = road_y(x)
        if (x, y) not in bridge_set and not water[y][x]:
            road.add((x, y))
    bx0 = min(x for x, y in bridge) - 8
    bx1 = max(x for x, y in bridge) + 8
    for x in range(max(1, bx0), min(W - 1, bx1 + 1)):
        if (x, BY) not in bridge_set and not water[BY][x]:
            road.add((x, BY))
    for y in range(13, 21):
        if not water[y][44]:
            road.add((44, y))
    hut = (43, 11)
    fire = (40, 15)
    fences = [(x, 16) for x in range(42, 48) if x != 44] + [(47, y) for y in range(13, 16)]
    hut_cells = {(hx, hy) for hx in range(43, 46) for hy in (11, 12)}

    # ---- Ingulsk outpost: fixed placements (footprints reserved from scatter)
    props = []  # (type, [(x,y)...]) multi-tile footprints
    props.append(("well", [(38, 13)]))
    props.append(("tent", [(38, 9), (39, 9)]))
    props.append(("tent", [(47, 8), (48, 8)]))
    props.append(("woodpile", [(46, 11)]))
    props.append(("table", [(40, 12), (41, 12)]))
    props.append(("cart", [(36, 17), (37, 17)]))
    props.append(("barrel", [(42, 17)]))
    props.append(("crate", [(49, 14)]))
    props.append(("shrine", [(33, 18)]))
    props.append(("beehive", [(50, 10)]))
    props.append(("beehive", [(51, 11)]))
    props.append(("beehive", [(50, 12)]))
    props.append(("dummy", [(48, 23)]))
    props.append(("dummy", [(50, 23)]))
    props.append(("tower", [(51, 16)]))
    props.append(("boat", [(36, 24), (37, 24)]))
    lanterns = [(45, 13), (32, 19), (37, 18), (47, 20)]
    for lx, ly in lanterns:
        props.append(("lantern", [(lx, ly)]))
    pal_wall = ([(x, 7) for x in range(36, 53) if not water[7][x]] +
                [(36, y) for y in range(8, 16) if not water[y][36]] +
                [(52, y) for y in range(8, 16) if not water[y][52]])
    for i, (px, py) in enumerate(pal_wall):
        props.append(("pal_v" if px in (36, 52) else ("pal_h"), [(px, py)]))
    reserved = set()
    for _t, cells in props:
        for c in cells:
            reserved.add(c)

    def clearing(x, y):
        if math.hypot(x - 44, y - 13) < 6:
            return True
        return (x, y) in road or (x, y) in bridge_set

    objects, decor = [], []
    for y in range(1, H - 1):
        for x in range(1, W - 1):
            if water[y][x] or (x, y) in road or (x, y) in fences or (x, y) == fire:
                continue
            if (x, y) in reserved:
                continue
            if (x, y) in hut_cells or any(abs(x - hx) <= 1 and abs(y - hy) <= 1 for hx, hy in hut_cells):
                continue
            if clearing(x, y):
                if random.random() < 0.10:
                    decor.append({"t": random.choice(["tuft", "pebbles", "flowers"]), "x": x, "y": y})
                continue
            # reeds on banks
            if any(water[yy][xx] for xx in range(max(0, x - 1), min(W, x + 2))
                   for yy in range(max(0, y - 1), min(H, y + 2))) and random.random() < 0.16:
                decor.append({"t": "reeds", "x": x, "y": y})
                continue
            d_water = min(abs(x - river_cx(yy)) for yy in range(max(0, y - 2), min(H, y + 3)))
            density = 0.02
            if x < 22 and y < 14:
                density = 0.16
            if 2 <= d_water <= 5:
                density = max(density, 0.10)
            if x > 38 and y > 26:
                density = max(density, 0.12)
            r = random.random()
            if r < density:
                objects.append({"t": "pine" if random.random() < 0.45 else "oak", "x": x, "y": y})
            elif r < density + 0.02:
                objects.append({"t": "bush", "x": x, "y": y})
            elif r < density + 0.028:
                objects.append({"t": "rock", "x": x, "y": y})
            elif r < density + 0.032:
                objects.append({"t": "stump", "x": x, "y": y})
            elif r < density + 0.06:
                decor.append({"t": random.choice(["tuft", "pebbles", "flowers"]), "x": x, "y": y})
    for t, cells in props:  # props become drawn + blocking objects
        for (px, py) in cells[:1]:
            objects.append({"t": t, "x": px, "y": py, "span": len(cells)})
    blocked = set()
    for y in range(H):
        for x in range(W):
            if water[y][x] and (x, y) not in bridge_set:
                blocked.add((x, y))
    for o in objects:
        if o["t"] in ("oak", "pine", "rock", "stump", "well", "tent", "woodpile",
                      "table", "cart", "barrel", "crate", "lantern", "pal_h", "pal_v",
                      "shrine", "beehive", "dummy", "tower", "boat"):
            n = o.get("span", 1)
            for i in range(n):
                blocked.add((o["x"] + i, o["y"]))
    for hx, hy in hut_cells:
        blocked.add((hx, hy))
    for f in fences:
        blocked.add(f)
    blocked.add(fire)

    def free(x, y):
        return 0 <= x < W and 0 <= y < H and (x, y) not in blocked

    def nearest(x, y, r=8):
        if free(x, y):
            return [x, y]
        for d in range(1, r + 1):
            for dy in range(-d, d + 1):
                for dx in (-d, d):
                    if free(x + dx, y + dy):
                        return [x + dx, y + dy]
            for dx in range(-d + 1, d):
                for dy in (-d, d):
                    if free(x + dx, y + dy):
                        return [x + dx, y + dy]
        return [x, y]

    npcs = []
    for r in ROSTER:
        npcs.append({"id": r["id"], "name": r["name"], "sub": r["sub"], "role": r["role"],
                     "home": nearest(*r["home"]), "work": nearest(*r["work"]),
                     "fire": nearest(*r["fire"]),
                     "spots": [nearest(*s) for s in r["spots"]],
                     "bark": r["bark"], "talk": r["talk"]})
    return {"water": water, "road": sorted(road), "bridge": bridge, "objects": objects,
            "decor": decor, "hut": hut, "fire": fire, "fences": fences,
            "lanterns": lanterns, "npcs": npcs,
            "blocked": sorted(blocked), "spawn": [3, road_y(3)], "hut_door": [44, 13]}


# ---------------- render ----------------
def blit(base, sprite, dx, dy, scale):
    w, h = sprite.size
    r = sprite.resize((w * scale, h * scale), Image.NEAREST)
    base.paste(r, (dx, dy), r)


def render_preview(tiles, m):
    S = 1
    im = Image.new("RGB", (W * T * S, H * T * S), (20, 22, 18))
    water = m["water"]
    road = set(map(tuple, m["road"]))
    bridge = set(map(tuple, m["bridge"]))

    def is_water(x, y):
        return 0 <= x < W and 0 <= y < H and water[y][x]

    def is_road(x, y):
        return (x, y) in road or (x, y) in bridge

    for y in range(H):
        for x in range(W):
            if (x, y) in bridge:
                t = tiles["bridge_mid"]
            elif is_water(x, y):
                n = is_water(x, y - 1) or y == 0
                s = is_water(x, y + 1) or y == H - 1
                w = is_water(x - 1, y) or x == 0
                e = is_water(x + 1, y) or x == W - 1
                f = (x * 5 + y) % 4
                t = tiles[f"water_{f}"]
                if not (n and s and w and e):
                    sh = tiles["shore_edge"]
                    if not n and s:
                        t = sh
                    elif not s and n:
                        t = sh.rotate(180)
                    elif not w and e:
                        t = sh.rotate(90, expand=False)
                    elif not e and w:
                        t = sh.rotate(-90, expand=False)
            elif (x, y) in road:
                n, s = is_road(x, y - 1), is_road(x, y + 1)
                w, e = is_road(x - 1, y), is_road(x + 1, y)
                if (w or e) and not (n or s):
                    t = tiles["road_h"]
                elif (n or s) and not (w or e):
                    t = tiles["road_h"].rotate(90, expand=False)
                else:
                    t = tiles["road_cross"]
            else:
                t = tiles[f"grass_{((x * 73856093) ^ (y * 19349663)) % 6}"]
            blit(im, t, x * T * S, y * T * S, S)
    for o in sorted(m["decor"] + m["objects"], key=lambda o: o["y"]):
        t = tiles[o["t"]]
        tw, th = t.size
        blit(im, t, o["x"] * T * S + (T * S - tw * S) // 2, o["y"] * T * S + T * S - th * S, S)
    for fx, fy in m["fences"]:
        blit(im, tiles["fence_h"], fx * T * S, fy * T * S, S)
    hx, hy = m["hut"]
    blit(im, tiles["hut"], hx * T * S, (hy + 2) * T * S - 120 * S, S)
    fx, fy = m["fire"]
    blit(im, tiles["fire_0"], fx * T * S, fy * T * S, S)
    sx, sy = m["spawn"]
    blit(im, tiles["hero_down_0"], sx * T * S + (T * S - 48 * S) // 2, sy * T * S + T * S - 72 * S, S)
    for n in m["npcs"]:
        hx, hy = n["home"]
        blit(im, tiles[f"npc_{n['id']}_down_0"],
             hx * T * S + (T * S - 48 * S) // 2, hy * T * S + T * S - 72 * S, S)
    return im


def b64(im):
    buf = io.BytesIO()
    im.save(buf, format="PNG")
    return "data:image/png;base64," + base64.b64encode(buf.getvalue()).decode()


HTML = """<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>SichWorld — DROVA-style slice (playable demo)</title>
<style>
  html,body{margin:0;height:100%;background:#141511;display:flex;align-items:center;justify-content:center;
    font-family:monospace;color:#cfc9b4;overflow:hidden}
  #wrap{position:relative;box-shadow:0 0 80px #000}
  canvas{image-rendering:pixelated;image-rendering:crisp-edges;background:#20241c;display:block}
  #vig{position:absolute;inset:0;pointer-events:none;
    background:radial-gradient(ellipse at center,transparent 55%,rgba(8,8,6,.55) 100%)}
  #hud{position:absolute;top:8px;left:10px;font-size:12px;text-shadow:1px 1px 0 #000;pointer-events:none}
  #toast{position:absolute;bottom:14px;left:50%;transform:translateX(-50%);background:rgba(10,10,8,.85);
    border:1px solid #6a6350;padding:6px 14px;font-size:12px;display:none;white-space:nowrap}
  #help{position:absolute;bottom:8px;left:10px;font-size:11px;opacity:.7;text-shadow:1px 1px 0 #000}
  #talk{position:absolute;bottom:44px;left:50%;transform:translateX(-50%);max-width:640px;background:rgba(12,11,8,.92);
    border:1px solid #8a7a5a;padding:8px 14px;font-size:12px;display:none;line-height:1.5}
  #talk b{color:#e8c878}
</style></head><body>
<div id="wrap"><canvas id="c" width="960" height="600"></canvas><div id="vig"></div>
<div id="hud">SICH — Ingulsk outpost &nbsp;·&nbsp; <span id="clock"></span> &nbsp;·&nbsp; <span id="pos"></span></div>
<div id="toast"></div><div id="talk"></div><div id="help">WASD / arrows — walk &nbsp;·&nbsp; E — talk &nbsp;·&nbsp; reach the hut across the bridge</div></div>
<script>
const T=48, S=1, TS=T*S;
const TILES={%%TILES%%};
const MAP=%%MAP%%;
const imgs={};
for(const k in TILES){const i=new Image();i.src=TILES[k];imgs[k]=i;}
const cv=document.getElementById('c'),ctx=cv.getContext('2d');
ctx.imageSmoothingEnabled=false;
const W=MAP.W,H=MAP.H;
const water=new Set(MAP.water), road=new Set(MAP.road.map(p=>p.join(','))),
      bridge=new Set(MAP.bridge.map(p=>p.join(','))), blocked=new Set(MAP.blocked.map(p=>p.join(',')));
const isW=(x,y)=> water.has(y*W+x);
const isR=(x,y)=> road.has(x+','+y)||bridge.has(x+','+y);
function drawT(name,dx,dy,rot){const im=imgs[name];if(!im)return;
  if(!rot){ctx.drawImage(im,dx,dy,TS,TS);}else{ctx.save();ctx.translate(dx+TS/2,dy+TS/2);
  ctx.rotate(rot*Math.PI/180);ctx.drawImage(im,-TS/2,-TS/2,TS,TS);ctx.restore();}}
function ground(x,y,camX,camY,t){
  const dx=x*TS-camX,dy=y*TS-camY;
  if(bridge.has(x+','+y)){drawT('bridge_mid',dx,dy);return;}
  if(isW(x,y)){const n=y>0&&isW(x,y-1),s=y<H-1&&isW(x,y+1),w=x>0&&isW(x-1,y),e=x<W-1&&isW(x+1,y);
    if(n&&s&&w&&e){drawT('water_'+((x*5+y+t)%4),dx,dy);return;}
    if(!n&&s){drawT('shore_edge',dx,dy);return;}
    if(!s&&n){drawT('shore_edge',dx,dy,180);return;}
    if(!w&&e){drawT('shore_edge',dx,dy,90);return;}
    if(!e&&w){drawT('shore_edge',dx,dy,270);return;}
    drawT('water_'+((x*5+y+t)%4),dx,dy);
    ctx.fillStyle='#8aa5a0';
    if(!n)ctx.fillRect(dx,dy,TS,4); if(!s)ctx.fillRect(dx,dy+TS-4,TS,4);
    if(!w)ctx.fillRect(dx,dy,4,TS); if(!e)ctx.fillRect(dx+TS-4,dy,4,TS);return;}
  if(road.has(x+','+y)){const n=isR(x,y-1),s=isR(x,y+1),w=isR(x-1,y),e=isR(x+1,y);
    if((w||e)&&!(n||s))drawT('road_h',dx,dy);
    else if((n||s)&&!(w||e))drawT('road_h',dx,dy,90);
    else drawT('road_cross',dx,dy);return;}
  drawT('grass_'+(((x*73856093 ^ y*19349663)>>>0)%6),dx,dy);}
let px=(MAP.spawn[0]+.5)*TS,py=(MAP.spawn[1]+.8)*TS,dir='down',phase=0,anim=0,moving=false;
let camX=px-480,camY=py-300;
const keys={};
addEventListener('keydown',e=>keys[e.key.toLowerCase()]=true);
addEventListener('keyup',e=>keys[e.key.toLowerCase()]=false);
function solidAt(x,y){const tx=Math.floor(x/TS),ty=Math.floor(y/TS);
  if(tx<0||ty<0||tx>=W||ty>=H)return true;return blocked.has(tx+','+ty);}
function tryMove(nx,ny){
  for(const [ox,oy] of [[0,0],[14,0],[-14,0],[0,-8]]){if(solidAt(nx+ox,ny+oy))return false;}return true;}
const toast=document.getElementById('toast');let toasted=false,toastT=0;
function showToast(s){toast.textContent=s;toast.style.display='block';toastT=240;}
const flies=Array.from({length:40},(_,i)=>({x:(i*197)%(W*TS),y:(i*331)%(H*TS),p:i}));
// ---------- clock: 1 real sec = 1 game min, start Day 1 08:00 ----------
let gameMin=8*60, dayN=1;
const HH=()=>Math.floor(gameMin/60)%24, MM=()=>Math.floor(gameMin%60);
const phaseName=h=>h<4?'night':h<6?'dawn':h<11?'morning':h<17?'day':h<20?'dusk':h<23?'evening':'night';
function darkness(h){
  if(h<4||h>=23) return .85;
  if(h<6) return .85-(h-4)*.35;
  if(h<9) return .15-(h-6)*.05;
  if(h<17) return 0;
  if(h<20) return (h-17)*.22;
  return .66+(h-20)*.06;
}
// ---------- NPCs: Gothic-style daily schedules ----------
const blockedT=new Set(MAP.blocked.map(p=>p.join(',')));
function bfs(sx,sy,tx,ty){
  const k=(x,y)=>x+','+y;
  if(sx===tx&&sy===ty) return [];
  if(blockedT.has(k(tx,ty))) return null;
  const prev={[k(sx,sy)]:0}; const q=[[sx,sy]];
  while(q.length){ const [x,y]=q.shift();
    for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){
      const nx=x+dx,ny=y+dy,kk=k(nx,ny);
      if(nx<0||ny<0||nx>=W||ny>=H||blockedT.has(kk)||(kk in prev)) continue;
      prev[kk]=[x,y];
      if(nx===tx&&ny===ty){ const path=[[tx,ty]]; let c=[tx,ty],g=0;
        while(prev[c.join(',')]&&g++<4000){ c=prev[c.join(',')]; path.unshift([c[0],c[1]]); }
        path.shift(); return path; }
      q.push([nx,ny]); } }
  return null;
}
const NPCS=MAP.npcs.map(n=>({...n,x:(n.home[0]+.5)*TS,y:(n.home[1]+.8)*TS,
  dir:'down',phase:0,anim:Math.random()*9,path:[],act:'',target:null,hidden:false,
  bark:'',barkT:0,talkIdx:0,humT:15+Math.random()*40,wpIdx:Math.floor(Math.random()*n.spots.length),reT:0}));
function say(n,s,dur){ n.bark=s; n.barkT=dur||2.6; }
function mealLine(h){ return h<11?'*breakfast by the fire*':h<14?'*midday meal*':'*supper — quiet talk*'; }
function schedAct(n,h){
  if(n.role==='guard'){
    if(h>=6&&h<14) return {act:'sleep',at:n.home};
    return {act:'patrol'};
  }
  if(n.role==='youth'?(h>=23||h<7):(h>=23||h<5)) return {act:'sleep',at:n.home};
  if(n.role==='hunter'){
    if(h>=5&&h<9) return {act:'patrol'};
    if(h>=9&&h<10) return {act:'fire',at:n.fire};
    if(h>=10&&h<15) return {act:'work',at:n.work};
    if(h>=15&&h<18) return {act:'wander'};
    return {act:'fire',at:n.fire};
  }
  if((h>=6&&h<8)||(h>=12&&h<13)||h>=18) return {act:'fire',at:n.fire};
  if(n.role==='elder'&&h>=13&&h<17) return {act:'wander'};
  if(n.role==='youth'&&h>=16&&h<18) return {act:'wander'};
  return {act:'work',at:n.work};
}
function planPath(n){
  const sx=Math.floor(n.x/TS),sy=Math.floor(n.y/TS);
  const p=n.target?bfs(sx,sy,n.target[0],n.target[1]):[];
  n.path=p||[]; n.reT=4;
}
function updNPC(n,dt){
  const h=HH()+MM()/60, want=schedAct(n,h);
  const key=want.act+JSON.stringify(want.at||0)+((want.act==='patrol'||want.act==='wander')?n.wpIdx:'x');
  if(key!==n._key){ n._key=key; n.act=want.act; n.path=[];
    if(want.act==='sleep'){ n.hidden=true; n.target=null; }
    else { n.hidden=false;
      if(want.act==='patrol'||want.act==='wander'){ n.target=n.spots[n.wpIdx%n.spots.length]; n.wpIdx++; }
      else n.target=want.at;
      if(want.act==='work'&&Math.random()<.7) say(n,n.bark);
      else if(want.act==='fire') say(n,mealLine(h));
      planPath(n); } }
  if(n.barkT>0) n.barkT-=dt;
  if(n.hidden) return;
  n.humT-=dt;
  if(n.humT<0){ n.humT=30+Math.random()*45; if(n.act==='work') say(n,n.bark); }
  if(n.reT>0){ n.reT-=dt; if(n.reT<=0&&n.target) planPath(n); }
  if(!n.target){ n.dir='down'; return; }
  if(!n.path.length){ // arrived
    n.dir='down';
    if(n.act==='patrol'||n.act==='wander'){ n.target=n.spots[n.wpIdx%n.spots.length]; n.wpIdx++; planPath(n); }
    else n.target=null;
    return; }
  const [gx,gy]=n.path[0], tx=(gx+.5)*TS, ty=(gy+.8)*TS;
  const dx=tx-n.x, dy=ty-n.y, d=Math.hypot(dx,dy);
  if(d<5){ n.path.shift(); return; }
  const sp=2.1*TS*dt; n.x+=dx/d*sp; n.y+=dy/d*sp; n.anim+=dt;
  n.phase=Math.floor(n.anim*6)%2;
  if(Math.abs(dx)>Math.abs(dy)){ n.dir=dx>0?'sider':'sidel'; } else n.dir=dy>0?'down':'up';
}
function greet(h){ return h>=5&&h<11?'Добрий ранок, козаче.':h>=11&&h<18?'Здоров!':h>=18&&h<23?'Добрий вечір.':'Чого не спиш?..'; }
const talkBox=document.getElementById('talk'); let talkT=0;
function tryTalk(){
  let best=null,bd=1.7*TS;
  for(const n of NPCS){ if(n.hidden) continue;
    const d=Math.hypot(n.x-px,n.y-py); if(d<bd){ bd=d; best=n; } }
  if(!best) return;
  const line=best.talk[best.talkIdx%best.talk.length]; best.talkIdx++;
  talkBox.innerHTML='<b>'+best.name+'</b> <span style="opacity:.6">· '+best.sub+' · '+best.act+'</span><br>'+greet(HH())+' '+line;
  talkBox.style.display='block'; talkT=6;
  say(best,'…',1.2);
}
addEventListener('keydown',e=>{ if(e.key.toLowerCase()==='e') tryTalk(); });
let last=0;
function frame(ts){
  const dt=Math.min(.05,(ts-last)/1000||0);last=ts;
  let vx=0,vy=0;
  if(keys['a']||keys['arrowleft'])vx-=1; if(keys['d']||keys['arrowright'])vx+=1;
  if(keys['w']||keys['arrowup'])vy-=1; if(keys['s']||keys['arrowdown'])vy+=1;
  moving=!!(vx||vy);
  if(moving){const l=Math.hypot(vx,vy);vx/=l;vy/=l;
    const sp=3.4*TS*dt;anim+=dt;
    if(Math.abs(vx)>Math.abs(vy))dir='side';else dir=vy>0?'down':'up';
    if(Math.abs(vx)>Math.abs(vy))dir=vx>0?'sider':'sidel';
    if(tryMove(px+vx*sp,py))px+=vx*sp; if(tryMove(px,py+vy*sp))py+=vy*sp;
    phase=Math.floor(anim*6)%2;}
  camX+=(px-480-camX)*Math.min(1,dt*6);camY+=(py-300-camY)*Math.min(1,dt*6);
  camX=Math.max(0,Math.min(W*TS-960,camX));camY=Math.max(0,Math.min(H*TS-600,camY));
  const t=Math.floor(ts/400);
  const x0=Math.max(0,Math.floor(camX/TS)-1),x1=Math.min(W-1,Math.ceil((camX+960)/TS)+1);
  const y0=Math.max(0,Math.floor(camY/TS)-1),y1=Math.min(H-1,Math.ceil((camY+600)/TS)+1);
  ctx.fillStyle='#20241c';ctx.fillRect(0,0,960,600);
  for(let y=y0;y<=y1;y++)for(let x=x0;x<=x1;x++)ground(x,y,camX,camY,t);
  const drawList=MAP.decor.filter(o=>o.x>=x0-2&&o.x<=x1+2&&o.y>=y0-2&&o.y<=y1+2)
    .concat(MAP.objects.filter(o=>o.x>=x0-2&&o.x<=x1+2&&o.y>=y0-2&&o.y<=y1+2))
    .sort((a,b)=>a.y-b.y);
  const heroY=py/TS;
  let drewHero=false;
  const drawHero=()=>{const base=dir.startsWith('side')?'side':dir;
    const im=imgs['hero_'+base+'_'+phase];if(!im)return;const hw=48*S,hh=72*S;
    ctx.save();if(dir==='sidel'){ctx.translate(Math.round(px-camX)+hw/2,0);ctx.scale(-1,1);
      ctx.drawImage(im,-hw/2,Math.round(py-camY)-hh+2*S,hw,hh);}
    else ctx.drawImage(im,Math.round(px-camX)-hw/2,Math.round(py-camY)-hh+2*S,hw,hh);
    ctx.restore();};
  for(const o of drawList){if(!drewHero&&o.y>heroY){drawHero();drewHero=true;}
    const im=imgs[o.t];if(!im)continue;
    const dw=im.width*S,dh=im.height*S;
    const dx=Math.round(o.x*TS+TS/2-dw/2-camX),dy=Math.round((o.y+1)*TS-dh-camY);
    ctx.drawImage(im,dx,dy,dw,dh);}
  if(!drewHero)drawHero();
  const hut=imgs['hut'];if(hut)ctx.drawImage(hut,Math.round(MAP.hut[0]*TS-camX),Math.round((MAP.hut[1]+2)*TS-120*S-camY),144*S,120*S);
  for(const [fx,fy] of MAP.fences)ctx.drawImage(imgs['fence_h'],Math.round(fx*TS-camX),Math.round(fy*TS-camY),TS,TS);
  const fr=imgs['fire_'+(t%3)];ctx.drawImage(fr,Math.round(MAP.fire[0]*TS-camX),Math.round(MAP.fire[1]*TS-camY),TS,TS);
  const fl=1+Math.sin(ts/90)*.12+Math.sin(ts/37)*.06;
  const gx=MAP.fire[0]*TS+TS/2-camX,gy=MAP.fire[1]*TS-camY;
  const g=ctx.createRadialGradient(gx,gy,4,gx,gy,110*fl);
  g.addColorStop(0,'rgba(255,170,80,.28)');g.addColorStop(1,'rgba(255,170,80,0)');
  ctx.fillStyle=g;ctx.fillRect(gx-120,gy-120,240,240);
  ctx.fillStyle='rgba(220,220,150,.7)';
  for(const f of flies){const fx2=((f.x+ts/40*(1+f.p%3))%(W*TS)),fy2=f.y+Math.sin(ts/700+f.p)*8;
    if(fx2>camX&&fx2<camX+960&&fy2>camY&&fy2<camY+600&&((f.p+t)%3))ctx.fillRect(Math.round(fx2-camX),Math.round(fy2-camY),2,2);}
  ctx.fillStyle='rgba(20,26,40,.10)';ctx.fillRect(0,0,960,600);
  document.getElementById('pos').textContent='x '+Math.floor(px/TS)+' y '+Math.floor(py/TS);
  const hx=Math.floor(px/TS),hy=Math.floor(py/TS);
  if(!toasted&&Math.abs(hx-MAP.hut_door[0])<=2&&Math.abs(hy-MAP.hut_door[1])<=2){
    toasted=true;showToast('\\u25C6 marker reached — Yatsko\\u2019s lodge (demo). Quest would open here.');}
  if(toastT>0&&--toastT===0)toast.style.display='none';
  requestAnimationFrame(frame);}
requestAnimationFrame(frame);
</script></body></html>
"""


def main():
    os.makedirs(ASSETS, exist_ok=True)
    tiles = {}
    for i in range(6):
        tiles[f"grass_{i}"] = grass_tile(i)
    tiles["road_h"] = road_h()
    tiles["road_cross"] = road_cross()
    for p in range(4):
        tiles[f"water_{p}"] = water_frame(p)
    tiles["shore_edge"] = shore_edge()
    tiles["bridge_mid"] = bridge_mid()
    tiles["oak"] = tree_oak()
    tiles["pine"] = tree_pine()
    tiles["bush"] = bush()
    tiles["rock"] = rock()
    tiles["fence_h"] = fence_h()
    for p in range(3):
        tiles[f"fire_{p}"] = fire_frame(p)
    tiles["hut"] = hut()
    tiles["reeds"] = reeds()
    tiles["stump"] = stump()
    tiles["tuft"] = tuft_decor()
    tiles["pebbles"] = pebbles()
    tiles["flowers"] = flowers()
    tiles["well"] = well()
    tiles["woodpile"] = woodpile()
    tiles["tent"] = tent()
    tiles["cart"] = cart()
    tiles["barrel"] = barrel()
    tiles["crate"] = crate()
    tiles["lantern"] = lantern()
    _pal = palisade()
    tiles["pal_h"] = _pal
    tiles["pal_v"] = _pal.rotate(90, expand=True)
    tiles["shrine"] = shrine()
    tiles["beehive"] = beehive()
    tiles["dummy"] = dummy()
    tiles["tower"] = tower()
    tiles["table"] = table_prop()
    tiles["boat"] = boat()
    for d in ("down", "up", "side"):
        for s in (0, 1):
            tiles[f"hero_{d}_{s}"] = hero(d, s)
    for r in ROSTER:
        for dd, frames in (("down", (0, 1)), ("up", (0,)), ("side", (0,))):
            for s in frames:
                tiles[f"npc_{r['id']}_{dd}_{s}"] = cossack(dd, s, r["look"])
    for name, im in tiles.items():
        im.save(os.path.join(ASSETS, name + ".png"))
    m = build_map()
    water_flat = [y * W + x for y in range(H) for x in range(W) if m["water"][y][x]]
    map_json = {"W": W, "H": H, "water": water_flat, "road": m["road"],
                "bridge": m["bridge"], "objects": m["objects"], "decor": m["decor"],
                "hut": m["hut"], "fire": m["fire"], "fences": m["fences"],
                "lanterns": m["lanterns"], "npcs": m["npcs"],
                "blocked": m["blocked"], "spawn": m["spawn"], "hut_door": m["hut_door"]}
    with open(os.path.join(ROOT, "map.json"), "w") as f:
        json.dump(map_json, f)
    preview = render_preview(tiles, m)
    preview.save(os.path.join(ROOT, "preview.png"))
    tile_js = ",".join(f'"{k}":"{b64(v)}"' for k, v in tiles.items())
    html = HTML.replace("%%TILES%%", tile_js).replace("%%MAP%%", json.dumps(map_json))
    with open(os.path.join(ROOT, "index.html"), "w") as f:
        f.write(html)
    print(f"tiles={len(tiles)} objects={len(m['objects'])} decor={len(m['decor'])}")
    print("wrote assets/, map.json, preview.png, index.html")


if __name__ == "__main__":
    main()
