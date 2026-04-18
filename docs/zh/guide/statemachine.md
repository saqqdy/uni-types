# 类型级状态机

**自 1.4.0 起**

用于复杂状态建模的状态机类型。

## 基本用法

### StateMachine

定义具有状态和转换的状态机。

```typescript
import type { StateMachine } from 'uni-types'

type TrafficLight = StateMachine<{
  states: { red: {}; yellow: {}; green: {} }
  initial: 'red'
  transitions: {
    next: { red: 'green'; green: 'yellow'; yellow: 'red' }
  }
}>
```

### State

定义带数据的状态。

```typescript
import type { State } from 'uni-types'

type Loading = State<'loading', { progress: number }>
// { state: 'loading'; data: { progress: number } }
```

## 状态工具

### CurrentState

获取当前状态类型。

```typescript
import type { CurrentState } from 'uni-types'

type Current = CurrentState<TrafficLight>  // 'red'
```

### NextState

获取事件后的下一个状态。

```typescript
import type { NextState } from 'uni-types'

type Next = NextState<TrafficLight, 'next'>  // 'green'
```

### ValidTransitions

获取当前状态的所有有效转换。

```typescript
import type { ValidTransitions } from 'uni-types'

type Transitions = ValidTransitions<TrafficLight>  // 'next'
```

### CanTransition

检查转换是否有效。

```typescript
import type { CanTransition } from 'uni-types'

type Can = CanTransition<TrafficLight, 'next'>  // true
```

### IsTerminal

检查当前状态是否为终态。

```typescript
import type { IsTerminal } from 'uni-types'

type Done = IsTerminal<{ current: 'done'; transitions: {} }>  // true
```

## 构建状态机

### BuildStateMachine

从配置构建状态机。

```typescript
import type { BuildStateMachine } from 'uni-types'

type SM = BuildStateMachine<{
  states: ['idle', 'running', 'stopped']
  initial: 'idle'
  transitions: {
    start: { idle: 'running' }
    stop: { running: 'stopped' }
  }
}>
```

## 相关

- [模式类型](./pattern) - 模式匹配工具
- [数据结构](./datastructures) - 树、图结构
