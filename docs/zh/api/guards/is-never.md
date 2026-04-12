# IsNever

**自 1.0.0 起**

检查一个类型是否为 `never`。

## 签名

```typescript
type IsNever<T> = [T] extends [never] ? true : false
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要检查的类型 |

## 返回值

如果 `T` 是 `never`，返回 `true`，否则返回 `false`。

## 示例

### 基本用法

```typescript
import type { IsNever } from 'uni-types'

type Check1 = IsNever<never> // true
```

### 非 never 类型

```typescript
type Check2 = IsNever<string> // false
type Check3 = IsNever<undefined> // false
type Check4 = IsNever<null> // false
type Check5 = IsNever<void> // false
```

### 在条件类型中使用

```typescript
import type { IsNever } from 'uni-types'

// 特殊处理 never 类型
type HandleNever<T> = IsNever<T> extends true 
  ? 'was never' 
  : T

type Test1 = HandleNever<string> // string
type Test2 = HandleNever<never> // 'was never'
```

## 相关

- [`IsAny`](./is-any) - 检查类型是否为 any
- [`IsUnknown`](./is-unknown) - 检查类型是否为 unknown
- [`IsEqual`](./is-equal) - 检查类型是否相等
