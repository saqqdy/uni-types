# Logger

**Since 1.5.0**

Typed logger interface with multiple log levels and child logger creation.

## Signature

```typescript
type Logger<T = Record<string, unknown>> = {
  trace: (message: string, context?: T) => void
  debug: (message: string, context?: T) => void
  info: (message: string, context?: T) => void
  warn: (message: string, context?: T) => void
  error: (message: string, error?: Error, context?: T) => void
  fatal: (message: string, error?: Error, context?: T) => void
  child: (context: Partial<T>) => Logger<T>
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The context type for log entries |

## Examples

### Basic Usage

```typescript
import type { Logger } from 'uni-types'

type LogContext = { requestId: string; userId?: string }

const logger: Logger<LogContext> = {
  trace: (msg, ctx) => console.trace(msg, ctx),
  debug: (msg, ctx) => console.debug(msg, ctx),
  info: (msg, ctx) => console.info(msg, ctx),
  warn: (msg, ctx) => console.warn(msg, ctx),
  error: (msg, err, ctx) => console.error(msg, err, ctx),
  fatal: (msg, err, ctx) => console.error(msg, err, ctx),
  child: (ctx) => logger
}

logger.info('Server started', { requestId: 'req-001' })
logger.error('Database error', new Error('Connection failed'), { requestId: 'req-002' })
```

### With Child Logger

```typescript
import type { Logger } from 'uni-types'

type AppContext = { service: string; env: string; traceId?: string }

const rootLogger: Logger<AppContext> = {
  trace: (msg, ctx) => console.trace(msg, ctx),
  debug: (msg, ctx) => console.debug(msg, ctx),
  info: (msg, ctx) => console.info(msg, ctx),
  warn: (msg, ctx) => console.warn(msg, ctx),
  error: (msg, err, ctx) => console.error(msg, err, ctx),
  fatal: (msg, err, ctx) => console.error(msg, err, ctx),
  child: (ctx) => ({ ...rootLogger }) // returns child logger with merged context
}

// Create a child logger with service context
const serviceLogger = rootLogger.child({ service: 'user-service', env: 'production' })

serviceLogger.info('User created', { traceId: 't-001' })
```

## Related

- [`LogEntry`](./log-entry)
- [`LogLevel`](./log-level)
