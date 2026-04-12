# FirstParameter

**自 1.0.0 起**

获取函数的第一个参数类型。

## 签名

```typescript
type FirstParameter<T> = T extends (first: infer F, ...rest: any[]) => any ? F : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 函数类型 |

## 描述

从函数类型中提取第一个参数的类型。

## 示例

### 基本用法

```typescript
import type { FirstParameter } from 'uni-types'

type Param = FirstParameter<(first: string, second: number) => void>
// string
```

### 单个参数

```typescript
type SingleParam = FirstParameter<(value: number) => void>
// number
```

### 无参数

```typescript
type NoParam = FirstParameter<() => void> // never
```

### 对象参数

```typescript
type ObjParam = FirstParameter<(options: { a: string; b: number }) => void>
// { a: string; b: number }
```

## 相关

- [`FunctionKeys`](./function-keys) - 获取函数属性键
- [`FunctionOnly`](./function-only) - 提取函数属性