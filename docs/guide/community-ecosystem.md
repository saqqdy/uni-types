# Community & Ecosystem

Types for managing community contributions, plugin ecosystems, and collaborative development.

## CommunityPlugin

Defines a community-contributed plugin with metadata.

```typescript
import type { CommunityPlugin } from 'uni-types'

type Plugin = CommunityPlugin<{
	name: 'uni-types-validators'
	author: 'community-member'
	version: '1.0.0'
	compatibility: '1.13.0'
	license: 'MIT'
	downloads: 5000
	rating: 4.5
	verified: true
}>
```

## PluginRegistry

Registry of available community plugins.

```typescript
import type { PluginRegistry } from 'uni-types'

type Registry = PluginRegistry<{
	totalPlugins: 50
	categories: ['validation', 'formatting', 'testing', 'framework']
	featured: ['uni-types-validators', 'uni-types-formatters']
	verified: 35
	pending: 5
	lastUpdated: string
}>
```

## ContributionGuide

Type-level representation of contribution guidelines.

```typescript
import type { ContributionGuide } from 'uni-types'

type Guide = ContributionGuide<{
	minimumQualityScore: 80
	requiredTests: true
	documentationRequired: true
	breakingChangePolicy: 'requires-rfc'
	reviewProcess: 'two-reviewers'
	license: 'MIT'
}>
```

## EcosystemIntegration

Defines integration points with the broader TypeScript ecosystem.

```typescript
import type { EcosystemIntegration } from 'uni-types'

type Integration = EcosystemIntegration<{
	framework: 'react'
	types: { ComponentProps: true; HooksTypes: true }
	compatibility: 'full'
	version: '18.x'
	peerDependency: true
}>
```

## CommunityFeedback

Structured feedback from the community.

```typescript
import type { CommunityFeedback } from 'uni-types'

type Feedback = CommunityFeedback<{
	type: 'feature-request'
	priority: 'high'
	votes: 42
	status: 'under-review'
	assignee: 'core-team'
	tags: ['performance', 'developer-experience']
	createdAt: string
}>
```

## PluginAPI

Public API for building community plugins.

```typescript
import type { PluginAPI } from 'uni-types'

type API = PluginAPI<{
	hooks: ['beforeCompile', 'afterCompile', 'onError']
	extensions: ['type-transform', 'validator', 'formatter']
	context: { version: string; config: unknown }
	permissions: ['read-types', 'modify-types']
	sandboxed: true
}>
```

## GovernanceModel

Defines the governance structure for the project.

```typescript
import type { GovernanceModel } from 'uni-types'

type Governance = GovernanceModel<{
	maintainers: 5
	contributors: 120
	decisionProcess: 'consensus'
	rfcProcess: true
	votingThreshold: 0.6
	meetingCadence: 'weekly'
	codeOfConduct: true
}>
```

## ReleaseCoordination

Coordinates release activities across the ecosystem.

```typescript
import type { ReleaseCoordination } from 'uni-types'

type Coordination = ReleaseCoordination<{
	version: '1.13.0'
	coordinateWith: ['type-fest', 'zod', 'io-ts']
	betaPeriod: '2-weeks'
	announcementChannels: ['github', 'discord', 'twitter']
	migrationSupport: true
}>
```
