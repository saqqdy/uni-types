# Subtract

两数相减。

## 签名

```typescript
type Subtract<A extends number, B extends number> = NumberToArray<B> extends [
  ...number[],
  ...NumberToArray<A>,
]
  ? 0
  : NumberToArray<A> extends [...NumberToArray<B>, ...infer Rest]
    ? Rest['length']
    : 0
```

## 参数

| 参数 | 描述 |
|------|------|
| `A` | 被减数 |
| `B` | 减数 |

## 描述

减法结果下限为 0 - 低于 0 的结果返回 0。

## 示例

### 基本用法

```typescript
import type { Subtract } from 'uni-types'

type A = Subtract<10, 3>  // 7
type B = Subtract<5, 2>   // 3
type C = Subtract<5, 10>  // 0（下限）
```

## 相关

- [`Add`](./add) - 两数相加
- [`Inc`](./inc) - 自增 1
- [`Dec`](./dec) - 自减 1