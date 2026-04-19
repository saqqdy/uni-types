# Metric

**自 1.5.0 起**

Represents an observability metric with name, value, timestamp, labels, and type.

## 签名

```typescript
type Metric<T = number> = {
  name: string
  value: T
  timestamp: Date
  labels?: Record<string, string>
  help?: string
  type: MetricType
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | The value type for the metric (defaults to number) |

## 示例

### 基本用法

```typescript
import type { Metric } from 'uni-types'

const requestCount: Metric = {
  name: 'http_requests_total',
  value: 1542,
  timestamp: new Date(),
  labels: { method: 'GET', status: '200' },
  help: 'Total number of HTTP requests',
  type: 'counter'
}
```

### Multiple Metric Types

```typescript
import type { Metric } from 'uni-types'

// Counter metric
const ordersTotal: Metric = {
  name: 'orders_total',
  value: 500,
  timestamp: new Date(),
  type: 'counter',
  help: 'Total orders processed'
}

// Gauge metric
const memoryUsage: Metric = {
  name: 'memory_usage_bytes',
  value: 104857600,
  timestamp: new Date(),
  labels: { service: 'api' },
  type: 'gauge'
}

// Histogram metric
const requestDuration: Metric = {
  name: 'http_request_duration_seconds',
  value: 0.125,
  timestamp: new Date(),
  labels: { method: 'POST', endpoint: '/api/users' },
  type: 'histogram'
}
```

## 相关

- [`Counter`](./counter)
- [`Gauge`](./gauge)
- [`Histogram`](./histogram)
