# Experimental v2 Features (Early Access)

Early access preview of experimental v2 features for the next major release of uni-types.

## ExperimentalV2

Marks a type as an experimental v2 feature with metadata.

```typescript
import type { ExperimentalV2 } from 'uni-types'

interface NewFeature {
	method: string
	params: unknown[]
}

type PreviewFeature = ExperimentalV2<NewFeature>
// { __experimental_v2: true; method: string; params: unknown[] }
```

## FeatureFlag

Type-level feature flag for enabling or disabling v2 features.

```typescript
import type { FeatureFlag } from 'uni-types'

type Enabled = FeatureFlag<'v2_types', true>
type Disabled = FeatureFlag<'v2_types', false>
// never (feature not available)
```

## OptIn

Opt-in to an experimental v2 feature with explicit consent tracking.

```typescript
import type { OptIn } from 'uni-types'

interface V2Module {
	newApi: () => void
}

type OptedIn = OptIn<V2Module, 'v2_module'>
// { __optedIn: 'v2_module'; newApi: () => void }
```

## PreviewMode

Enable preview mode for v2 type resolution.

```typescript
import type { PreviewMode } from 'uni-types'

interface StableType {
	value: string
}

type PreviewType = PreviewMode<StableType>
// { __preview: true; value: string }
```

## MigrationHint

Provides migration hints when using v2 features alongside v1 types.

```typescript
import type { MigrationHint } from 'uni-types'

interface V1Type {
	old: string
}

type Hinted = MigrationHint<V1Type, 'Use V2Type.new instead of V1Type.old'>
// { __migrationHint: 'Use V2Type.new instead of V1Type.old'; old: string }
```

## StabilityLevel

Represents the stability level of a v2 feature.

```typescript
import type { StabilityLevel } from 'uni-types'

type AlphaLevel = StabilityLevel<'alpha'>
type BetaLevel = StabilityLevel<'beta'>
type RCLevel = StabilityLevel<'rc'>
type StableLevel = StabilityLevel<'stable'>
```

## V2Compat

Compatibility layer between v1 and v2 type APIs.

```typescript
import type { V2Compat } from 'uni-types'

interface V1API {
	fetch(): void
}

interface V2API {
	query(): void
}

type Compatible = V2Compat<V1API, V2API>
// { fetch(): void; query(): void }
```

## ExperimentalGuard

Type guard for checking if a type is an experimental v2 feature.

```typescript
import type { ExperimentalGuard } from 'uni-types'

type IsExperimental = ExperimentalGuard<ExperimentalV2<{ a: string }>>
// true

type IsNotExperimental = ExperimentalGuard<{ a: string }>
// false
```
