# RC 质量门控

用于确保稳定发布前类型安全性和可靠性的候选版本质量门控。

## QualityGate

定义具有条件和阈值的质量门控。

```typescript
import type { QualityGate } from 'uni-types'

type Gate = QualityGate<{
	typeCoverage: 95
	testPassRate: 100
	breakingChanges: 0
	deprecationWarnings: 0
	migrationComplexity: 'low'
}>
```

## GateCondition

质量门控中的单个条件。

```typescript
import type { GateCondition } from 'uni-types'

type TypeCoverage = GateCondition<'type-coverage', 95>
// { metric: 'type-coverage'; threshold: 95; operator: '>=' }

type ZeroBreaking = GateCondition<'breaking-changes', 0>
// { metric: 'breaking-changes'; threshold: 0; operator: '===' }
```

## GateResult

评估质量门控的结果。

```typescript
import type { GateResult } from 'uni-types'

type Passed = GateResult<QualityGate<{ typeCoverage: 95 }>, 'passed'>
// { status: 'passed'; conditions: [...]; score: 100 }

type Failed = GateResult<QualityGate<{ typeCoverage: 95 }>, 'failed'>
// { status: 'failed'; failedConditions: [...]; score: 85 }
```

## RCStatus

候选版本状态跟踪。

```typescript
import type { RCStatus } from 'uni-types'

type Draft = RCStatus<'draft'>
type Alpha = RCStatus<'alpha'>
type Beta = RCStatus<'beta'>
type RC = RCStatus<'rc'>
type Stable = RCStatus<'stable'>
```

## CompatibilityGate

API 兼容性的质量门控。

```typescript
import type { CompatibilityGate } from 'uni-types'

type Compat = CompatibilityGate<{
	backwardsCompatible: true
	deprecatedAPIsHandled: true
	migrationPathProvided: true
}>
```

## PerformanceGate

类型级性能的质量门控。

```typescript
import type { PerformanceGate } from 'uni-types'

type PerfGate = PerformanceGate<{
	maxInstantiationDepth: 50
	maxTypeComplexity: 'medium'
	compilationTimeMs: 5000
}>
```

## SecurityGate

类型级安全的质量门控。

```typescript
import type { SecurityGate } from 'uni-types'

type SecGate = SecurityGate<{
	noAnyTypes: true
	noUnsafeCasts: true
	strictNullChecks: true
	noImplicitAny: true
}>
```

## GateReport

质量门控评估的综合报告。

```typescript
import type { GateReport } from 'uni-types'

type Report = GateReport<{
	version: '1.12.0-rc.1'
	gates: ['compatibility', 'performance', 'security']
	overallStatus: 'passed'
	timestamp: string
}>
```
