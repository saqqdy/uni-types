# Final Breaking Changes

Documentation of all final breaking changes introduced in v1.13.0 as preparation for v2.0.0.

## BreakingChange

Represents a breaking change with classification and migration path.

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

Central registry tracking all breaking changes across versions.

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

Formal deprecation notice for types scheduled for removal.

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

Assesses the impact of breaking changes on a codebase.

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

Categorizes breaking changes by their nature and scope.

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

Type-level guard that prevents accidental use of removed APIs.

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

Automates the migration of breaking changes where possible.

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
