# UnionToIntersection

**Since 1.0.0**

Convert union to intersection.

## Signature

```typescript
type UnionToIntersection<U> = (
  U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `U` | The union type |

## Description

Converts a union type to an intersection type. This is useful when you need to merge multiple object types.

## Examples

### Basic Usage

```typescript
import type { UnionToIntersection } from 'uni-types'

type Union = { a: string } | { b: number }
type Intersection = UnionToIntersection<Union>
// { a: string } & { b: number }
```

### Merge Configurations

```typescript
type BaseConfig = {
  host: string
  port: number
}

type SSLConfig = {
  ssl: boolean
  certPath: string
}

type Config = UnionToIntersection<BaseConfig | SSLConfig>
// BaseConfig & SSLConfig
// { host: string; port: number; ssl: boolean; certPath: string }
```

## Related

- [`UnionToTuple`](./union-to-tuple) - Convert union to tuple
