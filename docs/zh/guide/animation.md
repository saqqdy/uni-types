# 动画类型

**始于 1.9.0**

用于动画系统和动态图形的类型。

## 概述

动画类型提供了类型级动画工具。它支持关键帧动画、缓动函数、弹簧物理、骨骼动画、精灵动画和动画状态机。

此模块支持构建具有关键帧、时间轴和动画控制器正确约束的类型安全动画应用。

## 基本用法

```typescript
import type { Animation, Keyframe, EasingType, SpringConfig, Skeleton, AnimationClip } from 'uni-types'

// 定义动画
type FadeAnimation = Animation<number>

// 定义关键帧序列
type PositionKeyframes = KeyframeSequence<Vector3>

// 定义动画剪辑
type WalkClip = AnimationClip
```

## 核心类型

### AnimationDuration

动画持续时间（毫秒）。

```typescript
type AnimationDuration = number
```

### AnimationPlaybackState

动画播放状态。

```typescript
type AnimationPlaybackState = 'idle' | 'running' | 'paused' | 'finished'
```

### AnimationDirection

动画方向。

```typescript
type AnimationDirection =
  | 'normal'
  | 'reverse'
  | 'alternate'
  | 'alternate-reverse'
```

### AnimationFillMode

动画填充模式。

```typescript
type AnimationFillMode =
  | 'none'
  | 'forwards'
  | 'backwards'
  | 'both'
```

### Animation

完整动画类型。

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

具有时序的关键帧。

```typescript
interface Keyframe<T = unknown> extends KeyframeBase<T> {
  time: number // 绝对时间（毫秒）
  computed?: boolean
  interpolation?: KeyframeInterpolation
}
```

### EasingType

CSS 风格缓动类型。

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

内置缓动预设。

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

弹簧物理参数。

```typescript
interface SpringConfig {
  stiffness: number // 张力
  damping: number // 阻尼
  mass?: number
  velocity?: number
  precision?: number
}
```

### SpriteSheet

精灵图配置。

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

骨骼动画的骨骼结构。

```typescript
interface Skeleton {
  bones: Bone[]
  root: Bone
  name: string
}
```

### Bone

骨骼中的骨头。

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

反向运动学链。

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

动画剪辑（轨道集合）。

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

具有参数的动画控制器。

```typescript
interface AnimationController {
  name: string
  paramaters: AnimationParameters
  layers: AnimationLayer[]
  entries: AnimationTransition[]
  anyStateTransitions?: AnimationTransition[]
}
```

## 相关

- [游戏开发](./game) - 游戏类型
- [图形渲染](./graphics) - 图形渲染类型
- [音频处理](./audio) - 音频类型