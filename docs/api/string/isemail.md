# IsEmail

**Since v1.3.0**

Check if a string type matches a valid email format. Returns `true` if the string matches the email pattern, otherwise returns `false`.

## Signature

```typescript
export type IsEmail<T extends string> = T extends `${string}@${string}.${string}`
	? true
	: false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The string type to validate as email |

## Examples

### Basic Usage

```typescript
import type { IsEmail } from 'uni-types'

type Valid = IsEmail<'user@example.com'> // true
type Invalid = IsEmail<'not-an-email'> // false
```

### Type Constraints

```typescript
import type { IsEmail } from 'uni-types'

type CheckEmail = IsEmail<'test.name@domain.co.uk'> // true
type MissingAt = IsEmail<'userexample.com'> // false
type MissingDomain = IsEmail<'user@'> // false
```