# BPMNGateway

**Since 1.5.0**

Represents a gateway element in a BPMN process for flow control.

## Signature

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

## Examples

### Basic Usage

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

## Related

- [`BPMNProcess`](./bpmn-process)
- [`BPMNTask`](./bpmn-task)
