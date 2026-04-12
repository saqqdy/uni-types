# NthParameter

**自 1.1.0 起**

获取第 N 个参数类型（从 0 开始）。

## 签名

```typescript
type NthParameter<T, N extends number> = T extends (...args: infer P) => any ? P[N] : never
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 函数类型 |
| `N` | 参数索引（从 0 开始） |

## 示例

### 基本用法

```typescript
import type { NthParameter } from 'uni-types'

type Fn = (a: string, b: number, c: boolean) => void

type First = NthParameter<Fn, 0>   // string
type Second = NthParameter<Fn, 1>  // number
type Third = NthParameter<Fn, 2>   // boolean
```

### 提取特定参数

```typescript
type FetchFn = (url: string, options: RequestInit, callback: () => void) => void

type Url = NthParameter<FetchFn, 0>      // string
type Options = NthParameter<FetchFn, 1>  // RequestInit
type Callback = NthParameter<FetchFn, 2> // () => void
```

## 相关

- [`Parameters`](./parameters) - 获取所有参数作为元组