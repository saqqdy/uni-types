# Security Types

**Since 1.6.0**

Types for security-related operations.

## Overview

Security Types provides types for authentication, encryption, signing, and security protection. It supports JWT, OAuth, session management, CSRF protection, and cryptographic operations.

This module enables building type-safe security systems with proper constraints for tokens, credentials, and encryption algorithms.

## Basic Usage

```typescript
import type { Authentication, Session, JWT, Encryption, Signature, OAuthToken } from 'uni-types'

// Authentication configuration
type AuthConfig = Authentication<{
  type: 'jwt'
  status: 'authenticated'
  user: User
}>

// Session management
type UserSession = Session<{
  id: SessionId
  user: User
  data: SessionData
}>

// JWT token
type AccessToken = JWT<{
  userId: string
  roles: string[]
}>
```

## Key Types

### AuthType

Authentication type types.

```typescript
type AuthType = 'bearer' | 'basic' | 'jwt' | 'oauth2' | 'saml' | 'certificate' | 'api-key' | 'session'
```

### AuthStatus

Authentication status types.

```typescript
type AuthStatus = 'authenticated' | 'unauthenticated' | 'pending' | 'failed' | 'expired'
```

### Authentication

Authentication configuration type.

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

Session type with user data.

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

Encryption algorithm types.

```typescript
type EncryptionAlgorithm = 'aes-256-gcm' | 'aes-128-gcm' | 'chacha20-poly1305' | 'rsa-oaep' | 'ecies'
```

### Encryption

Encryption configuration type.

```typescript
type Encryption<T = unknown> = {
  algorithm: EncryptionAlgorithm
  key: Key
  data: EncryptedData
}
```

### HashAlgorithm

Hash algorithm types.

```typescript
type HashAlgorithm = 'sha256' | 'sha512' | 'sha384' | 'sha1' | 'md5' | 'blake2b' | 'blake3'
```

### SignatureAlgorithm

Signature algorithm types.

```typescript
type SignatureAlgorithm = 'rsa-sha256' | 'rsa-sha512' | 'ecdsa-sha256' | 'ed25519' | 'hmac-sha256'
```

### JWT

JWT token type.

```typescript
type JWT<T = unknown> = {
  header: JWTHeader
  payload: JWTPayload<T>
  signature: string
}
```

### OAuthToken

OAuth token type.

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

CSRF token type.

```typescript
type CSRFToken = {
  token: string
  expiresAt: Date
  scope?: string
}
```

## Related

- [Auth](./auth) - Authorization types
- [HTTP](./http) - HTTP types