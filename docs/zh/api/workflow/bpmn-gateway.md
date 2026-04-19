# BPMNGateway

**自 1.5.0 起**

Represents a gateway element in a BPMN process for flow control.

## 签名

```typescript
type BPMNGateway = {
  id: string
  name: string
  type: 'exclusive' | 'parallel' | 'inclusive' | 'eventBased'
  outgoing: string[]
  conditions?: Record<string, string>
  default?: string
}
```

## 示例

### 基本用法

```typescript
import type { BPMNGateway } from 'uni-types'

const decisionGateway: BPMNGateway = {
  id: 'check-amount',
  name: 'Check Amount',
  type: 'exclusive',
  outgoing: ['approve-path', 'review-path'],
  conditions: {
    'approve-path': 'amount < 1000',
    'review-path': 'amount >= 1000'
  },
  default: 'review-path'
}
```

## 相关

- [`BPMNProcess`](./bpmn-process)
- [`BPMNTask`](./bpmn-task)
