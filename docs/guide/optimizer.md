# Optimizer Types

**Since 1.8.0**

Type-level optimization utilities.

## Optimization Core

### Optimization

Optimization definition.

```typescript
import type { Optimization } from 'uni-types'

type Opt = Optimization<string>
```

### OptimizationPass

Optimization pass type.

```typescript
import type { OptimizationPass } from 'uni-types'

type Pass = OptimizationPass<string>
```

### OptimizationResult

Optimization result type.

```typescript
import type { OptimizationResult } from 'uni-types'

type Result = OptimizationResult<string>
```

### OptimizationLevel

Optimization level types.

```typescript
import type { OptimizationLevel } from 'uni-types'

type Level = OptimizationLevel  // 0 | 1 | 2 | 3 | 'none' | 'basic' | 'standard' | 'aggressive'
```

## Optimization Rules

### OptimizationRule

Optimization rule definition.

```typescript
import type { OptimizationRule } from 'uni-types'

type Rule = OptimizationRule<string>
```

### RulePattern

Rule pattern types.

```typescript
import type { RulePattern } from 'uni-types'

type Pattern = RulePattern<string>
// { type: 'exact'; value: T } | { type: 'wildcard'; test: (value: T) => boolean } | ...
```

### RuleResult

Rule application result.

```typescript
import type { RuleResult } from 'uni-types'

type Result = RuleResult<string>
// { type: 'matched'; result: T; changed: true } | { type: 'no-match'; changed: false }
```

## Tree Shaking

### TreeShake

Tree shaking definition.

```typescript
import type { TreeShake } from 'uni-types'

type Shake = TreeShake<string>
```

### ShallowResult

Shake result type.

```typescript
import type { ShallowResult } from 'uni-types'

type Result = ShallowResult<string>
// { used: Set<string>; unused: Set<string>; ambiguous: Set<string>; messages: ShakeMessage[] }
```

### SideEffect

Side effect types.

```typescript
import type { SideEffect } from 'uni-types'

type Effect = SideEffect
// { type: 'global' | 'property' | 'call' | 'unknown'; ... }
```

## Dead Code Elimination

### DeadCode

Dead code definition.

```typescript
import type { DeadCode } from 'uni-types'

type Dead = DeadCode
```

### DeadCodeType

Dead code type enumeration.

```typescript
import type { DeadCodeType } from 'uni-types'

type Type = DeadCodeType  // 'unreachable' | 'unused-variable' | 'unused-function' | ...
```

### DeadCodeAnalysis

Dead code analysis result.

```typescript
import type { DeadCodeAnalysis } from 'uni-types'

type Analysis = DeadCodeAnalysis<string>
```

## Inlining

### Inline

Inlining definition.

```typescript
import type { Inline } from 'uni-types'

type Inl = Inline<string>
```

### InlineCandidate

Inline candidate type.

```typescript
import type { InlineCandidate } from 'uni-types'

type Candidate = InlineCandidate<string>
```

### InlineResult

Inlining result type.

```typescript
import type { InlineResult } from 'uni-types'

type Result = InlineResult<string>
```

## Constant Folding

### ConstantFold

Constant folding type.

```typescript
import type { ConstantFold } from 'uni-types'

type Fold = ConstantFold<string>
```

### FoldableExpression

Foldable expression types.

```typescript
import type { FoldableExpression } from 'uni-types'

type Expr = FoldableExpression<number>
// { type: 'literal'; value: T } | { type: 'binary'; operator: string; ... } | ...
```

### ConstantValue

Constant value definition.

```typescript
import type { ConstantValue } from 'uni-types'

type Val = ConstantValue<string>
```

## Type Minification

### MinifyType

Type minification type.

```typescript
import type { MinifyType } from 'uni-types'

type Minified = MinifyType<string>
```

### MinifiedType

Minified type result.

```typescript
import type { MinifiedType } from 'uni-types'

type Result = MinifiedType<string>
```

## Performance Hints

### PerformanceHint

Performance hint definition.

```typescript
import type { PerformanceHint } from 'uni-types'

type Hint = PerformanceHint<string>
```

### HintLevel

Hint level types.

```typescript
import type { HintLevel } from 'uni-types'

type Level = HintLevel  // 'info' | 'warning' | 'error'
```

### HintCategory

Hint category types.

```typescript
import type { HintCategory } from 'uni-types'

type Category = HintCategory  // 'performance' | 'memory' | 'bundle-size' | ...
```
