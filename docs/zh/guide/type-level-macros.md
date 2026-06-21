# 类型级宏

本指南介绍 v2.0.0 中引入的 **类型级宏** 特性。

## 概述

类型级宏提供了编译时类型变换的宏系统。受 Rust 和 Lisp 中宏系统的启发，这些工具支持基于规则的类型展开和模板生成。

## 宏核心

### MacroV2 和 MacroRule

```typescript
import type { MacroV2, MacroRule, MacroExpand, MacroExpandAll } from 'uni-types'

// 定义宏规则
type Rule = MacroRuleV2<'optional', { optional: true }>

// 展开宏
type Expanded = MacroExpand<'optional', [Rule]>  // { optional: true }

// MacroV2 包含宏信息
type M = MacroV2<number>
// M._input: number, M._name: string, M._version: string
```

## 内置宏

### InlineV2

`InlineV2` 展开类型，去除间接引用：

```typescript
import type { InlineV2 } from 'uni-types'
type T = InlineV2<{ a: string; b: number }>  // { a: string; b: number }
```

### SpecializeV2 和 GenericV2

```typescript
import type { SpecializeV2, GenericV2 } from 'uni-types'

// 标记类型为参数化
type G = GenericV2<string, [number]>  // G._body = string, G._params = [number]

// 用具体参数特化泛型类型
type S = SpecializeV2<SomeGeneric, [number, string]>
```

### TemplateV2

```typescript
import type { TemplateV2 } from 'uni-types'
type T = TemplateV2<{ name: string }>  // T._name = string
```

## 重写工具

```typescript
import type { RewriteRule, ApplyRuleV2, ApplyRulesV2 } from 'uni-types'

// 定义重写规则
type R = RewriteRule<'old', 'new'>

// 应用单条规则
type A = ApplyRuleV2<'old', R>  // 'new'

// 应用多条规则
type Result = ApplyRulesV2<'target', [R1, R2]>
```

## 组合器

```typescript
import type { MacroComposeV2, MacroPipeV2, MacroFlip, MacroPartialV2 } from 'uni-types'

// 组合两个宏
type Composed = MacroComposeV2<MacroA, MacroB>

// 顺序管道处理
type Piped = MacroPipeV2<Input, [MacroA, MacroB]>

// 翻转宏参数
type Flipped = MacroFlip<string, number>  // [number, string]

// 部分应用宏
type Partial = MacroPartialV2<SomeMacro, { first: string }>
```

## 宏调试

```typescript
import type { MacroDebug, MacroTrace } from 'uni-types'

// 调试宏展开过程
type Debug = MacroDebug<Input>

// 追踪宏展开步骤
type Trace = MacroTrace<Input, [Rule1, Rule2]>
```

## API 参考

参阅 [类型级宏 API 参考](/zh/api/type-macros) 获取完整文档。
