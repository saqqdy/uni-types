# Saga

**自 1.5.0 起**

Saga 类型，用于管理分布式事务中的长时运行流程，支持补偿操作。

## 签名

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

## 参数

| 参数 | 描述 |
|------|------|
| `T` | Saga 上下文数据类型 |

## 示例

### 基本用法

```typescript
import type { Saga, SagaStep, SagaStatus } from 'uni-types'

// 定义订单处理 Saga
type OrderSagaContext = {
  orderId: string
  customerId: string
  paymentId?: string
  shipmentId?: string
  totalAmount: number
}

const orderSaga: Saga<OrderSagaContext> = {
  sagaId: 'saga-001',
  steps: [
    { stepId: 'reserve-inventory', name: '预留库存', execute: async (ctx) => ctx, status: 'completed' },
    { stepId: 'process-payment', name: '处理支付', execute: async (ctx) => ctx, status: 'running' },
    { stepId: 'create-shipment', name: '创建发货', execute: async (ctx) => ctx, status: 'pending' }
  ],
  currentStep: 1,
  status: 'running',
  context: { orderId: 'o-1', customerId: 'c-1', totalAmount: 299.99 },
  compensations: []
}
```

### 带补偿的 Saga

```typescript
import type { Saga, SagaStep, SagaCompensation } from 'uni-types'

// 定义旅行预订 Saga
type TravelSagaContext = {
  bookingId: string
  flightReservation?: string
  hotelReservation?: string
  carRental?: string
}

const travelSaga: Saga<TravelSagaContext> = {
  sagaId: 'saga-travel-001',
  steps: [
    {
      stepId: 'book-flight',
      name: '预订航班',
      execute: async (ctx) => ({ ...ctx, flightReservation: 'FL-001' }),
      compensate: async (ctx) => { /* 取消航班 */ },
      status: 'completed'
    },
    {
      stepId: 'book-hotel',
      name: '预订酒店',
      execute: async (ctx) => ({ ...ctx, hotelReservation: 'HT-001' }),
      compensate: async (ctx) => { /* 取消酒店 */ },
      status: 'failed',
      error: new Error('酒店已满')
    }
  ],
  currentStep: 1,
  status: 'compensating',
  context: { bookingId: 'b-1', flightReservation: 'FL-001' },
  compensations: [
    { stepId: 'book-flight', compensate: async (ctx) => {}, executed: true }
  ]
}
```

## 相关

- [`Command`](./command)
- [`EventBus`](./eventbus)
- [`EventStore`](./eventstore)