# MakeOptional

**自 1.3.0 起**

将对象类型中的特定键设为可选。

## 签名

```typescript
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [P in K]+?: T[P] }
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 对象类型 |
| `K` | 要设为可选的键 |

## 示例

### 基本用法

```typescript
import type { MakeOptional } from 'uni-types'

type User = { name: string; age: number; email: string }
type PartialUser = MakeOptional<User, 'age' | 'email'>
// { name: string } & { age?: number } & { email?: string }
```

### 单个键

```typescript
type Config = { host: string; port: number }
type FlexibleConfig = MakeOptional<Config, 'port'> // { host: string } & { port?: number }
```

### 创建表单类型

```typescript
type FormData = { username: string; password: string; rememberMe: boolean }
type FormInput = MakeOptional<FormData, 'rememberMe'>
// { username: string; password: string } & { rememberMe?: boolean }
```

## 相关

- [`RequireKeys`](./requirekeys) - 将特定键设为必需
- [`RequireAtLeastOne`](./requireatleastone) - 要求至少一个键
