# Code Generation Templates

Type-level code generation templates and utilities.

## Overview

The `generate` module provides type-level code generation capabilities, including templates, builders, and output formatting.

## Template Types

### Template

Define a code generation template:

```ts
import type { Template, TemplateString, TemplateResult } from 'uni-types'

interface MyTemplate extends Template<{ name: string }> {
  name: string
  params: { name: string }
  generate: () => string
}
```

### TemplateString

Type-safe template string interpolation:

```ts
import type { TemplateString } from 'uni-types'

type Greeting = TemplateString<'Hello, {{name}}!', { name: string }>
// Resolves template placeholders
```

## Generated Types

### GeneratedType / GeneratedInterface

```ts
import type { GeneratedType, GeneratedInterface, GeneratedProperty } from 'uni-types'

interface MyGeneratedType extends GeneratedType<string> {
  name: string
  type: string
  description?: string
  exported: boolean
}

interface MyGeneratedInterface extends GeneratedInterface<{ a: number }> {
  name: string
  properties: { a: GeneratedProperty<number> }
  extends?: string[]
  exported: boolean
}
```

### GeneratedClass / GeneratedFunction

```ts
import type { GeneratedClass, GeneratedFunction, GeneratedMethod } from 'uni-types'

interface MyClass extends GeneratedClass {
  name: string
  properties: GeneratedProperty[]
  methods: GeneratedMethod[]
  extends?: string
  implements?: string[]
}
```

## Builder Types

### TypeBuilder / InterfaceBuilder

```ts
import type { TypeBuilder, InterfaceBuilder, PropertyOptions } from 'uni-types'

interface MyTypeBuilder extends TypeBuilder<string> {
  name: (name: string) => TypeBuilder<string>
  description: (desc: string) => TypeBuilder<string>
  export: (shouldExport: boolean) => TypeBuilder<string>
  build: () => GeneratedType<string>
}
```

### ClassBuilder / FunctionBuilder

```ts
import type { ClassBuilder, FunctionBuilder, MethodOptions } from 'uni-types'

interface MyClassBuilder extends ClassBuilder<{ a: number }> {
  property: (name: string, type: unknown, options?: PropertyOptions) => ClassBuilder<{ a: number }>
  method: (name: string, options?: MethodOptions) => ClassBuilder<{ a: number }>
  build: () => GeneratedClass<{ a: number }>
}
```

## Output Formats

### OutputFormat

```ts
import type { OutputFormat, FormattedOutput } from 'uni-types'

type Format = OutputFormat // 'typescript' | 'javascript' | 'json' | 'yaml' | 'markdown' | 'dts'

interface MyOutput extends FormattedOutput {
  format: 'typescript'
  content: string
  metadata: { generatedAt: string, version: string }
}
```

## Generation Options

### TypeScript / JavaScript Options

```ts
import type { TypeScriptOptions, JavaScriptOptions } from 'uni-types'

interface TSOpts extends TypeScriptOptions {
  format: 'typescript'
  target: 'ES2022'
  module: 'ESModule'
  strict: boolean
}
```

## Schema Generation

### GenerateFromSchema

```ts
import type { GenerateFromSchema, SchemaField } from 'uni-types'

interface UserSchema {
  name: SchemaField<string>
  age: SchemaField<number>
}

type User = GenerateFromSchema<unknown, UserSchema>
// { name: string, age: number }
```

## AST Types

### ASTNode

```ts
import type { ASTNode, SourceLocation, Position } from 'uni-types'

interface MyNode extends ASTNode<string> {
  type: 'Identifier'
  value?: string
  children?: ASTNode[]
  loc?: SourceLocation
}
```

## API Reference

| Type | Description |
|------|-------------|
| `Template<T>` | Code generation template |
| `TemplateString<S, V>` | Template string interpolation |
| `GeneratedType<T>` | Generated type representation |
| `GeneratedInterface<T>` | Generated interface |
| `GeneratedClass<T>` | Generated class |
| `GeneratedFunction<T>` | Generated function |
| `TypeBuilder<T>` | Type builder interface |
| `InterfaceBuilder<T>` | Interface builder |
| `ClassBuilder<T>` | Class builder |
| `OutputFormat` | Output format type |
| `GenerateFromSchema<T, S>` | Generate from schema |
| `ASTNode<T>` | AST node type |