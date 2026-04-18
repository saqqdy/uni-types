# RequireAtLeastOne

**自 1.3.0 起**

要求对象类型中指定的键至少存在一个。

## 签名

```typescript
type RequireAtLeastOne<T, K extends keyof T = keyof T> = K extends K
  ? Omit<T, K> & { [P in K]-?: T[P] } & { [P in Exclude<K, K>]+?: T[P] }
  : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 对象类型 |
| `K` | 必须至少存在一个的键（默认为所有键） |

## 示例

### 基本用法

```typescript
import type { RequireAtLeastOne } from 'uni-types'

type Contact = { email?: string; phone?: string; address?: string }
type ValidContact = RequireAtLeastOne<Contact, 'email' | 'phone'>
// 必须至少有 email 或 phone，address 保持可选
```

### 默认键

```typescript
type Options = { a?: number; b?: string; c?: boolean }
type AtLeastOne = RequireAtLeastOne<Options>
// 必须至少有 a、b 或 c 中的一个
```

### API 响应

```typescript
type SearchResult = { id?: string; name?: string; code?: number }
type MatchResult = RequireAtLeastOne<SearchResult, 'id' | 'name'>
// 必须通过 id 或 name 匹配
```

## 相关

- [`RequireExactlyOne`](./requireexactlyone) - 要求恰好一个键
- [`RequireKeys`](./requirekeys) - 将特定键设为必需
- [`MakeOptional`](./makeoptional) - 将特定键设为可选
