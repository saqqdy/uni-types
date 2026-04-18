/**
 * Authorization & Permissions Types
 *
 * Types for authorization and permission management.
 */

// ============================================================================
// Permission Types
// ============================================================================

/**
 * Permission type
 */
export type Permission<T = string> = {
	name: T
	description?: string
	resource?: string
	action?: Action
	conditions?: PermissionCondition[]
}

/**
 * Permission set
 */
export type PermissionSet<T = string> = Set<T> | T[]

/**
 * Permission grant
 */
export type PermissionGrant<T = string> = {
	permission: T
	granted: true
	grantedBy: string
	grantedAt: Date
	expiresAt?: Date
	conditions?: PermissionCondition[]
}

/**
 * Permission deny
 */
export type PermissionDeny<T = string> = {
	permission: T
	granted: false
	deniedBy: string
	deniedAt: Date
	reason?: string
}

/**
 * Permission condition
 */
export type PermissionCondition<T = unknown> = {
	attribute: string
	operator: ConditionOperator
	value: T
}

/**
 * Condition operator
 */
export type ConditionOperator =
	| 'eq'
	| 'ne'
	| 'gt'
	| 'gte'
	| 'lt'
	| 'lte'
	| 'in'
	| 'notIn'
	| 'contains'
	| 'startsWith'
	| 'endsWith'
	| 'exists'
	| 'notExists'

/**
 * Permission check result
 */
export type PermissionCheckResult =
	| { allowed: true; reason?: string }
	| { allowed: false; reason: string; missingPermissions?: string[] }

// ============================================================================
// Role Types
// ============================================================================

/**
 * Role type
 */
export type Role<T = string> = {
	name: T
	description?: string
	permissions: PermissionSet
	inherits?: T[]
	createdAt?: Date
	updatedAt?: Date
}

/**
 * Role set
 */
export type RoleSet<T = string> = Set<T> | T[]

/**
 * Role permission mapping
 */
export type RolePermission<R = string, P = string> = {
	role: R
	permissions: P[]
	grantedAt?: Date
	grantedBy?: string
}

/**
 * Role hierarchy
 */
export type RoleHierarchy<T = string> = {
	role: T
	parent?: T
	children?: T[]
	level: number
}

// ============================================================================
// Policy Types
// ============================================================================

/**
 * Policy type
 */
export type Policy = {
	id: string
	name: string
	description?: string
	effect: PolicyEffect
	principals: string[]
	actions: Action[]
	resources: string[]
	conditions?: PolicyCondition[]
	version?: string
	createdAt: Date
	updatedAt: Date
}

/**
 * Policy rule
 */
export type PolicyRule<T = unknown> = {
	effect: PolicyEffect
	action: Action | Action[]
	resource: string | string[]
	condition?: PolicyCondition<T>[]
	description?: string
}

/**
 * Policy effect
 */
export type PolicyEffect = 'allow' | 'deny'

/**
 * Policy condition
 */
export type PolicyCondition<T = unknown> = {
	key: string
	operator: ConditionOperator
	value: T
	description?: string
}

/**
 * Policy evaluation context
 */
export type PolicyContext<T = unknown> = {
	principal: string
	action: Action
	resource: string
	environment?: Record<string, unknown>
	context?: T
}

/**
 * Policy evaluation result
 */
export type PolicyResult = {
	effect: PolicyEffect
	matchedPolicies: string[]
	deniedBy?: string[]
	allowedBy?: string[]
}

// ============================================================================
// Access Control Types
// ============================================================================

/**
 * Access control type
 */
export type AccessControl<T = unknown> = {
	check: (context: PolicyContext<T>) => PolicyResult
	grant: (principal: string, permission: string) => void
	revoke: (principal: string, permission: string) => void
	getPermissions: (principal: string) => PermissionSet
}

/**
 * ACL (Access Control List)
 */
export type ACL = {
	entries: ACLEntry[]
	getEntry: (principal: string, resource: string) => ACLEntry | undefined
	addEntry: (entry: ACLEntry) => void
	removeEntry: (principal: string, resource: string) => void
	check: (principal: string, resource: string, action: Action) => boolean
}

/**
 * ACL entry
 */
export type ACLEntry = {
	principal: string
	resource: string
	actions: Action[]
	effect: PolicyEffect
	conditions?: PolicyCondition[]
}

/**
 * Resource type
 */
export type Resource<T = unknown> = {
	type: string
	id: string
	attributes?: T
	owner?: string
	createdAt?: Date
	updatedAt?: Date
}

/**
 * Action type
 */
export type Action = 'create' | 'read' | 'update' | 'delete' | 'list' | 'execute' | 'admin' | string

// ============================================================================
// RBAC Types
// ============================================================================

/**
 * RBAC (Role-Based Access Control)
 */
export type RBAC<R extends string = string, P extends string = string> = {
	roles: Map<R, Role<R>>
	rolePermissions: Map<R, P[]>
	userRoles: Map<string, R[]>

	assignRole: (userId: string, role: R) => void
	revokeRole: (userId: string, role: R) => void
	getUserRoles: (userId: string) => R[]
	getUserPermissions: (userId: string) => P[]
	checkPermission: (userId: string, permission: P) => boolean
	addRole: (role: Role<R>) => void
	removeRole: (roleName: R) => void
	getRole: (roleName: R) => Role<R> | undefined
}

/**
 * RBAC configuration
 */
export type RBACConfig<R = string, P = string> = {
	roles: Role<R>[]
	rolePermissions: RolePermission<R, P>[]
	userRoleAssignments: { userId: string; roles: R[] }[]
	defaultRole?: R
	superAdminRole?: R
}

// ============================================================================
// ABAC Types
// ============================================================================

/**
 * ABAC (Attribute-Based Access Control)
 */
export type ABAC<T = unknown> = {
	policies: Policy[]

	addPolicy: (policy: Policy) => void
	removePolicy: (policyId: string) => void
	getPolicy: (policyId: string) => Policy | undefined
	evaluate: (context: PolicyContext<T>) => PolicyResult
	getApplicablePolicies: (context: PolicyContext<T>) => Policy[]
}

/**
 * Attribute type
 */
export type Attribute<T = unknown> = {
	name: string
	value: T
	type: 'string' | 'number' | 'boolean' | 'date' | 'list' | 'map'
	description?: string
}

/**
 * Attribute value
 */
export type AttributeValue<T = unknown> = {
	attribute: string
	value: T
	source: 'user' | 'resource' | 'environment' | 'context'
}

/**
 * ABAC configuration
 */
export type ABACConfig = {
	policies: Policy[]
	defaultDecision: PolicyEffect
	attributeResolvers?: Record<string, (context: PolicyContext) => AttributeValue>
}

// ============================================================================
// Authorization Provider
// ============================================================================

/**
 * Authorization provider
 */
export type AuthorizationProvider<T = unknown> = {
	initialize: () => Promise<void>
	checkPermission: (userId: string, permission: string, context?: T) => Promise<PermissionCheckResult>
	getUserPermissions: (userId: string) => Promise<PermissionSet>
	getUserRoles: (userId: string) => Promise<RoleSet>
	grantPermission: (userId: string, permission: string) => Promise<void>
	revokePermission: (userId: string, permission: string) => Promise<void>
	assignRole: (userId: string, role: string) => Promise<void>
	revokeRole: (userId: string, role: string) => Promise<void>
}

/**
 * Authorization options
 */
export type AuthorizationOptions = {
	cache: boolean
	cacheTTL: number
	throwOnDenied: boolean
	logDecisions: boolean
}
