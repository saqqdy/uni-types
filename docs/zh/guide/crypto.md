# 类型级密码学

类型安全的密码学工具。

## 概述

`crypto` 模块提供类型级别的密码学工具，包括哈希类型、加密类型、密钥管理、签名、JWT 等。

## 哈希类型

### HashAlgorithm

```ts
import type { HashAlgorithm, HashResult } from 'uni-types'

type Algo = HashAlgorithm // 'sha256' | 'sha384' | 'sha512' | 'md5' | 'blake2b' | ...
```

### SHA256 / SHA512

```ts
import type { SHA256, SHA512, Blake3 } from 'uni-types'

type Hash = SHA256<'hello'> // string
```

## 编码类型

```ts
import type { EncodingFormat, Base64, Hex } from 'uni-types'

type Encoded = Base64<string>
type HexValue = Hex<string>
```

## 加密类型

```ts
import type { EncryptionAlgorithm, EncryptedData } from 'uni-types'

type Algo = EncryptionAlgorithm // 'aes-128-cbc' | 'aes-256-gcm' | ...
```

## 密钥类型

```ts
import type { Key, KeyPair, DerivedKey } from 'uni-types'

interface MyKey extends Key<'symmetric'> {
  value: string
  length: 256
}
```

## 签名类型

```ts
import type { SignatureAlgorithm, SignatureResult } from 'uni-types'

type Algo = SignatureAlgorithm // 'rsa-sha256' | 'ed25519' | ...
```

## JWT 类型

```ts
import type { JWT, JWTHeader, JWTPayload } from 'uni-types'

interface MyJWT extends JWT<{ userId: string }> {
  header: JWTHeader
  payload: { userId: string, iat: number }
  signature: string
}
```

## API 参考

| 类型 | 描述 |
|------|------|
| `HashAlgorithm` | 哈希算法类型 |
| `SHA256<T>` | SHA256 哈希类型 |
| `EncryptionAlgorithm` | 加密算法 |
| `Key<T>` | 密钥类型 |
| `KeyPair<P>` | 密钥对类型 |
| `JWT<T>` | JWT 类型 |
| `RandomBytes<N>` | 随机字节类型 |