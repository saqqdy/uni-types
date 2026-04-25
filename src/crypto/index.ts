/**
 * Type-Level Cryptography
 *
 * Type-level cryptographic utilities for type-safe crypto operations.
 */

// ============================================================================
// Hash Types
// ============================================================================

/**
 * Hash algorithm type
 */
export type HashAlgorithm
	= | 'sha256'
		| 'sha384'
		| 'sha512'
		| 'sha3-256'
		| 'sha3-384'
		| 'sha3-512'
		| 'blake2b'
		| 'blake2s'
		| 'md5'
		| 'ripemd160'

/**
 * Hash result type
 */
export interface HashResult<T extends HashAlgorithm = HashAlgorithm> {
	algorithm: T
	value: string
	length: number
}

/**
 * SHA256 hash type (type-level)
 */
export type SHA256<_T extends string> = string

/**
 * SHA512 hash type (type-level)
 */
export type SHA512<_T extends string> = string

/**
 * MD5 hash type (type-level, not recommended)
 */
export type MD5<_T extends string> = string

/**
 * Blake3 hash type (type-level)
 */
export type Blake3<_T extends string> = string

// ============================================================================
// Encoding Types
// ============================================================================

/**
 * Encoding format type
 */
export type EncodingFormat
	= | 'base64'
		| 'base64url'
		| 'hex'
		| 'utf8'
		| 'utf16'
		| 'ascii'
		| 'binary'
		| 'url'

/**
 * Base64 encoded type
 */
export type Base64<T extends string = string> = T

/**
 * Base64URL encoded type
 */
export type Base64URL<T extends string = string> = T

/**
 * Hex encoded type
 */
export type Hex<T extends string = string> = T

/**
 * URL encoded type
 */
export type URLEncoded<T extends string = string> = T

/**
 * Encoding result type
 */
export interface EncodingResult<
	From extends EncodingFormat = EncodingFormat,
	To extends EncodingFormat = EncodingFormat,
> {
	original: string
	encoded: string
	from: From
	to: To
}

// ============================================================================
// Encryption Types
// ============================================================================

/**
 * Encryption algorithm type
 */
export type EncryptionAlgorithm
	= | 'aes-128-cbc'
		| 'aes-192-cbc'
		| 'aes-256-cbc'
		| 'aes-128-gcm'
		| 'aes-192-gcm'
		| 'aes-256-gcm'
		| 'aes-128-ctr'
		| 'aes-256-ctr'
		| 'chacha20-poly1305'
		| 'xchacha20-poly1305'

/**
 * Encrypted data type
 */
export interface EncryptedData<T extends EncryptionAlgorithm = EncryptionAlgorithm> {
	algorithm: T
	ciphertext: string
	iv: string
	tag?: string
	aad?: string
}

/**
 * Encrypted type wrapper
 */
export interface Encrypted<T, _Key extends string = string> {
	_encrypted: true
	_algorithm: EncryptionAlgorithm
	_data: T
}

/**
 * Decrypted type wrapper
 */
export interface Decrypted<T, _Key extends string = string> {
	_decrypted: true
	_data: T
}

/**
 * Cipher text type
 */
export type CipherText<T extends string = string> = T

/**
 * Plain text type
 */
export type PlainText<T extends string = string> = T

/**
 * Encryption options
 */
export interface EncryptionOptions<A extends EncryptionAlgorithm = EncryptionAlgorithm> {
	algorithm: A
	key: string
	iv?: string
	aad?: string
	tagLength?: number
}

// ============================================================================
// Key Types
// ============================================================================

/**
 * Key type
 */
export interface Key<T extends KeyType = 'symmetric'> {
	type: T
	value: string
	algorithm?: string
	length: number
	created?: Date
	expires?: Date
}

/**
 * Key type enumeration
 */
export type KeyType = 'symmetric' | 'asymmetric-private' | 'asymmetric-public'

/**
 * Key pair type
 */
export interface KeyPair<P extends AsymmetricAlgorithm = AsymmetricAlgorithm> {
	privateKey: Key<'asymmetric-private'>
	publicKey: Key<'asymmetric-public'>
	algorithm: P
}

