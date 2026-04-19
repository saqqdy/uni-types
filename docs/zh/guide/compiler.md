# 类型级编译器

**始于 1.6.0**

用于代码生成和转换的类型。

## 概述

类型级编译器提供了用于构建编译器、解析器和代码转换器的类型。它支持 AST 结构、词法流、解析器组合子和代码生成工具。

此模块支持构建类型安全的代码分析工具、转译器和基于 AST 的转换。

## 基本用法

```typescript
import type { ASTNode, Token, Parser, CodeGenerator, Transformer } from 'uni-types'

// AST 节点定义
type ExpressionNode = ASTNode<'expression', {
  type: 'binary'
  operator: string
  left: ASTNode
  right: ASTNode
}>

// Token 定义
type NumberToken = Token<'literal', '123'>

// 解析器结果
type ParseOutput = ParserResult<ASTNode>
```

## 核心类型

### ASTNode

抽象语法树节点类型。

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

支持的 AST 节点类型。

```typescript
type ASTNodeType = 'program' | 'expression' | 'statement' | 'declaration' | 'identifier' | 'literal' | 'binary' | 'unary' | 'call' | 'member' | 'function' | 'class' | 'module'
```

### Token

具有类型和值的 Token 类型。

```typescript
type Token<T extends TokenType = TokenType, V = string> = {
  type: T
  value: V
  loc?: SourceLocation
}
```

### TokenType

支持的词法类型。

```typescript
type TokenType = 'keyword' | 'identifier' | 'literal' | 'operator' | 'punctuation' | 'comment' | 'whitespace' | 'eof'
```

### Parser

具有解析操作的 Parser 类型。

```typescript
type Parser<T = unknown> = {
  parse: (input: TokenStream) => ParserResult<T>
  parseWith: (input: TokenStream, options: ParseOptions) => ParserResult<T>
}
```

### ParserResult

解析器结果类型。

```typescript
type ParserResult<T = unknown> = {
  success: boolean
  result?: T
  error?: ParseError
  consumed: number
}
```

### CodeGenerator

代码生成器类型。

```typescript
type CodeGenerator<T = unknown> = {
  generate: (ast: ASTNode) => GeneratedCode
  generateWith: (ast: ASTNode, options: GenerateOptions) => GeneratedCode
}
```

### Transformer

用于 AST 转换的 Transformer 类型。

```typescript
type Transformer<T = unknown> = {
  transform: (node: ASTNode) => ASTNode
  transformDeep: (node: ASTNode) => ASTNode
}
```

### Formatter

用于代码格式化的 Formatter 类型。

```typescript
type Formatter<T = string> = {
  format: (code: T) => FormattedCode
  formatWith: (code: T, options: FormatOptions) => FormattedCode
}
```

## 相关

- [模式匹配](./pattern) - 模式匹配类型
- [函数式编程](./functional) - 函数式工具