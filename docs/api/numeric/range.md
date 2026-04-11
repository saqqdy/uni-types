# Range

Create a union of numbers in a range (inclusive).

## Signature

```typescript
type Range<From extends number, To extends number, Acc extends number = From> = 
  From extends To
    ? Acc
    : From extends To
      ? Acc
      : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `From` | Start of range (inclusive) |
| `To` | End of range (inclusive) |

## Description

Generates a union type of all numbers in the specified range.

::: warning
Limited to small ranges due to TypeScript recursion limits. Large ranges may cause compilation errors.
:::

## Examples

### Basic Usage

```typescript
import type { Range } from 'uni-types'

type OneToFive = Range<1, 5>     // 1 | 2 | 3 | 4 | 5
type ZeroToThree = Range<0, 3>   // 0 | 1 | 2 | 3
```

### Use in Validation

```typescript
type Percentage = Range<0, 100>

function setOpacity(value: Percentage) {
  // value is 0-100
}
```

### Array Indices

```typescript
type SmallIndex = Range<0, 9>  // 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
```

## Related

- [`Min`](./min) - Minimum of two numbers
- [`Max`](./max) - Maximum of two numbers