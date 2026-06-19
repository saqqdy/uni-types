# 完整迁移工具包

用于安全地在 uni-types 版本之间过渡的综合迁移工具集。

## MigrationToolkit

编排从规划到验证的完整迁移工作流。

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

定义具有有序步骤的结构化迁移计划。

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

迁移计划中的单个步骤。

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

迁移执行后生成的综合报告。

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

自动化代码转换 codemod 的配置。

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

根据预期结果验证迁移结果。

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

定义在遇到问题时如何回滚迁移。

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
