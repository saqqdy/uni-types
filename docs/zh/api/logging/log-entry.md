# LogEntry

**自 1.5.0 起**

Represents a structured log entry with level, message, timestamp, and optional error details.

## 签名

```typescript
type LogEntry<T = Record<string, unknown>> = {
  level: LogLevel
  message: string
  timestamp: Date
  context?: T
  error?: {
    message: string
    stack?: string
    name: string
  }
  traceId?: string
  spanId?: string
  service?: string
  version?: string
  hostname?: string
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | The context type for the log entry |

## 示例

### 基本用法

```typescript
import type { LogEntry } from 'uni-types'

const entry: LogEntry<{ userId: string }> = {
  level: 'info',
  message: 'User logged in',
  timestamp: new Date(),
  context: { userId: 'u-123' },
  service: 'auth-service',
  version: '1.0.0',
  hostname: 'server-01'
}

console.log(JSON.stringify(entry))
```

### Error Log Entry

```typescript
import type { LogEntry } from 'uni-types'

const errorEntry: LogEntry = {
  level: 'error',
  message: 'Failed to process payment',
  timestamp: new Date(),
  error: {
    message: 'Payment gateway timeout',
    stack: 'Error: Payment gateway timeout\n    at PaymentService.process',
    name: 'PaymentError'
  },
  traceId: 'trace-abc123',
  spanId: 'span-xyz789',
  service: 'payment-service',
  version: '2.1.0'
}
```

## 相关

- [`Logger`](./logger)
- [`LogLevel`](./log-level)
