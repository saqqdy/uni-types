# Workflow

**自 1.5.0 起**

Represents a workflow definition with steps and transitions.

## 签名

```typescript
type Workflow<T = unknown> = {
  id: string
  name: string
  version: string
  steps: WorkflowStep<T>[]
  initialState: string
  transitions: Record<string, StepTransition[]>
}
```

## 示例

### 基本用法

```typescript
import type { Workflow } from 'uni-types'

const approvalWorkflow: Workflow = {
  id: 'approval-001',
  name: 'Document Approval',
  version: '1.0.0',
  steps: [
    { id: 'draft', name: 'Draft', type: 'task' },
    { id: 'review', name: 'Review', type: 'task' },
    { id: 'approved', name: 'Approved', type: 'end' }
  ],
  initialState: 'draft',
  transitions: {
    draft: [{ from: 'draft', to: 'review', event: 'submit' }],
    review: [{ from: 'review', to: 'approved', event: 'approve' }]
  }
}
```

## 相关

- [`WorkflowStep`](./workflow-step)
- [`BPMNProcess`](./bpmn-process)
