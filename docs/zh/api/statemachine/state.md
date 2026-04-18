# State

**自 1.4.0 起**

状态机的状态定义。

## 签名

```typescript
interface State<S extends string, Data = object> { state: S, data: Data }
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `S` | 状态名称 |
| `Data` | 可选的状态数据 |

## 描述

表示状态机中的一个状态，可包含可选数据。

## 示例

### 基本用法

```typescript
import type { State } from 'uni-types'

type Loading = State<'loading', { progress: number }>
// { state: 'loading'; data: { progress: number } }

type Idle = State<'idle'>
// { state: 'idle'; data: object }
```

## 相关

- [`StateMachine`](./statemachine) - 状态机定义