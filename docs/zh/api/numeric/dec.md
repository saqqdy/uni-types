# Dec

数字类型自减 1。

## 签名

```typescript
type Dec<N extends number> = N extends 0 
  ? 0 
  : NumberToArray<N> extends [0, ...infer Rest] 
    ? Rest['length'] 
    : 0
```

## 参数

| 参数 | 描述 |
|------|------|
| `N` | 要自减的数字 |

## 描述

自减下限为 0 - 自减 0 返回 0。

## 示例

### 基本用法

```typescript
import type { Dec } from 'uni-types'

type A = Dec<5>   // 4
type B = Dec<1>   // 0
type C = Dec<0>   // 0（下限）
```

## 相关

- [`Inc`](./inc) - 数字自增
- [`Subtract`](./subtract) - 两数相减