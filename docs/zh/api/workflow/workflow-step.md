# WorkflowStep

**自 1.5.0 起**

Represents a single step in a workflow.

## 签名

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

## 示例

### 基本用法

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

## 相关

- [`Workflow`](./workflow)
- [`BPMNTask`](./bpmn-task)
