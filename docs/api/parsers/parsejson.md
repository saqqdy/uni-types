# ParseJSON

**Since 1.4.0**

Parse JSON string to type.

## Signature

```typescript
type ParseJSON<S extends string> = S extends `"${infer Content}"` ? Content : ...
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `S` | JSON string to parse |

## Description

Type-level JSON parser with limited support for primitive types.

## Examples

### Basic Usage

```typescript
import type { ParseJSON } from 'uni-types'

type String = ParseJSON<'"hello"'>
// 'hello'

type Number = ParseJSON<'123'>
// 123

type Boolean = ParseJSON<'true'>
// true

type Null = ParseJSON<'null'>
// null
```

## Related

- [`StringifyJSON`](./stringifyjson) - Stringify type to JSON
- [`IsValidJSON`](./isvalidjson) - Check if string is valid JSON