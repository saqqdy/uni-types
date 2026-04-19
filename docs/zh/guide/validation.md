# 验证规则

**自 1.5.0 起**

用于验证和清理的类型工具。

## 概述

验证规则模块提供了数据验证所需的完整类型支持，包括字段验证器、组合验证器、验证约束和模式构建器。这些类型可以帮助你构建类型安全的数据验证系统，确保输入数据符合预期格式。

通过这些类型工具，你可以定义字符串、数字、日期、数组和对象的验证规则，组合多个验证器实现复杂验证逻辑，以及构建可复用的验证模式。

## 基本用法

```typescript
import type { Validator, StringFieldValidator, NumberFieldValidator, SchemaBuilder } from 'uni-types'

// 使用字符串验证器
type NameValidator = StringFieldValidator<string>

// 使用数字验证器
type AgeValidator = NumberFieldValidator<number>

// 使用模式构建器
interface UserSchema {
  name: string
  email: string
  age: number
}
```

## 主要类型

### Validator

基础验证器类型，定义验证结果和链式操作。

```typescript
type Validator<T = unknown> = {
  validate: (value: unknown) => ValidatorResult<T>
  optional: () => Validator<T | undefined>
  nullable: () => Validator<T | null>
}
```

### StringFieldValidator

字符串字段验证器，提供丰富的字符串验证方法。

```typescript
type StringFieldValidator<T = string> = Validator<T> & {
  minLength: (length: number) => StringFieldValidator<T>
  maxLength: (length: number) => StringFieldValidator<T>
  pattern: (regex: RegExp) => StringFieldValidator<T>
  email: () => StringFieldValidator<T>
  url: () => StringFieldValidator<T>
  uuid: () => StringFieldValidator<T>
  oneOf: (values: T[]) => StringFieldValidator<T>
}
```

### NumberFieldValidator

数字字段验证器，提供数值范围和类型验证方法。

```typescript
type NumberFieldValidator<T = number> = Validator<T> & {
  min: (value: number) => NumberFieldValidator<T>
  max: (value: number) => NumberFieldValidator<T>
  range: (min: number, max: number) => NumberFieldValidator<T>
  integer: () => NumberFieldValidator<T>
  positive: () => NumberFieldValidator<T>
  multipleOf: (value: number) => NumberFieldValidator<T>
}
```

### SchemaBuilder

模式构建器，用于创建各种类型的验证器。

```typescript
type SchemaBuilder = {
  string: () => StringFieldValidator
  number: () => NumberFieldValidator
  boolean: () => BooleanFieldValidator
  date: () => DateFieldValidator
  array: <U>(validator?: Validator<U>) => ArrayFieldValidator<U[]>
  object: <S extends Record<string, Validator>>(schema?: S) => ObjectFieldValidator
  union: <U extends Validator[]>(...validators: U) => Validator<...>
}
```

### ValidationError

验证错误类型，包含错误路径、消息和代码。

```typescript
type ValidationError = {
  path: string
  message: string
  code: string
  value?: unknown
  constraints?: Record<string, unknown>
}
```

## 相关

- [API 参考](/zh/api/validation/)
