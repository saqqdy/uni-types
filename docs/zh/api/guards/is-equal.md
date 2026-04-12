# IsEqual

**自 1.0.0 起**

检查两个类型是否完全相等。

## 签名

```typescript
type IsEqual<X, Y> = 
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `X` | 第一个要比较的类型 |
| `Y` | 第二个要比较的类型 |

## 返回值

如果 `X` 和 `Y` 是完全相同的类型，返回 `true`，否则返回 `false`。

## 示例

### 基本用法

```typescript
import type { IsEqual } from 'uni-types'

type Check1 = IsEqual<string, string> // true
type Check2 = IsEqual<number, number> // true
type Check3 = IsEqual<'hello', 'hello'> // true
```

### 对象类型

```typescript
type Check4 = IsEqual<{ a: string }, { a: string }> // true
type Check5 = IsEqual<{ a: string }, { a: number }> // false
type Check6 = IsEqual<{ a: string }, { b: string }> // false
```

### 不同类型

```typescript
type Check7 = IsEqual<string, number> // false
type Check8 = IsEqual<string | number, number | string> // true
```

### 特殊类型

```typescript
type Check9 = IsEqual<any, unknown> // false
type Check10 = IsEqual<any, any> // true
type Check11 = IsEqual<never, never> // true
```

## 在条件类型中使用

```typescript
import type { IsEqual } from 'uni-types'

type Expect<T extends true> = T

// 类型级别的断言
type Test1 = Expect<IsEqual<string, string>>
type Test2 = Expect<IsEqual<1, 1>>

// 这将导致类型错误：
// type Test3 = Expect<IsEqual<string, number>>
```

## 相关

- [`IsAny`](./is-any) - 检查类型是否为 any
- [`IsNever`](./is-never) - 检查类型是否为 never
- [`IsUnknown`](./is-unknown) - 检查类型是否为 unknown
