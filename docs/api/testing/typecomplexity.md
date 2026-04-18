# TypeComplexity

**Since 1.4.0**

Type complexity analysis.

## Signature

```typescript
interface TypeComplexity<T, Depth extends 0[] = []> {
  depth: number
  branches: number
  nodes: number
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | Type to analyze |
| `Depth` | Internal depth counter |

## Description

Analyzes the complexity of a type for performance optimization.

## Examples

### Basic Usage

```typescript
import type { TypeComplexity } from 'uni-types'

type Simple = TypeComplexity<string>
type Complex = TypeComplexity<{ a: { b: { c: string } } }>
```

## Related

- [`TypeCoverage`](./typecoverage) - Type coverage analysis
- [`TypeInfo`](./typeinfo) - Type information