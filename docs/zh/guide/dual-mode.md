# 双模式支持

支持在严格和宽松两种模式下运行 uni-types，以适应不同项目的需求。

## DualMode

定义根据活动模式表现出不同行为的类型。

```typescript
import type { DualMode } from 'uni-types'

type StrictMode = DualMode<{
	strict: { name: string; age: number }
	lenient: { name?: string; age?: number }
	default: 'strict'
	transition: 'gradual'
}>
```

## ModeConfig

双模式行为的配置。

```typescript
import type { ModeConfig } from 'uni-types'

type Config = ModeConfig<{
	active: 'strict'
	available: ['strict', 'lenient']
	strictDefault: true
	warningsOnLenient: true
	autoUpgrade: true
	transitionPeriod: '3-months'
}>
```

## StrictMode

具有完整类型安全且无放宽的严格模式类型。

```typescript
import type { StrictMode } from 'uni-types'

type Strict = StrictMode<{
	allowAny: false
	strictNullChecks: true
	noImplicitAny: true
	exactOptionalPropertyTypes: true
	noUncheckedIndexedAccess: true
	requirePropertyDeclaration: true
}>
```

## LenientMode

具有放宽约束以支持渐进采用的宽松模式类型。

```typescript
import type { LenientMode } from 'uni-types'

type Lenient = LenientMode<{
	allowAny: true
	strictNullChecks: false
	noImplicitAny: false
	optionalProperties: true
	flexibility: 'migration-friendly'
	warningsEnabled: true
}>
```

## ModeTransition

管理模式之间的逐步过渡。

```typescript
import type { ModeTransition } from 'uni-types'

type Transition = ModeTransition<{
	from: 'lenient'
	to: 'strict'
	phases: [
		{ phase: 'warning'; duration: '1-month' },
		{ phase: 'error'; duration: '1-month' },
		{ phase: 'enforced'; duration: 'permanent' }
	]
	currentPhase: 'warning'
	progress: 33
}>
```

## ModeDetector

根据项目配置检测活动模式。

```typescript
import type { ModeDetector } from 'uni-types'

type Detector = ModeDetector<{
	tsconfig: { strict: true }
	packageJson: { uniTypesMode: 'strict' }
	envVariable: 'UNI_TYPES_MODE=strict'
	detected: 'strict'
	confidence: 'high'
}>
```

## ModeCompatibility

确保在不同模式中使用的类型之间的兼容性。

```typescript
import type { ModeCompatibility } from 'uni-types'

type Compat = ModeCompatibility<{
	strictType: { name: string; age: number }
	lenientType: { name?: string; age?: number }
	compatible: true
	dataLoss: false
	conversionRequired: true
	autoConvert: true
}>
```
