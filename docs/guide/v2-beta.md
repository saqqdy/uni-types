# v2.0.0 Beta Features

Preview of upcoming v2.0.0 features available in beta for testing and feedback.

## V2BetaFeature

Marks a type as a v2.0.0 beta feature with stability tracking.

```typescript
import type { V2BetaFeature } from 'uni-types'

type Feature = V2BetaFeature<{
	name: 'AdvancedInference'
	stability: 'beta'
	since: '1.13.0'
	expectedStable: '2.0.0'
	breaking: false
	feedbackUrl: string
}>
```

## BetaAPI

Wraps a type with beta-specific metadata and usage constraints.

```typescript
import type { BetaAPI } from 'uni-types'

type API = BetaAPI<{
	experimental: true
	minVersion: '1.13.0'
	maxVersion: '1.99.99'
	requiresFlag: 'enableV2Beta'
	backwardsCompatible: true
}, {
	newMethod: () => void
	enhancedReturn: string
}>
```

## PreviewType

A type available for preview before stable release.

```typescript
import type { PreviewType } from 'uni-types'

type Preview = PreviewType<{
	name: 'SmartInference'
	behavior: 'enhanced'
	knownIssues: ['Performance impact on large unions']
	feedbackChannel: 'github'
}>
```

## BetaConfig

Configuration for enabling and managing beta features.

```typescript
import type { BetaConfig } from 'uni-types'

type Config = BetaConfig<{
	enabledFeatures: ['AdvancedInference', 'SmartInference']
	stabilityThreshold: 'beta'
	reportIssues: true
	fallbackToStable: true
	isolation: true
	telemetry: false
}>
```

## MigrationPreview

Previews how types will behave after v2.0.0 migration.

```typescript
import type { MigrationPreview } from 'uni-types'

type Preview = MigrationPreview<{
	currentType: { name?: string; age: number }
	v2Type: { name: string; age: number }
	changes: ['name became required']
	automated: true
}>
```

## BetaFeedback

Collects structured feedback about beta features.

```typescript
import type { BetaFeedback } from 'uni-types'

type Feedback = BetaFeedback<{
	feature: 'AdvancedInference'
	userExperience: 'positive'
	issues: []
	suggestions: ['Add more examples']
	priority: 'medium'
	version: '1.13.0'
}>
```

## V2CompatibilityLayer

Compatibility layer for running v1 and v2 types side by side.

```typescript
import type { V2CompatibilityLayer } from 'uni-types'

type Compat = V2CompatibilityLayer<{
	v1Types: { oldMethod: () => string }
	v2Types: { newMethod: () => string }
	bridge: true
	deprecationWarnings: true
	autoMigrate: false
}>
```
