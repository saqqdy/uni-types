# 测试框架集成

**始于 1.6.0**

用于测试框架和断言的类型。

## 概述

测试框架集成提供了用于构建测试套件、断言、Mock 和覆盖率报告的类型。它支持单元测试、集成测试、基准测试和快照测试模式。

此模块支持构建具有测试用例、断言和结果正确类型约束的类型安全测试工具。

## 基本用法

```typescript
import type { TestSuite, TestCase, Mock, Spy, Coverage, Benchmark, Assertion } from 'uni-types'

// 测试套件定义
type UserTests = TestSuite<{
  name: 'User'
  tests: TestCase[]
}>

// Mock 配置
type UserServiceMock = Mock<UserService>

// 覆盖率配置
type CoverageConfig = Coverage<{
  lines: number
  functions: number
  branches: number
}>
```

## 核心类型

### TestSuite

测试套件类型。

```typescript
type TestSuite<T = unknown> = {
  name: string
  tests: TestCase<T>[]
  setup?: () => void
  teardown?: () => void
}
```

### TestCase

测试用例类型。

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

测试结果类型。

```typescript
type TestResultType = 'passed' | 'failed' | 'skipped' | 'pending' | 'timeout'
```

### Assertion

断言类型。

```typescript
type Assertion<T = unknown> = {
  actual: T
  expected: T
  pass: boolean
  message?: string
}
```

### Mock

用于测试的 Mock 类型。

```typescript
type Mock<T extends (...args: unknown[]) => unknown> = {
  mockImplementation: (fn: T) => void
  mockReturnValue: (value: ReturnType<T>) => void
  mockResolvedValue: (value: ReturnType<T>) => void
  calls: MockCall<T>[]
}
```

### Spy

用于函数观察的 Spy 类型。

```typescript
type Spy<T extends (...args: unknown[]) => unknown> = {
  calls: unknown[][]
  results: unknown[]
  called: boolean
  callCount: number
}
```

### Coverage

覆盖率配置类型。

```typescript
type Coverage = {
  lines: number
  functions: number
  branches: number
  statements: number
}
```

### CoverageReport

覆盖率报告类型。

```typescript
type CoverageReport<T = unknown> = {
  total: Coverage
  files: FileCoverage[]
  thresholds: CoverageThreshold
  report: T
}
```

### Snapshot

用于快照测试的快照类型。

```typescript
type Snapshot<T = unknown> = {
  name: string
  data: T
  createdAt: Date
  updatedAt: Date
}
```

### Benchmark

用于性能测试的基准类型。

```typescript
type Benchmark<T = unknown> = {
  name: string
  fn: () => T
  iterations: number
  warmup?: number
}
```

### BenchmarkResult

基准结果类型。

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

## 相关

- [验证](./validation) - 验证类型
- [性能](./perf) - 性能类型