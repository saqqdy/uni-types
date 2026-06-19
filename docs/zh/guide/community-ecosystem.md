# 社区与生态

用于管理社区贡献、插件生态和协作开发的类型。

## CommunityPlugin

定义带有元数据的社区贡献插件。

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

可用社区插件的注册表。

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

贡献指南的类型级表示。

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

定义与更广泛的 TypeScript 生态系统的集成点。

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

来自社区的结构化反馈。

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

用于构建社区插件的公共 API。

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

定义项目的治理结构。

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

协调生态系统各方的发布活动。

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
