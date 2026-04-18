# RequireNotNullish

**自 1.3.0 起**

确保类型不是 `null` 或 `undefined`。

## 签名

```typescript
type RequireNotNullish<T> = null extends T ? never : undefined extends T ? never : T
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要检查的类型 |

## 示例

### 基本用法

```typescript
import type { RequireNotNullish } from 'uni-types'

type Result = RequireNotNullish<string> // string
type FailedNull = RequireNotNullish<null> // never
type FailedUndefined = RequireNotNullish<undefined> // never
```

### 联合类型

```typescript
type MaybeString = string | null | undefined
type StrictString = RequireNotNullish<MaybeString> // never (包含 null/undefined)
type OptionalString = string | undefined
type NoUndefined = RequireNotNullish<OptionalString> // never
```

### 泛型类型

```typescript
type NonNullish<T> = RequireNotNullish<T>
type SafeValue = NonNullish<number> // number
type UnsafeValue = NonNullish<number | null> // never
```

## 相关

- [`AssertNotNil`](./assertnotnil) - 断言类型不是 never
- [`RequireArray`](./requirearray) - 确保类型是数组
