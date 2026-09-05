# SichWorld — 2.5D Isometric RPG (Three.js)

A 2.5D pixel-art open-world RPG inspired by *Gothic 1 & 2* and *DROVA - Forsaken Kin*, set in 1674 Ukraine (Loca Deserta, Zaporozhian Cossacks).

## Tech Stack & Architecture

- **Renderer:** Three.js with an offscreen low-resolution RenderTarget (`480x270`, `NearestFilter`) blitted to full screen. This produces an authentic, crisp pixel-art aesthetic (*DROVA* style) within a 3D isometric space.
- **Camera:** `OrthographicCamera` locked to true isometric projection angles (Pitch: 35.264°, Yaw: 45°).
- **Core State Engine:** Decoupled, pure TypeScript state machine (`QuestManager`, `DialogueRunner`, `CondEval`, `RpgSystem`) with zero graphics dependencies, fully covered by automated simulation tests.
- **World Director:** Subscribes to quest effects to spawn/despawn 3D entities, update 3D markers, switch NPC routines, and cycle day/night lighting.

## Controls

- **Movement:** `W`, `A`, `S`, `D` or Arrow Keys (snapped to isometric screen coordinates).
- **Interact / Talk:** `E` (when near an NPC like Taras, Naum, or Honta).
- **Dialogue:** Click options or press numeric keys `1`, `2`, `3`... `ESC` to close.
- **Attack (Combat):** `Spacebar` or Left Click (calculates Gothic critical/normal damage based on weapon mastery and armor).
- **Journal:** `J` (toggles active quests, stages, completed resolutions, and known steppe lore).
- **Debug Inspector:** `~` (toggles live WorldState flags, time fast-forward, quick teleportation, and cheats).

## Running the Game

```bash
cd three-game
npm install
npm run dev
```

Run test suite:
```bash
npm test
```

Build production bundle:
```bash
npm run build
```
