# 图形渲染类型

**始于 1.9.0**

用于图形渲染和 3D 应用的类型。

## 概述

图形渲染类型提供了类型级图形和渲染工具。它支持颜色类型、向量、矩阵、着色器、纹理、灯光、材质和 GPU 管道配置。

此模块支持构建具有渲染管道、材质和着色器程序正确约束的类型安全图形应用。

## 基本用法

```typescript
import type { Vector3, Matrix4x4, Color, Shader, Texture, Material, Light } from 'uni-types'

// 定义向量类型
type Position = Vector3
type Rotation = Vector3

// 定义材质类型
type StandardMaterial = PBRMaterial

// 定义灯光类型
type MainLight = DirectionalLight
```

## 核心类型

### Color

颜色类型（CSS 颜色字符串）。

```typescript
type Color = string
```

### RGB / RGBA

颜色元组类型。

```typescript
type RGB = [r: number, g: number, b: number]
type RGBA = [r: number, g: number, b: number, a: number]
```

### Vector2 / Vector3 / Vector4

向量类型。

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

4x4 矩阵类型。

```typescript
type Matrix4x4 = [
  [number, number, number, number],
  [number, number, number, number],
  [number, number, number, number],
  [number, number, number, number],
]
```

### Transform

组合变换类型。

```typescript
interface Transform {
  translation: Translation
  rotation: Rotation
  scale: Scale
}
```

### ShaderProgram

着色器程序类型。

```typescript
interface ShaderProgram {
  vertex?: VertexShader
  fragment?: FragmentShader
  compute?: ComputeShader
  bindGroupLayouts?: BindGroupLayout[]
}
```

### TextureFormat

纹理格式类型。

```typescript
type TextureFormat =
  | 'rgba8unorm' | 'rgba8snorm' | 'rgba8uint' | 'rgba8sint'
  | 'bgra8unorm' | 'bgra8unorm-srgb'
  | 'rgba16float' | 'r32float' | 'rg32float' | 'rgba32float'
  | 'depth16unorm' | 'depth24plus' | 'depth24plus-stencil8' | 'depth32float'
```

### Light

所有灯光类型。

```typescript
type Light =
  | DirectionalLight
  | PointLight
  | SpotLight
  | AmbientLight
  | HemisphereLight
```

### Material

所有材质类型。

```typescript
type Material =
  | PBRMaterial
  | UnlitMaterial
  | PhongMaterial
```

### PBRMaterial

基于物理渲染材质。

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

渲染管道配置。

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

所有形状类型。

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

## 相关

- [动画系统](./animation) - 动画类型
- [游戏开发](./game) - 游戏 ECS 类型
- [音频处理](./audio) - 音频类型