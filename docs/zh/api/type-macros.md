# 类型级宏 API 参考

## 宏核心

### `MacroV2<T>`

核心宏类型，包装输入并附带元数据。

```typescript
import type { MacroV2 } from 'uni-types'

type M = MacroV2<number>
// M._input: number, M._name: string, M._version: string
```

### `MacroRule<Input, Output>`

单个重写规则，包含模式、替换和可选优先级。

```typescript
import type { MacroRule } from 'uni-types'

type Rule = MacroRule<'optional', { optional: true }>
// Rule.pattern: 'optional', Rule.replacement: { optional: true }
```

### `MacroExpand<T, Rules>`

使用提供的规则对宏进行单步展开。

```typescript
import type { MacroExpand, MacroRule } from 'uni-types'

type Rule = MacroRule<'optional', { optional: true }>
type Expanded = MacroExpand<'optional', [Rule]>
// { optional: true }
```

### `MacroExpandAll<T, Rules, Seen>`

将宏完全展开直至不动点。

## 内置宏

### `InlineV2<T>`

内联类型，移除间接层。

```typescript
import type { InlineV2 } from 'uni-types'

type T = InlineV2<{ a: string; b: number }>
// { a: string; b: number }
```

### `SpecializeV2<T, Args>`

使用具体参数特化泛型类型。

```typescript
import type { SpecializeV2 } from 'uni-types'

type S = SpecializeV2<SomeGeneric, [number, string]>
```

### `GenericV2<T, Params>`

标记类型为参数化类型。

```typescript
import type { GenericV2 } from 'uni-types'

type G = GenericV2<string, [number]>
// G._body: string, G._params: [number]
```

### `TemplateV2<T>`

类型级模板，包含名称、参数和主体。

```typescript
import type { TemplateV2 } from 'uni-types'

type T = TemplateV2<{ name: string }>
// T._body: { name: string }
```

## 宏定义

### `DefineMacroV2<T>`

定义新宏，包含名称、参数、主体和规则。

```typescript
import type { DefineMacroV2 } from 'uni-types'

type D = DefineMacroV2<number>
// D.body: number, D.name: string, D.params: string[]
// D.rules: MacroRule<unknown, unknown>[]
```

### `LoadMacroV2<D>`

加载宏定义。

### `CombineMacroV2<A, B>`

组合两个宏。

```typescript
import type { CombineMacroV2, MacroV2 } from 'uni-types'

type A = MacroV2<string>
type B = MacroV2<number>
type Combined = CombineMacroV2<A, B>
// Combined._input: string & number
```

## 重写工具

### `RewriteRule<From, To>`

`MacroRule<From, To>` 的别名。

```typescript
import type { RewriteRule } from 'uni-types'

type R = RewriteRule<'old', 'new'>
// R.pattern: 'old', R.replacement: 'new'
```

### `ApplyRuleV2<T, R>`

应用单个重写规则。

```typescript
import type { ApplyRuleV2, RewriteRule } from 'uni-types'

type R = RewriteRule<'old', 'new'>
type A = ApplyRuleV2<'old', R>     // 'new'
type NoMatch = ApplyRuleV2<'other', R>  // 'other'
```

### `ApplyRulesV2<T, Rules>`

按顺序应用多个规则。

```typescript
import type { ApplyRulesV2, RewriteRule } from 'uni-types'

type R1 = RewriteRule<'a', 1>
type R2 = RewriteRule<'b', 2>
type Result = ApplyRulesV2<'a', [R1, R2]>  // 1
```

## 组合子

### `MacroComposeV2<A, B>`

组合两个宏，将 B 的输入替换为 A 的输入。

### `MacroPipeV2<T, Ms>`

将类型依次通过宏管道处理。

```typescript
import type { MacroPipeV2, MacroV2 } from 'uni-types'

type A = MacroV2<string>
type Piped = MacroPipeV2<string, [A]>  // string
```

### `MacroPartialV2<M, Partial>`

部分应用宏参数。

### `MacroFlip<A, B>`

翻转两个参数的顺序。

```typescript
import type { MacroFlip } from 'uni-types'

type F = MacroFlip<string, number>  // [number, string]
```

## 调试

### `MacroDebug<T>`

调试信息，包含原始类型、展开结果、步骤和应用的规则。

### `MacroTrace<T, Rules>`

追踪信息，包含最终结果。
