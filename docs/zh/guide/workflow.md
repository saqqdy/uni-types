# 工作流引擎

**自 1.5.0 起**

用于工作流和流程管理的类型工具。

## 概述

工作流引擎模块提供了工作流定义和执行所需的完整类型支持，包括工作流定义、步骤配置、状态转换和 BPMN 兼容类型。这些类型可以帮助你构建复杂业务流程的自动化系统。

通过这些类型工具，你可以定义工作流步骤、配置转换条件、实现错误处理和补偿机制，以及支持 BPMN 标准的流程建模。

## 基本用法

```typescript
import type { Workflow, WorkflowStep, BPMNProcess, BPMNTask, BPMNGateway } from 'uni-types'

// 定义工作流
type OrderWorkflow = Workflow<{
  orderId: string
  status: string
  items: unknown[]
}>

// 定义步骤
type ProcessStep = WorkflowStep<{ action: string }>

// 定义 BPMN 任务
type ApprovalTask = BPMNTask<{ approver: string }>
```

## 主要类型

### Workflow

工作流类型，定义工作流的元数据和定义。

```typescript
type Workflow<T = unknown> = {
  id: string
  name: string
  description?: string
  version: string
  definition: WorkflowDefinition<T>
  status: WorkflowStatus
  createdAt: Date
  updatedAt: Date
}
```

### WorkflowStep

工作流步骤类型，定义单个执行单元。

```typescript
type WorkflowStep<T = unknown> = {
  id: string
  name: string
  description?: string
  type: StepType
  config?: T
  timeout?: number
  retryPolicy?: RetryPolicy
  compensation?: string
  onSuccess?: string
  onFailure?: string
}
```

### BPMNProcess

BPMN 流程类型，符合 BPMN 2.0 标准。

```typescript
type BPMNProcess<T = unknown> = {
  id: string
  name: string
  type: BPMNProcessType
  lane?: string
  documentation?: string
} & WorkflowDefinition<T>
```

### BPMNTask

BPMN 任务类型，定义流程中的工作单元。

```typescript
type BPMNTask<T = unknown> = {
  id: string
  name: string
  type: BPMNTaskType
  assignee?: string
  candidateUsers?: string[]
  candidateGroups?: string[]
  priority?: number
  dueDate?: Date
  input?: T
  output?: T
}
```

### BPMNGateway

BPMN 网关类型，控制流程分支和合并。

```typescript
type BPMNGateway<T = unknown> = {
  id: string
  name: string
  type: BPMNGatewayType
  conditions?: BPMNGatewayCondition<T>[]
  defaultFlow?: string
}
```

### WorkflowEngine

工作流引擎类型，管理工作流的生命周期。

```typescript
type WorkflowEngine<T = unknown> = {
  register: (workflow: Workflow<T>) => void
  unregister: (workflowId: string) => void
  start: (workflowId: string, input?: T) => Promise<WorkflowInstance>
  resume: (instanceId: string) => Promise<WorkflowInstance>
  cancel: (instanceId: string) => Promise<void>
  pause: (instanceId: string) => Promise<void>
  getStatus: (instanceId: string) => Promise<WorkflowInstance | undefined>
  getHistory: (instanceId: string) => Promise<WorkflowHistory>
}
```

## 相关

- [API 参考](/zh/api/workflow/)
