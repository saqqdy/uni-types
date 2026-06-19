# End-of-Life Planning

Types for managing the lifecycle and end-of-life of deprecated features.

## EOLTimeline

Defines the end-of-life timeline for a feature or version.

```typescript
import type { EOLTimeline } from 'uni-types'

type Timeline = EOLTimeline<{
	feature: 'LegacyFormatter'
	introduced: '1.0.0'
	deprecated: '1.11.0'
	eol: '2.0.0'
	removal: '2.1.0'
	gracePeriod: '6-months'
	currentStatus: 'deprecated'
}>
```

## EOLPolicy

Policy governing the end-of-life process.

```typescript
import type { EOLPolicy } from 'uni-types'

type Policy = EOLPolicy<{
	minDeprecationNotice: '2-minor-versions'
	gracePeriod: '6-months'
	migrationSupport: true
	securityPatches: 'until-eol'
	alternativesRequired: true
	communicateVia: ['changelog', 'docs', 'runtime-warnings']
}>
```

## DeprecationSchedule

Scheduled timeline for deprecation milestones.

```typescript
import type { DeprecationSchedule } from 'uni-types'

type Schedule = DeprecationSchedule<{
	version: '1.13.0'
	milestones: [
		{ version: '1.13.0'; action: 'deprecation-warning' },
		{ version: '1.14.0'; action: 'enhanced-warning' },
		{ version: '2.0.0'; action: 'runtime-error' },
		{ version: '2.1.0'; action: 'removal' }
	]
	currentMilestone: 'deprecation-warning'
}>
```

## MigrationDeadline

Tracks deadlines for migrating away from deprecated features.

```typescript
import type { MigrationDeadline } from 'uni-types'

type Deadline = MigrationDeadline<{
	feature: 'LegacyFormatter'
	deadline: '2.0.0-release'
	remainingVersions: 2
	timeRemaining: '3-months'
	affectedUsers: 500
	migrationComplexity: 'low'
	automated: true
}>
```

## EOLNotification

Notification about an end-of-life event.

```typescript
import type { EOLNotification } from 'uni-types'

type Notification = EOLNotification<{
	type: 'deprecation'
	feature: 'LegacyFormatter'
	severity: 'warning'
	message: string
	action: 'migrate-to-ModernFormatter'
	deadline: '2.0.0'
	suppressible: false
}>
```

## LifecycleState

Current lifecycle state of a type or feature.

```typescript
import type { LifecycleState } from 'uni-types'

type Active = LifecycleState<'active'>
type Deprecated = LifecycleState<'deprecated'>
type EOL = LifecycleState<'end-of-life'>
type Removed = LifecycleState<'removed'>
type Beta = LifecycleState<'beta'>
type Preview = LifecycleState<'preview'>
```

## SunsetPlan

Detailed plan for sunsetting a feature.

```typescript
import type { SunsetPlan } from 'uni-types'

type Plan = SunsetPlan<{
	feature: 'LegacyFormatter'
	phases: [
		{ phase: 'soft-deprecate'; version: '1.13.0'; action: 'add-JSDoc-warning' },
		{ phase: 'hard-deprecate'; version: '1.14.0'; action: 'runtime-warning' },
		{ phase: 'disable'; version: '2.0.0'; action: 'throw-error' },
		{ phase: 'remove'; version: '2.1.0'; action: 'delete-code' }
	]
	currentPhase: 'soft-deprecate'
	communicationSent: true
}>
```

## LegacySupport

Support configuration for legacy features during the transition period.

```typescript
import type { LegacySupport } from 'uni-types'

type Support = LegacySupport<{
	feature: 'LegacyFormatter'
	supported: true
	bugFixesOnly: true
	noNewFeatures: true
	securityOnly: false
	supportEnds: '2.0.0'
	alternative: 'ModernFormatter'
}>
```
