# Breaking Change Detection

Utilities to detect and report breaking changes. *(v1.11.0)*

## Overview

Breaking change detection utilities help you identify, analyze, and plan migrations for breaking changes between type versions.

## Breaking Change Types

### BreakingChangeReport

Report of breaking changes between types.

```typescript
interface BreakingChangeReport<_T = unknown> {
  id: string
  sourceType: string
  targetType: string
  breakingChanges: BreakingChange[]
  nonBreakingChanges: Change[]
  timestamp: Date
  summary: BreakingChangeSummary
}
```

### BreakingChange

A single breaking change.

```typescript
interface BreakingChange {
  id: string
  type: BreakingChangeType
  severity: BreakingChangeSeverity
  path: string
  description: string
  oldValue?: unknown
  newValue?: unknown
  migrationPath?: string
  codeExample?: string
}
```

### BreakingChangeType

Type of breaking change.

```typescript
type BreakingChangeType =
  | 'removed'
  | 'renamed'
  | 'restructured'
  | 'behavior'
  | 'signature'
  | 'nullability'
  | 'optionality'
  | 'constraint'
  | 'generic'
  | 'inheritance'
```

### BreakingChangeSeverity

Severity of breaking change.

```typescript
type BreakingChangeSeverity = 'major' | 'minor' | 'patch'
```

### BreakingChangeSummary

Summary of breaking changes.

```typescript
interface BreakingChangeSummary {
  totalChanges: number
  majorChanges: number
  minorChanges: number
  patchChanges: number
  impactScore: number
  migrationEffort: MigrationEffort
}
```

### MigrationEffort

Effort required for migration.

```typescript
type MigrationEffort = 'trivial' | 'low' | 'medium' | 'high' | 'extreme'
```

## API Diff

### APIDiff

Difference between two API types.

```typescript
type APIDiff<T, U> = {
  added: AddedAPI<U>
  removed: RemovedAPI<T>
  changed: ChangedAPI<T, U>
}
```

### AddedAPI

Added API properties.

```typescript
type AddedAPI<T> = {
  [K in keyof T]: {
    type: 'added'
    description?: string
  }
}
```

### RemovedAPI

Removed API properties.

```typescript
type RemovedAPI<T> = {
  [K in keyof T]: {
    type: 'removed'
    description?: string
    replacement?: string
  }
}
```

### ChangedAPI

Changed API properties.

```typescript
type ChangedAPI<T, U> = {
  [K in keyof T & keyof U]: {
    type: 'changed'
    from: T[K]
    to: U[K]
    breaking: boolean
    description?: string
  }
}
```

## Compatibility Check

### CompatibilityCheck

Check compatibility between types.

```typescript
type CompatibilityCheck<T, U> = T extends U
  ? U extends T
    ? { compatible: true; level: 'full' }
    : { compatible: false; level: 'partial'; details: string }
  : { compatible: false; level: 'none'; details: string }
```

### BreakingChangeCompatibilityReport

Detailed compatibility report.

```typescript
interface BreakingChangeCompatibilityReport<_T = unknown> {
  source: string
  target: string
  level: CompatibilityLevel
  percentage: number
  issues: CompatibilityIssue[]
  warnings: string[]
  recommendations: string[]
}
```

### CompatibilityLevel

Level of compatibility.

```typescript
type CompatibilityLevel = 'full' | 'partial' | 'none'
```

### CompatibilityIssue

A compatibility issue.

```typescript
interface CompatibilityIssue {
  id: string
  type: CompatibilityIssueType
  path: string
  description: string
  suggestion?: string
  severity: 'error' | 'warning' | 'info'
}
```

### CompatibilityIssueType

Type of compatibility issue.

```typescript
type CompatibilityIssueType =
  | 'missing_property'
  | 'type_mismatch'
  | 'signature_change'
  | 'nullability_change'
  | 'optionality_change'
  | 'constraint_violation'
  | 'generic_incompatibility'
  | 'inheritance_change'
  | 'removed_api'
  | 'renamed_api'
```

