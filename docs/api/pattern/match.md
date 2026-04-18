# Match

**Since v1.3.0**

Type-level pattern matching utility. Matches a type against a patterns object and returns the corresponding value, with support for a default case.

## Signature

```typescript
export type Match<T, Patterns extends Record<string, any>> = T extends keyof Patterns
	? Patterns[T]
	: Patterns extends { _: infer Default }
		? Default
		: never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to match against patterns |
| `Patterns` | An object mapping types to their results |

## Examples

### Basic Usage

```typescript
import type { Match } from 'uni-types'

type Status = 'success' | 'error' | 'pending'
type StatusMessage = Match<Status, { success: 'OK'; error: 'Failed'; pending: 'Waiting' }>
// 'OK' | 'Failed' | 'Waiting'
```

### With Default Case

```typescript
import type { Match } from 'uni-types'

type Color = 'red' | 'green' | 'blue'
type HexColor = Match<Color, { red: '#ff0000'; green: '#00ff00'; _: '#000000' }>
// '#ff0000' | '#00ff00' | '#000000' (blue matches default)
```
