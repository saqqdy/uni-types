# IsArray

检查一个类型是否为数组。

## 签名

```typescript
type IsArray<T> = T extends readonly unknown[]
  ? T extends readonly [...unknown[]]
    ? true
    : false
  : false
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要检查的类型 |

## 返回值

如果 `T` 是数组类型，返回 `true`，否则返回 `false`。

## 示例

### 基本用法

```typescript
import type { IsArray } from 'uni-types'

type Check1 = IsArray<string[]> // true
type Check2 = IsArray<number[]> // true
type Check3 = IsArray<readonly string[]> // true
```

### 非数组类型

```typescript
type Check4 = IsArray<string> // false
type Check5 = IsArray<number> // false
type Check6 = IsArray<{ length: number }> // false
type Check7 = IsArray<{ [key: string]: any }> // false
```

### 与元组一起使用

```typescript
type Check8 = IsArray<[string, number]> // true（元组也是数组）
```

## 在条件类型中使用

```typescript
import type { IsArray } from 'uni-types'

type ArrayElement<T> = IsArray<T> extends true ? T[number] : never

type Elem = ArrayElement<string[]> // string
type NotArray = ArrayElement<string> // never
```

## 相关

- [`IsTuple`](./is-tuple) - 检查类型是否为元组
- [`ArrayElement`](../infer/array-element) - 获取数组元素类型
