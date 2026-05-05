# Enhanced Error Messages

Better error messages and debugging utilities. *(v1.11.0)*

## Overview

Enhanced error message types help you create detailed, informative type errors with suggestions, diagnostics, and recovery options.

## Error Enhancement

### DetailedError

Type with detailed error information.

```typescript
type DetailedError<T> = T & {
  __error_details__: ErrorDetails
}
```

### ErrorDetails

Detailed error information.

```typescript
interface ErrorDetails {
  code: string
  message: string
  category: ErrorCategory
  context?: ErrorContext
  suggestion?: string
  docs?: string
  stack?: string
  timestamp?: number
}
```

### ErrorCategory

Category of the error.

```typescript
type ErrorCategory =
  | 'type'
  | 'syntax'
  | 'semantic'
  | 'constraint'
  | 'runtime'
  | 'validation'
  | 'assertion'
  | 'inference'
```

### TypedError

Error with a specific category.

```typescript
type TypedError<T extends ErrorCategory> = {
  category: T
  message: string
  code: string
}
```

**Example:**

```typescript
type TypeErr = TypedError<'type'>
// { category: 'type'; message: string; code: string }
```

### ErrorContext

Context information for an error.

```typescript
type ErrorContext<T = unknown> = {
  originalType?: T
  expectedType?: string
  actualType?: string
  path?: string[]
  line?: number
  column?: number
  filePath?: string
  data?: Record<string, unknown>
}
```

### ErrorSuggestion

Type with a suggestion for fixing.

```typescript
type ErrorSuggestion<T> = T & {
  __suggestion__: SuggestionInfo
}
```

## Diagnostic Types

### Diagnostic

Diagnostic information attached to a type.

```typescript
type Diagnostic<T> = T & {
  __diagnostic__: DiagnosticInfo
}
```

### DiagnosticInfo

Diagnostic details.

```typescript
interface DiagnosticInfo {
  code: DiagnosticCode
  message: string
  severity: DiagnosticSeverity
  source?: string
  related?: RelatedDiagnostic[]
}
```

### DiagnosticSeverity

Severity level for diagnostics.

```typescript
type DiagnosticSeverity = 'error' | 'warning' | 'info' | 'hint'
```

### DiagnosticLocation

Location of a diagnostic.

```typescript
interface DiagnosticLocation {
  file: string
  startLine: number
  startColumn: number
  endLine?: number
  endColumn?: number
}
```

## Type Errors

### TypeMismatch

Error for type mismatches.

```typescript
type TypeMismatch<T, Expected> = {
  actual: T
  expected: Expected
  message: string
  details: MismatchDetails
}
```

### MismatchKind

Kind of type mismatch.

```typescript
type MismatchKind =
  | 'type'
  | 'structure'
  | 'value'
  | 'constraint'
  | 'missing_property'
  | 'extra_property'
  | 'nullability'
  | 'optionality'
  | 'arity'
  | 'return_type'
  | 'parameter_type'
```

### MissingProperty

Error for missing properties.

```typescript
type MissingProperty<T, K extends keyof T> = {
  object: T
  key: K
  message: string
}
```

### InvalidType

Error for invalid types.

```typescript
type InvalidType<T, Valid> = {
  invalid: T
  valid: Valid
  message: string
}
```

### ConstraintViolation

Error for constraint violations.

```typescript
type ConstraintViolation<T, Constraint> = {
  type: T
  constraint: Constraint
  details: string
}
```

## Error Recovery

### RecoverableError

Error that can be recovered.

```typescript
type RecoverableError<T> = T & {
  __recoverable__: true
  __recovery_options__: RecoveryOption[]
}
```

### ErrorRecovery

Recovery information for an error.

```typescript
type ErrorRecovery<T> = {
  error: T
  strategy: RecoveryStrategy
  recovered?: unknown
  success?: boolean
}
```

### RecoveryStrategy

Strategy for recovering from errors.

```typescript
type RecoveryStrategy =
  | 'fallback'
  | 'default'
  | 'skip'
  | 'retry'
  | 'transform'
  | 'ignore'
  | 'abort'
```

### RecoveryOption

Option for recovering from an error.

```typescript
interface RecoveryOption {
  name: string
  strategy: RecoveryStrategy
  description: string
  value?: unknown
  isDefault?: boolean
}
```

### FallbackType

Fallback type for error recovery.

```typescript
type FallbackType<T, Fallback> = T extends Fallback ? T : Fallback
```

**Example:**

```typescript
type Result = FallbackType<string | undefined, string>
// string
```

### GracefulDegradation

Type that gracefully degrades.

```typescript
type GracefulDegradation<T> = T | DegradedValue
```

## Help Messages

### HelpMessage

Type with help information.

```typescript
type HelpMessage<T> = T & {
  __help__: HelpInfo
}
```

### HelpInfo

Help information.

```typescript
interface HelpInfo {
  text: string
  url?: string
  examples?: HelpExample[]
  related?: string[]
}
```

### DocumentationLink

Type with documentation link.

```typescript
type DocumentationLink<T> = T & {
  __docs__: string
}
```

### ExampleUsage

Type with example usage.

```typescript
type ExampleUsage<T> = T & {
  __example__: string
}
```

### QuickFix

Type with quick fix information.

```typescript
type QuickFix<T> = T & {
  __quick_fix__: QuickFixInfo
}
```

### QuickFixAction

Action type for quick fixes.

```typescript
type QuickFixAction = 'replace' | 'insert' | 'delete' | 'rename' | 'refactor'
```

## Error Reporting

### ErrorReport

Report of errors and warnings.

```typescript
interface ErrorReport {
  id: string
  timestamp: Date
  errorCount: number
  warningCount: number
  errors: ReportedError[]
  warnings: ReportedWarning[]
  summary: string
}
```

### ErrorCatalog

Catalog of error types.

```typescript
interface ErrorCatalog {
  version: string
  entries: Record<string, ErrorCatalogEntry>
  categories: ErrorCategory[]
  lastUpdated: Date
}
```

### CommonErrorType

Common error type names.

```typescript
type CommonErrorType =
  | 'type_error'
  | 'syntax_error'
  | 'reference_error'
  | 'range_error'
  | 'constraint_error'
  | 'assertion_error'
  | 'null_error'
  | 'undefined_error'
  | 'property_error'
  | 'argument_error'
  | 'return_error'
  | 'generic_error'
```

## Related Types

- [Breaking Change Detection](/api/breaking-change) - Detect breaking changes
- [Migration Utilities](/api/migration) - Type migration tools
- [Deprecation Management](/api/deprecation) - Deprecation warnings