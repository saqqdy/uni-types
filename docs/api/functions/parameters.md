# Parameters

**Since 1.1.0**

Get function parameters as a tuple type.

## Signature

```typescript
type Parameters<T> = T extends (...args: infer P) => any ? P : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The function type |

## Examples

### Basic Usage

```typescript
import type { Parameters } from 'uni-types'

type Fn = (a: string, b: number) => boolean
type Params = Parameters<Fn>  // [string, number]
```

### With Functions

```typescript
function greet(name: string, age: number) {
  return `Hello ${name}, you are ${age}`
}

type GreetParams = Parameters<typeof greet>
// [string, number]
```

### Rest Parameters

```typescript
type Variadic = (...args: string[]) => void
type Params = Parameters<Variadic>  // string[]
```

## Related

- [`ReturnType`](./return-type) - Get function return type
- [`NthParameter`](./nth-parameter) - Get Nth parameter