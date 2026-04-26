# Game Development Types

**Since 1.9.0**

Types for game development using Entity Component System (ECS) pattern.

## Overview

Game Development Types provides type-level game development utilities. It supports Entity Component System (ECS) architecture, game state management, input handling, physics simulation, and rendering types.

This module enables building type-safe game applications with proper constraints for entities, components, systems, and game loops.

## Basic Usage

```typescript
import type { Entity, Component, GameState, InputState, PhysicsBody } from 'uni-types'

// Define entity type
type PlayerEntity = Entity<{ position: Position2D, health: HealthComponent }>

// Define game state
type GameLevelState = GameState<{ level: number, score: number }>

// Define physics body
type PlayerPhysics = PhysicsBody<{ mass: number, velocity: Velocity }>
```

## Key Types

### Entity

Base entity type with components.

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

Entity identifier type.

```typescript
type EntityId = number | string
```

### Component

Base component interface.

```typescript
interface Component {
  readonly type: string
}
```

### Position2D / Position3D

Position components for 2D and 3D games.

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

Velocity component.

```typescript
interface Velocity extends Component {
  type: 'velocity'
  vx: number
  vy: number
  vz?: number
}
```

### GameState

Game state type with data.

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

Input state aggregator.

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

Physics body type with collision shape.

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

Collider shape types.

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

Scene type with entities and systems.

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

Camera type for rendering.

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

## Related

- [Animation](./animation) - Animation types
- [Audio Processing](./audio) - Audio types
- [Graphics](./graphics) - Graphics rendering types
- [Event System](./event-system) - Event handling types