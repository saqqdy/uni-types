# Schema Validation

Types for working with schema validation libraries and runtime type checking.

## Runtime Type Guards

Create type guard functions for runtime type checking.

```typescript
import type { RuntimeGuard, GuardedType } from 'uni-types'

// Define a type guard
const isString: RuntimeGuard<string> = (value): value is string =>
  typeof value === 'string'

// Extract the guarded type
type Str = GuardedType<typeof isString>  // string
```

### HasRuntimeCheck

Check if a type has a direct runtime check available.

```typescript
import type { HasRuntimeCheck } from 'uni-types'

type A = HasRuntimeCheck<string>   // true
type B = HasRuntimeCheck<number>   // true
type C = HasRuntimeCheck<object>   // false
```

### AssertionFunction

Define assertion functions that narrow types.

```typescript
import type { AssertionFunction } from 'uni-types'

const assertString: AssertionFunction<string> = (value: unknown): asserts value is string => {
  if (typeof value !== 'string') throw new TypeError('Expected string')
}
```

## Zod Integration

Types for working with Zod schemas.

```typescript
import type { ZodOutput, ZodInput, IsZodSchema, ZodShape } from 'uni-types'
import { z } from 'zod'

const UserSchema = z.object({
  name: z.string(),
  age: z.number().optional()
})

type User = ZodOutput<typeof UserSchema>     // { name: string; age?: number }
type Input = ZodInput<typeof UserSchema>     // { name: string; age?: number }
type Shape = ZodShape<typeof UserSchema>     // { name: ZodString; age: ZodOptional<ZodNumber> }
```

### ZodRequiredKeys & ZodOptionalKeys

Extract required and optional keys from ZodObject schemas.

```typescript
import type { ZodRequiredKeys, ZodOptionalKeys } from 'uni-types'

type Required = ZodRequiredKeys<typeof UserSchema>  // 'name'
type Optional = ZodOptionalKeys<typeof UserSchema>  // 'age'
```

## Yup Integration

Types for working with Yup schemas.

```typescript
import type { YupOutput, YupInput, IsYupSchema } from 'uni-types'
import * as yup from 'yup'

const UserSchema = yup.object({
  name: yup.string().required(),
  age: yup.number()
})

type User = YupOutput<typeof UserSchema>     // { name: string; age?: number }
type Input = YupInput<typeof UserSchema>     // { name: string; age?: number }
```

### YupRequiredKeys & YupOptionalKeys

Extract required and optional keys from Yup schemas.

```typescript
import type { YupRequiredKeys, YupOptionalKeys } from 'uni-types'

type Required = YupRequiredKeys<typeof UserSchema>  // 'name'
type Optional = YupOptionalKeys<typeof UserSchema>  // 'age'
```
