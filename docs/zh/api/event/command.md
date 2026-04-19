# Command

**自 1.5.0 起**

命令类型，用于 CQRS 模式中的命令定义，表示对系统的写操作请求。

## 签名

```typescript
type Command<T = string, P = unknown> = {
  type: T
  payload: P
  timestamp: EventTimestamp
  commandId: string
  aggregateId?: string
}
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 命令类型标识，默认为 string |
| `P` | 命令载荷类型，默认为 unknown |

## 示例

### 基本用法

```typescript
import type { Command } from 'uni-types'

// 定义创建订单命令
type CreateOrderCommand = Command<
  'CreateOrder',
  {
    customerId: string
    items: Array<{ productId: string; quantity: number }>
    shippingAddress: string
  }
>

const command: CreateOrderCommand = {
  type: 'CreateOrder',
  payload: {
    customerId: 'cust-1',
    items: [{ productId: 'p-1', quantity: 2 }],
    shippingAddress: '北京市朝阳区'
  },
  timestamp: Date.now(),
  commandId: 'cmd-001',
  aggregateId: 'order-1'
}
```

### 更新用户命令

```typescript
import type { Command } from 'uni-types'

// 定义更新用户命令
type UpdateUserCommand = Command<
  'UpdateUser',
  {
    userId: string
    updates: { name?: string; email?: string }
    reason: string
  }
>

const updateCommand: UpdateUserCommand = {
  type: 'UpdateUser',
  payload: {
    userId: 'user-1',
    updates: { name: '李四', email: 'li@example.com' },
    reason: '用户修改个人资料'
  },
  timestamp: Date.now(),
  commandId: 'cmd-002',
  aggregateId: 'user-1'
}
```

## 相关

- [`Query`](./query)
- [`EventBus`](./eventbus)
- [`Saga`](./saga)