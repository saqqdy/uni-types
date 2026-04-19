# Command

**Since 1.5.0**

Represents a command in CQRS pattern with type, payload, and metadata.

## Signature

```typescript
type Command<T = string, P = unknown> = {
  type: T
  payload: P
  timestamp: EventTimestamp
  commandId: string
  aggregateId?: string
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The command type identifier (string) |
| `P` | The payload type for the command |

## Examples

### Basic Usage

```typescript
import type { Command } from 'uni-types'

type CreateOrderCommand = Command<
  'createOrder',
  { productId: string; quantity: number; userId: string }
>

const cmd: CreateOrderCommand = {
  type: 'createOrder',
  payload: { productId: 'p1', quantity: 2, userId: 'u1' },
  timestamp: Date.now(),
  commandId: 'cmd-001',
  aggregateId: 'order-001'
}
```

### User Registration

```typescript
import type { Command } from 'uni-types'

type RegisterUserCommand = Command<
  'registerUser',
  { email: string; password: string; name: string }
>

const registerCmd: RegisterUserCommand = {
  type: 'registerUser',
  payload: { email: 'test@example.com', password: 'secret', name: 'John' },
  timestamp: Date.now(),
  commandId: 'cmd-register-001'
}
```

## Related

- [`Query`](./query)
- [`CommandHandler`](./command-handler)
