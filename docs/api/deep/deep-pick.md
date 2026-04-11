# DeepPick

Keep only properties at specified paths.

## Signature

```typescript
type DeepPick<T, P extends string> = T extends object
  ? P extends ''
    ? T
    : DeepPickBySegments<T, PathSegments<T, P>>
  : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The target object type |
| `P` | The path to keep |

## Description

Keeps only the properties at specified nested paths, removing all others.

## Examples

### Basic Usage

```typescript
import type { DeepPick } from 'uni-types'

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

type JustName = DeepPick<User, 'profile.name'>
// { profile: { name: string } }
```

### Nested Path

```typescript
interface Config {
  app: {
    name: string
    version: string
  }
  database: {
    host: string
    port: number
  }
}

type AppInfo = DeepPick<Config, 'app.name'>
// { app: { name: string } }
```

## Related

- [`DeepOmit`](./deep-omit) - Remove specified paths
- [`Pick`](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys) - TypeScript's built-in Pick