/**
 * Asymmetric algorithm type
 */
export type AsymmetricAlgorithm
	= | 'rsa'
		| 'rsa-pss'
		| 'ecdsa-p256'
		| 'ecdsa-p384'
		| 'ecdsa-p521'
		| 'ed25519'
		| 'ed448'
		| 'x25519'
		| 'x448'

/**
 * Key derivation options
 */
export interface KeyDerivationOptions {
	algorithm: 'pbkdf2' | 'hkdf' | 'scrypt' | 'argon2'
	salt: string
	iterations?: number
	length?: number
	hash?: HashAlgorithm
	memory?: number
	parallelism?: number
}

/**
 * Derived key type
 */
export interface DerivedKey<T extends KeyDerivationOptions = KeyDerivationOptions> {
	algorithm: T['algorithm']
	value: string
	salt: string
	iterations: number
}

/**
 * PBKDF2 derived key
 */
export type PBKDF2<T extends string = string> = DerivedKey<{ algorithm: 'pbkdf2', salt: T }>

/**
 * HKDF derived key
 */
export type HKDF<T extends string = string> = DerivedKey<{ algorithm: 'hkdf', salt: T }>

// ============================================================================
// Signature Types
// ============================================================================

/**
 * Signature algorithm type
 */
export type SignatureAlgorithm
	= | 'rsa-sha256'
		| 'rsa-sha384'
		| 'rsa-sha512'
		| 'ecdsa-sha256'
		| 'ecdsa-sha384'
		| 'ecdsa-sha512'
		| 'ed25519'
		| 'hmac-sha256'
		| 'hmac-sha512'

/**
 * Signature result type
 */
export interface SignatureResult<A extends SignatureAlgorithm = SignatureAlgorithm> {
	algorithm: A
	signature: string
	message: string
}

/**
 * Signed data type
 */
export interface Signed<T, _Key extends string = string> {
	_signed: true
	_data: T
	_signature: string
}

/**
 * Verified data type
 */
export interface Verified<T> {
	_verified: true
	_data: T
	_valid: boolean
}

/**
 * Signing key type
 */
export type SigningKey<T extends AsymmetricAlgorithm = AsymmetricAlgorithm> = Key<'asymmetric-private'> & {
	algorithm: T
}

/**
 * Verification key type
 */
export type VerificationKey<T extends AsymmetricAlgorithm = AsymmetricAlgorithm> = Key<'asymmetric-public'> & {
	algorithm: T
}

// ============================================================================
// Checksum Types
// ============================================================================

/**
 * Checksum type
 */
export interface Checksum<T extends ChecksumAlgorithm = ChecksumAlgorithm> {
	algorithm: T
	value: string
	length: number
}

/**
 * Checksum algorithm type
 */
export type ChecksumAlgorithm = 'crc32' | 'crc32c' | 'adler32' | 'fnv1a' | 'murmurhash3'

/**
 * CRC32 checksum
 */
export type CRC32<_T extends string = string> = number

/**
 * Adler32 checksum
 */
export type Adler32<_T extends string = string> = number

/**
 * FNV1a hash
 */
export type FNV1a<_T extends string = string> = number

// ============================================================================
// MAC Types
// ============================================================================

/**
 * MAC algorithm type
 */
export type MACAlgorithm = 'hmac-sha256' | 'hmac-sha384' | 'hmac-sha512' | 'cmac-aes'

/**
 * MAC result type
 */
export interface MACResult<A extends MACAlgorithm = MACAlgorithm> {
	algorithm: A
	value: string
}

// ============================================================================
// JWT Types
// ============================================================================

/**
 * JWT header type
 */
export interface JWTHeader {
	alg: string
	typ: 'JWT'
	kid?: string
	cty?: string
}

/**
 * JWT payload type
 */
export interface JWTPayload<T = unknown> {
	iss?: string
	sub?: string
	aud?: string | string[]
	exp?: number
	nbf?: number
	iat?: number
	jti?: string
	[key: string]: T | string | string[] | number | undefined
}

/**
 * JWT token type
 */
export interface JWT<T extends JWTPayload = JWTPayload> {
	header: JWTHeader
	payload: T
	signature: string
}

