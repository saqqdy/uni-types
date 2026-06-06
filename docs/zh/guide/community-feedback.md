# 社区反馈系统

类型级社区反馈收集和功能请求跟踪。

## FeedbackEntry

表示带有元数据的社区反馈条目。

```typescript
import type { FeedbackEntry } from 'uni-types'

type Entry = FeedbackEntry<{
	category: 'feature-request'
	title: '添加 JSON 解析工具'
	description: '希望能有类型级别的 JSON 解析'
	author: 'community-member'
	votes: 42
}>
```

## FeatureRequest

具有状态跟踪的类型安全功能请求。

```typescript
import type { FeatureRequest } from 'uni-types'

type Request = FeatureRequest<
	'hkt-v2',
	'高阶类型 v2',
	'proposed',
	{ priority: 'high'; complexity: 'high' }
>
```

## FeedbackStatus

跟踪社区反馈的状态。

```typescript
import type { FeedbackStatus } from 'uni-types'

type Proposed = FeedbackStatus<'proposed'>
type UnderReview = FeedbackStatus<'under-review'>
type Accepted = FeedbackStatus<'accepted'>
type Implemented = FeedbackStatus<'implemented'>
type Declined = FeedbackStatus<'declined'>
```

## VoteTally

反馈项的类型级投票统计。

```typescript
import type { VoteTally } from 'uni-types'

type Tally = VoteTally<{ upvotes: 128; downvotes: 3 }>
// { total: 125; sentiment: 'positive'; confidence: 0.977 }
```

## FeedbackCategory

对社区反馈进行分类。

```typescript
import type { FeedbackCategory } from 'uni-types'

type BugReport = FeedbackCategory<'bug-report'>
type FeatureReq = FeedbackCategory<'feature-request'>
type Enhancement = FeedbackCategory<'enhancement'>
type DocsFeedback = FeedbackCategory<'documentation'>
type Performance = FeedbackCategory<'performance'>
```

## FeedbackPriority

反馈项的优先级。

```typescript
import type { FeedbackPriority } from 'uni-types'

type Critical = FeedbackPriority<'critical'>
type High = FeedbackPriority<'high'>
type Medium = FeedbackPriority<'medium'>
type Low = FeedbackPriority<'low'>
```

## FeedbackFilter

按条件筛选反馈。

```typescript
import type { FeedbackFilter } from 'uni-types'

type Filter = FeedbackFilter<{
	category: 'feature-request'
	status: 'accepted'
	minVotes: 10
	sortBy: 'votes'
}>
```

## CommunityTag

用于组织社区反馈的标签系统。

```typescript
import type { CommunityTag } from 'uni-types'

type Tag = CommunityTag<'hkt', '高阶类型'>
// { id: 'hkt'; label: '高阶类型'; count: number }
```
