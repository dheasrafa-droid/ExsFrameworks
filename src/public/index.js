/**
 * ExS 3D Engine - Public API Entry Point
 * Hanya expose API yang aman untuk pengguna
 */

// Core
export { Exs_Scene } from './core/Scene.js';
export { Exs_Object3D } from './core/Object3D.js';
export { Exs_Clock } from './core/Clock.js';
export { Exs_Raycaster } from './core/Raycaster.js';

// Math
export { Exs_Vector2, Exs_Vector3, Exs_Vector4 } from './math/Vector.js';
export { Exs_Matrix3, Exs_Matrix4 } from './math/Matrix.js';
export { Exs_Euler, Exs_Quaternion } from './math/Rotation.js';
export { Exs_Color } from './math/Color.js';

// Geometry
export { Exs_BufferGeometry } from './geometry/BufferGeometry.js';
export { Exs_BoxGeometry, Exs_SphereGeometry } from './geometry/BasicGeometries.js';

// Materials
export { Exs_Material } from './materials/Material.js';
export { Exs_MeshBasicMaterial } from './materials/BasicMaterials.js';

// Objects
export { Exs_Mesh } from './objects/Mesh.js';
export { Exs_Group } from './objects/Group.js';

// Lights
export { Exs_Light } from './lights/Light.js';
export { Exs_DirectionalLight } from './lights/DirectionalLight.js';

// Camera
export { Exs_Camera } from './camera/Camera.js';
export { Exs_PerspectiveCamera } from './camera/PerspectiveCamera.js';

// Renderer (PUBLIC VERSION - limited access)
export { Exs_WebGLRenderer } from './renderer/WebGLRenderer.js';

// Helpers
export { Exs_AxesHelper, Exs_GridHelper } from './helpers/BasicHelpers.js';

// Controls
export { Exs_OrbitControls } from './controls/OrbitControls.js';

// Security Features (exposed to users)
export { Exs_SandboxRenderer } from '../security/SandboxRenderer.js';
export { Exs_InputValidator } from '../security/InputValidation.js';

// Utils
export { Exs_MathUtils } from './utils/MathUtils.js';

// Export utama
export default {
  // Core
  Scene: Exs_Scene,
  Object3D: Exs_Object3D,
  Clock: Exs_Clock,
  Raycaster: Exs_Raycaster,
  
  // Math
  Vector2: Exs_Vector2,
  Vector3: Exs_Vector3,
  Vector4: Exs_Vector4,
  Matrix3: Exs_Matrix3,
  Matrix4: Exs_Matrix4,
  Euler: Exs_Euler,
  Quaternion: Exs_Quaternion,
  Color: Exs_Color,
  
  // Renderer
  WebGLRenderer: Exs_WebGLRenderer,
  
  // Security
  SandboxRenderer: Exs_SandboxRenderer,
  InputValidator: Exs_InputValidator
};
