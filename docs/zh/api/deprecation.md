# Deprecation Management

Deprecation warnings and legacy support utilities. *(v1.11.0)*

## Overview

Deprecation management utilities help you mark types as deprecated, manage legacy support, and handle version transitions gracefully.

## Deprecation Markers

### Deprecated

Mark a type as deprecated with a message.

```typescript
type Deprecated<T, Message extends string = ''> = T & {
  __deprecated__: true
  __deprecation_message__: Message
}
```

**Example:**

```typescript
type OldAPI = Deprecated<{
  method: string
}, 'Use NewAPI instead'>

// OldAPI has __deprecated__ marker
```

### DeprecatedSince

Mark a type as deprecated since a specific version.

```typescript
type DeprecatedSince<T, Version extends string> = T & {
  __deprecated_since__: Version
}
```

**Example:**

```typescript
type LegacyConfig = DeprecatedSince<{
  oldSetting: boolean
}, '1.10.0'>
```

### WillBeRemoved

Mark a type to be removed in a future version.

```typescript
type WillBeRemoved<T, Version extends string> = T & {
  __will_be_removed_in__: Version
}
```

**Example:**

```typescript
type OldFeature = WillBeRemoved<{
  deprecatedField: string
}, '2.0.0'>
```

### Replacement

Mark a replacement type for a deprecated type.

```typescript
type Replacement<T, New> = T & {
  __replacement__: New
  __migrate_to__: New
}
```

## Deprecation Info

### DeprecationInfo

Detailed information about a deprecated type.

```typescript
interface DeprecationInfo {
  name: string
  message: string
  since?: string
  willBeRemoved?: string
  replacement?: string
  migrationGuide?: string
  level: DeprecationLevel
}
```

### DeprecationLevel

Severity level of deprecation.

```typescript
type DeprecationLevel = 'info' | 'warning' | 'error' | 'critical'
```

## Legacy Support

### Legacy

Mark a type as legacy (for backwards compatibility).

```typescript
type Legacy<T> = T & {
  __legacy__: true
}
```

### LegacyAlias

Create an alias for a deprecated type.

```typescript
type LegacyAlias<T, New extends string> = T & {
  __legacy_alias__: New
}
```

### BackwardsCompatible

Mark a type as backwards compatible.

```typescript
type BackwardsCompatible<T, Old> = T & {
  __backwards_compatible_with__: Old
}
```

### Polyfill

Mark a type as a polyfill.

```typescript
type Polyfill<T, Implementation> = T & {
  __polyfill__: Implementation
}
```

## Warning Types

### Warning

Mark a type with a warning.

```typescript
type Warning<T> = T & {
  __warning__: true
}
```

### WarningLevel

Severity level for warnings.

```typescript
type WarningLevel = 'info' | 'warning' | 'error'
```

### DeprecationWarning

Warning for deprecated types.

```typescript
interface DeprecationWarning<T> {
  code: string
  message: string
  type: T
  version?: string
  replacement?: string
  level: WarningLevel
}
```

### DeprecationMigrationWarning

Warning for migration path.

```typescript
interface DeprecationMigrationWarning<T> {
  code: string
  message: string
  type: T
  migrationPath?: string
  isBreaking?: boolean
  suggestion?: string
}
```

## Version Gates

### VersionGate

Restrict a type to a version range.

```typescript
type VersionGate<T, Min extends string, Max extends string> = T & {
  __min_version__: Min
  __max_version__: Max
}
```

**Example:**

```typescript
type Feature = VersionGate<{
  newMethod: () => void
}, '1.11.0', '2.0.0'>
```

### RemovedIn

Mark a type as removed in a version.

```typescript
type RemovedIn<T, Version extends string> = T & {
  __removed_in__: Version
}
```

### IntroducedIn

Mark a type as introduced in a version.

```typescript
type IntroducedIn<T, Version extends string> = T & {
  __introduced_in__: Version
}
```

**Example:**

```typescript
type NewFeature = IntroducedIn<{
  feature: string
}, '1.11.0'>
```

### VersionedAPI

Version-specific API type.

```typescript
type VersionedAPI<T, V extends string> = T & {
  __version__: V
}
```

## Sunset Utilities

### Sunset

Mark a type for sunset (end-of-life).

```typescript
type Sunset<T> = T & {
  __sunset__: true
}
```

### SunsetSchedule

Schedule for sunsetting a type.

```typescript
interface SunsetSchedule<T> {
  type: T
  announced: Date
  deprecated: Date
  removed: Date
  phases: SunsetPhase[]
}
```

### SunsetPhase

A phase in the sunset process.

```typescript
interface SunsetPhase {
  name: string
  startDate: Date
  endDate?: Date
  description: string
  warningLevel: WarningLevel
}
```

### EndOfLife

End-of-life information.

```typescript
interface EndOfLife<T> {
  type: T
  date: Date
  reason?: string
  migrationPath?: string
}
```

## Deprecation Tracking

### DeprecationStatus

Current status of a deprecated item.

```typescript
type DeprecationStatus =
  | 'active'
  | 'deprecated'
  | 'warning'
  | 'critical'
  | 'removed'
```

### DeprecationTracker

Tracker for deprecated items.

```typescript
interface DeprecationTracker {
  items: Map<string, DeprecationInfo>
  add: (name: string, info: DeprecationInfo) => void
  get: (name: string) => DeprecationInfo | undefined
  isDeprecated: (name: string) => boolean
  getAll: () => DeprecationInfo[]
  getByLevel: (level: DeprecationLevel) => DeprecationInfo[]
}
```

### DeprecationCheckResult

Result of checking for deprecations.

```typescript
interface DeprecationCheckResult {
  hasDeprecations: boolean
  count: number
  deprecations: DeprecationInfo[]
  warnings: string[]
  errors: string[]
}
```

## Related Types

- [Migration Utilities](/api/migration) - Type migration tools
- [Breaking Change Detection](/api/breaking-change) - Detect breaking changes
- [Enhanced Error Messages](/api/enhanced-error) - Better error messages