/**
 * JWT signature algorithm
 */
export type JWTAlgorithm
	= | 'HS256'
		| 'HS384'
		| 'HS512'
		| 'RS256'
		| 'RS384'
		| 'RS512'
		| 'ES256'
		| 'ES384'
		| 'ES512'
		| 'PS256'
		| 'PS384'
		| 'PS512'
		| 'EdDSA'

// ============================================================================
// Password Types
// ============================================================================

/**
 * Password hash options
 */
export interface PasswordHashOptions {
	algorithm: 'bcrypt' | 'argon2id' | 'scrypt' | 'pbkdf2'
	cost?: number
	memoryCost?: number
	timeCost?: number
	parallelism?: number
}

/**
 * Password hash result
 */
export interface PasswordHashResult<A extends PasswordHashOptions['algorithm'] = PasswordHashOptions['algorithm']> {
	algorithm: A
	hash: string
	salt: string
	cost: number
}

/**
 * Password verification result
 */
export interface PasswordVerificationResult {
	valid: boolean
	needsRehash: boolean
}

// ============================================================================
// Certificate Types
// ============================================================================

/**
 * Certificate type
 */
export interface Certificate {
	version: number
	serialNumber: string
	issuer: DistinguishedName
	subject: DistinguishedName
	validFrom: Date
	validTo: Date
	publicKey: Key<'asymmetric-public'>
	signature: string
	signatureAlgorithm: SignatureAlgorithm
	extensions: CertificateExtension[]
}

/**
 * Distinguished name type
 */
export interface DistinguishedName {
	CN?: string
	O?: string
	OU?: string
	L?: string
	ST?: string
	C?: string
	[key: string]: string | undefined
}

/**
 * Certificate extension type
 */
export interface CertificateExtension {
	oid: string
	critical: boolean
	value: unknown
}

// ============================================================================
// Crypto Utilities
// ============================================================================

/**
 * Random bytes type
 */
export type RandomBytes<_N extends number = number> = string

/**
 * Nonce type
 */
export type Nonce<_N extends number = number> = string

/**
 * IV (Initialization Vector) type
 */
export type IV<_N extends number = number> = string

/**
 * Salt type
 */
export type Salt<_N extends number = number> = string

/**
 * Timestamp type (for replay protection)
 */
export type CryptoTimestamp = number

/**
 * Crypto context type
 */
export interface CryptoContext {
	algorithm?: string
	key?: Key
	iv?: IV
	salt?: Salt
	timestamp?: CryptoTimestamp
}

// ============================================================================
// Hash Utility Types
// ============================================================================

/**
 * Hash input type
 */
export type HashInput<T = unknown> = T

/**
 * Hash output type
 */
export type HashOutput<T extends HashAlgorithm = HashAlgorithm> = HashResult<T>

/**
 * Hash function type
 */
export type HashFunction<I = unknown, O extends HashAlgorithm = HashAlgorithm> = (input: I) => HashOutput<O>

// ============================================================================
// Crypto Constants
// ============================================================================

/**
 * Key length constants
 */
export type KeyLength<A extends EncryptionAlgorithm> = A extends 'aes-128-cbc' | 'aes-128-gcm' | 'aes-128-ctr'
	? 128
	: A extends 'aes-192-cbc' | 'aes-192-gcm'
		? 192
		: A extends 'aes-256-cbc' | 'aes-256-gcm' | 'aes-256-ctr' | 'chacha20-poly1305'
			? 256
			: number

/**
 * IV length constants
 */
export type IVLength<A extends EncryptionAlgorithm> = A extends 'aes-128-gcm' | 'aes-192-gcm' | 'aes-256-gcm'
	? 12
	: A extends 'chacha20-poly1305'
		? 12
		: A extends 'aes-128-cbc' | 'aes-192-cbc' | 'aes-256-cbc'
			? 16
			: number

/**
 * Tag length constants
 */
export type TagLength<A extends EncryptionAlgorithm> = A extends
	| 'aes-128-gcm'
	| 'aes-192-gcm'
	| 'aes-256-gcm'
	| 'chacha20-poly1305'
	? 16
	: 0
