# Saga

**Since 1.5.0**

Represents a saga pattern for managing distributed transactions with compensating actions.

## Signature

```typescript
type Saga<T = unknown> = {
  sagaId: string
  steps: SagaStep[]
  currentStep: number
  status: SagaStatus
  context: T
  compensations: SagaCompensation[]
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The context type shared across saga steps |

## Examples

### Basic Usage

```typescript
import type { Saga, SagaStep } from 'uni-types'

type OrderContext = {
  orderId: string
  paymentId?: string
  inventoryReserved: boolean
}

const steps: SagaStep<OrderContext>[] = [
  { stepId: 'reserve-inventory', name: 'Reserve Inventory', execute: async (ctx) => ctx, status: 'pending' },
  { stepId: 'process-payment', name: 'Process Payment', execute: async (ctx) => ctx, status: 'pending' },
  { stepId: 'confirm-order', name: 'Confirm Order', execute: async (ctx) => ctx, status: 'pending' }
]

const orderSaga: Saga<OrderContext> = {
  sagaId: 'saga-001',
  steps,
  currentStep: 0,
  status: 'pending',
  context: { orderId: 'o-1', inventoryReserved: false },
  compensations: []
}
```

### Trip Booking Saga

```typescript
import type { Saga } from 'uni-types'

type TripContext = {
  flightId: string
  hotelId: string
  carId: string
  flightBooked: boolean
  hotelBooked: boolean
  carBooked: boolean
}

const tripSaga: Saga<TripContext> = {
  sagaId: 'trip-saga-001',
  steps: [],
  currentStep: 0,
  status: 'running',
  context: {
    flightId: 'FL-001',
    hotelId: 'HT-001',
    carId: 'CR-001',
    flightBooked: false,
    hotelBooked: false,
    carBooked: false
  },
  compensations: []
}
```

## Related

- [`SagaStep`](./saga-step)
- [`Command`](./command)
