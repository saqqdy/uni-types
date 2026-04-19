/**
 * Security Types
 *
 * Types for security, authentication, and encryption.
 */

// ============================================================================
// Authentication Types
// ============================================================================

/**
 * Authentication type
 */
export interface Authentication<T = unknown> {
	type: AuthType
	status: AuthStatus
	user: T
	authenticatedAt: Date
	expiresAt?: Date
}

/**
 * Authentication type enumeration
 */
export type AuthType = 'basic' | 'bearer' | 'oauth2' | 'jwt' | 'api-key' | 'certificate' | 'session' | 'custom'

/**
 * Authentication status
 */
export type AuthStatus = 'pending' | 'authenticated' | 'expired' | 'failed' | 'logged_out'

/**
 * Authentication provider type
 */
export interface AuthProvider<T = unknown> {
	name: string
	type: AuthType
	authenticate: (credentials: Credentials) => Promise<AuthResult<T>>
	validate: (token: string) => Promise<boolean>
	refresh: (token: string) => Promise<string>
	logout: (token: string) => Promise<void>
}

/**
 * Credentials type
 */
export type Credentials = BasicCredentials | APICredentials | OAuthCredentials | CertificateCredentials

/**
 * Basic credentials
 */
export interface BasicCredentials {
	type: 'basic'
	username: string
	password: string
}

/**
 * API credentials
 */
export interface APICredentials {
	type: 'api-key'
	key: string
	secret?: string
	expires?: Date
}

/**
 * OAuth credentials
 */
export interface OAuthCredentials {
	type: 'oauth2'
	accessToken: string
	refreshToken?: string
	expiresAt?: Date
}

/**
 * Certificate credentials
 */
export interface CertificateCredentials {
	type: 'certificate'
	certificate: string
	privateKey?: string
	passphrase?: string
}

/**
 * Authentication token type
 */
export interface AuthToken {
	value: string
	type: 'bearer' | 'jwt' | 'api-key'
	expiresAt?: Date
	refreshToken?: string
	scope?: string[]
	issuedAt: Date
}

/**
 * Authentication result type
 */
export type AuthResult<T = unknown> = { success: true, user: T, token: AuthToken } | { success: false, error: AuthError }

/**
 * Authentication error type
 */
export interface AuthError {
	code: string
	message: string
	reason?: string
	attempts?: number
	lockedUntil?: Date
}

// ============================================================================
// Session Types
// ============================================================================

/**
 * Session type
 */
export interface Session<T = unknown> {
	id: SessionId
	data: SessionData<T>
	createdAt: Date
	updatedAt: Date
	expiresAt?: Date
	userId?: string
	metadata?: Record<string, unknown>
}

/**
 * Session ID type
 */
export type SessionId = string

/**
 * Session data type
 */
export interface SessionData<T = unknown> {
	[key: string]: T
}

/**
 * Session configuration
 */
export interface SessionConfig {
	name: string
	secret: string
	maxAge: number
	secure: boolean
	httpOnly: boolean
	sameSite: 'strict' | 'lax' | 'none'
	domain?: string
	path?: string
}

/**
 * Session store type
 */
export interface SessionStore<T = unknown> {
	get: (id: SessionId) => Promise<Session<T> | null>
	set: (session: Session<T>) => Promise<void>
	destroy: (id: SessionId) => Promise<void>
	touch: (id: SessionId) => Promise<void>
	clear: () => Promise<void>
	length: () => Promise<number>
}

// ============================================================================
// Encryption Types
// ============================================================================

/**
 * Encryption type
 */
export interface Encryption<T = unknown> {
	encrypt: (data: T) => Promise<EncryptedData>
	decrypt: (data: EncryptedData) => Promise<T>
}

/**
 * Encrypted data type
 */
export interface EncryptedData {
	ciphertext: string
	iv: string
	tag?: string
	algorithm: EncryptionAlgorithm
	keyId?: string
}

/**
 * Encryption algorithm type
 */
export type EncryptionAlgorithm = 'aes-128-gcm' | 'aes-256-gcm' | 'aes-128-cbc' | 'aes-256-cbc' | 'chacha20-poly1305' | 'rsa-2048' | 'rsa-4096'

