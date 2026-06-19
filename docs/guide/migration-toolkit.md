# Complete Migration Toolkit

A comprehensive set of migration utilities for safely transitioning between versions of uni-types.

## MigrationToolkit

Orchestrates the full migration workflow from planning to verification.

```typescript
import type { MigrationToolkit } from 'uni-types'

type Toolkit = MigrationToolkit<{
	fromVersion: '1.12.0'
	toVersion: '1.13.0'
	steps: ['analyze', 'plan', 'execute', 'verify']
	backup: true
	dryRun: true
}>
```

## MigrationPlan

Defines a structured migration plan with ordered steps.

```typescript
import type { MigrationPlan } from 'uni-types'

type Plan = MigrationPlan<{
	version: '1.13.0'
	steps: [
		{ action: 'rename'; from: 'OldType'; to: 'NewType' },
		{ action: 'remove'; target: 'DeprecatedType' },
		{ action: 'add'; type: 'NewFeature' }
	]
	estimatedEffort: 'low'
	riskLevel: 'minimal'
}>
```

## MigrationStep

Individual step within a migration plan.

```typescript
import type { MigrationStep } from 'uni-types'

type RenameStep = MigrationStep<{
	action: 'rename'
	from: 'LegacyType'
	to: 'ModernType'
	automated: true
	breaking: false
}>

type RemoveStep = MigrationStep<{
	action: 'remove'
	target: 'DeprecatedAPI'
	replacement: 'NewAPI'
	deprecationVersion: '1.11.0'
}>
```

## MigrationReport

Comprehensive report generated after migration execution.

```typescript
import type { MigrationReport } from 'uni-types'

type Report = MigrationReport<{
	fromVersion: '1.12.0'
	toVersion: '1.13.0'
	totalSteps: 10
	completedSteps: 10
	failedSteps: 0
	skippedSteps: 0
	warnings: []
	duration: 5000
	timestamp: string
}>
```

## CodemodConfig

Configuration for automated code transformation codemods.

```typescript
import type { CodemodConfig } from 'uni-types'

type Config = CodemodConfig<{
	name: 'rename-legacy-types'
	transform: 'jscodeshift'
	patterns: ['**/*.ts']
	ignore: ['node_modules/**']
	dryRun: false
	verbose: true
}>
```

## MigrationValidator

Validates migration results against expected outcomes.

```typescript
import type { MigrationValidator } from 'uni-types'

type Validator = MigrationValidator<{
	expectedTypes: { NewType: string; ModernAPI: number }
	forbiddenTypes: ['LegacyType', 'DeprecatedAPI']
	typeCoverage: 100
	noRegressions: true
}>
```

## RollbackPlan

Defines how to rollback a migration if issues are encountered.

```typescript
import type { RollbackPlan } from 'uni-types'

type Rollback = RollbackPlan<{
	version: '1.13.0'
	rollbackTo: '1.12.0'
	snapshotRequired: true
	dataLossPossible: false
	estimatedTime: 3000
}>
```
