# Type-Level Compiler

**Since 1.6.0**

Types for code generation and transformation.

## Overview

Type-Level Compiler provides types for building compilers, parsers, and code transformers. It supports AST structures, token streams, parser combinators, and code generation utilities.

This module enables building type-safe code analysis tools, transpilers, and AST-based transformations.

## Basic Usage

```typescript
import type { ASTNode, Token, Parser, CodeGenerator, Transformer } from 'uni-types'

// AST node definition
type ExpressionNode = ASTNode<'expression', {
  type: 'binary'
  operator: string
  left: ASTNode
  right: ASTNode
}>

// Token definition
type NumberToken = Token<'literal', '123'>

// Parser result
type ParseOutput = ParserResult<ASTNode>
```

## Key Types

### ASTNode

Abstract Syntax Tree node type.

```typescript
type ASTNode<T extends ASTNodeType = ASTNodeType, Data = unknown> = {
  type: T
  data: Data
  children?: ASTNode[]
  parent?: ASTNode
  loc?: SourceLocation
}
```

### ASTNodeType

Supported AST node types.

```typescript
type ASTNodeType = 'program' | 'expression' | 'statement' | 'declaration' | 'identifier' | 'literal' | 'binary' | 'unary' | 'call' | 'member' | 'function' | 'class' | 'module'
```

### Token

Token type with type and value.

```typescript
type Token<T extends TokenType = TokenType, V = string> = {
  type: T
  value: V
  loc?: SourceLocation
}
```

### TokenType

Supported token types.

```typescript
type TokenType = 'keyword' | 'identifier' | 'literal' | 'operator' | 'punctuation' | 'comment' | 'whitespace' | 'eof'
```

### Parser

Parser type with parse operation.

```typescript
type Parser<T = unknown> = {
  parse: (input: TokenStream) => ParserResult<T>
  parseWith: (input: TokenStream, options: ParseOptions) => ParserResult<T>
}
```

### ParserResult

Parser result type.

```typescript
type ParserResult<T = unknown> = {
  success: boolean
  result?: T
  error?: ParseError
  consumed: number
}
```

### CodeGenerator

Code generator type.

```typescript
type CodeGenerator<T = unknown> = {
  generate: (ast: ASTNode) => GeneratedCode
  generateWith: (ast: ASTNode, options: GenerateOptions) => GeneratedCode
}
```

### Transformer

Transformer type for AST transformations.

```typescript
type Transformer<T = unknown> = {
  transform: (node: ASTNode) => ASTNode
  transformDeep: (node: ASTNode) => ASTNode
}
```

### Formatter

Formatter type for code formatting.

```typescript
type Formatter<T = string> = {
  format: (code: T) => FormattedCode
  formatWith: (code: T, options: FormatOptions) => FormattedCode
}
```

## Related

- [Pattern Matching](./pattern) - Pattern matching types
- [Functional Programming](./functional) - Functional utilities