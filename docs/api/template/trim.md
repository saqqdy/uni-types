# Trim

**Since 1.1.0**

Trim whitespace from both ends of a string.

## Signature

```typescript
type Trim<S extends string> = TrimLeft<TrimRight<S>>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `S` | The string to trim |

## Description

Removes whitespace (spaces, tabs, newlines) from both the left and right sides of a string type.

## Examples

### Basic Usage

```typescript
import type { Trim } from 'uni-types'

type A = Trim<'  hello  '>     // 'hello'
type B = Trim<'\n\ttext\n'>    // 'text'
type C = Trim<'   spaced   '>  // 'spaced'
```

### With Template Literals

```typescript
type Input = `  ${string}  `
type Cleaned = Trim<Input>  // `${string}`
```

## Related

- [`TrimLeft`](./trim-left) - Trim left side only
- [`TrimRight`](./trim-right) - Trim right side only