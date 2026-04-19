# Authorization & Permissions

**Since 1.5.0**

Types for authorization and permission management.

## Overview

Authorization & Permissions provides types for implementing Role-Based Access Control (RBAC), Attribute-Based Access Control (ABAC), and policy-based authorization. It supports permissions, roles, policies, and access control decisions.

This module enables building comprehensive authorization systems with fine-grained access control. It includes types for permission sets, role hierarchies, policy evaluation, and ACL-based systems.

## Basic Usage

```typescript
import type { Permission, Role, RBAC, Policy, AccessControl } from 'uni-types'

// Define permissions
type UserPermission = Permission<'read:users' | 'write:users'>

// Define roles
type AdminRole = Role<'admin'>

// RBAC system
type UserRBAC = RBAC<'admin' | 'user', 'read:users' | 'write:users'>
```

## Key Types

### Permission

Permission type with conditions.

```typescript
type Permission<T = string> = {
  name: T
  description?: string
  resource?: string
  action?: Action
  conditions?: PermissionCondition[]
}
```

### Role

Role type with permissions and inheritance.

```typescript
type Role<T = string> = {
  name: T
  description?: string
  permissions: PermissionSet
  inherits?: T[]
  createdAt?: Date
  updatedAt?: Date
}
```

### Policy

Policy type for ABAC systems.

```typescript
type Policy = {
  id: string
  name: string
  description?: string
  effect: PolicyEffect
  principals: string[]
  actions: Action[]
  resources: string[]
  conditions?: PolicyCondition[]
}
```

### RBAC

Role-Based Access Control system.

```typescript
type RBAC<R extends string = string, P extends string = string> = {
  roles: Map<R, Role<R>>
  rolePermissions: Map<R, P[]>
  userRoles: Map<string, R[]>
  assignRole: (userId: string, role: R) => void
  getUserPermissions: (userId: string) => P[]
  checkPermission: (userId: string, permission: P) => boolean
}
```

### ABAC

Attribute-Based Access Control system.

```typescript
type ABAC<T = unknown> = {
  policies: Policy[]
  addPolicy: (policy: Policy) => void
  removePolicy: (policyId: string) => void
  evaluate: (context: PolicyContext<T>) => PolicyResult
  getApplicablePolicies: (context: PolicyContext<T>) => Policy[]
}
```

## Related

- [API Reference](/api/auth/)
- [HTTP & API](./http) - HTTP types
