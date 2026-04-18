# RequireFunction

**Since 1.3.0**

Ensure type is a function.

## Signature

```typescript
type RequireFunction<T> = T extends (...args: any[]) => any ? T : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to check |

## Examples

### Basic Usage

```typescript
import type { RequireFunction } from 'uni-types'

type Result = RequireFunction<() => void> // () => void
type Failed = RequireFunction<string> // never
```

### With Typed Functions

```typescript
type Handler = (event: Event) => void
type ValidHandler = RequireFunction<Handler> // Handler
```

### With Union Types

```typescript
type MaybeFunc = string | ((x: number) => number)
type OnlyFunc = RequireFunction<MaybeFunc> // (x: number) => number
```

## Related

- [`RequireArray`](./requirearray) - Ensure type is an array
- [`RequireNotNullish`](./requirenotnullish) - Ensure type is not null or undefined
