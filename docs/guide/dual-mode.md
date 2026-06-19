# Dual Mode Support

Support for running uni-types in both strict and lenient modes to accommodate different project needs.

## DualMode

Defines a type that behaves differently based on the active mode.

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

Configuration for dual mode behavior.

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

Strict mode types with full type safety and no relaxations.

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

Lenient mode types with relaxed constraints for gradual adoption.

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

Manages the transition between modes over time.

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

Detects the active mode based on project configuration.

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

Ensures compatibility between types used in different modes.

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
