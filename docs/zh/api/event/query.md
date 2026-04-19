# Query

**自 1.5.0 起**

查询类型，用于 CQRS 模式中的查询定义，表示对系统的读操作请求。

## 签名

```typescript
type Query<T = string, R = unknown> = {
  type: T
  params: R
  timestamp: EventTimestamp
  queryId: string
}
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 查询类型标识，默认为 string |
| `R` | 查询参数类型，默认为 unknown |

## 示例

### 基本用法

```typescript
import type { Query } from 'uni-types'

// 定义获取用户查询
type GetUserQuery = Query<
  'GetUser',
  {
    userId: string
    includeProfile: boolean
  }
>

const query: GetUserQuery = {
  type: 'GetUser',
  params: { userId: 'user-1', includeProfile: true },
  timestamp: Date.now(),
  queryId: 'q-001'
}
```

### 分页查询

```typescript
import type { Query } from 'uni-types'

// 定义搜索订单查询
type SearchOrdersQuery = Query<
  'SearchOrders',
  {
    customerId?: string
    status?: string
    startDate?: string
    endDate?: string
    page: number
    pageSize: number
  }
>

const searchQuery: SearchOrdersQuery = {
  type: 'SearchOrders',
  params: {
    status: 'shipped',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    page: 1,
    pageSize: 20
  },
  timestamp: Date.now(),
  queryId: 'q-002'
}
```

## 相关

- [`Command`](./command)
- [`EventBus`](./eventbus)
- [`EventStore`](./eventstore)