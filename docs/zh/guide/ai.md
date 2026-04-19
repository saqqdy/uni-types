# AI/ML 类型工具

**始于 1.6.0**

用于机器学习和 AI 应用的类型。

## 概述

AI/ML 类型工具提供了用于构建机器学习管道、神经网络和 AI 推理系统的类型。它支持张量操作、模型定义、训练配置和推理结果。

此模块支持构建具有张量、层、优化器和训练工作流正确类型约束的类型安全 ML 应用。

## 基本用法

```typescript
import type { Tensor, Model, Layer, Optimizer, Dataset, Prediction } from 'uni-types'

// 定义张量类型
type ImageTensor = Tensor<[224, 224, 3], 'float32'>

// 定义模型配置
type CNNModel = Model<ImageTensor, Prediction<string>>

// 训练设置
type TrainingSetup = {
  optimizer: Optimizer
  loss: LossFunction
  metrics: MLMetric[]
}
```

## 核心类型

### Tensor

具有形状和数据类型约束的张量类型。

```typescript
type Tensor<Shape extends number[] = number[], DType extends TensorDType = 'float32'> = {
  shape: Shape
  dtype: DType
  data: number[]
}
```

### TensorDType

支持的张量数据类型。

```typescript
type TensorDType = 'float32' | 'float64' | 'int32' | 'int64' | 'uint8' | 'bool' | 'string'
```

### Model

具有输入/输出规范的模型类型。

```typescript
type Model<Input = unknown, Output = unknown> = {
  name: string
  version: string
  input: Input
  output: Output
  layers: Layer[]
}
```

### LayerType

支持的层类型。

```typescript
type LayerType = 'dense' | 'conv2d' | 'conv3d' | 'lstm' | 'gru' | 'attention' | 'pooling' | 'normalization' | 'activation' | 'dropout' | 'embedding' | 'transformer'
```

### Optimizer

训练用的优化器类型。

```typescript
type Optimizer = 'sgd' | 'adam' | 'adamw' | 'rmsprop' | 'adagrad' | 'adadelta' | 'nadam' | 'ftrl' | 'lbfgs'
```

### LossFunction

损失函数类型。

```typescript
type LossFunction = 'mse' | 'mae' | 'crossentropy' | 'binary_crossentropy' | 'categorical_crossentropy' | 'hinge' | 'huber' | 'log_cosh'
```

### Dataset

训练数据的数据集类型。

```typescript
type Dataset<T = unknown> = {
  size: number
  shape: number[]
  batch(index: number): Batch<T>
  shuffle(): Dataset<T>
  split(ratio: number): [Dataset<T>, Dataset<T>]
}
```

### Prediction

预测结果类型。

```typescript
type Prediction<T = unknown> = {
  label: T
  probability: number
  confidence: Confidence
}
```

## 相关

- [函数式编程](./functional) - 单子类型
- [类型推断](./inference) - 类型推断工具