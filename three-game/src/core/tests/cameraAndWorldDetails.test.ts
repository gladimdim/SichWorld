import test from 'node:test';
import assert from 'node:assert';
import * as THREE from 'three';
import { IsometricCamera } from '../../graphics/camera.js';
import { OutpostProps } from '../../graphics/props.js';

test('IsometricCamera: Zoom In Default, Safe Clamping & Smooth Lerp', () => {
  const camera = new IsometricCamera(16 / 9);

  // 1. Zoom in default should be 11.5 (close detailed Gothic/CRPG view)
  assert.strictEqual(camera.zoom, 11.5);
  assert.strictEqual(camera.targetZoom, 11.5);
  assert.strictEqual(camera.minZoom, 6.0);
  assert.strictEqual(camera.maxZoom, 22.0);

  // 2. Safe clamping test
  camera.setTargetZoom(2.0); // Below min
  assert.strictEqual(camera.targetZoom, 6.0);

  camera.setTargetZoom(50.0); // Above max
  assert.strictEqual(camera.targetZoom, 22.0);

  // 3. Smooth zoom lerp during followTarget
  camera.setTargetZoom(8.0);
  assert.strictEqual(camera.targetZoom, 8.0);
  assert.strictEqual(camera.zoom, 11.5); // Has not updated yet

  const target = new THREE.Vector3(0, 0, 0);
  camera.followTarget(target, 0.08);

  // Zoom should have smoothly moved closer to 8.0
  assert.ok(camera.zoom < 11.5, `Zoom ${camera.zoom} should have decreased towards targetZoom`);
  assert.ok(camera.zoom >= 8.0, `Zoom ${camera.zoom} should be >= targetZoom`);

  // Simulate several frames until converged
  for (let i = 0; i < 60; i++) {
    camera.followTarget(target, 0.08);
  }
  assert.ok(Math.abs(camera.zoom - 8.0) < 0.01, `Zoom ${camera.zoom} should have converged to 8.0`);

  // 4. Locked true isometric orientation checks
  assert.ok(Math.abs(IsometricCamera.PITCH_ANGLE - Math.atan(1 / Math.SQRT2)) < 1e-6);
  assert.ok(Math.abs(IsometricCamera.YAW_ANGLE - Math.PI / 4) < 1e-6);
});

test('Ukrainian Detailed Props: Authentic Architectural & Cultural Elements', () => {
  // 1. Wattle Fence (Плетений тин з глечиками)
  const fence = OutpostProps.createWattleFence(6.0, 1.15, true);
  assert.ok(fence.children.length > 5, 'Fence should have posts, rods, and clay pots');

  // 2. Sunflowers (Соняшники)
  const sunflowers = OutpostProps.createSunflowerCluster(4);
  assert.strictEqual(sunflowers.children.length, 4, 'Sunflower cluster should have 4 stalks');

  // 3. Water Well (Криниця)
  const well = OutpostProps.createSteppeWell();
  assert.ok(well.children.length >= 6, 'Well should contain stone curb, uprights, drum, bucket, roof');

  // 4. Wood Chopping Block (Колода з сокирою)
  const chopBlock = OutpostProps.createChoppingBlock();
  assert.ok(chopBlock.children.length >= 4, 'Chopping block should have stump, axe, firewood logs');

  // 5. Cossack Cart (Чумацький віз)
  const cart = OutpostProps.createCossackCart();
  assert.ok(cart.children.length >= 8, 'Cart should have wheels, bed, side slats, shafts, hay cargo');

  // 6. Steppe Haystack (Копиця сіна)
  const haystack = OutpostProps.createHaystack(2.0, 2.8);
  assert.strictEqual(haystack.children.length, 2, 'Haystack should have hay dome and apex spire pole');

  // 7. Ground Footpaths (Стежки)
  const mockTerrain = {
    getHeightAt: (_x: number, _z: number) => 0.0
  };
  const paths = OutpostProps.createGroundFootpaths(mockTerrain);
  assert.ok(paths.children.length >= 5, 'Footpaths should connect all camp locations');
});
