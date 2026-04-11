# Quick Start

Get started with uni-types in minutes.

## Core Operations

### PickRequired / PickPartial

Make specific properties required or optional:

```typescript
import type { PickRequired, PickPartial } from 'uni-types'

interface User {
  name?: string
  age?: number
  email: string
}

// Make 'name' required
type UserWithName = PickRequired<User, 'name'>
// { name: string; age?: number; email: string }

// Make 'email' optional
type UserWithOptionalEmail = PickPartial<User, 'email'>
// { name?: string; age?: number; email?: string }
```

### OmitRequired / OmitPartial

Make properties required or optional except specified ones:

```typescript
import type { OmitRequired, OmitPartial } from 'uni-types'

interface User {
  name?: string
  age?: number
  email?: string
}

// Make all required except 'name'
type RequiredExceptName = OmitRequired<User, 'name'>
// { name?: string; age: number; email: string }

// Make all optional except 'email'
type OptionalExceptEmail = OmitPartial<User, 'email'>
// { name?: string; age?: number; email: string }
```

## Deep Operations

Transform nested objects recursively:

```typescript
import type { DeepPartial, DeepRequired, DeepReadonly, DeepMutable } from 'uni-types'

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

// All properties become optional recursively
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

// All properties become required recursively
type RequiredConfig = DeepRequired<PartialConfig>

// All properties become readonly recursively
type ReadonlyConfig = DeepReadonly<Config>

// Remove readonly from all properties
type MutableConfig = DeepMutable<ReadonlyConfig>
```

## Type Guards

Check types at compile time:

```typescript
import type { IsArray, IsTuple, IsEqual, IsAny, IsNever } from 'uni-types'

// Array check
type Check1 = IsArray<string[]> // true
type Check2 = IsArray<string>   // false

// Tuple check
type Check3 = IsTuple<[string, number]> // true
type Check4 = IsTuple<string[]>         // false

// Equality check
type Check5 = IsEqual<string, string>   // true
type Check6 = IsEqual<string, number>   // false

// Special type checks
type Check7 = IsAny<any>     // true
type Check8 = IsAny<string>  // false

type Check9 = IsNever<never>    // true
type Check10 = IsNever<string>  // false
```

## Type Inference

Extract types from complex structures:

```typescript
import type {
  Awaited,
  ArrayElement,
  ValueOf,
  FunctionKeys,
  NonFunctionKeys
} from 'uni-types'

// Unwrap Promise
type Result = Awaited<Promise<string>> // string

// Get array element type
type Element = ArrayElement<string[]> // string

// Get object value types
type Values = ValueOf<{ a: string; b: number }> // string | number

// Get function keys
interface Obj {
  name: string
  onClick: () => void
  onChange: (v: string) => void
}
type FnKeys = FunctionKeys<Obj> // 'onClick' | 'onChange'
type DataKeys = NonFunctionKeys<Obj> // 'name'
```

## Next Steps

- [Core Operations](./core) - Learn about PickRequired, PickPartial, etc.
- [Tuple Operations](./tuple) - Manipulate tuple types
- [Deep Operations](./deep) - Transform nested objects
- [Type Guards](./guards) - Check types at compile time
- [Type Inference](./infer) - Extract types from structures
- [Utility Types](./utils) - Various utility types