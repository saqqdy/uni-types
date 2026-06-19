# 最终破坏性变更

v1.13.0 中引入的所有最终破坏性变更文档，为 v2.0.0 做准备。

## BreakingChange

表示带有分类和迁移路径的破坏性变更。

```typescript
import type { BreakingChange } from 'uni-types'

type Change = BreakingChange<{
	type: 'api-removal'
	severity: 'major'
	removed: 'LegacyFormatter'
	replacement: 'ModernFormatter'
	since: '1.13.0'
	migrationGuide: string
	automated: true
}>
```

## BreakingChangeRegistry

跟踪所有版本破坏性变更的中央注册表。

```typescript
import type { BreakingChangeRegistry } from 'uni-types'

type Registry = BreakingChangeRegistry<{
	version: '1.13.0'
	changes: [
		{ type: 'api-removal'; severity: 'major'; target: 'LegacyFormatter' },
		{ type: 'signature-change'; severity: 'minor'; target: 'DeepPartial' },
		{ type: 'behavior-change'; severity: 'patch'; target: 'Merge' }
	]
	totalBreaking: 3
	majorBreaking: 1
	minorBreaking: 2
}>
```

## DeprecationNotice

计划移除的类型的正式废弃通知。

```typescript
import type { DeprecationNotice } from 'uni-types'

type Notice = DeprecationNotice<{
	type: 'LegacyFormatter'
	deprecatedSince: '1.11.0'
	removedIn: '2.0.0'
	replacement: 'ModernFormatter'
	reason: 'Inconsistent behavior with nested types'
	alternatives: ['ModernFormatter', 'SimplifiedFormatter']
	migrationCode: string
}>
```

## ImpactAssessment

评估破坏性变更对代码库的影响。

```typescript
import type { ImpactAssessment } from 'uni-types'

type Assessment = ImpactAssessment<{
	codebase: 'my-project'
	affectedFiles: 15
	affectedTypes: 8
	riskLevel: 'medium'
	estimatedEffort: '2-4 hours'
	requiresManualReview: true
	automatedFixes: 12
	manualFixes: 3
}>
```

## ChangeCategory

按性质和范围对破坏性变更进行分类。

```typescript
import type { ChangeCategory } from 'uni-types'

type APIRemoval = ChangeCategory<'api-removal'>
type SignatureChange = ChangeCategory<'signature-change'>
type BehaviorChange = ChangeCategory<'behavior-change'>
type RenameChange = ChangeCategory<'rename'>
type DefaultChange = ChangeCategory<'default-change'>
type ConstraintChange = ChangeCategory<'constraint-tightening'>
```

## BreakingChangeGuard

防止意外使用已移除 API 的类型级守卫。

```typescript
import type { BreakingChangeGuard } from 'uni-types'

type Guard = BreakingChangeGuard<{
	blockedTypes: ['LegacyFormatter', 'OldInference']
	version: '1.13.0'
	errorMessage: true
	suggestAlternative: true
}>
```

## MigrationAutomator

在可能的情况下自动化破坏性变更的迁移。

```typescript
import type { MigrationAutomator } from 'uni-types'

type Automator = MigrationAutomator<{
	version: '1.13.0'
	transforms: [
		{ from: 'LegacyFormatter'; to: 'ModernFormatter'; automated: true },
		{ from: 'OldInference'; to: 'SmartInference'; automated: true }
	]
	coverage: 85
	remaining: 15
}>
```
