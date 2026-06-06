/**
 * Community Feedback System
 *
 * Tools for collecting community feedback, bug reports,
 * feature requests, and survey data.
 */

// ============== Feedback Types ==============

/**
 * FeatureFeedback - Feedback about a specific feature
 */
export interface FeatureFeedback<T = unknown> {
	/** Feature name */
	feature: string
	/** Rating (1-5) */
	rating: number
	/** Comment */
	comment?: string
	/** User data */
	user?: T
	/** Timestamp */
	timestamp: number
}

/**
 * BugReport - Bug report type
 */
export interface BugReport<T = unknown> {
	/** Report title */
	title: string
	/** Description */
	description: string
	/** Steps to reproduce */
	steps: string[]
	/** Expected behavior */
	expected: string
	/** Actual behavior */
	actual: string
	/** Severity */
	severity: BugSeverity
	/** Environment */
	environment?: EnvironmentInfo
	/** Attachments */
	attachments?: AttachmentInfo[]
	/** Reporter */
	reporter?: T
	/** Timestamp */
	timestamp: number
}

/**
 * Bug severity levels
 */
export type BugSeverity = 'critical' | 'high' | 'medium' | 'low' | 'trivial'

/**
 * Environment info
 */
export interface EnvironmentInfo {
	/** OS */
	os?: string
	/** Browser */
	browser?: string
	/** Node.js version */
	nodeVersion?: string
	/** Package version */
	packageVersion?: string
	/** TypeScript version */
	typescriptVersion?: string
}

/**
 * Attachment info
 */
export interface AttachmentInfo {
	/** File name */
	name: string
	/** File type */
	type: string
	/** File size */
	size: number
	/** URL */
	url?: string
}

/**
 * FeatureRequest - Feature request type
 */
export interface FeatureRequest<T = unknown> {
	/** Request title */
	title: string
	/** Description */
	description: string
	/** Use case */
	useCase: string
	/** Priority */
	priority: FeaturePriority
	/** Category */
	category: FeatureCategory
	/** Proposed solution */
	proposedSolution?: string
	/** Alternatives considered */
	alternatives?: string[]
	/** Upvotes */
	upvotes: number
	/** Requester */
	requester?: T
	/** Timestamp */
	timestamp: number
}

/**
 * Feature priority
 */
export type FeaturePriority = 'critical' | 'high' | 'medium' | 'low' | 'nice-to-have'

/**
 * Feature category
 */
export type FeatureCategory = 'core' | 'performance' | 'developer-experience' | 'documentation' | 'ecosystem' | 'tooling' | 'other'

/**
 * UserSuggestion - User suggestion type
 */
export interface UserSuggestion<T = unknown> {
	/** Suggestion title */
	title: string
	/** Suggestion content */
	content: string
	/** Category */
	category: SuggestionCategory
	/** User */
	user?: T
	/** Timestamp */
	timestamp: number
	/** Status */
	status: SuggestionStatus
}

/**
 * Suggestion category
 */
export type SuggestionCategory = 'improvement' | 'new-feature' | 'documentation' | 'performance' | 'api-design' | 'other'

/**
 * Suggestion status
 */
export type SuggestionStatus = 'new' | 'under-review' | 'accepted' | 'declined' | 'implemented'

// ============== Survey Types ==============

/**
 * Survey - Survey type
 */
export interface Survey<T = unknown> {
	/** Survey ID */
	id: string
	/** Survey title */
	title: string
	/** Description */
	description: string
	/** Questions */
	questions: SurveyQuestion<T>[]
	/** Created at */
	createdAt: number
	/** Expires at */
	expiresAt?: number
	/** Is active */
	active: boolean
}

/**
 * Survey question
 */
export interface SurveyQuestion<T = unknown> {
	/** Question ID */
	id: string
	/** Question text */
	question: string
	/** Question type */
	type: SurveyQuestionType
	/** Options (for choice types) */
	options?: string[]
	/** Is required */
	required: boolean
	/** Default answer */
	defaultAnswer?: T
}

/**
 * Survey question types
 */
export type SurveyQuestionType
	= | 'text'
	| 'single-choice'
	| 'multiple-choice'
	| 'rating'
	| 'scale'
	| 'boolean'
	| 'ranking'

/**
 * SurveyResult - Survey result type
 */
export interface SurveyResult<T = unknown> {
	/** Survey ID */
	surveyId: string
	/** Respondent */
	respondent?: T
	/** Answers */
	answers: Record<string, unknown>
	/** Submitted at */
	submittedAt: number
}

/**
 * FeedbackAnalysis - Analysis of feedback data
 */
export interface FeedbackAnalysis<T = unknown> {
	/** Total responses */
	totalResponses: number
	/** Average rating */
	averageRating: number
	/** Sentiment analysis */
	sentiment: SentimentResult
	/** Common themes */
	themes: string[]
	/** Priority summary */
	prioritySummary: Record<FeaturePriority, number>
	/** Category breakdown */
	categoryBreakdown: Record<string, number>
	/** Raw data */
	rawData?: T[]
}

/**
 * Sentiment result
 */
export interface SentimentResult {
	/** Positive percentage */
	positive: number
	/** Neutral percentage */
	neutral: number
	/** Negative percentage */
	negative: number
	/** Overall sentiment */
	overall: 'positive' | 'neutral' | 'negative'
}

// ============== Issue Tracking ==============

/**
 * IssueTemplate - Issue template type
 */
export interface IssueTemplate<T = unknown> {
	/** Template name */
	name: string
	/** Template description */
	description: string
	/** Issue category */
	category: IssueCategory
	/** Template fields */
	fields: TemplateField<T>[]
	/** Labels */
	labels: string[]
}

/**
 * Issue category
 */
export type IssueCategory = 'bug' | 'feature' | 'documentation' | 'performance' | 'security' | 'question'

/**
 * Template field
 */
export interface TemplateField<T = unknown> {
	/** Field name */
	name: string
	/** Field type */
	type: 'text' | 'textarea' | 'select' | 'multiselect' | 'checkbox' | 'number'
	/** Is required */
	required: boolean
	/** Default value */
	default?: T
	/** Options (for select types) */
	options?: string[]
	/** Description */
	description: string
}

/**
 * IssueTrackingConfig - Configuration for issue tracking
 */
export interface IssueTrackingConfig {
	/** Allowed categories */
	allowedCategories: IssueCategory[]
	/** Required fields */
	requiredFields: string[]
	/** Auto-label rules */
	autoLabelRules: AutoLabelRule[]
	/** Template assignments */
	templateAssignments: Record<IssueCategory, string>
}

/**
 * Auto label rule
 */
export interface AutoLabelRule {
	/** Condition field */
	field: string
	/** Condition value */
	value: string
	/** Label to apply */
	label: string
}
