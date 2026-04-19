# 授权与权限

**自 1.5.0 起**

用于授权和权限管理的类型工具。

## 概述

授权与权限模块提供了访问控制所需的完整类型支持，包括权限定义、角色管理、策略规则和访问控制模型。这些类型可以帮助你构建安全、灵活的权限系统。

通过这些类型工具，你可以实现基于角色的访问控制（RBAC）、基于属性的访问控制（ABAC），以及细粒度的资源权限管理，确保系统安全性和灵活性。

## 基本用法

```typescript
import type { Permission, Role, Policy, RBAC, ABAC, AccessControl } from 'uni-types'

// 定义权限
type ReadPermission = Permission<'read'>
type WritePermission = Permission<'write'>

// 定义角色
type AdminRole = Role<'admin'>

// 定义策略
type AdminPolicy = Policy
```

## 主要类型

### Permission

权限类型，定义对资源的操作权限。

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

角色类型，定义一组权限的集合。

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

策略类型，定义访问控制的规则。

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

基于角色的访问控制类型，实现用户-角色-权限的管理。

```typescript
type RBAC<R extends string = string, P extends string = string> = {
  roles: Map<R, Role<R>>
  rolePermissions: Map<R, P[]>
  userRoles: Map<string, R[]>
  assignRole: (userId: string, role: R) => void
  revokeRole: (userId: string, role: R) => void
  getUserPermissions: (userId: string) => P[]
  checkPermission: (userId: string, permission: P) => boolean
}
```

### ABAC

基于属性的访问控制类型，实现动态权限决策。

```typescript
type ABAC<T = unknown> = {
  policies: Policy[]
  addPolicy: (policy: Policy) => void
  removePolicy: (policyId: string) => void
  evaluate: (context: PolicyContext<T>) => PolicyResult
  getApplicablePolicies: (context: PolicyContext<T>) => Policy[]
}
```

### AccessControl

访问控制类型，提供统一的权限检查接口。

```typescript
type AccessControl<T = unknown> = {
  check: (context: PolicyContext<T>) => PolicyResult
  grant: (principal: string, permission: string) => void
  revoke: (principal: string, permission: string) => void
  getPermissions: (principal: string) => PermissionSet
}
```

## 相关

- [API 参考](/zh/api/auth/)
