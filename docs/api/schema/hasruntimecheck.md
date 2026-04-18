# HasRuntimeCheck

**Since 1.2.0**

Check if a type has a runtime check function.

## Signature

```typescript
type HasRuntimeCheck<T> = T extends string | number | boolean | symbol | bigint | null | undefined
  ? true
  : T extends Array<infer _>
    ? true
    : T extends Map<infer _, infer _>
      ? true
      : T extends Set<infer _>
        ? true
        : T extends Date
          ? true
          : false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to check |

## Description

Determines if a type can be checked at runtime using JavaScript's `typeof` or `instanceof` operators. Primitive types, arrays, maps, sets, and dates have built-in runtime checks.

## Examples

### Basic Usage

```typescript
import type { HasRuntimeCheck } from 'uni-types'

type CheckString = HasRuntimeCheck<string>  // true
type CheckObject = HasRuntimeCheck<{ a: string }>  // false
```

### With Built-in Types

```typescript
import type { HasRuntimeCheck } from 'uni-types'

type CheckArray = HasRuntimeCheck<number[]>  // true
type CheckDate = HasRuntimeCheck<Date>  // true
type CheckMap = HasRuntimeCheck<Map<string, number>>  // true
```

## Related

- [`RuntimeGuard`](./runtime-guard) - Define type guard function
- [`GuardedType`](./guarded-type) - Extract type from guard
