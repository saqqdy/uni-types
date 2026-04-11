# IsUnknown

检查一个类型是否为 `unknown`。

## 签名

```typescript
type IsUnknown<T> = IsEqual<T, unknown> extends true
  ? IsAny<T> extends true
    ? false
    : true
  : false
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要检查的类型 |

## 返回值

如果 `T` 是 `unknown`，返回 `true`，否则返回 `false`。

## 示例

### 基本用法

```typescript
import type { IsUnknown } from 'uni-types'

type Check1 = IsUnknown<unknown> // true
```

### 非 unknown 类型

```typescript
type Check2 = IsUnknown<string> // false
type Check3 = IsUnknown<any> // false（any 不是 unknown）
type Check4 = IsUnknown<never> // false
type Check5 = IsUnknown<{}> // false
```

### 在条件类型中使用

```typescript
import type { IsUnknown } from 'uni-types'

// 特殊处理 unknown 类型
type HandleUnknown<T> = IsUnknown<T> extends true 
  ? 'was unknown' 
  : T

type Test1 = HandleUnknown<string> // string
type Test2 = HandleUnknown<unknown> // 'was unknown'
```

## 相关

- [`IsAny`](./is-any) - 检查类型是否为 any
- [`IsNever`](./is-never) - 检查类型是否为 never
- [`IsEqual`](./is-equal) - 检查类型是否相等
