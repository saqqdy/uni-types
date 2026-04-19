# BPMNProcess

**自 1.5.0 起**

Represents a BPMN 2.0 process definition.

## 签名

```typescript
type BPMNProcess<T = unknown> = {
  id: string
  name: string
  version: string
  elements: BPMNElement[]
  flows: SequenceFlow[]
  participants?: Participant[]
  lanes?: Lane[]
}
```

## 示例

### 基本用法

```typescript
import type { BPMNProcess } from 'uni-types'

const orderProcess: BPMNProcess = {
  id: 'order-process',
  name: 'Order Processing',
  version: '1.0.0',
  elements: [
    { id: 'start', type: 'startEvent', name: 'Start' },
    { id: 'process', type: 'task', name: 'Process Order' },
    { id: 'end', type: 'endEvent', name: 'End' }
  ],
  flows: [
    { id: 'flow1', source: 'start', target: 'process' },
    { id: 'flow2', source: 'process', target: 'end' }
  ]
}
```

## 相关

- [`Workflow`](./workflow)
- [`BPMNTask`](./bpmn-task)
