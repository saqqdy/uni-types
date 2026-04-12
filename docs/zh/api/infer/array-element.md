# ArrayElement

**自 1.0.0 起**

获取数组的元素类型。

## 签名

```typescript
type ArrayElement<T> = T extends readonly (infer E)[] ? E : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 数组类型 |

## 描述

从数组类型中提取元素类型。支持普通数组和只读数组。

## 示例

### 基本用法

```typescript
import type { ArrayElement } from 'uni-types'

type Elem1 = ArrayElement<string[]> // string
type Elem2 = ArrayElement<number[]> // number
type Elem3 = ArrayElement<boolean[]> // boolean
```

### 联合类型元素

```typescript
type Elem4 = ArrayElement<(string | number)[]> // string | number
type Elem5 = ArrayElement<('a' | 'b' | 'c')[]> // 'a' | 'b' | 'c'
```

### 只读数组

```typescript
type Elem6 = ArrayElement<readonly string[]> // string
type Elem7 = ArrayElement<ReadonlyArray<number>> // number
```

### 非数组类型

```typescript
type Elem8 = ArrayElement<string> // never
type Elem9 = ArrayElement<{}> // never
```

## 相关

- [`Awaited`](./awaited) - 解包 Promise 类型
- [`ValueOf`](./value-of) - 获取对象值类型