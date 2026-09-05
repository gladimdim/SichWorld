import test from 'node:test';
import assert from 'node:assert';
import * as THREE from 'three';
import { BuildingManager, EnterableBuilding } from '../../world/buildingManager.js';

test('BuildingManager: Roof Disappearance on Enter and Reappearance on Exit', () => {
  const bm = new BuildingManager();

  const mockRoofMat = new THREE.MeshBasicMaterial({ opacity: 1.0, transparent: true });
  const mockBuilding: EnterableBuilding = {
    id: 'test_kurin',
    name: 'Test Kurin',
    group: new THREE.Group(),
    roofGroup: new THREE.Group(),
    interiorGroup: new THREE.Group(),
    bounds: {
      minX: -10,
      maxX: 0,
      minZ: -20,
      maxZ: -5
    },
    roofMaterials: [mockRoofMat],
    currentRoofOpacity: 1.0,
    targetRoofOpacity: 1.0,
    isPlayerInside: false
  };

  let stateChangeNotified = false;
  let notifiedInside = false;
  bm.onBuildingStateChange = (_id, isInside) => {
    stateChangeNotified = true;
    notifiedInside = isInside;
  };

  bm.registerBuilding(mockBuilding);

  // 1. Player is outside at (0, 0, 4)
  bm.update(0.016, new THREE.Vector3(0, 0, 4));
  assert.strictEqual(mockBuilding.isPlayerInside, false);
  assert.strictEqual(mockBuilding.targetRoofOpacity, 1.0);
  assert.strictEqual(mockBuilding.currentRoofOpacity, 1.0);

  // 2. Player steps through doorway into Kurin at (-5, 0, -12)
  bm.update(0.016, new THREE.Vector3(-5, 0, -12));
  assert.strictEqual(mockBuilding.isPlayerInside, true);
  assert.strictEqual(mockBuilding.targetRoofOpacity, 0.0);
  assert.strictEqual(stateChangeNotified, true);
  assert.strictEqual(notifiedInside, true);

  // 3. Simulate several frames of delta update -> opacity smoothly drops towards 0
  for (let i = 0; i < 30; i++) {
    bm.update(0.033, new THREE.Vector3(-5, 0, -12));
  }
  assert.ok(mockBuilding.currentRoofOpacity < 0.05, `Roof opacity should be near 0, got ${mockBuilding.currentRoofOpacity}`);
  assert.ok(mockRoofMat.opacity < 0.05);

  // 4. Player exits building back to (0, 0, 4)
  stateChangeNotified = false;
  bm.update(0.016, new THREE.Vector3(0, 0, 4));
  assert.strictEqual(mockBuilding.isPlayerInside, false);
  assert.strictEqual(mockBuilding.targetRoofOpacity, 1.0);
  assert.strictEqual(stateChangeNotified, true);
  assert.strictEqual(notifiedInside, false);

  // 5. Simulate frames to restore roof
  for (let i = 0; i < 30; i++) {
    bm.update(0.033, new THREE.Vector3(0, 0, 4));
  }
  assert.ok(mockBuilding.currentRoofOpacity > 0.95, `Roof opacity should be restored near 1, got ${mockBuilding.currentRoofOpacity}`);
  assert.ok(mockRoofMat.opacity > 0.95);
});
