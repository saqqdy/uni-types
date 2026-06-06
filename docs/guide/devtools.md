# Developer Tools Integration

Type-level developer tools for IDE integration, debugging, and diagnostics.

## DevTools

Base type for developer tools configuration.

```typescript
import type { DevTools } from 'uni-types'

type Tools = DevTools<{
	inspector: true
	profiler: true
	debugger: false
}>
```

## TypeInspector

Inspect a type's internal structure at the type level.

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

Profile type complexity and evaluation time.

```typescript
import type { TypeProfiler } from 'uni-types'

type Profile = TypeProfiler<{ a: string; b: { c: number } }>
// { depth: 2; properties: 3; complexity: 'low'; instantiationDepth: 1 }
```

## TypeDebugger

Debug type resolution with step-by-step tracing.

```typescript
import type { TypeDebugger } from 'uni-types'

type DebugResult = TypeDebugger<DeepPartial<{ a: { b: string } }>>
// { steps: ['Resolve DeepPartial', 'Resolve nested { a: { b: string } }', 'Apply Partial recursively']; result: { a?: { b?: string } } }
```

## IDEIntegration

Configuration for IDE integration features.

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

Generate type hints for IDE display.

```typescript
import type { TypeHint } from 'uni-types'

interface ComplexType {
	data: Map<string, { items: string[]; count: number }>
}

type Hint = TypeHint<ComplexType>
// "Map<string, { items: string[]; count: number }>"
```

## DiagnosticRule

Define custom diagnostic rules for type checking.

```typescript
import type { DiagnosticRule } from 'uni-types'

type Rule = DiagnosticRule<
	'no-any',
	'error',
	'Do not use `any` type'
>
```

## TypeDocumentation

Generate inline type documentation.

```typescript
import type { TypeDocumentation } from 'uni-types'

interface APIResponse {
	status: number
	data: unknown
}

type Docs = TypeDocumentation<APIResponse>
// { description: 'Object with 2 properties'; properties: { status: 'number'; data: 'unknown' } }
```
