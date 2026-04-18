# AssertNotNil

**自 1.3.0 起**

断言类型 `T` 不是 `never`。

## 签名

```typescript
type AssertNotNil<T> = [T] extends [never] ? never : T
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要检查的类型 |

## 示例

### 基本用法

```typescript
import type { AssertNotNil } from 'uni-types'

type Result = AssertNotNil<string> // string
type Failed = AssertNotNil<never> // never
```

### 条件类型

```typescript
type MaybeString = string | undefined
type Validated = AssertNotNil<Exclude<MaybeString, undefined>> // string
```

### 推断类型

```typescript
type ExtractArray<T> = T extends (infer E)[] ? E : never
type Result = AssertNotNil<ExtractArray<string[]>> // string
```

## 相关

- [`RequireNotNullish`](./requirenotnullish) - 确保类型不是 null 或 undefined
- [`AssertExtends`](./assertextends) - 断言类型扩展另一个类型
