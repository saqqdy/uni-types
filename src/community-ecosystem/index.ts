/**
 * Community & Ecosystem
 *
 * Final community tools and ecosystem support
 * for the v1.x to v2.0.0 transition.
 */

// ============== Community Types ==============

/**
 * CommunityContributed - A community-contributed type
 */
export type CommunityContributed<T> = T & {
	/** Contribution marker */
	readonly __community__: true
	/** Contributor */
	readonly __contributor__: string
	/** Contribution date */
	readonly __date__: string
}

/**
 * CommunityApproved - A community-approved type
 */
export type CommunityApproved<T> = T & {
	/** Approval marker */
	readonly __approved__: true
	/** Approval date */
	readonly __approvalDate__: string
	/** Approver */
	readonly __approver__: string
}

/**
 * CommunityPattern - A community-recognized pattern
 */
export interface CommunityPattern<T> {
	/** The pattern */
	readonly pattern: T
	/** Pattern name */
	readonly name: string
	/** Pattern category */
	readonly category: PatternCategory
	/** Popularity score */
	readonly popularity: number
}

/**
 * PatternCategory - Category of community pattern
 */
export type PatternCategory = 'common' | 'advanced' | 'framework' | 'library' | 'pattern' | 'anti-pattern'

/**
 * BestPractice - A best practice recommendation
 */
export interface BestPractice<T> {
	/** The recommended type */
	readonly _type: T
	/** Practice title */
	readonly title: string
	/** Practice description */
	readonly description: string
	/** Rationale */
	readonly rationale: string
	/** Examples */
	readonly examples: string[]
	/** Counter-examples */
	readonly counterExamples: string[]
}

// ============== Plugin Ecosystem ==============

/**
 * CommunityPluginAPI - Plugin API for community contributions
 */
export interface CommunityPluginAPI<T> {
	/** Plugin name */
	readonly name: string
	/** Plugin API version */
	readonly version: string
	/** API type */
	readonly type: T
	/** Is stable */
	readonly stable: boolean
}

/**
 * CommunityPluginHook - Hook for community plugins
 */
export interface CommunityPluginHook<T> {
	/** Hook name */
	readonly name: string
	/** Hook type */
	readonly type: PluginHookType
	/** Hook handler type */
	readonly handler: T
	/** Priority */
	readonly priority: number
}

/**
 * PluginHookType - Type of plugin hook
 */
export type PluginHookType = 'before' | 'after' | 'transform' | 'validate' | 'error'

/**
 * CommunityPluginRegistry - Registry of community plugins
 */
export interface CommunityPluginRegistry<T> {
	/** Registered plugins */
	readonly plugins: Record<string, CommunityPluginEntry<T>>
	/** Total count */
	readonly total: number
	/** Official count */
	readonly official: number
	/** Community count */
	readonly community: number
}

/**
 * CommunityPlugin - A community plugin
 */
export interface CommunityPlugin<T> {
	/** Plugin name */
	readonly name: string
	/** Plugin version */
	readonly version: string
	/** Plugin author */
	readonly author: string
	/** Plugin data */
	readonly data: T
	/** Is official */
	readonly official: boolean
	/** Rating */
	readonly rating: number
	/** Downloads */
	readonly downloads: number
}

/**
 * CommunityPluginEntry - Entry in the plugin registry
 */
export interface CommunityPluginEntry<T> {
	/** Plugin */
	readonly plugin: CommunityPlugin<T>
	/** Registration date */
	readonly registeredAt: string
	/** Last updated */
	readonly lastUpdated: string
	/** Is verified */
	readonly verified: boolean
}

// ============== Recipe Types ==============

/**
 * Recipe - A type recipe
 */
export interface Recipe<T> {
	/** The type produced by this recipe */
	readonly _output: T
	/** Recipe name */
	readonly name: string
	/** Recipe description */
	readonly description: string
	/** Recipe category */
	readonly category: RecipeCategory
	/** Ingredients (input types) */
	readonly ingredients: string[]
	/** Steps */
	readonly steps: string[]
}

/**
 * RecipeCategory - Category of recipe
 */
export type RecipeCategory = 'common' | 'advanced' | 'framework' | 'pattern'

/**
 * RecipeLibrary - Library of recipes
 */
export interface RecipeLibrary<T> {
	/** Library name */
	readonly name: string
	/** Recipes */
	readonly recipes: Recipe<T>[]
	/** Total count */
	readonly total: number
	/** Categories */
	readonly categories: Record<RecipeCategory, number>
}

/**
 * RecipeExample - An example using a recipe
 */
export interface RecipeExample<T> {
	/** Recipe name */
	readonly recipeName: string
	/** Example title */
	readonly title: string
	/** Example code */
	readonly code: string
	/** Expected result type */
	readonly result: T
	/** Difficulty */
	readonly difficulty: 'beginner' | 'intermediate' | 'advanced'
}

// ============== Cookbook Types ==============

/**
 * CookbookRecipe - A cookbook recipe for types
 */
export interface CookbookRecipe<T> {
	/** Recipe name */
	readonly name: string
	/** Recipe description */
	readonly description: string
	/** Category */
	readonly category: CookbookCategory
	/** The type produced */
	readonly _type: T
	/** Ingredients */
	readonly ingredients: string[]
	/** Instructions */
	readonly instructions: string[]
	/** Tips */
	readonly tips: string[]
}

/**
 * CookbookCategory - Category of cookbook recipe
 */
export type CookbookCategory = 'basics' | 'intermediate' | 'advanced' | 'expert' | 'frameworks' | 'patterns'

/**
 * CookbookExample - An example from the cookbook
 */
export interface CookbookExample<T> {
	/** Example name */
	readonly name: string
	/** Example description */
	readonly description: string
	/** The type */
	readonly _type: T
	/** Code snippet */
	readonly code: string
	/** Explanation */
	readonly explanation: string
}

/**
 * CookbookPattern - A pattern from the cookbook
 */
export interface CookbookPattern<T> {
	/** Pattern name */
	readonly name: string
	/** Pattern type */
	readonly pattern: 'creational' | 'structural' | 'behavioral'
	/** The type */
	readonly _type: T
	/** Use cases */
	readonly useCases: string[]
	/** Benefits */
	readonly benefits: string[]
	/** Trade-offs */
	readonly tradeoffs: string[]
}
