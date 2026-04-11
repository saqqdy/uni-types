# Deep Operations

Recursively transform nested object types.

## DeepPartial

Make all nested properties optional.

```typescript
import type { DeepPartial } from 'uni-types'

interface Config {
  database: {
    host: string
    port: number
    credentials: {
      username: string
      password: string
    }
  }
}

type PartialConfig = DeepPartial<Config>
/*
{
  database?: {
    host?: string
    port?: number
    credentials?: {
      username?: string
      password?: string
    }
  }
}
*/
```

### Arrays

Arrays are handled correctly - they remain arrays:

```typescript
interface Data {
  items: string[]
  nested: { id: number }[]
}

type PartialData = DeepPartial<Data>
// items becomes (string | undefined)[] | undefined
```

### Built-in Types

Built-in types like `Date`, `Function`, `Map`, `Set` are preserved:

```typescript
interface AppState {
  createdAt: Date
  handler: () => void
  cache: Map<string, number>
}

type PartialState = DeepPartial<AppState>
// createdAt, handler, cache types are preserved (just made optional)
```

## DeepRequired

Make all nested properties required.

```typescript
import type { DeepRequired } from 'uni-types'

interface Config {
  database?: {
    host?: string
    port?: number
  }
}

type RequiredConfig = DeepRequired<Config>
/*
{
  database: {
    host: string
    port: number
  }
}
*/
```

## DeepReadonly

Make all nested properties readonly.

```typescript
import type { DeepReadonly } from 'uni-types'

interface Config {
  database: {
    host: string
    port: number
  }
}

type ReadonlyConfig = DeepReadonly<Config>
/*
{
  readonly database: {
    readonly host: string
    readonly port: number
  }
}
*/
```

## DeepMutable

Remove readonly from all nested properties.

```typescript
import type { DeepMutable } from 'uni-types'

interface Config {
  readonly database: {
    readonly host: string
    readonly port: number
  }
}

type MutableConfig = DeepMutable<Config>
/*
{
  database: {
    host: string
    port: number
  }
}
*/
```

### Readonly Arrays

Works with readonly arrays:

```typescript
type ReadonlyArray = readonly string[]
type MutableArray = DeepMutable<ReadonlyArray> // string[]
```

## DeepOmit

Remove properties at nested paths.

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

## DeepPick

Keep only properties at specified paths.

```typescript
import type { DeepPick } from 'uni-types'

interface User {
  profile: {
    name: string
    email: string
    settings: {
      theme: string
    }
  }
}

type JustName = DeepPick<User, 'profile.name'>
// { profile: { name: string } }
```

### Multiple Paths

For union paths, use `DeepPickPaths`:

```typescript
import type { DeepPickPaths } from 'uni-types'

type NameAndEmail = DeepPickPaths<User, 'profile.name' | 'profile.email'>
// { profile: { name: string; email: string } }
```