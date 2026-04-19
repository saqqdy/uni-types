# Workflow Engine

**Since 1.5.0**

Types for workflow and process management.

## Overview

Workflow Engine provides types for building workflow orchestration systems with step-based execution, state management, and BPMN-like process definitions. It supports saga patterns, compensation logic, and workflow history tracking.

This module enables building complex business process automation with proper type safety. It includes types for workflow definitions, step execution, transitions, error handling, and BPMN-compatible process modeling.

## Basic Usage

```typescript
import type { Workflow, WorkflowStep, BPMNProcess, Saga, WorkflowContext } from 'uni-types'

// Define a workflow
type OrderWorkflow = Workflow<OrderContext>

// Define workflow step
type ProcessPayment = WorkflowStep<PaymentConfig>

// BPMN process
type OrderProcess = BPMNProcess<OrderData>
```

## Key Types

### Workflow

Workflow definition with steps and transitions.

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

Workflow step with configuration and retry policy.

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

BPMN-compatible process definition.

```typescript
type BPMNProcess<T = unknown> = {
  id: string
  name: string
  type: BPMNProcessType
  lane?: string
  documentation?: string
  extensionElements?: Record<string, unknown>
} & WorkflowDefinition<T>
```

### BPMNGateway

BPMN gateway for conditional routing.

```typescript
type BPMNGateway<T = unknown> = {
  id: string
  name: string
  type: BPMNGatewayType
  conditions?: BPMNGatewayCondition<T>[]
  defaultFlow?: string
}
```

### WorkflowContext

Execution context for workflow instances.

```typescript
type ExecutionContext<T = unknown> = {
  workflowId: string
  instanceId: string
  executionId: string
  currentStep: string
  context: T
  metadata: Record<string, unknown>
  variables: Record<string, unknown>
}
```

## Related

- [API Reference](/api/workflow/)
- [Event-Driven](./event) - Event architecture
