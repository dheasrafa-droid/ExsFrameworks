/**
 * ExS 3D Engine - Private Internal API
 * Hanya untuk engine developer, TIDAK untuk pengguna!
 * @private
 * @internal
 */

// Internal Core
export { _Exs_EventDispatcher } from './core/EventDispatcher.js';
export { _Exs_Frustum } from './core/Frustum.js';

// Internal Renderer
export { _Exs_WebGLState } from './renderer/WebGLState.js';
export { _Exs_WebGLProgram } from './renderer/WebGLProgram.js';
export { _Exs_WebGLTextures } from './renderer/WebGLTextures.js';
export { _Exs_WebGLShadowMap } from './renderer/WebGLShadowMap.js';

// Internal Shaders
export { _Exs_ShaderLib } from './shaders/ShaderLib.js';
export { _Exs_UniformsLib } from './shaders/UniformsLib.js';

// Internal Materials
export { _Exs_MeshDistanceMaterial } from './materials/MeshDistanceMaterial.js';
export { _Exs_ShadowMaterial } from './materials/ShadowMaterial.js';

// Internal Geometry
export { _Exs_BufferAttribute } from './geometry/BufferAttribute.js';
export { _Exs_InterleavedBuffer } from './geometry/InterleavedBuffer.js';

// Internal Utilities
export { _Exs_MemoryManager } from './utils/MemoryManager.js';
export { _Exs_PerformanceMonitor } from './utils/PerformanceMonitor.js';

// Debug Tools (hanya untuk development)
export { _Exs_DebugUtils } from './utils/DebugUtils.js';

// Export semua internal
export default {
  // Flag internal
  __INTERNAL__: true,
  __VERSION__: '1.0.0-internal',
  
  // Core internals
  EventDispatcher: _Exs_EventDispatcher,
  Frustum: _Exs_Frustum,
  
  // Renderer internals
  WebGLState: _Exs_WebGLState,
  WebGLProgram: _Exs_WebGLProgram,
  WebGLShadowMap: _Exs_WebGLShadowMap,
  
  // Shader internals
  ShaderLib: _Exs_ShaderLib,
  
  // Debug
  DebugUtils: _Exs_DebugUtils,
  
  // Method untuk developer engine
  enableDebugMode() {
    console.warn('[ExS Internal] Debug mode enabled - for engine developers only');
    window._EXS_DEBUG = true;
  },
  
  disableDebugMode() {
    window._EXS_DEBUG = false;
  }
};
