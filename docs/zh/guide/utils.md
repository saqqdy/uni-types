# 工具类型

用于常见 TypeScript 模式的各种工具类型。

## Merge

合并两个类型（后者覆盖前者）。

```typescript
import type { Merge } from 'uni-types'

type Result = Merge<{ a: string; b: number }, { b: boolean; c: string }>
// { a: string; b: boolean; c: string }
```

## Nullable / Optional / Maybe

为类型添加 null、undefined 或两者。

```typescript
import type { Nullable, Optional, Maybe } from 'uni-types'

type WithNull = Nullable<string> // string | null
type WithUndefined = Optional<string> // string | undefined
type WithBoth = Maybe<string> // string | null | undefined
```

## NonNullable / NoNullish

移除 null 和 undefined。

```typescript
import type { NonNullable, NoNullish } from 'uni-types'

type Clean = NonNullable<string | null | undefined> // string

// NoNullish 从所有属性中移除 null/undefined
interface User {
  name: string | null
  email: string | undefined
}
type CleanUser = NoNullish<User>
// { name: string; email: string }
```

## RequiredKeys / OptionalKeys

获取必选或可选属性的键名。

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

获取可写或只读属性的键名。

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

获取所有路径或指定路径的值类型。

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

转换字符串大小写类型。

```typescript
import type { CamelCase, SnakeCase } from 'uni-types'

type Camel = CamelCase<'hello_world'> // 'helloWorld'
type Camel2 = CamelCase<'foo-bar'> // 'fooBar'

type Snake = SnakeCase<'helloWorld'> // 'hello_world'
type Snake2 = SnakeCase<'XMLParser'> // 'xml_parser'
```

## CamelCaseKeys / SnakeCaseKeys

转换对象键名的大小写。

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

要求可选属性中至少有一个必选。

```typescript
import type { AtLeastOne } from 'uni-types'

interface Options {
  a?: string
  b?: number
  c?: boolean
}

type Required = AtLeastOne<Options>
// 必须至少包含 a、b 或 c 中的一个
```

## UnionToIntersection / UnionToTuple

转换联合类型。

```typescript
import type { UnionToIntersection, UnionToTuple } from 'uni-types'

type Intersection = UnionToIntersection<{ a: string } | { b: number }>
// { a: string } & { b: number }

type Tuple = UnionToTuple<'a' | 'b'> // ['a', 'b']（顺序可能变化）
```
