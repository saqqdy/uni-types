# 代码生成模板

类型级别的代码生成模板和工具。

## 概述

`generate` 模块提供了类型级别的代码生成能力，包括模板、构建器和输出格式化。

## 模板类型

### Template

定义代码生成模板：

```ts
import type { Template, TemplateString, TemplateResult } from 'uni-types'

interface MyTemplate extends Template<{ name: string }> {
  name: string
  params: { name: string }
  generate: () => string
}
```

## 生成类型

### GeneratedType / GeneratedInterface

```ts
import type { GeneratedType, GeneratedInterface, GeneratedProperty } from 'uni-types'

interface MyGeneratedInterface extends GeneratedInterface<{ a: number }> {
  name: string
  properties: { a: GeneratedProperty<number> }
  extends?: string[]
  exported: boolean
}
```

## 构建器类型

### TypeBuilder / InterfaceBuilder

```ts
import type { TypeBuilder, InterfaceBuilder } from 'uni-types'

interface MyTypeBuilder extends TypeBuilder<string> {
  name: (name: string) => TypeBuilder<string>
  build: () => GeneratedType<string>
}
```

## 输出格式

```ts
import type { OutputFormat, FormattedOutput } from 'uni-types'

type Format = OutputFormat // 'typescript' | 'javascript' | 'json' | 'yaml' | 'markdown' | 'dts'
```

## API 参考

| 类型 | 描述 |
|------|------|
| `Template<T>` | 代码生成模板 |
| `GeneratedType<T>` | 生成的类型 |
| `GeneratedInterface<T>` | 生成的接口 |
| `GeneratedClass<T>` | 生成的类 |
| `TypeBuilder<T>` | 类型构建器 |
| `OutputFormat` | 输出格式类型 |
| `GenerateFromSchema<T, S>` | 从 schema 生成 |
| `ASTNode<T>` | AST 节点类型 |