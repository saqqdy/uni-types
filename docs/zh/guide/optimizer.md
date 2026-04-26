# 优化器 Types

**从 1.8.0 开始**

类型级优化工具。

## 优化核心

### Optimization

优化定义。

```typescript
import type { Optimization } from 'uni-types'

type Opt = Optimization<string>
```

### OptimizationPass

优化遍类型。

```typescript
import type { OptimizationPass } from 'uni-types'

type Pass = OptimizationPass<string>
```

### OptimizationResult

优化结果类型。

```typescript
import type { OptimizationResult } from 'uni-types'

type Result = OptimizationResult<string>
```

### OptimizationLevel

优化级别类型。

```typescript
import type { OptimizationLevel } from 'uni-types'

type Level = OptimizationLevel  // 0 | 1 | 2 | 3 | 'none' | 'basic' | 'standard' | 'aggressive'
```

## 优化规则

### OptimizationRule

优化规则定义。

```typescript
import type { OptimizationRule } from 'uni-types'

type Rule = OptimizationRule<string>
```

### RulePattern

规则模式类型。

```typescript
import type { RulePattern } from 'uni-types'

type Pattern = RulePattern<string>
// { type: 'exact'; value: T } | { type: 'wildcard'; test: (value: T) => boolean } | ...
```

### RuleResult

规则应用结果。

```typescript
import type { RuleResult } from 'uni-types'

type Result = RuleResult<string>
// { type: 'matched'; result: T; changed: true } | { type: 'no-match'; changed: false }
```

## Tree Shaking

### TreeShake

Tree shaking 定义。

```typescript
import type { TreeShake } from 'uni-types'

type Shake = TreeShake<string>
```

### ShallowResult

Shake 结果类型。

```typescript
import type { ShallowResult } from 'uni-types'

type Result = ShallowResult<string>
// { used: Set<string>; unused: Set<string>; ambiguous: Set<string>; messages: ShakeMessage[] }
```

### SideEffect

副作用类型。

```typescript
import type { SideEffect } from 'uni-types'

type Effect = SideEffect
// { type: 'global' | 'property' | 'call' | 'unknown'; ... }
```

## 死代码消除

### DeadCode

死代码定义。

```typescript
import type { DeadCode } from 'uni-types'

type Dead = DeadCode
```

### DeadCodeType

死代码类型枚举。

```typescript
import type { DeadCodeType } from 'uni-types'

type Type = DeadCodeType  // 'unreachable' | 'unused-variable' | 'unused-function' | ...
```

### DeadCodeAnalysis

死代码分析结果。

```typescript
import type { DeadCodeAnalysis } from 'uni-types'

type Analysis = DeadCodeAnalysis<string>
```

## 内联

### Inline

内联定义。

```typescript
import type { Inline } from 'uni-types'

type Inl = Inline<string>
```

### InlineCandidate

内联候选类型。

```typescript
import type { InlineCandidate } from 'uni-types'

type Candidate = InlineCandidate<string>
```

### InlineResult

内联结果类型。

```typescript
import type { InlineResult } from 'uni-types'

type Result = InlineResult<string>
```

## 常量折叠

### ConstantFold

常量折叠类型。

```typescript
import type { ConstantFold } from 'uni-types'

type Fold = ConstantFold<string>
```

### FoldableExpression

可折叠表达式类型。

```typescript
import type { FoldableExpression } from 'uni-types'

type Expr = FoldableExpression<number>
// { type: 'literal'; value: T } | { type: 'binary'; operator: string; ... } | ...
```

### ConstantValue

常量值定义。

```typescript
import type { ConstantValue } from 'uni-types'

type Val = ConstantValue<string>
```

## 类型压缩

### MinifyType

类型压缩类型。

```typescript
import type { MinifyType } from 'uni-types'

type Minified = MinifyType<string>
```

### MinifiedType

压缩后类型结果。

```typescript
import type { MinifiedType } from 'uni-types'

type Result = MinifiedType<string>
```

## 性能提示

### PerformanceHint

性能提示定义。

```typescript
import type { PerformanceHint } from 'uni-types'

type Hint = PerformanceHint<string>
```

### HintLevel

提示级别类型。

```typescript
import type { HintLevel } from 'uni-types'

type Level = HintLevel  // 'info' | 'warning' | 'error'
```

### HintCategory

提示类别类型。

```typescript
import type { HintCategory } from 'uni-types'

type Category = HintCategory  // 'performance' | 'memory' | 'bundle-size' | ...
```
