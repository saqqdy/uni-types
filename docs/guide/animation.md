# Animation Types

**Since 1.9.0**

Types for animation systems and motion graphics.

## Overview

Animation Types provides type-level animation utilities. It supports keyframe animations, easing functions, spring physics, skeletal animation, sprite animation, and animation state machines.

This module enables building type-safe animation applications with proper constraints for keyframes, timelines, and animation controllers.

## Basic Usage

```typescript
import type { Animation, Keyframe, EasingType, SpringConfig, Skeleton, AnimationClip } from 'uni-types'

// Define animation
type FadeAnimation = Animation<number>

// Define keyframe sequence
type PositionKeyframes = KeyframeSequence<Vector3>

// Define animation clip
type WalkClip = AnimationClip
```

## Key Types

### AnimationDuration

Animation duration (milliseconds).

```typescript
type AnimationDuration = number
```

### AnimationPlaybackState

Animation playback state.

```typescript
type AnimationPlaybackState = 'idle' | 'running' | 'paused' | 'finished'
```

### AnimationDirection

Animation direction.

```typescript
type AnimationDirection =
  | 'normal'
  | 'reverse'
  | 'alternate'
  | 'alternate-reverse'
```

### AnimationFillMode

Animation fill mode.

```typescript
type AnimationFillMode =
  | 'none'
  | 'forwards'
  | 'backwards'
  | 'both'
```

### Animation

Full animation type.

```typescript
interface Animation<T = unknown> extends AnimationBase<T> {
  from: number
  to: number
  value?: T
  keyframes?: Keyframe<T>[]
  playState?: AnimationPlaybackState
  currentTime?: number
  startTime?: number
}
```

### Keyframe

Keyframe with timing.

```typescript
interface Keyframe<T = unknown> extends KeyframeBase<T> {
  time: number // Absolute time in ms
  computed?: boolean
  interpolation?: KeyframeInterpolation
}
```

### EasingType

CSS-like easing type.

```typescript
type EasingType =
  | 'linear'
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | 'step-start'
  | 'step-end'
  | `steps(${number}, start)`
  | `steps(${number}, end)`
  | `cubic-bezier(${string})`
```

### EasingPreset

Built-in easing presets.

```typescript
type EasingPreset =
  | 'linear' | 'ease' | 'easeIn' | 'easeOut' | 'easeInOut'
  | 'backEaseIn' | 'backEaseOut' | 'backEaseInOut'
  | 'bounceEaseIn' | 'bounceEaseOut' | 'bounceEaseInOut'
  | 'circEaseIn' | 'circEaseOut' | 'circEaseInOut'
  | 'elasticEaseIn' | 'elasticEaseOut' | 'elasticEaseInOut'
  | 'quadEaseIn' | 'quadEaseOut' | 'quadEaseInOut'
  | 'sineEaseIn' | 'sineEaseOut' | 'sineEaseInOut'
```

### SpringConfig

Spring physics parameters.

```typescript
interface SpringConfig {
  stiffness: number // Tension
  damping: number // Friction
  mass?: number
  velocity?: number
  precision?: number
}
```

### SpriteSheet

Sprite sheet configuration.

```typescript
interface SpriteSheet {
  image: string
  frameWidth: number
  frameHeight: number
  frames: SpriteFrame[]
  animations: Record<string, SpriteAnimationDef>
  scale?: number
}
```

### Skeleton

Skeleton structure for skeletal animation.

```typescript
interface Skeleton {
  bones: Bone[]
  root: Bone
  name: string
}
```

### Bone

Bone in skeleton.

```typescript
interface Bone {
  id: string
  name: string
  parent: Bone | null
  children: Bone[]
  bindTransform: BoneTransform
  localTransform?: BoneTransform
  worldTransform?: BoneTransform
}
```

### IKChain

Inverse Kinematics chain.

```typescript
interface IKChain {
  bones: Bone[]
  target: IKTarget
  pole?: { x: number, y: number, z: number }
  iterations?: number
  tolerance?: number
}
```

### AnimationClip

Animation clip (collection of tracks).

```typescript
interface AnimationClip {
  name: string
  tracks: AnimationTrack[]
  duration: number
  startTime?: number
  endTime?: number
  speed?: number
  wrapMode?: ExtrapolationMode
  events?: AnimationEvent[]
}
```

### AnimationController

Animation controller with parameters.

```typescript
interface AnimationController {
  name: string
  paramaters: AnimationParameters
  layers: AnimationLayer[]
  entries: AnimationTransition[]
  anyStateTransitions?: AnimationTransition[]
}
```

## Related

- [Game Development](./game) - Game types
- [Graphics](./graphics) - Graphics rendering types
- [Audio Processing](./audio) - Audio types