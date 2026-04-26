# Quantum Computing Types

**Since 1.9.0**

Types for quantum computing simulation and applications.

## Overview

Quantum Computing Types provides type-level quantum computing simulation utilities. It supports qubit representations, quantum gates, circuits, algorithms, and hardware abstractions.

This module enables building type-safe quantum computing applications with proper constraints for quantum states, operations, and measurements.

## Basic Usage

```typescript
import type { Qubit, QuantumGate, QuantumCircuit, QuantumAlgorithm } from 'uni-types'

// Define qubit types
type MyQubit = Qubit<'|0⟩'>

// Define quantum circuit
type MyCircuit = QuantumCircuit<2, Hadamard>

// Define quantum algorithm
type GroverSearch = QuantumAlgorithm<number, number>
```

## Key Types

### QubitState

Qubit state representation in Dirac notation.

```typescript
type QubitState = '|0⟩' | '|1⟩' | '|+⟩' | '|-⟩' | '|i⟩' | '|i-⟩'
```

### Qubit

Single qubit type with state and amplitude.

```typescript
interface Qubit<T extends QubitState = QubitState> {
  state: T
  amplitude?: QubitAmplitude
  measured?: 0 | 1
}
```

### QuantumGate

All quantum gate types.

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

Quantum circuit type with gates and depth.

```typescript
interface QuantumCircuit<N extends number = number, G extends QuantumGate = QuantumGate> {
  qubits: N
  gates: CircuitGate<G>[]
  depth: number
  name?: string
}
```

### BellState

Bell state types (maximally entangled states).

```typescript
type BellState =
  | '|Φ+⟩' // (|00⟩ + |11⟩) / √2
  | '|Φ-⟩' // (|00⟩ - |11⟩) / √2
  | '|Ψ+⟩' // (|01⟩ + |10⟩) / √2
  | '|Ψ-⟩' // (|01⟩ - |10⟩) / √2
```

### QuantumAlgorithm

Quantum algorithm type with input/output.

```typescript
interface QuantumAlgorithm<I = unknown, O = unknown> {
  name: string
  input: I
  output: O
  circuit: QuantumCircuit
  iterations?: number
}
```

## Quantum Algorithms

### Grover

Grover's search algorithm for unstructured search.

```typescript
interface Grover<T = unknown> {
  type: 'Grover'
  oracle: (item: T) => boolean
  searchSpace: number
  iterations: number
}
```

### Shor

Shor's factoring algorithm.

```typescript
interface Shor {
  type: 'Shor'
  numberToFactor: number
  period: number | null
  factors: [number, number] | null
}
```

### QFT

Quantum Fourier Transform.

```typescript
interface QFT<N extends number = number> {
  type: 'QFT'
  qubits: N
  inverse: boolean
}
```

## Related

- [Game Development](./game) - Game ECS types
- [Graphics](./graphics) - Graphics rendering types
- [Event System](./event-system) - Event handling types