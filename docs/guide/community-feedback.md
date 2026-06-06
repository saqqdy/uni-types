# Community Feedback System

Type-level community feedback collection and feature request tracking.

## FeedbackEntry

Represents a community feedback entry with metadata.

```typescript
import type { FeedbackEntry } from 'uni-types'

type Entry = FeedbackEntry<{
	category: 'feature-request'
	title: 'Add JSON parsing utilities'
	description: 'Would love type-level JSON parsing'
	author: 'community-member'
	votes: 42
}>
```

## FeatureRequest

Type-safe feature request with status tracking.

```typescript
import type { FeatureRequest } from 'uni-types'

type Request = FeatureRequest<
	'hkt-v2',
	'Higher-Kinded Types v2',
	'proposed',
	{ priority: 'high'; complexity: 'high' }
>
```

## FeedbackStatus

Track the status of community feedback.

```typescript
import type { FeedbackStatus } from 'uni-types'

type Proposed = FeedbackStatus<'proposed'>
type UnderReview = FeedbackStatus<'under-review'>
type Accepted = FeedbackStatus<'accepted'>
type Implemented = FeedbackStatus<'implemented'>
type Declined = FeedbackStatus<'declined'>
```

## VoteTally

Type-level vote tally for feedback items.

```typescript
import type { VoteTally } from 'uni-types'

type Tally = VoteTally<{ upvotes: 128; downvotes: 3 }>
// { total: 125; sentiment: 'positive'; confidence: 0.977 }
```

## FeedbackCategory

Categorize community feedback.

```typescript
import type { FeedbackCategory } from 'uni-types'

type BugReport = FeedbackCategory<'bug-report'>
type FeatureReq = FeedbackCategory<'feature-request'>
type Enhancement = FeedbackCategory<'enhancement'>
type DocsFeedback = FeedbackCategory<'documentation'>
type Performance = FeedbackCategory<'performance'>
```

## FeedbackPriority

Priority level for feedback items.

```typescript
import type { FeedbackPriority } from 'uni-types'

type Critical = FeedbackPriority<'critical'>
type High = FeedbackPriority<'high'>
type Medium = FeedbackPriority<'medium'>
type Low = FeedbackPriority<'low'>
```

## FeedbackFilter

Filter feedback by criteria.

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

Tag system for organizing community feedback.

```typescript
import type { CommunityTag } from 'uni-types'

type Tag = CommunityTag<'hkt', 'Higher-Kinded Types'>
// { id: 'hkt'; label: 'Higher-Kinded Types'; count: number }
```
