# ParseCSV

**Since 1.4.0**

Parse CSV string to tuple of records.

## Signature

```typescript
type ParseCSV<S extends string> = S extends `${infer Header}\n${infer Rows}` ? ...
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `S` | CSV string with header row |

## Description

Converts CSV string to an array of record types.

## Examples

### Basic Usage

```typescript
import type { ParseCSV } from 'uni-types'

type CSV = ParseCSV<'name,age\nJohn,30\nJane,25'>
// [{ name: 'John'; age: '30' }, { name: 'Jane'; age: '25' }]
```

## Related

- [`StringifyCSV`](./stringifycsv) - Stringify records to CSV