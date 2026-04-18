# Pipeline

**Since 1.4.0**

Async pipeline type.

## Signature

```typescript
interface Pipeline<Input, Output, Stages extends PipelineStage<any, any, any>[] = []> {
  stages: Stages
  run: (input: Input) => PipelineRun<Output>
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `Input` | Pipeline input type |
| `Output` | Pipeline output type |
| `Stages` | Array of pipeline stages |

## Description

Represents a pipeline of stages that process data sequentially.

## Examples

### Basic Usage

```typescript
import type { Pipeline, PipelineStage } from 'uni-types'

type Stage1 = PipelineStage<'parse', string, { data: unknown }>
type Stage2 = PipelineStage<'validate', { data: unknown }, { data: unknown; valid: true }>

type MyPipeline = Pipeline<string, { data: unknown; valid: true }, [Stage1, Stage2]>
```

## Related

- [`PipelineStage`](./pipelinestage) - Pipeline stage type
- [`Task`](./task) - Task type