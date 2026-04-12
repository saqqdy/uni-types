# IsAny

**自 1.0.0 起**

检查一个类型是否为 `any`。

## 签名

```typescript
type IsAny<T> = 0 extends 1 & T ? true : false
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要检查的类型 |

## 返回值

如果 `T` 是 `any`，返回 `true`，否则返回 `false`。

## 示例

### 基本用法

```typescript
import type { IsAny } from 'uni-types'

type Check1 = IsAny<any> // true
```

### 非 any 类型

```typescript
type Check2 = IsAny<string> // false
type Check3 = IsAny<unknown> // false
type Check4 = IsAny<never> // false
type Check5 = IsAny<{}> // false
```

### 在条件类型中使用

```typescript
import type { IsAny } from 'uni-types'

// 阻止 any 被传入
type Safe<T> = IsAny<T> extends true ? never : T

type Test1 = Safe<string> // string
type Test2 = Safe<any> // never
```

## 相关

- [`IsUnknown`](./is-unknown) - 检查类型是否为 unknown
- [`IsNever`](./is-never) - 检查类型是否为 never
- [`IsEqual`](./is-equal) - 检查类型是否相等
