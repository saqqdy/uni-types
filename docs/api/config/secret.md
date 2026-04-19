# Secret

**Since 1.5.0**

Represents a sensitive configuration value with expiration and rotation tracking.

## Signature

```typescript
type Secret<T = string> = {
  __secret: true
  value: T
  expiresAt?: Date
  rotatedAt?: Date
  version?: number
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The secret value type (defaults to string) |

## Examples

### Basic Usage

```typescript
import type { Secret } from 'uni-types'

const apiKey: Secret = {
  __secret: true,
  value: 'sk-abc123xyz789',
  version: 1
}

// Access the secret value
console.log(apiKey.value)
```

### With Expiration

```typescript
import type { Secret } from 'uni-types'

const dbPassword: Secret = {
  __secret: true,
  value: 'my-super-secret-password',
  expiresAt: new Date('2024-12-31'),
  rotatedAt: new Date('2024-01-15'),
  version: 3
}

// Check expiration
if (dbPassword.expiresAt && dbPassword.expiresAt < new Date()) {
  console.log('Secret has expired, needs rotation')
}

// Check if recently rotated
if (dbPassword.rotatedAt) {
  const daysSinceRotation = Math.floor((Date.now() - dbPassword.rotatedAt.getTime()) / (1000 * 60 * 60 * 24))
  console.log(`Last rotated ${daysSinceRotation} days ago`)
}
```

## Related

- [`SecretProvider`](./secret-provider)
- [`Config`](./config)
