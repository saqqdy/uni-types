# 量子计算类型

**始于 1.9.0**

用于量子计算模拟和应用的类型。

## 概述

量子计算类型提供了类型级量子计算模拟工具。它支持量子比特表示、量子门、电路、算法和硬件抽象。

此模块支持构建具有量子状态、操作和测量正确约束的类型安全量子计算应用。

## 基本用法

```typescript
import type { Qubit, QuantumGate, QuantumCircuit, QuantumAlgorithm } from 'uni-types'

// 定义量子比特类型
type MyQubit = Qubit<'|0⟩'>

// 定义量子电路
type MyCircuit = QuantumCircuit<2, Hadamard>

// 定义量子算法
type GroverSearch = QuantumAlgorithm<number, number>
```

## 核心类型

### QubitState

狄拉克符号表示的量子比特状态。

```typescript
type QubitState = '|0⟩' | '|1⟩' | '|+⟩' | '|-⟩' | '|i⟩' | '|i-⟩'
```

### Qubit

具有状态和振幅的单量子比特类型。

```typescript
interface Qubit<T extends QubitState = QubitState> {
  state: T
  amplitude?: QubitAmplitude
  measured?: 0 | 1
}
```

### QuantumGate

所有量子门类型。

```typescript
type QuantumGate =
  | Hadamard
  | PauliX
  | PauliY
  | PauliZ
  | CNOT
  | Toffoli
  | PhaseGate
  | RotationGate
```

### QuantumCircuit

具有门和深度的量子电路类型。

```typescript
interface QuantumCircuit<N extends number = number, G extends QuantumGate = QuantumGate> {
  qubits: N
  gates: CircuitGate<G>[]
  depth: number
  name?: string
}
```

### BellState

贝尔态类型（最大纠缠态）。

```typescript
type BellState =
  | '|Φ+⟩' // (|00⟩ + |11⟩) / √2
  | '|Φ-⟩' // (|00⟩ - |11⟩) / √2
  | '|Ψ+⟩' // (|01⟩ + |10⟩) / √2
  | '|Ψ-⟩' // (|01⟩ - |10⟩) / √2
```

### QuantumAlgorithm

具有输入/输出的量子算法类型。

```typescript
interface QuantumAlgorithm<I = unknown, O = unknown> {
  name: string
  input: I
  output: O
  circuit: QuantumCircuit
  iterations?: number
}
```

## 量子算法

### Grover

用于非结构化搜索的 Grover 搜索算法。

```typescript
interface Grover<T = unknown> {
  type: 'Grover'
  oracle: (item: T) => boolean
  searchSpace: number
  iterations: number
}
```

### Shor

Shor 因式分解算法。

```typescript
interface Shor {
  type: 'Shor'
  numberToFactor: number
  period: number | null
  factors: [number, number] | null
}
```

### QFT

量子傅里叶变换。

```typescript
interface QFT<N extends number = number> {
  type: 'QFT'
  qubits: N
  inverse: boolean
}
```

## 相关

- [游戏开发](./game) - 游戏 ECS 类型
- [图形渲染](./graphics) - 图形渲染类型
- [事件系统](./event-system) - 事件处理类型