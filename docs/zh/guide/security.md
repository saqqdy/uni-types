# 安全类型

**始于 1.6.0**

用于安全相关操作的类型。

## 概述

安全类型提供了用于身份验证、加密、签名和安全保护的类型。它支持 JWT、OAuth、会话管理、CSRF 保护和加密操作。

此模块支持构建具有令牌、凭证和加密算法正确类型约束的类型安全安全系统。

## 基本用法

```typescript
import type { Authentication, Session, JWT, Encryption, Signature, OAuthToken } from 'uni-types'

// 身份验证配置
type AuthConfig = Authentication<{
  type: 'jwt'
  status: 'authenticated'
  user: User
}>

// 会话管理
type UserSession = Session<{
  id: SessionId
  user: User
  data: SessionData
}>

// JWT 令牌
type AccessToken = JWT<{
  userId: string
  roles: string[]
}>
```

## 核心类型

### AuthType

身份验证类型。

```typescript
type AuthType = 'bearer' | 'basic' | 'jwt' | 'oauth2' | 'saml' | 'certificate' | 'api-key' | 'session'
```

### AuthStatus

身份验证状态。

```typescript
type AuthStatus = 'authenticated' | 'unauthenticated' | 'pending' | 'failed' | 'expired'
```

### Authentication

身份验证配置类型。

```typescript
type Authentication<T = unknown> = {
  type: AuthType
  status: AuthStatus
  provider: AuthProvider<T>
  token?: AuthToken
  user?: T
}
```

### Session

具有用户数据的会话类型。

```typescript
type Session<T = unknown> = {
  id: SessionId
  user: T
  data: SessionData
  createdAt: Date
  expiresAt: Date
}
```

### EncryptionAlgorithm

加密算法类型。

```typescript
type EncryptionAlgorithm = 'aes-256-gcm' | 'aes-128-gcm' | 'chacha20-poly1305' | 'rsa-oaep' | 'ecies'
```

### Encryption

加密配置类型。

```typescript
type Encryption<T = unknown> = {
  algorithm: EncryptionAlgorithm
  key: Key
  data: EncryptedData
}
```

### HashAlgorithm

哈希算法类型。

```typescript
type HashAlgorithm = 'sha256' | 'sha512' | 'sha384' | 'sha1' | 'md5' | 'blake2b' | 'blake3'
```

### SignatureAlgorithm

签名算法类型。

```typescript
type SignatureAlgorithm = 'rsa-sha256' | 'rsa-sha512' | 'ecdsa-sha256' | 'ed25519' | 'hmac-sha256'
```

### JWT

JWT 令牌类型。

```typescript
type JWT<T = unknown> = {
  header: JWTHeader
  payload: JWTPayload<T>
  signature: string
}
```

### OAuthToken

OAuth 令牌类型。

```typescript
type OAuthToken = {
  accessToken: string
  refreshToken?: string
  expiresIn: number
  tokenType: 'bearer' | 'mac'
  scope?: string[]
}
```

### CSRFToken

CSRF 令牌类型。

```typescript
type CSRFToken = {
  token: string
  expiresAt: Date
  scope?: string
}
```

## 相关

- [授权](./auth) - 授权类型
- [HTTP](./http) - HTTP 类型