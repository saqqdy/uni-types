# Interop Enhancements

Enhanced interoperability between uni-types and other type libraries.

## InteropV2

Enhanced interop bridge between uni-types and external libraries.

```typescript
import type { InteropV2 } from 'uni-types'

interface UniTypesShape {
	name: string
	age: number
}

type Bridged = InteropV2<UniTypesShape, 'type-fest'>
// type-fest compatible shape
```

## ToZodV2

Enhanced conversion to Zod schema types.

```typescript
import type { ToZodV2 } from 'uni-types'

interface User {
	name: string
	age: number
	email?: string
}

type UserZodSchema = ToZodV2<User>
// z.object({ name: z.string(), age: z.number(), email: z.string().optional() })
```

## ToYupV2

Enhanced conversion to Yup schema types.

```typescript
import type { ToYupV2 } from 'uni-types'

interface Config {
	host: string
	port: number
}

type ConfigYupSchema = ToYupV2<Config>
// yup.object({ host: yup.string().required(), port: yup.number().required() })
```

## ToIO_TS

Convert uni-types to io-ts compatible types.

```typescript
import type { ToIO_TS } from 'uni-types'

interface Data {
	id: string
	value: number
}

type DataIOType = ToIO_TS<Data>
// t.type({ id: t.string, value: t.number })
```

## FromExternal

Convert an external library type to uni-types format.

```typescript
import type { FromExternal } from 'uni-types'

type Converted = FromExternal<ExternalType, 'zod'>
// uni-types compatible type
```

## CompatibleWith

Check if a type is compatible with a specific library.

```typescript
import type { CompatibleWith } from 'uni-types'

type IsZodCompat = CompatibleWith<{ a: string }, 'zod'>
// true

type IsTypeFestCompat = CompatibleWith<{ a: string }, 'type-fest'>
// true
```

## BridgeConfig

Configuration for interop bridging behavior.

```typescript
import type { BridgeConfig } from 'uni-types'

type Config = BridgeConfig<{
	strict: true
	preserveOptionality: true
	customMappings: { Date: 'string' }
}>
```

## InteropError

Type-level error for interop incompatibilities.

```typescript
import type { InteropError } from 'uni-types'

type Error = InteropError<'unsupported_type', 'bigint', 'zod'>
// { error: 'unsupported_type'; type: 'bigint'; target: 'zod'; message: 'bigint is not supported in Zod schemas' }
```
