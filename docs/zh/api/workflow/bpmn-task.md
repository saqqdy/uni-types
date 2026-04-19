# BPMNTask

**自 1.5.0 起**

Represents a task element in a BPMN process.

## 签名

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

## 示例

### 基本用法

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

## 相关

- [`BPMNProcess`](./bpmn-process)
- [`BPMNGateway`](./bpmn-gateway)
