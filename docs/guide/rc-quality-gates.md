# RC Quality Gates

Release candidate quality gates for ensuring type safety and reliability before stable release.

## QualityGate

Define a quality gate with conditions and thresholds.

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

Individual condition within a quality gate.

```typescript
import type { GateCondition } from 'uni-types'

type TypeCoverage = GateCondition<'type-coverage', 95>
// { metric: 'type-coverage'; threshold: 95; operator: '>=' }

type ZeroBreaking = GateCondition<'breaking-changes', 0>
// { metric: 'breaking-changes'; threshold: 0; operator: '===' }
```

## GateResult

Result of evaluating a quality gate.

```typescript
import type { GateResult } from 'uni-types'

type Passed = GateResult<QualityGate<{ typeCoverage: 95 }>, 'passed'>
// { status: 'passed'; conditions: [...]; score: 100 }

type Failed = GateResult<QualityGate<{ typeCoverage: 95 }>, 'failed'>
// { status: 'failed'; failedConditions: [...]; score: 85 }
```

## RCStatus

Release candidate status tracking.

```typescript
import type { RCStatus } from 'uni-types'

type Draft = RCStatus<'draft'>
type Alpha = RCStatus<'alpha'>
type Beta = RCStatus<'beta'>
type RC = RCStatus<'rc'>
type Stable = RCStatus<'stable'>
```

## CompatibilityGate

Quality gate for API compatibility.

```typescript
import type { CompatibilityGate } from 'uni-types'

type Compat = CompatibilityGate<{
	backwardsCompatible: true
	deprecatedAPIsHandled: true
	migrationPathProvided: true
}>
```

## PerformanceGate

Quality gate for type-level performance.

```typescript
import type { PerformanceGate } from 'uni-types'

type PerfGate = PerformanceGate<{
	maxInstantiationDepth: 50
	maxTypeComplexity: 'medium'
	compilationTimeMs: 5000
}>
```

## SecurityGate

Quality gate for type-level security.

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

Comprehensive report from quality gate evaluation.

```typescript
import type { GateReport } from 'uni-types'

type Report = GateReport<{
	version: '1.12.0-rc.1'
	gates: ['compatibility', 'performance', 'security']
	overallStatus: 'passed'
	timestamp: string
}>
```
