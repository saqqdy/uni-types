# BPMNTask

**Since 1.5.0**

Represents a task element in a BPMN process.

## Signature

```typescript
type BPMNTask = {
  id: string
  name: string
  type: 'task' | 'serviceTask' | 'userTask' | 'scriptTask' | 'businessRuleTask'
  assignee?: string
  candidateGroups?: string[]
  formKey?: string
  async?: boolean
}
```

## Examples

### Basic Usage

```typescript
import type { BPMNTask } from 'uni-types'

const approvalTask: BPMNTask = {
  id: 'approve-order',
  name: 'Approve Order',
  type: 'userTask',
  assignee: 'manager',
  candidateGroups: ['managers', 'supervisors'],
  formKey: 'approval-form'
}
```

## Related

- [`BPMNProcess`](./bpmn-process)
- [`BPMNGateway`](./bpmn-gateway)
