# Pipeline

**自 1.4.0 起**

异步管道类型。

## 签名

```typescript
interface Pipeline<Input, Output, Stages extends PipelineStage<any, any, any>[] = []> {
  stages: Stages
  run: (input: Input) => PipelineRun<Output>
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `Input` | 管道输入类型 |
| `Output` | 管道输出类型 |
| `Stages` | 管道阶段数组 |

## 描述

表示按顺序处理数据的阶段管道。

## 示例

### 基本用法

```typescript
import type { Pipeline, PipelineStage } from 'uni-types'

type Stage1 = PipelineStage<'parse', string, { data: unknown }>
type Stage2 = PipelineStage<'validate', { data: unknown }, { data: unknown; valid: true }>

type MyPipeline = Pipeline<string, { data: unknown; valid: true }, [Stage1, Stage2]>
```

## 相关

- [`PipelineStage`](./pipelinestage) - 管道阶段类型
- [`Task`](./task) - 任务类型