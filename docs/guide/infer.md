# Type Inference

Extract types from complex structures.

## Awaited

Recursively unwrap Promise types.

```typescript
import type { Awaited } from 'uni-types'

type Result1 = Awaited<Promise<string>> // string
type Result2 = Awaited<Promise<Promise<number>>> // number
type Result3 = Awaited<string> // string (non-Promise unchanged)
```

## ArrayElement

Get the element type of an array.

```typescript
import type { ArrayElement } from 'uni-types'

type Element1 = ArrayElement<string[]> // string
type Element2 = ArrayElement<number[]> // number
type Element3 = ArrayElement<(string | number)[]> // string | number
type Element4 = ArrayElement<readonly string[]> // string
```

## ValueOf

Get the union of object value types.

```typescript
import type { ValueOf } from 'uni-types'

type Values = ValueOf<{ a: string; b: number; c: boolean }>
// string | number | boolean
```

## FunctionKeys

Get keys of function properties.

```typescript
import type { FunctionKeys } from 'uni-types'

interface User {
  name: string
  age: number
  onClick: () => void
  onChange: (value: string) => void
}

type FnKeys = FunctionKeys<User> // 'onClick' | 'onChange'
```

## NonFunctionKeys

Get keys of non-function properties.

```typescript
import type { NonFunctionKeys } from 'uni-types'

interface User {
  name: string
  age: number
  onClick: () => void
}

type DataKeys = NonFunctionKeys<User> // 'name' | 'age'
```

## FirstParameter

Get the first parameter type of a function.

```typescript
import type { FirstParameter } from 'uni-types'

type Param = FirstParameter<(first: string, second: number) => void>
// string

type NoParam = FirstParameter<() => void> // never
```

## FunctionOnly

Extract only function properties from an object.

```typescript
import type { FunctionOnly } from 'uni-types'

interface User {
  name: string
  age: number
  onClick: () => void
}

type Fns = FunctionOnly<User> // { onClick: () => void }
```

## DataOnly

Extract only non-function properties from an object.

```typescript
import type { DataOnly } from 'uni-types'

interface User {
  name: string
  age: number
  onClick: () => void
}

type Data = DataOnly<User> // { name: string; age: number }
```