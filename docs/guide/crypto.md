# Type-Level Cryptography

Type-level cryptographic utilities for type-safe crypto operations.

## Overview

The `crypto` module provides type-level cryptographic utilities, including hash types, encryption types, key management, signatures, JWT, and more.

## Hash Types

### HashAlgorithm

```ts
import type { HashAlgorithm, HashResult } from 'uni-types'

type Algo = HashAlgorithm // 'sha256' | 'sha384' | 'sha512' | 'md5' | 'blake2b' | ...

interface MyHashResult extends HashResult<'sha256'> {
  algorithm: 'sha256'
  value: string
  length: 64
}
```

### SHA256 / SHA512

```ts
import type { SHA256, SHA512, MD5, Blake3 } from 'uni-types'

type Hash = SHA256<'hello'> // string (hash value)
```

## Encoding Types

### EncodingFormat

```ts
import type { EncodingFormat, Base64, Hex, URLEncoded } from 'uni-types'

type Format = EncodingFormat // 'base64' | 'base64url' | 'hex' | 'utf8' | ...

type Encoded = Base64<string>
type HexValue = Hex<string>
```

## Encryption Types

### EncryptionAlgorithm

```ts
import type { EncryptionAlgorithm, EncryptedData, CipherText, PlainText } from 'uni-types'

type Algo = EncryptionAlgorithm // 'aes-128-cbc' | 'aes-256-gcm' | 'chacha20-poly1305' | ...

interface MyEncrypted extends EncryptedData<'aes-256-gcm'> {
  algorithm: 'aes-256-gcm'
  ciphertext: string
  iv: string
  tag?: string
}
```

### Encrypted / Decrypted

```ts
import type { Encrypted, Decrypted } from 'uni-types'

interface MyEncryptedData extends Encrypted<string, 'my-key'> {
  _encrypted: true
  _algorithm: 'aes-256-gcm'
  _data: string
}
```

## Key Types

### Key / KeyPair

```ts
import type { Key, KeyPair, KeyType, AsymmetricAlgorithm } from 'uni-types'

interface MyKey extends Key<'symmetric'> {
  type: 'symmetric'
  value: string
  length: 256
}

interface MyKeyPair extends KeyPair<'rsa'> {
  privateKey: Key<'asymmetric-private'>
  publicKey: Key<'asymmetric-public'>
}
```

### DerivedKey

```ts
import type { KeyDerivationOptions, DerivedKey, PBKDF2, HKDF } from 'uni-types'

interface MyDerivedKey extends DerivedKey {
  algorithm: 'pbkdf2'
  value: string
  salt: string
  iterations: 100000
}
```

## Signature Types

### SignatureAlgorithm

```ts
import type { SignatureAlgorithm, SignatureResult, Signed, Verified } from 'uni-types'

type Algo = SignatureAlgorithm // 'rsa-sha256' | 'ecdsa-sha256' | 'ed25519' | ...

interface MySignature extends SignatureResult<'rsa-sha256'> {
  algorithm: 'rsa-sha256'
  signature: string
  message: string
}
```

## Checksum Types

```ts
import type { Checksum, CRC32, Adler32, FNV1a } from 'uni-types'

type Check = CRC32<'data'> // number
type Hash = FNV1a<'data'> // number
```

## JWT Types

### JWT

```ts
import type { JWT, JWTHeader, JWTPayload, JWTAlgorithm } from 'uni-types'

interface MyJWT extends JWT<{ userId: string, role: string }> {
  header: JWTHeader
  payload: { userId: string, role: string, iat: number, exp: number }
  signature: string
}

type Algo = JWTAlgorithm // 'HS256' | 'RS256' | 'ES256' | 'EdDSA' | ...
```

## Password Types

```ts
import type { PasswordHashOptions, PasswordHashResult } from 'uni-types'

interface MyHashResult extends PasswordHashResult<'bcrypt'> {
  algorithm: 'bcrypt'
  hash: string
  salt: string
  cost: 10
}
```

## Crypto Utilities

### RandomBytes / Nonce / IV / Salt

```ts
import type { RandomBytes, Nonce, IV, Salt, CryptoTimestamp } from 'uni-types'

type Bytes = RandomBytes<32> // string
type MyNonce = Nonce<12> // string
type MyIV = IV<16> // string
```

## API Reference

| Type | Description |
|------|-------------|
| `HashAlgorithm` | Hash algorithm type |
| `HashResult<T>` | Hash result type |
| `SHA256<T>` | SHA256 hash type |
| `EncodingFormat` | Encoding format type |
| `Base64<T>` | Base64 encoded type |
| `EncryptionAlgorithm` | Encryption algorithm |
| `EncryptedData<T>` | Encrypted data type |
| `Key<T>` | Key type |
| `KeyPair<P>` | Key pair type |
| `SignatureAlgorithm` | Signature algorithm |
| `JWT<T>` | JWT type |
| `PasswordHashResult<A>` | Password hash result |
| `RandomBytes<N>` | Random bytes type |
| `Nonce<N>` | Nonce type |