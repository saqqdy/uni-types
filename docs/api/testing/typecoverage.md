# TypeCoverage

**Since 1.4.0**

Type coverage analysis.

## Signature

```typescript
interface TypeCoverage<T> {
  total: number
  covered: number
  uncovered: string[]
  percentage: number
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | Type to analyze |

## Description

Analyzes type coverage for a given type.

## Examples

### Basic Usage

```typescript
import type { TypeCoverage } from 'uni-types'

type Coverage = TypeCoverage<{ a: string; b?: number }>
```

## Related

- [`TypeComplexity`](./typecomplexity) - Type complexity analysis
- [`UncoveredTypes`](./uncoveredtypes) - Get uncovered types