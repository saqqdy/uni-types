# Graphics Types

**Since 1.9.0**

Types for graphics rendering and 3D applications.

## Overview

Graphics Types provides type-level graphics and rendering utilities. It supports color types, vectors, matrices, shaders, textures, lights, materials, and GPU pipeline configurations.

This module enables building type-safe graphics applications with proper constraints for rendering pipelines, materials, and shader programs.

## Basic Usage

```typescript
import type { Vector3, Matrix4x4, Color, Shader, Texture, Material, Light } from 'uni-types'

// Define vector types
type Position = Vector3
type Rotation = Vector3

// Define material type
type StandardMaterial = PBRMaterial

// Define light type
type MainLight = DirectionalLight
```

## Key Types

### Color

Color type (CSS color string).

```typescript
type Color = string
```

### RGB / RGBA

Color tuple types.

```typescript
type RGB = [r: number, g: number, b: number]
type RGBA = [r: number, g: number, b: number, a: number]
```

### Vector2 / Vector3 / Vector4

Vector types.

```typescript
interface Vector2 {
  x: number
  y: number
}

interface Vector3 {
  x: number
  y: number
  z: number
}

interface Vector4 {
  x: number
  y: number
  z: number
  w: number
}
```

### Matrix4x4

4x4 Matrix type.

```typescript
type Matrix4x4 = [
  [number, number, number, number],
  [number, number, number, number],
  [number, number, number, number],
  [number, number, number, number],
]
```

### Transform

Transform combined type.

```typescript
interface Transform {
  translation: Translation
  rotation: Rotation
  scale: Scale
}
```

### ShaderProgram

Shader program type.

```typescript
interface ShaderProgram {
  vertex?: VertexShader
  fragment?: FragmentShader
  compute?: ComputeShader
  bindGroupLayouts?: BindGroupLayout[]
}
```

### TextureFormat

Texture format types.

```typescript
type TextureFormat =
  | 'rgba8unorm' | 'rgba8snorm' | 'rgba8uint' | 'rgba8sint'
  | 'bgra8unorm' | 'bgra8unorm-srgb'
  | 'rgba16float' | 'r32float' | 'rg32float' | 'rgba32float'
  | 'depth16unorm' | 'depth24plus' | 'depth24plus-stencil8' | 'depth32float'
```

### Light

All light types.

```typescript
type Light =
  | DirectionalLight
  | PointLight
  | SpotLight
  | AmbientLight
  | HemisphereLight
```

### Material

All material types.

```typescript
type Material =
  | PBRMaterial
  | UnlitMaterial
  | PhongMaterial
```

### PBRMaterial

Physically Based Rendering material.

```typescript
interface PBRMaterial extends MaterialBase {
  type: 'pbr'
  baseColor?: Color | Texture
  metallic?: number | Texture
  roughness?: number | Texture
  normal?: Texture
  occlusion?: Texture
  emissive?: Color | Texture
  emissiveIntensity?: number
}
```

### RenderPipelineDescriptor

Render pipeline configuration.

```typescript
interface RenderPipelineDescriptor {
  label?: string
  layout?: 'auto' | unknown
  vertex: VertexState
  fragment?: FragmentState
  primitive?: PrimitiveState
  depthStencil?: DepthStencilState
  multisample?: MultisampleState
}
```

### Shape

All shape types.

```typescript
type Shape =
  | Circle
  | Ellipse
  | Rectangle
  | Sphere
  | Box
  | Cylinder
  | Cone
  | Capsule
  | Torus
```

## Related

- [Animation](./animation) - Animation types
- [Game Development](./game) - Game ECS types
- [Audio Processing](./audio) - Audio types