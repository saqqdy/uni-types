# Metric

**Since 1.5.0**

Represents an observability metric with name, value, timestamp, labels, and type.

## Signature

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

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The value type for the metric (defaults to number) |

## Examples

### Basic Usage

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

## Related

- [`Counter`](./counter)
- [`Gauge`](./gauge)
- [`Histogram`](./histogram)
