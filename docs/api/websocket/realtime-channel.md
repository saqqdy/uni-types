# RealTimeChannel

**Since 1.5.0**

Represents a real-time communication channel with subscribe, publish, and close operations.

## Signature

```typescript
type RealTimeChannel<T = unknown> = {
  name: string
  subscribe: (handler: (message: T) => void) => () => void
  publish: (message: T) => void
  unsubscribe: (handler: (message: T) => void) => void
  close: () => void
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The message type for the channel |

## Examples

### Basic Usage

```typescript
import type { RealTimeChannel } from 'uni-types'

type PriceUpdate = { symbol: string; price: number }

const channel: RealTimeChannel<PriceUpdate> = {
  name: 'stock-prices',
  subscribe: (handler) => { return () => {} },
  publish: (message) => { /* broadcast */ },
  unsubscribe: (handler) => { /* remove */ },
  close: () => { /* cleanup */ }
}

const unsubscribe = channel.subscribe((update) => {
  console.log(`${update.symbol}: $${update.price}`)
})

channel.publish({ symbol: 'AAPL', price: 175.50 })
```

### Live Notifications

```typescript
import type { RealTimeChannel } from 'uni-types'

type LiveEvent = { type: 'goal' | 'card'; team: string; minute: number }

const liveChannel: RealTimeChannel<LiveEvent> = {
  name: 'match-live',
  subscribe: (handler) => { return () => {} },
  publish: (message) => { /* broadcast */ },
  unsubscribe: (handler) => { /* remove */ },
  close: () => { /* cleanup */ }
}

liveChannel.subscribe((event) => {
  console.log(`${event.minute}' - ${event.type} for ${event.team}`)
})
```

## Related

- [`PubSub`](./pubsub)
- [`RealTimeSubscription`](./realtime-subscription)
