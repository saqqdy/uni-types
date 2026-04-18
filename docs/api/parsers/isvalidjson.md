# IsValidJSON

**Since 1.4.0**

Check if string is valid JSON.

## Signature

```typescript
type IsValidJSON<S extends string> = S extends `{}` ? true : S extends `[]` ? true : ...
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `S` | String to validate |

## Description

Validates if a string represents valid JSON format.

## Examples

### Basic Usage

```typescript
import type { IsValidJSON } from 'uni-types'

type Valid1 = IsValidJSON<'"hello"'>
// true

type Valid2 = IsValidJSON<'123'>
// true

type Valid3 = IsValidJSON<'{}'>
// true

type Valid4 = IsValidJSON<'[]'>
// true

type Invalid = IsValidJSON<'invalid'>
// false
```

## Related

- [`ParseJSON`](./parsejson) - Parse JSON string to type