# MakeOptional

**Since 1.3.0**

Make specific keys optional in an object type.

## Signature

```typescript
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [P in K]+?: T[P] }
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |
| `K` | The keys to make optional |

## Examples

### Basic Usage

```typescript
import type { MakeOptional } from 'uni-types'

type User = { name: string; age: number; email: string }
type PartialUser = MakeOptional<User, 'age' | 'email'>
// { name: string } & { age?: number } & { email?: string }
```

### With Single Key

```typescript
type Config = { host: string; port: number }
type FlexibleConfig = MakeOptional<Config, 'port'> // { host: string } & { port?: number }
```

### Creating Form Types

```typescript
type FormData = { username: string; password: string; rememberMe: boolean }
type FormInput = MakeOptional<FormData, 'rememberMe'>
// { username: string; password: string } & { rememberMe?: boolean }
```

## Related

- [`RequireKeys`](./requirekeys) - Make specific keys required
- [`RequireAtLeastOne`](./requireatleastone) - Require at least one key
