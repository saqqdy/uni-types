# 互操作增强

uni-types 与其他类型库之间增强的互操作性。

## InteropV2

uni-types 与外部库之间增强的互操作桥接。

```typescript
import type { InteropV2 } from 'uni-types'

interface UniTypesShape {
	name: string
	age: number
}

type Bridged = InteropV2<UniTypesShape, 'type-fest'>
// 兼容 type-fest 的形状
```

## ToZodV2

增强的 Zod 模式类型转换。

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

增强的 Yup 模式类型转换。

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

将 uni-types 转换为 io-ts 兼容类型。

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

将外部库类型转换为 uni-types 格式。

```typescript
import type { FromExternal } from 'uni-types'

type Converted = FromExternal<ExternalType, 'zod'>
// 兼容 uni-types 的类型
```

## CompatibleWith

检查类型是否与特定库兼容。

```typescript
import type { CompatibleWith } from 'uni-types'

type IsZodCompat = CompatibleWith<{ a: string }, 'zod'>
// true

type IsTypeFestCompat = CompatibleWith<{ a: string }, 'type-fest'>
// true
```

## BridgeConfig

互操作桥接行为的配置。

```typescript
import type { BridgeConfig } from 'uni-types'

type Config = BridgeConfig<{
	strict: true
	preserveOptionality: true
	customMappings: { Date: 'string' }
}>
```

## InteropError

互操作不兼容的类型级错误。

```typescript
import type { InteropError } from 'uni-types'

type Error = InteropError<'unsupported_type', 'bigint', 'zod'>
// { error: 'unsupported_type'; type: 'bigint'; target: 'zod'; message: 'bigint is not supported in Zod schemas' }
```
