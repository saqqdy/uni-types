# RequireKeys

**Since 1.3.0**

Require specific keys to be present and non-optional in an object type.

## Signature

```typescript
type RequireKeys<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: T[P] }
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |
| `K` | The keys to make required |

## Examples

### Basic Usage

```typescript
import type { RequireKeys } from 'uni-types'

type User = { name?: string; age?: number; email: string }
type RequiredUser = RequireKeys<User, 'name' | 'age'>
// { email: string } & { name: string } & { age: number }
```

### With Single Key

```typescript
type Config = { debug?: boolean; port: number }
type StrictConfig = RequireKeys<Config, 'debug'> // { port: number } & { debug: boolean }
```

### Combining Multiple Keys

```typescript
type Options = { a?: number; b?: string; c?: boolean }
type AllRequired = RequireKeys<Options, 'a' | 'b' | 'c'>
// { a: number } & { b: string } & { c: boolean }
```

## Related

- [`MakeOptional`](./makeoptional) - Make specific keys optional
- [`RequireAtLeastOne`](./requireatleastone) - Require at least one key
