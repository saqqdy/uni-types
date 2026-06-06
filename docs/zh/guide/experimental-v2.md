# 实验性 v2 功能（抢先体验）

uni-types 下一主要版本的实验性 v2 功能抢先体验预览。

## ExperimentalV2

将类型标记为实验性 v2 功能，并附带元数据。

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

类型级别的功能标志，用于启用或禁用 v2 功能。

```typescript
import type { FeatureFlag } from 'uni-types'

type Enabled = FeatureFlag<'v2_types', true>
type Disabled = FeatureFlag<'v2_types', false>
// never（功能不可用）
```

## OptIn

通过显式同意跟踪来选择启用实验性 v2 功能。

```typescript
import type { OptIn } from 'uni-types'

interface V2Module {
	newApi: () => void
}

type OptedIn = OptIn<V2Module, 'v2_module'>
// { __optedIn: 'v2_module'; newApi: () => void }
```

## PreviewMode

为 v2 类型解析启用预览模式。

```typescript
import type { PreviewMode } from 'uni-types'

interface StableType {
	value: string
}

type PreviewType = PreviewMode<StableType>
// { __preview: true; value: string }
```

## MigrationHint

在使用 v2 功能与 v1 类型并存时提供迁移提示。

```typescript
import type { MigrationHint } from 'uni-types'

interface V1Type {
	old: string
}

type Hinted = MigrationHint<V1Type, 'Use V2Type.new instead of V1Type.old'>
// { __migrationHint: 'Use V2Type.new instead of V1Type.old'; old: string }
```

## StabilityLevel

表示 v2 功能的稳定性级别。

```typescript
import type { StabilityLevel } from 'uni-types'

type AlphaLevel = StabilityLevel<'alpha'>
type BetaLevel = StabilityLevel<'beta'>
type RCLevel = StabilityLevel<'rc'>
type StableLevel = StabilityLevel<'stable'>
```

## V2Compat

v1 和 v2 类型 API 之间的兼容层。

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

用于检查类型是否为实验性 v2 功能的类型守卫。

```typescript
import type { ExperimentalGuard } from 'uni-types'

type IsExperimental = ExperimentalGuard<ExperimentalV2<{ a: string }>>
// true

type IsNotExperimental = ExperimentalGuard<{ a: string }>
// false
```
