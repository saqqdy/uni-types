# 记录类型

高级记录和对象操作类型。

## DeepNullable

递归地将所有属性变为可空。

```typescript
import type { DeepNullable } from 'uni-types'

interface Config {
  database: {
    host: string
    port: number
  }
}

type Nullable = DeepNullable<Config>
// { database: { host: string | null; port: number | null } | null }
```

## DeepOptional

递归地将所有属性变为可选。

```typescript
import type { DeepOptional } from 'uni-types'

interface Config {
  database: {
    host: string
    port: number
  }
}

type Optional = DeepOptional<Config>
// { database?: { host?: string; port?: number } }
```

## Immutable

将所有属性变为深层只读。

```typescript
import type { Immutable } from 'uni-types'

interface Config {
  database: {
    host: string
    ports: number[]
  }
}

type Readonly = Immutable<Config>
// { readonly database: { readonly host: string; readonly ports: readonly number[] } }
```

## Mutable

递归地移除所有属性的只读修饰。

```typescript
import type { Mutable } from 'uni-types'

interface Config {
  readonly database: {
    readonly host: string
  }
}

type Writable = Mutable<Config>
// { database: { host: string } }
```

## DeepNonNullable

移除所有属性的 null 和 undefined。

```typescript
import type { DeepNonNullable } from 'uni-types'

interface Config {
  host: string | null
  port: number | undefined
}

type NonNull = DeepNonNullable<Config>
// { host: string; port: number }
```

## Exact

确保对象恰好具有指定的键。

```typescript
import type { Exact } from 'uni-types'

type A = Exact<{ a: string }, { a: string }>           // { a: string }
type B = Exact<{ a: string }, { a: string; b: number }> // never
```

## HasKeys

检查对象是否至少具有指定的键。

```typescript
import type { HasKeys } from 'uni-types'

type A = HasKeys<{ a: string; b: number }, 'a'>  // { a: string; b: number }
type B = HasKeys<{ a: string }, 'b'>             // never
```