/**
 * Key type
 */
export interface Key<T = string> {
	id: string
	value: T
	algorithm: EncryptionAlgorithm
	createdAt: Date
	expiresAt?: Date
	keyStatus: KeyStatus
	usage: KeyUsage[]
}

/**
 * Key status
 */
export type KeyStatus = 'active' | 'inactive' | 'deactivated' | 'destroyed'

/**
 * Key usage
 */
export type KeyUsage = 'encrypt' | 'decrypt' | 'sign' | 'verify' | 'wrap' | 'unwrap'

/**
 * Key pair type
 */
export interface KeyPair {
	publicKey: Key
	privateKey: Key
	keySize: number
}

/**
 * Initialization vector type
 */
export type IV = string

/**
 * Key management type
 */
export interface KeyManagement {
	generateKey: (algorithm: EncryptionAlgorithm, keySize?: number) => Promise<Key>
	importKey: (key: string, algorithm: EncryptionAlgorithm) => Promise<Key>
	rotateKey: (keyId: string) => Promise<Key>
	deleteKey: (keyId: string) => Promise<void>
	getKey: (keyId: string) => Promise<Key | null>
}

// ============================================================================
// Hash Types
// ============================================================================

/**
 * Hash type
 */
export interface Hash<T = unknown> {
	algorithm: HashAlgorithm
	value: string
	salt?: Salt
	iterations?: number
	data?: T
}

/**
 * Hash algorithm type
 */
export type HashAlgorithm = 'md5' | 'sha1' | 'sha256' | 'sha384' | 'sha512' | 'sha3-256' | 'sha3-512' | 'blake2b' | 'blake2s' | 'blake3'

/**
 * Salt type
 */
export type Salt = string

/**
 * Hashed value type
 */
export interface HashedValue<T = unknown> {
	original?: T
	hash: Hash
	verified: boolean
}

/**
 * Password hash config
 */
export interface PasswordHashConfig {
	algorithm: HashAlgorithm
	saltLength: number
	iterations: number
	memoryCost?: number
	parallelism?: number
}

// ============================================================================
// Signature Types
// ============================================================================

/**
 * Signature type
 */
export interface Signature<T = unknown> {
	algorithm: SignatureAlgorithm
	value: string
	signingKey: SigningKey<T>
	data: SignedData
	signatureCreatedAt: Date
}

/**
 * Signature algorithm
 */
export type SignatureAlgorithm = 'rsa-sha256' | 'rsa-sha512' | 'ecdsa-p256' | 'ecdsa-p384' | 'ed25519' | 'hmac-sha256' | 'hmac-sha512'

/**
 * Signing key type
 */
export interface SigningKey<T = unknown> {
	id: string
	key: T
	algorithm: SignatureAlgorithm
	status: KeyStatus
}

/**
 * Verification key type
 */
export interface VerificationKey<T = unknown> {
	id: string
	key: T
	algorithm: SignatureAlgorithm
	status: KeyStatus
}

/**
 * Signed data type
 */
export interface SignedData<T = unknown> {
	data: T
	signature: string
	keyId: string
	timestamp: Date
	expires?: Date
}

/**
 * Signature verification result
 */
export type SignatureVerificationResult = { verified: true } | { verified: false, reason: string }

// ============================================================================
// CSRF Types
// ============================================================================

/**
 * CSRF token type
 */
export interface CSRFToken {
	value: string
	createdAt: Date
	expiresAt: Date
	sessionId?: string
}

/**
 * CSRF config
 */
export interface CSRFConfig {
	secret: string
	tokenLength: number
	expiry: number
	cookie?: SessionConfig
	header?: string
}

// ============================================================================
// XSS Protection Types
// ============================================================================

/**
 * Sanitized input type
 */
export interface SanitizedInput<T = string> {
	original: T
	sanitized: T
	changes: SanitizationChange[]
}

/**
 * Sanitization change
 */
