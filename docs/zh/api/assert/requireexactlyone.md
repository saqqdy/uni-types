# RequireExactlyOne

**自 1.3.0 起**

要求对象类型中指定的键恰好存在一个。

## 签名

```typescript
type RequireExactlyOne<T, K extends keyof T = keyof T> = K extends K
  ? Omit<T, K> & Required<Pick<T, K>> & Partial<Omit<T, K>>
  : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 对象类型 |
| `K` | 必须恰好存在一个的键（默认为所有键） |

## 示例

### 基本用法

```typescript
import type { RequireExactlyOne } from 'uni-types'

type Identifier = { id?: number; uuid?: string; slug?: string }
type SingleIdentifier = RequireExactlyOne<Identifier, 'id' | 'uuid' | 'slug'>
// 必须恰好有 id、uuid 或 slug 中的一个
```

### 互斥选项

```typescript
type Config = { url?: string; file?: string; data?: object }
type SourceConfig = RequireExactlyOne<Config, 'url' | 'file' | 'data'>
// 必须提供恰好一个数据源
```

### 默认行为

```typescript
type Options = { a?: number; b?: string }
type ExactlyOne = RequireExactlyOne<Options>
// 必须恰好有 a 或 b 中的一个（不能同时有）
```

## 相关

- [`RequireAtLeastOne`](./requireatleastone) - 要求至少一个键
- [`RequireKeys`](./requirekeys) - 将特定键设为必需
