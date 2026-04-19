# Validation Rules

**Since 1.5.0**

Types for validation and sanitization of data.

## Overview

Validation Rules provides types for building type-safe validation systems with field validators, custom rules, and schema builders. It supports string, number, array, and object validation with composable rules.

This module enables building comprehensive validation pipelines with proper TypeScript inference. It includes types for validation errors, constraints, and sanitization rules for data transformation.

## Basic Usage

```typescript
import type { Validator, StringFieldValidator, SchemaBuilder, ValidationRule } from 'uni-types'

// String validator
type EmailValidator = StringFieldValidator<string>

// Custom validation rule
type EmailRule = ValidationRule<string>

// Schema builder pattern
type UserSchema = SchemaBuilder
```

## Key Types

### Validator

Base validator interface.

```typescript
type Validator<T = unknown> = {
  validate: (value: unknown) => ValidatorResult<T>
  optional: () => Validator<T | undefined>
  nullable: () => Validator<T | null>
}
```

### StringFieldValidator

String field validator with chainable methods.

```typescript
type StringFieldValidator<T = string> = Validator<T> & {
  minLength: (length: number) => StringFieldValidator<T>
  maxLength: (length: number) => StringFieldValidator<T>
  pattern: (regex: RegExp) => StringFieldValidator<T>
  email: () => StringFieldValidator<T>
  url: () => StringFieldValidator<T>
  oneOf: (values: T[]) => StringFieldValidator<T>
}
```

### NumberFieldValidator

Number field validator with constraints.

```typescript
type NumberFieldValidator<T = number> = Validator<T> & {
  min: (value: number) => NumberFieldValidator<T>
  max: (value: number) => NumberFieldValidator<T>
  integer: () => NumberFieldValidator<T>
  positive: () => NumberFieldValidator<T>
  multipleOf: (value: number) => NumberFieldValidator<T>
}
```

### ObjectFieldValidator

Object field validator for shape validation.

```typescript
type ObjectFieldValidator<T = Record<string, unknown>> = Validator<T> & {
  shape: <S extends Record<string, Validator>>(schema: S) => ObjectFieldValidator<{ ... }>
  partial: () => ObjectFieldValidator<Partial<T>>
  strict: () => ObjectFieldValidator<T>
}
```

### SchemaBuilder

Schema builder for constructing validators.

```typescript
type SchemaBuilder = {
  string: () => StringFieldValidator
  number: () => NumberFieldValidator
  boolean: () => BooleanFieldValidator
  array: <U>(validator?: Validator<U>) => ArrayFieldValidator<U[]>
  object: <S extends Record<string, Validator>>(schema?: S) => ObjectFieldValidator
}
```

## Related

- [API Reference](/api/validation/)
- [Config](./config) - Configuration types
