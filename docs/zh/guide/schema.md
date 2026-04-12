# Schema 验证

用于处理模式验证库和运行时类型检查的类型。

## 运行时类型守卫

创建类型守卫函数进行运行时类型检查。

```typescript
import type { RuntimeGuard, GuardedType } from 'uni-types'

// 定义类型守卫
const isString: RuntimeGuard<string> = (value): value is string =>
  typeof value === 'string'

// 提取守卫类型
type Str = GuardedType<typeof isString>  // string
```

### HasRuntimeCheck

检查类型是否有直接可用的运行时检查。

```typescript
import type { HasRuntimeCheck } from 'uni-types'

type A = HasRuntimeCheck<string>   // true
type B = HasRuntimeCheck<number>   // true
type C = HasRuntimeCheck<object>   // false
```

### AssertionFunction

定义缩小类型的断言函数。

```typescript
import type { AssertionFunction } from 'uni-types'

const assertString: AssertionFunction<string> = (value: unknown): asserts value is string => {
  if (typeof value !== 'string') throw new TypeError('Expected string')
}
```

## Zod 集成

用于处理 Zod 模式的类型。

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

从 ZodObject 模式中提取必需和可选的键。

```typescript
import type { ZodRequiredKeys, ZodOptionalKeys } from 'uni-types'

type Required = ZodRequiredKeys<typeof UserSchema>  // 'name'
type Optional = ZodOptionalKeys<typeof UserSchema>  // 'age'
```

## Yup 集成

用于处理 Yup 模式的类型。

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
