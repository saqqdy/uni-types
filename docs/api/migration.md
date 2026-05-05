# Migration Utilities

Type migration utilities for transitioning between versions. *(v1.11.0)*

## Overview

Migration utilities help you transition types from v1.x to v2.0.0, providing tools for type transformation, compatibility layers, and migration validation.

## Migration Helpers

### MigrationStatus

Represents the status of a migration process.

```typescript
type MigrationStatus = 'pending' | 'in_progress' | 'completed' | 'failed' | 'skipped'
```

### MigrationResult

Result of a type migration operation.

```typescript
interface MigrationResult<T> {
  original: T
  migrated: T
  status: MigrationStatus
  changes: MigrationChange[]
  warnings: MigrationWarning[]
  errors: MigrationError[]
}
```

### MigrationChange

Represents a single change during migration.

```typescript
interface MigrationChange {
  path: string
  type: MigrationChangeType
  oldValue?: unknown
  newValue?: unknown
  description: string
}
```

### MigrationChangeType

Types of changes that can occur during migration.

```typescript
type MigrationChangeType =
  | 'rename'
  | 'restructure'
  | 'add'
  | 'remove'
  | 'modify'
  | 'deprecate'
  | 'replace'
```

## Type Transformation

### MigrateToV2

Migrate a type from v1 to v2 structure.

```typescript
type MigrateToV2<T> = T extends infer U
  ? U extends object
    ? { [K in keyof U]: MigrateToV2<U[K]> }
    : U
  : never
```

**Example:**

```typescript
type OldConfig = {
  apiUrl: string
  timeout: number
}

type NewConfig = MigrateToV2<OldConfig>
// { apiUrl: string; timeout: number }
```

### MigrateFromV1

Migrate a type from v1 structure (backwards compatibility).

```typescript
type MigrateFromV1<T> = T extends infer U
  ? U extends object
    ? { [K in keyof U]: MigrateFromV1<U[K]> }
    : U
  : never
```

### TransformType

Transform a type according to transformation rules.

```typescript
type TransformType<T, _Rules> = T
```

### RenameType

Rename a property in a type.

```typescript
type RenameType<T, From extends keyof T, To extends string> = Omit<T, From> & {
  [K in To]: T[From]
}
```

**Example:**

```typescript
type OldUser = { name: string; age: number }
type NewUser = RenameType<OldUser, 'name', 'fullName'>
// { fullName: string; age: number }
```

### RestructureType

Restructure a type according to a schema.

```typescript
type RestructureType<T, Schema> = {
  [K in keyof Schema]: K extends keyof T ? T[K] : Schema[K]
}
```

### FlattenNamespace

Flatten nested namespaces into dot-notation keys.

```typescript
type FlattenNamespace<T> = T extends object
  ? {
      [K in keyof T as K extends string
        ? T[K] extends object
          ? `${K}.${keyof T[K] & string}`
          : K
        : never]: T[K]
    }
  : T
```

**Example:**

```typescript
type Nested = {
  user: { name: string }
  config: { port: number }
}
type Flat = FlattenNamespace<Nested>
// { 'user.name': string; 'config.port': number }
```

## Compatibility Layer

### CompatMode

Compatibility mode for version transitions.

```typescript
type CompatMode = 'v1' | 'v2' | 'both'
```

### CompatV1

Mark a type as v1 compatible.

```typescript
type CompatV1<T> = T & {
  __compat_v1__: true
}
```

### CompatV2

Mark a type as v2 compatible.

```typescript
type CompatV2<T> = T & {
  __compat_v2__: true
}
```

### Backport

Backport features from a newer version.

```typescript
type Backport<T, Version extends string> = T & {
  __backported_from__: Version
}
```

### ForwardPort

Forward port features from an older version.

```typescript
type ForwardPort<T, Version extends string> = T & {
  __forwardported_from__: Version
}
```

## Migration Validation

### ValidateMigration

Validate that a migration between types is possible.

```typescript
type ValidateMigration<T, U> = T extends U
  ? U extends T
    ? true
    : false
  : false
```

**Example:**

```typescript
type IsValid = ValidateMigration<{ a: string }, { a: string }>
// true

type IsInvalid = ValidateMigration<{ a: string }, { a: number }>
// false
```

### MigrationDiff

Get the difference between two types.

```typescript
interface MigrationDiff<T, U> {
  onlyInSource: Exclude<keyof T, keyof U>
  onlyInTarget: Exclude<keyof U, keyof T>
  different: {
    [K in keyof T & keyof U]: T[K] extends U[K]
      ? U[K] extends T[K]
        ? never
        : K
      : K
  }[keyof T & keyof U]
}
```

### BreakingChanges

Detect breaking changes between types.

```typescript
interface BreakingChanges<T, U> {
  removed: Exclude<keyof T, keyof U>
  changed: {
    [K in keyof T & keyof U]: T[K] extends U[K] ? never : K
  }[keyof T & keyof U]
  addedRequired: {
    [K in keyof U]: K extends keyof T
      ? never
      : undefined extends U[K]
        ? never
        : K
  }[keyof U]
}
```

## Codemod Types

### Codemod

Definition of a codemod for automated migrations.

```typescript
interface Codemod<T> {
  name: string
  version: string
  description: string
  rules: CodemodRule<T>[]
  dependencies?: string[]
  dryRun?: boolean
}
```

### CodemodRule

A single rule within a codemod.

```typescript
interface CodemodRule<T> {
  name: string
  pattern: string | RegExp
  replacement: string | ((match: string) => string)
  files?: string[]
  condition?: (context: CodemodContext<T>) => boolean
}
```

### CodemodResult

Result of executing a codemod.

```typescript
interface CodemodResult<_T> {
  codemod: string
  status: 'success' | 'partial' | 'failed'
  filesProcessed: number
  filesModified: number
  changes: CodemodChange[]
  errors: CodemodError[]
  executionTime: number
}
```

## Migration Execution

### MigrationStep

A single step in a migration plan.

```typescript
interface MigrationStep<T> {
  step: number
  name: string
  description: string
  action: (input: T) => T
  required: boolean
  estimatedTime: number
}
```

### MigrationPath

Sequence of steps to migrate between types.

```typescript
type MigrationPath<T, _U> = MigrationStep<T>[]
```

### MigrationConfig

Configuration for migration execution.

```typescript
interface MigrationConfig {
  fromVersion: string
  toVersion: string
  continueOnError: boolean
  dryRun: boolean
  customRules?: MigrationRule<unknown>[]
  exclude?: string[]
  include?: string[]
}
```

### MigrationComplexity

Complexity level of a migration.

```typescript
type MigrationComplexity = 'trivial' | 'simple' | 'moderate' | 'complex' | 'breaking'
```

## Related Types

- [Deprecation Management](/api/deprecation) - Deprecation warnings and legacy support
- [Breaking Change Detection](/api/breaking-change) - Detect and report breaking changes
- [Performance Optimization](/api/perf) - Type performance utilities
