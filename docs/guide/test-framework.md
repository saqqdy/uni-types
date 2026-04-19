# Testing Framework Integration

**Since 1.6.0**

Types for testing frameworks and assertions.

## Overview

Testing Framework Integration provides types for building test suites, assertions, mocks, and coverage reporting. It supports unit testing, integration testing, benchmarking, and snapshot testing patterns.

This module enables building type-safe testing utilities with proper constraints for test cases, assertions, and results.

## Basic Usage

```typescript
import type { TestSuite, TestCase, Mock, Spy, Coverage, Benchmark, Assertion } from 'uni-types'

// Test suite definition
type UserTests = TestSuite<{
  name: 'User'
  tests: TestCase[]
}>

// Mock configuration
type UserServiceMock = Mock<UserService>

// Coverage configuration
type CoverageConfig = Coverage<{
  lines: number
  functions: number
  branches: number
}>
```

## Key Types

### TestSuite

Test suite type.

```typescript
type TestSuite<T = unknown> = {
  name: string
  tests: TestCase<T>[]
  setup?: () => void
  teardown?: () => void
}
```

### TestCase

Test case type.

```typescript
type TestCase<T = unknown> = {
  name: string
  fn: () => void | Promise<void>
  skip?: boolean
  only?: boolean
  timeout?: number
  config?: T
}
```

### TestResultType

Test result types.

```typescript
type TestResultType = 'passed' | 'failed' | 'skipped' | 'pending' | 'timeout'
```

### Assertion

Assertion type.

```typescript
type Assertion<T = unknown> = {
  actual: T
  expected: T
  pass: boolean
  message?: string
}
```

### Mock

Mock type for testing.

```typescript
type Mock<T extends (...args: unknown[]) => unknown> = {
  mockImplementation: (fn: T) => void
  mockReturnValue: (value: ReturnType<T>) => void
  mockResolvedValue: (value: ReturnType<T>) => void
  calls: MockCall<T>[]
}
```

### Spy

Spy type for function observation.

```typescript
type Spy<T extends (...args: unknown[]) => unknown> = {
  calls: unknown[][]
  results: unknown[]
  called: boolean
  callCount: number
}
```

### Coverage

Coverage configuration type.

```typescript
type Coverage = {
  lines: number
  functions: number
  branches: number
  statements: number
}
```

### CoverageReport

Coverage report type.

```typescript
type CoverageReport<T = unknown> = {
  total: Coverage
  files: FileCoverage[]
  thresholds: CoverageThreshold
  report: T
}
```

### Snapshot

Snapshot type for snapshot testing.

```typescript
type Snapshot<T = unknown> = {
  name: string
  data: T
  createdAt: Date
  updatedAt: Date
}
```

### Benchmark

Benchmark type for performance testing.

```typescript
type Benchmark<T = unknown> = {
  name: string
  fn: () => T
  iterations: number
  warmup?: number
}
```

### BenchmarkResult

Benchmark result type.

```typescript
type BenchmarkResult<T = unknown> = {
  name: string
  iterations: number
  totalTime: number
  averageTime: number
  minTime: number
  maxTime: number
  statistics: BenchmarkStatistics
}
```

## Related

- [Validation](./validation) - Validation types
- [Performance](./perf) - Performance types