## Migration Path

### BreakingChangeMigrationPath

Path to migrate through breaking changes.

```typescript
type BreakingChangeMigrationPath<T, _U> = BreakingChangeMigrationStep<T>[]
```

### BreakingChangeMigrationStep

A step in the migration path.

```typescript
interface BreakingChangeMigrationStep<T> {
  step: number
  name: string
  description: string
  transform: (input: T) => unknown
  required: boolean
  breaking: boolean
  estimatedTime: number
  dependsOn?: number[]
  validate?: (input: T) => boolean
}
```

### BreakingChangeMigrationComplexity

Complexity of migration.

```typescript
type BreakingChangeMigrationComplexity = 'trivial' | 'moderate' | 'complex' | 'breaking'
```

### MigrationPlan

Full migration plan.

```typescript
interface MigrationPlan {
  id: string
  fromVersion: string
  toVersion: string
  steps: BreakingChangeMigrationStep<unknown>[]
  totalTime: number
  complexity: BreakingChangeMigrationComplexity
  requiredChanges: number
  optionalChanges: number
  breakingChanges: number
  prerequisites?: string[]
  postMigration?: string[]
}
```

## Change Detection

### ChangeDetectionOptions

Options for change detection.

```typescript
interface ChangeDetectionOptions {
  deep: boolean
  includePrivate: boolean
  includeDeprecated: boolean
  ignore?: string[]
  equality?: (a: unknown, b: unknown) => boolean
}
```

### Change

A detected change.

```typescript
interface Change {
  id: string
  type: ChangeType
  path: string
  oldValue?: unknown
  newValue?: unknown
  isBreaking: boolean
  description: string
}
```

### ChangeType

Type of change.

```typescript
type ChangeType =
  | 'added'
  | 'removed'
  | 'modified'
  | 'renamed'
  | 'moved'
  | 'deprecated'
  | 'restored'
```

## Impact Analysis

### ImpactAnalysis

Analysis of change impact.

```typescript
interface ImpactAnalysis {
  id: string
  changes: BreakingChange[]
  scope: ImpactScope
  affectedComponents: AffectedComponent[]
  riskLevel: RiskLevel
  recommendations: ImpactRecommendation[]
  mitigations: MitigationStrategy[]
}
```

### ImpactScope

Scope of impact.

```typescript
type ImpactScope = 'type' | 'module' | 'package' | 'project' | 'ecosystem'
```

### AffectedComponent

An affected component.

```typescript
interface AffectedComponent {
  name: string
  type: 'function' | 'class' | 'interface' | 'type' | 'module' | 'package'
  usageCount: number
  severity: 'low' | 'medium' | 'high' | 'critical'
  requiredChanges: string[]
}
```

### RiskLevel

Risk level of changes.

```typescript
type RiskLevel = 'none' | 'low' | 'medium' | 'high' | 'critical'
```

### MitigationStrategy

Strategy to mitigate impact.

```typescript
interface MitigationStrategy {
  name: string
  description: string
  steps: string[]
  appliesTo: string[]
  effectiveness: number
}
```

## Prevention

### BreakingChangeRule

Rule for detecting breaking changes.

```typescript
interface BreakingChangeRule {
  id: string
  name: string
  description: string
  check: (change: Change) => boolean
  severity: BreakingChangeSeverity
  autoFix: boolean
}
```

### BreakingChangeGuard

Guard to prevent breaking changes.

```typescript
interface BreakingChangeGuard {
  name: string
  rules: BreakingChangeRule[]
  exceptions?: string[]
  customChecks?: ((change: Change) => boolean)[]
}
```

## Related Types

- [Migration Utilities](/api/migration) - Type migration tools
- [Deprecation Management](/api/deprecation) - Deprecation warnings
- [Enhanced Error Messages](/api/enhanced-error) - Better error messages