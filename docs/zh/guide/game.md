# 游戏开发类型

**始于 1.9.0**

使用实体组件系统 (ECS) 模式的游戏开发类型。

## 概述

游戏开发类型提供了类型级游戏开发工具。它支持实体组件系统 (ECS) 架构、游戏状态管理、输入处理、物理模拟和渲染类型。

此模块支持构建具有实体、组件、系统和游戏循环正确约束的类型安全游戏应用。

## 基本用法

```typescript
import type { Entity, Component, GameState, InputState, PhysicsBody } from 'uni-types'

// 定义实体类型
type PlayerEntity = Entity<{ position: Position2D, health: HealthComponent }>

// 定义游戏状态
type GameLevelState = GameState<{ level: number, score: number }>

// 定义物理体
type PlayerPhysics = PhysicsBody<{ mass: number, velocity: Velocity }>
```

## 核心类型

### Entity

具有组件的基础实体类型。

```typescript
interface Entity<T = unknown> {
  id: EntityId
  name?: string
  components: T
  active: boolean
  tags?: string[]
}
```

### EntityId

实体标识符类型。

```typescript
type EntityId = number | string
```

### Component

基础组件接口。

```typescript
interface Component {
  readonly type: string
}
```

### Position2D / Position3D

2D 和 3D 游戏的位置组件。

```typescript
interface Position2D extends Component {
  type: 'position2d'
  x: number
  y: number
}

interface Position3D extends Component {
  type: 'position3d'
  x: number
  y: number
  z: number
}
```

### Velocity

速度组件。

```typescript
interface Velocity extends Component {
  type: 'velocity'
  vx: number
  vy: number
  vz?: number
}
```

### GameState

具有数据的游戏状态类型。

```typescript
interface GameState<T = unknown> {
  name: string
  data: T
  enter?: () => void
  exit?: () => void
  update?: (deltaTime: number) => void
}
```

### InputState

输入状态聚合器。

```typescript
interface InputState {
  keyboard: KeyboardState
  mouse: MouseState
  gamepads: GamepadState[]
  touch: TouchState
  timestamp: number
}
```

### PhysicsBody

具有碰撞形状的物理体类型。

```typescript
interface PhysicsBody<T = unknown> {
  id: EntityId
  mass: number
  velocity: Velocity
  acceleration?: Velocity
  shape: ColliderShape
  material?: PhysicsMaterial
  data?: T
}
```

### ColliderShape

碰撞器形状类型。

```typescript
type ColliderShape =
  | { type: 'box', width: number, height: number, depth?: number }
  | { type: 'sphere', radius: number }
  | { type: 'capsule', radius: number, height: number }
  | { type: 'polygon', vertices: Vector2D[] }
  | { type: 'circle', radius: number }
  | { type: 'mesh', meshId: string }
```

### Scene

具有实体和系统的场景类型。

```typescript
interface Scene<T = unknown> {
  id: string
  name: string
  entities: Entity[]
  systems: EntitySystem[]
  data?: T
  loaded: boolean
  active: boolean
}
```

### Camera

渲染用相机类型。

```typescript
interface Camera {
  id: string
  type: 'orthographic' | 'perspective'
  position: Position3D
  rotation: Rotation3D
  near: number
  far: number
  fov?: number
  zoom?: number
  viewport?: { x: number, y: number, width: number, height: number }
}
```

## 相关

- [动画系统](./animation) - 动画类型
- [音频处理](./audio) - 音频类型
- [图形渲染](./graphics) - 图形渲染类型
- [事件系统](./event-system) - 事件处理类型