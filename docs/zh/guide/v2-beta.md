# v2.0.0 测试版功能

预览即将推出的 v2.0.0 功能，可供测试和反馈。

## V2BetaFeature

将类型标记为 v2.0.0 测试版功能并跟踪其稳定性。

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

为类型包装测试版特定的元数据和使用约束。

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

在稳定发布前可供预览的类型。

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

用于启用和管理测试版功能的配置。

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

预览 v2.0.0 迁移后类型的行为。

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

收集关于测试版功能的结构化反馈。

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

用于同时运行 v1 和 v2 类型的兼容层。

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
