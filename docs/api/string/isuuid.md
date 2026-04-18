# IsUUID

**Since v1.3.0**

Check if a string type matches a valid UUID format. Returns `true` if the string matches the UUID pattern (8-4-4-4-12 hexadecimal format), otherwise returns `false`.

## Signature

```typescript
export type IsUUID<T extends string> = T extends `${string}-${string}-${string}-${string}-${string}`
	? T extends `${`${string}` & { length: 8 }}-${`${string}` & { length: 4 }}-${`${string}` & { length: 4 }}-${`${string}` & { length: 4 }}-${`${string}` & { length: 12 }}`
		? true
		: false
	: false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The string type to validate as UUID |

## Examples

### Basic Usage

```typescript
import type { IsUUID } from 'uni-types'

type Valid = IsUUID<'550e8400-e29b-41d4-a716-446655440000'> // true
type Invalid = IsUUID<'not-a-uuid'> // false
```

### Format Validation

```typescript
import type { IsUUID } from 'uni-types'

type CorrectFormat = IsUUID<'12345678-1234-1234-1234-123456789012'> // true
type WrongSegments = IsUUID<'12345678-1234-1234-123456789012'> // false (missing segment)
```