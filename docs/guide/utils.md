# Utility Types

Various utility types for common TypeScript patterns.

## Merge

Merge two types (second overrides first).

```typescript
import type { Merge } from 'uni-types'

type Result = Merge<{ a: string; b: number }, { b: boolean; c: string }>
// { a: string; b: boolean; c: string }
```

## Nullable / Optional / Maybe

Add null, undefined, or both to a type.

```typescript
import type { Nullable, Optional, Maybe } from 'uni-types'

type WithNull = Nullable<string> // string | null
type WithUndefined = Optional<string> // string | undefined
type WithBoth = Maybe<string> // string | null | undefined
```

## NonNullable / NoNullish

Remove null and undefined.

```typescript
import type { NonNullable, NoNullish } from 'uni-types'

type Clean = NonNullable<string | null | undefined> // string

// NoNullish removes null/undefined from all properties
interface User {
  name: string | null
  email: string | undefined
}
type CleanUser = NoNullish<User>
// { name: string; email: string }
```

## RequiredKeys / OptionalKeys

Get keys of required or optional properties.

```typescript
import type { RequiredKeys, OptionalKeys } from 'uni-types'

interface User {
  name: string
  email: string
  age?: number
  phone?: string
}

type Required = RequiredKeys<User> // 'name' | 'email'
type Optional = OptionalKeys<User> // 'age' | 'phone'
```

## WritableKeys / ReadonlyKeys

Get keys of writable or readonly properties.

```typescript
import type { WritableKeys, ReadonlyKeys } from 'uni-types'

interface User {
  name: string
  readonly id: number
}

type Writable = WritableKeys<User> // 'name'
type Readonly = ReadonlyKeys<User> // 'id'
```

## Paths / PathValue

Get all paths or value at a path.

```typescript
import type { Paths, PathValue } from 'uni-types'

interface Config {
  database: {
    host: string
    port: number
  }
}

type AllPaths = Paths<Config> // 'database' | 'database.host' | 'database.port'
type HostType = PathValue<Config, 'database.host'> // string
```

## CamelCase / SnakeCase

Convert string case types.

```typescript
import type { CamelCase, SnakeCase } from 'uni-types'

type Camel = CamelCase<'hello_world'> // 'helloWorld'
type Camel2 = CamelCase<'foo-bar'> // 'fooBar'

type Snake = SnakeCase<'helloWorld'> // 'hello_world'
type Snake2 = SnakeCase<'XMLParser'> // 'xml_parser'
```

## CamelCaseKeys / SnakeCaseKeys

Convert object key cases.

```typescript
import type { CamelCaseKeys, SnakeCaseKeys } from 'uni-types'

interface ApiData {
  user_name: string
  user_email: string
}

type CamelData = CamelCaseKeys<ApiData>
// { userName: string; userEmail: string }

interface JsData {
  userName: string
  userEmail: string
}

type SnakeData = SnakeCaseKeys<JsData>
// { user_name: string; user_email: string }
```

## AtLeastOne

Require at least one property from optional properties.

```typescript
import type { AtLeastOne } from 'uni-types'

interface Options {
  a?: string
  b?: number
  c?: boolean
}

type Required = AtLeastOne<Options>
// Must have at least one of: a, b, or c
```

## UnionToIntersection / UnionToTuple

Convert union types.

```typescript
import type { UnionToIntersection, UnionToTuple } from 'uni-types'

type Intersection = UnionToIntersection<{ a: string } | { b: number }>
// { a: string } & { b: number }

type Tuple = UnionToTuple<'a' | 'b'> // ['a', 'b'] (order may vary)
```