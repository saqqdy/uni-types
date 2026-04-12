# IsTuple

**自 1.0.0 起**

检查一个类型是否为元组。

## 签名

```typescript
type IsTuple<T> = T extends readonly [unknown, ...unknown[]]
  ? T extends readonly unknown[]
    ? number extends T['length']
      ? false
      : true
    : false
  : false
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要检查的类型 |

## 返回值

如果 `T` 是元组类型（固定长度数组），返回 `true`，否则返回 `false`。

## 示例

### 基本用法

```typescript
import type { IsTuple } from 'uni-types'

type Check1 = IsTuple<[string, number]> // true
type Check2 = IsTuple<[string]> // true
type Check3 = IsTuple<readonly [number, string]> // true
type Check4 = IsTuple<[]> // true（空元组）
```

### 非元组类型

```typescript
type Check5 = IsTuple<string[]> // false
type Check6 = IsTuple<number[]> // false
type Check7 = IsTuple<string> // false
```

### 在条件类型中使用

```typescript
import type { IsTuple } from 'uni-types'

type GetLength<T> = IsTuple<T> extends true 
  ? T extends readonly unknown[] ? T['length'] : never 
  : number

type Len1 = GetLength<[1, 2, 3]> // 3
type Len2 = GetLength<string[]> // number
```

## 相关

- [`IsArray`](./is-array) - 检查类型是否为数组
- [`TupleLength`](../core/tuple-length) - 获取元组长度
