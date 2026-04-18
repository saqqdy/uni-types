# Transition

**自 1.4.0 起**

状态机的转换定义。

## 签名

```typescript
interface Transition<Event extends string, From extends string, To extends string> {
  event: Event
  from: From
  to: To
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `Event` | 触发转换的事件名称 |
| `From` | 源状态 |
| `To` | 目标状态 |

## 描述

定义由事件触发的状态转换。

## 示例

### 基本用法

```typescript
import type { Transition } from 'uni-types'

type NextTransition = Transition<'next', 'idle', 'loading'>
// { event: 'next'; from: 'idle'; to: 'loading' }
```

## 相关

- [`StateMachine`](./statemachine) - 状态机定义
- [`State`](./state) - 状态定义