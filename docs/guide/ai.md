# AI/ML Type Utilities

**Since 1.6.0**

Types for machine learning and AI applications.

## Overview

AI/ML Type Utilities provides types for building machine learning pipelines, neural networks, and AI inference systems. It supports tensor operations, model definitions, training configurations, and inference results.

This module enables building type-safe ML applications with proper type constraints for tensors, layers, optimizers, and training workflows.

## Basic Usage

```typescript
import type { Tensor, Model, Layer, Optimizer, Dataset, Prediction } from 'uni-types'

// Define tensor types
type ImageTensor = Tensor<[224, 224, 3], 'float32'>

// Define model configuration
type CNNModel = Model<ImageTensor, Prediction<string>>

// Training setup
type TrainingSetup = {
  optimizer: Optimizer
  loss: LossFunction
  metrics: MLMetric[]
}
```

## Key Types

### Tensor

Tensor type with shape and data type constraints.

```typescript
type Tensor<Shape extends number[] = number[], DType extends TensorDType = 'float32'> = {
  shape: Shape
  dtype: DType
  data: number[]
}
```

### TensorDType

Supported tensor data types.

```typescript
type TensorDType = 'float32' | 'float64' | 'int32' | 'int64' | 'uint8' | 'bool' | 'string'
```

### Model

Model type with input/output specifications.

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

Supported layer types.

```typescript
type LayerType = 'dense' | 'conv2d' | 'conv3d' | 'lstm' | 'gru' | 'attention' | 'pooling' | 'normalization' | 'activation' | 'dropout' | 'embedding' | 'transformer'
```

### Optimizer

Optimizer types for training.

```typescript
type Optimizer = 'sgd' | 'adam' | 'adamw' | 'rmsprop' | 'adagrad' | 'adadelta' | 'nadam' | 'ftrl' | 'lbfgs'
```

### LossFunction

Loss function types.

```typescript
type LossFunction = 'mse' | 'mae' | 'crossentropy' | 'binary_crossentropy' | 'categorical_crossentropy' | 'hinge' | 'huber' | 'log_cosh'
```

### Dataset

Dataset type for training data.

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

Prediction result type.

```typescript
type Prediction<T = unknown> = {
  label: T
  probability: number
  confidence: Confidence
}
```

## Related

- [Functional Programming](./functional) - Monadic types
- [Type Inference](./inference) - Type inference utilities