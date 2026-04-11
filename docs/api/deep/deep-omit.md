# DeepOmit

Remove properties at nested paths.

## Signature

```typescript
type DeepOmit<T, P extends string> = T extends object
  ? P extends ''
    ? T
    : DeepOmitBySegments<T, PathSegments<T, P>>
  : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The target object type |
| `P` | The path to omit |

## Description

Removes properties at specified nested paths from an object type.

## Examples

### Basic Usage

```typescript
import type { DeepOmit } from 'uni-types'

interface User {
  profile: {
    name: string
    email: string
    settings: {
      theme: string
      lang: string
    }
  }
}

type WithoutSettings = DeepOmit<User, 'profile.settings'>
// { profile: { name: string; email: string } }
```

### Single Property

```typescript
interface Config {
  database: {
    host: string
    port: number
    password: string
  }
}

type SafeConfig = DeepOmit<Config, 'database.password'>
// { database: { host: string; port: number } }
```

## Related

- [`DeepPick`](./deep-pick) - Keep only specified paths
- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys) - TypeScript's built-in Omit