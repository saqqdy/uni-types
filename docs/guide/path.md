# Path Utilities

Type-safe path operations for nested objects.

## ValidPath

Check if a path exists in a type.

```typescript
import type { ValidPath } from 'uni-types'

interface Obj {
  a: {
    b: string
    c: {
      d: number
    }
  }
}

type Path1 = ValidPath<Obj, 'a.b'>    // true
type Path2 = ValidPath<Obj, 'a.c.d'>  // true
type Path3 = ValidPath<Obj, 'a.x'>    // false
```

## ArrayPaths

Get all paths including array indices.

```typescript
import type { ArrayPaths } from 'uni-types'

interface Users {
  users: { name: string; age: number }[]
}

type Paths = ArrayPaths<Users>
// 'users' | `users.${number}` | `users.${number}.name` | `users.${number}.age`
```

## LeafPaths

Get paths to primitive values only (leaf nodes).

```typescript
import type { LeafPaths } from 'uni-types'

interface Data {
  config: {
    host: string
    port: number
  }
}

type Paths = LeafPaths<Data>
// 'config.host' | 'config.port'
```

## PathLength

Get the number of segments in a path.

```typescript
import type { PathLength } from 'uni-types'

type A = PathLength<'a.b.c'>   // 3
type B = PathLength<'single'>  // 1
type C = PathLength<''>        // 0
```

## ParentPath

Get the parent path of a given path.

```typescript
import type { ParentPath } from 'uni-types'

type A = ParentPath<'a.b.c'>  // 'a.b'
type B = ParentPath<'a'>      // ''
```

## PathLeaf

Get the last segment of a path.

```typescript
import type { PathLeaf } from 'uni-types'

type A = PathLeaf<'a.b.c'>  // 'c'
type B = PathLeaf<'a'>      // 'a'
```

## DeepOmit & DeepPick

Remove or select properties at nested paths.

```typescript
import type { DeepOmit, DeepPick } from 'uni-types'

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

type JustName = DeepPick<User, 'profile.name'>
// { profile: { name: string } }
```

### Union Paths

For union paths, use `DeepPickPaths` and `DeepOmitPaths`:

```typescript
import type { DeepPickPaths } from 'uni-types'

type Multiple = DeepPickPaths<User, 'profile.name' | 'profile.email'>
// { profile: { name: string; email: string } }
```
