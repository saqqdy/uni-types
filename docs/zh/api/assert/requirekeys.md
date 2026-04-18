# RequireKeys

**自 1.3.0 起**

要求对象类型中特定的键必须存在且不可选。

## 签名

```typescript
type RequireKeys<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: T[P] }
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 对象类型 |
| `K` | 要设为必需的键 |

## 示例

### 基本用法

```typescript
import type { RequireKeys } from 'uni-types'

type User = { name?: string; age?: number; email: string }
type RequiredUser = RequireKeys<User, 'name' | 'age'>
// { email: string } & { name: string } & { age: number }
```

### 单个键

```typescript
type Config = { debug?: boolean; port: number }
type StrictConfig = RequireKeys<Config, 'debug'> // { port: number } & { debug: boolean }
```

### 组合多个键

```typescript
type Options = { a?: number; b?: string; c?: boolean }
type AllRequired = RequireKeys<Options, 'a' | 'b' | 'c'>
// { a: number } & { b: string } & { c: boolean }
```

## 相关

- [`MakeOptional`](./makeoptional) - 将特定键设为可选
- [`RequireAtLeastOne`](./requireatleastone) - 要求至少一个键
