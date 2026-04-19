# Environment

**Since 1.5.0**

Represents the application environment context.

## Signature

```typescript
type Environment = 'development' | 'staging' | 'production' | 'test' | 'local'
```

## Parameters

This type has no generic parameters.

## Examples

### Basic Usage

```typescript
import type { Environment } from 'uni-types'

const env: Environment = 'production'

function getLogLevel(env: Environment): string {
  switch (env) {
    case 'development':
    case 'local':
      return 'debug'
    case 'test':
      return 'warn'
    case 'staging':
      return 'info'
    case 'production':
      return 'error'
    default:
      return 'info'
  }
}
```

### Environment-Based Config

```typescript
import type { Environment, EnvConfig } from 'uni-types'

const configs: Record<Environment, { port: number; debug: boolean }> = {
  development: { port: 3000, debug: true },
  local: { port: 3000, debug: true },
  test: { port: 3001, debug: false },
  staging: { port: 8080, debug: false },
  production: { port: 80, debug: false }
}

function getConfig(env: Environment) {
  return configs[env]
}
```

## Related

- [`EnvVar`](./envvar)
- [`EnvConfig`](./env-config)
