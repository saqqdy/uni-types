# Last

获取元组的最后一个元素。

## 签名

```typescript
type Last<T extends readonly unknown[]> = T extends readonly [...unknown[], infer L]
  ? L
  : T extends readonly (infer E)[]
    ? E
    : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 元组类型 |

## 示例

### 基本用法

```typescript
import type { Last } from 'uni-types'

type LastElement = Last<[1, 2, 3]> // 3
type LastStr = Last<['a', 'b', 'c']> // 'c'
```

### 单元素

```typescript
type Single = Last<[string]> // string
```

### 数组

```typescript
type FromArray = Last<string[]> // string
type FromNumberArray = Last<number[]> // number
```

## 相关

- [`Head`](./head) - 获取第一个元素
- [`Init`](./init) - 获取除最后一个元素外的所有元素
- [`Tail`](./tail) - 获取除第一个元素外的所有元素
