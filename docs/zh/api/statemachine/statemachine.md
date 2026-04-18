# StateMachine

**自 1.4.0 起**

类型级状态机定义。

## 签名

```typescript
interface StateMachine<T extends MachineConfig> { ... }
```

## 描述

定义一个类型级有限状态机，包含状态、转换和事件。

## 示例

### 基本用法

```typescript
import type { StateMachine, MachineConfig } from 'uni-types'

interface TrafficLight extends MachineConfig {
  states: ['red', 'yellow', 'green']
  initial: 'red'
  transitions: [
    { from: 'red', to: 'green', event: 'next' },
    { from: 'green', to: 'yellow', event: 'next' },
    { from: 'yellow', to: 'red', event: 'next' },
  ]
}
```

## 相关

- [`State`](./state) - 状态定义
- [`Transition`](./transition) - 转换定义