export interface SanitizationChange {
	type: 'removed' | 'escaped' | 'replaced'
	location: { start: number, end: number }
	original: string
	replacement?: string
}

/**
 * Safe HTML type
 */
export interface SafeHTML<T = string> {
	html: T
	isSafe: boolean
	sanitized?: boolean
	context: 'html' | 'attribute' | 'script' | 'style' | 'url'
}

/**
 * Safe URL type
 */
export interface SafeURL {
	url: string
	isSafe: boolean
	protocol: string
	host?: string
	path?: string
	sanitized?: boolean
}

/**
 * Content security policy type
 */
export interface ContentSecurityPolicy {
	directives: Record<string, string[]>
	reportOnly: boolean
	reportUri?: string
}

// ============================================================================
// OAuth Types
// ============================================================================

/**
 * OAuth token type
 */
export interface OAuthToken {
	accessToken: string
	tokenType: 'bearer' | 'mac'
	expiresIn?: number
	refreshToken?: string
	scope?: string
	state?: string
	idToken?: string
}

/**
 * OAuth provider type
 */
export type OAuthProviderType = 'google' | 'github' | 'facebook' | 'twitter' | 'linkedin' | 'microsoft' | 'apple' | 'custom'

/**
 * OAuth config
 */
export interface OAuthConfig {
	provider: OAuthProviderType
	clientId: string
	clientSecret: string
	authorizationUrl: string
	tokenUrl: string
	userInfoUrl?: string
	scope: string[]
	redirectUri: string
	responseType: 'code' | 'token'
}

/**
 * OAuth provider config
 */
export interface OAuthProviderConfig {
	name: string
	type: OAuthProviderType
	authorizationUrl: string
	tokenUrl: string
	userInfoUrl?: string
	scope: string[]
	authorize: () => Promise<string>
	getToken: (code: string) => Promise<OAuthToken>
	refreshToken: (refreshToken: string) => Promise<OAuthToken>
}

// ============================================================================
// JWT Types
// ============================================================================

/**
 * JWT type
 */
export interface JWT<T = unknown> {
	header: JWTHeader
	payload: JWTPayload<T>
	signature: string
}

/**
 * JWT header type
 */
export interface JWTHeader {
	alg: 'HS256' | 'HS384' | 'HS512' | 'RS256' | 'RS384' | 'RS512' | 'ES256' | 'ES384' | 'ES512' | 'none'
	typ?: 'JWT'
	kid?: string
	jku?: string
}

/**
 * JWT payload type
 */
export type JWTPayload<T = unknown> = {
	iss?: string
	sub?: string
	aud?: string | string[]
	exp?: number
	nbf?: number
	iat?: number
	jti?: string
} & Record<string, T>

/**
 * JWT verification options
 */
export interface JWTVerifyOptions {
	algorithms?: string[]
	issuer?: string | string[]
	audience?: string | string[]
	subject?: string
	clockTolerance?: number
	currentTime?: number
	ignoreExpiration?: boolean
}

/**
 * JWT sign options
 */
export interface JWTSignOptions {
	algorithm: JWTHeader['alg']
	expiresIn?: string | number
	notBefore?: string | number
	issuer?: string
	subject?: string
	audience?: string | string[]
	jwtid?: string
	keyid?: string
}

// ============================================================================
// Rate Limiting Types
// ============================================================================

/**
 * Rate limit config
 */
export interface RateLimitConfig {
	windowMs: number
	maxRequests: number
	skipFailedRequests?: boolean
	skipSuccessfulRequests?: boolean
	keyGenerator?: (request: unknown) => string
	handler?: (request: unknown) => void
}

/**
 * Rate limit status
 */
export interface RateLimitStatus {
	limit: number
	remaining: number
	reset: Date
	retryAfter?: number
}

// ============================================================================
// Permission Types
// ============================================================================

/**
 * Permission check
 */
export interface PermissionCheck {
	action: string
	resource: string
	result: 'allow' | 'deny'
	reason?: string
	conditions?: Record<string, unknown>
}

/**
 * Role based permission
 */
export interface RoleBasedPermission {
	role: string
	permissions: string[]
	inherits?: string[]
}
