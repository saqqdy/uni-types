# Awaited

递归解包 Promise 类型。

## 签名

```typescript
type Awaited<T> = T extends Promise<infer U> ? Awaited<U> : T
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要解包的 Promise 类型 |

## 描述

`Awaited` 类似于 TypeScript 内置的 `Awaited` 类型，但在此记录以保持完整性。它递归地解包嵌套的 Promise 以获取最终的值类型。

## 示例

### 基本用法

```typescript
import type { Awaited } from 'uni-types'

type Result1 = Awaited<Promise<string>> // string
type Result2 = Awaited<Promise<number>> // number
```

### 嵌套 Promise

```typescript
type Result3 = Awaited<Promise<Promise<string>>> // string
type Result4 = Awaited<Promise<Promise<Promise<boolean>>>> // boolean
```

### 非 Promise 类型

```typescript
type Result5 = Awaited<string> // string
type Result6 = Awaited<number> // number
```

### 与异步函数一起使用

```typescript
async function fetchUser(): Promise<{ name: string; email: string }> {
  // ...
}

type User = Awaited<ReturnType<typeof fetchUser>>
// { name: string; email: string }
```

## 相关

- [`ArrayElement`](./array-element) - 获取数组元素类型
- [`ValueOf`](./value-of) - 获取对象值类型