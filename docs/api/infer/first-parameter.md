# FirstParameter

Get the first parameter type of a function.

## Signature

```typescript
type FirstParameter<T> = T extends (first: infer F, ...rest: any[]) => any ? F : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The function type |

## Description

Extracts the type of the first parameter from a function type.

## Examples

### Basic Usage

```typescript
import type { FirstParameter } from 'uni-types'

type Param = FirstParameter<(first: string, second: number) => void>
// string
```

### Single Parameter

```typescript
type SingleParam = FirstParameter<(value: number) => void>
// number
```

### No Parameters

```typescript
type NoParam = FirstParameter<() => void> // never
```

### With Object Parameter

```typescript
type ObjParam = FirstParameter<(options: { a: string; b: number }) => void>
// { a: string; b: number }
```

## Related

- [`FunctionKeys`](./function-keys) - Get function property keys
- [`FunctionOnly`](./function-only) - Extract function properties