# 开发者工具集成

用于 IDE 集成、调试和诊断的类型级开发者工具。

## DevTools

开发者工具配置的基础类型。

```typescript
import type { DevTools } from 'uni-types'

type Tools = DevTools<{
	inspector: true
	profiler: true
	debugger: false
}>
```

## TypeInspector

在类型级别检查类型的内部结构。

```typescript
import type { TypeInspector } from 'uni-types'

interface User {
	name: string
	age: number
	address?: {
		city: string
		country: string
	}
}

type Inspected = TypeInspector<User>
// { properties: ['name', 'age', 'address']; required: ['name', 'age']; optional: ['address']; depth: 2 }
```

## TypeProfiler

分析类型复杂度和评估时间。

```typescript
import type { TypeProfiler } from 'uni-types'

type Profile = TypeProfiler<{ a: string; b: { c: number } }>
// { depth: 2; properties: 3; complexity: 'low'; instantiationDepth: 1 }
```

## TypeDebugger

通过逐步跟踪调试类型解析。

```typescript
import type { TypeDebugger } from 'uni-types'

type DebugResult = TypeDebugger<DeepPartial<{ a: { b: string } }>>
// { steps: ['解析 DeepPartial', '解析嵌套 { a: { b: string } }', '递归应用 Partial']; result: { a?: { b?: string } } }
```

## IDEIntegration

IDE 集成功能的配置。

```typescript
import type { IDEIntegration } from 'uni-types'

type IDEConfig = IDEIntegration<{
	hoverInfo: true
	codeLens: true
	diagnostics: true
	completions: true
}>
```

## TypeHint

为 IDE 显示生成类型提示。

```typescript
import type { TypeHint } from 'uni-types'

interface ComplexType {
	data: Map<string, { items: string[]; count: number }>
}

type Hint = TypeHint<ComplexType>
// "Map<string, { items: string[]; count: number }>"
```

## DiagnosticRule

定义自定义类型检查诊断规则。

```typescript
import type { DiagnosticRule } from 'uni-types'

type Rule = DiagnosticRule<
	'no-any',
	'error',
	'不要使用 `any` 类型'
>
```

## TypeDocumentation

生成内联类型文档。

```typescript
import type { TypeDocumentation } from 'uni-types'

interface APIResponse {
	status: number
	data: unknown
}

type Docs = TypeDocumentation<APIResponse>
// { description: '包含 2 个属性的对象'; properties: { status: 'number'; data: 'unknown' } }
```
