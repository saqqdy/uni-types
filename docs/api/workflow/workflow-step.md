# WorkflowStep

**Since 1.5.0**

Represents a single step in a workflow.

## Signature

```typescript
type WorkflowStep<T = unknown> = {
  id: string
  name: string
  type: 'task' | 'decision' | 'parallel' | 'end'
  handler?: (context: WorkflowContext<T>) => Promise<void>
  timeout?: number
  retryPolicy?: RetryPolicy
}
```

## Examples

### Basic Usage

```typescript
import type { WorkflowStep } from 'uni-types'

const reviewStep: WorkflowStep = {
  id: 'review',
  name: 'Review Document',
  type: 'task',
  handler: async (context) => {
    // Review logic
  },
  timeout: 86400000, // 24 hours
  retryPolicy: { maxRetries: 3, backoff: 'exponential' }
}
```

## Related

- [`Workflow`](./workflow)
- [`BPMNTask`](./bpmn-task)
