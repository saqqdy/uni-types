# CircuitBreaker

**Since 1.5.0**

Circuit breaker pattern for protecting against cascading failures in distributed systems.

## Signature

```typescript
type CircuitBreaker<T = unknown> = {
  execute: (fn: () => Promise<T>) => Promise<T>
  getState: () => CircuitBreakerState
  getStats: () => CircuitBreakerStats
  reset: () => void
  open: () => void
  close: () => void
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The return type of the wrapped function |

## Examples

### Basic Usage

```typescript
import type { CircuitBreaker } from 'uni-types'

const breaker: CircuitBreaker<string> = {
  execute: async (fn) => { return fn() },
  getState: () => 'closed',
  getStats: () => ({
    state: 'closed',
    failures: 0,
    successes: 42,
    rejects: 0,
    timeouts: 0
  }),
  reset: () => {},
  open: () => {},
  close: () => {}
}

const result = await breaker.execute(() => fetch('/api/data').then(r => r.text()))
console.log(breaker.getState()) // 'closed'
```

### Monitoring State Changes

```typescript
import type { CircuitBreaker, CircuitBreakerConfig, CircuitBreakerState } from 'uni-types'

const config: CircuitBreakerConfig = {
  failureThreshold: 5,
  successThreshold: 3,
  timeout: 3000,
  resetTimeout: 30000,
  onStateChange: (oldState: CircuitBreakerState, newState: CircuitBreakerState) => {
    console.log(`Circuit breaker: ${oldState} -> ${newState}`)
  }
}

const apiBreaker: CircuitBreaker = {
  execute: async (fn) => { return fn() },
  getState: () => 'half-open',
  getStats: () => ({
    state: 'half-open',
    failures: 5,
    successes: 1,
    rejects: 3,
    timeouts: 2,
    lastFailure: new Date(),
    lastSuccess: new Date()
  }),
  reset: () => {},
  open: () => {},
  close: () => {}
}
```

## Related

- [`CircuitBreakerConfig`](./circuit-breaker-config)
- [`RetryPolicy`](./retry-policy)
