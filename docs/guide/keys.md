# Key Utilities

Utilities for manipulating object keys.

## RenameKeys

Rename object keys based on a mapping.

```typescript
import type { RenameKeys } from 'uni-types'

type Old = { oldName: string; value: number }
type New = RenameKeys<Old, { oldName: 'newName' }>
// { newName: string; value: number }
```

## PrefixKeys

Prefix all keys with a string.

```typescript
import type { PrefixKeys } from 'uni-types'

type Data = { a: string; b: number }
type Prefixed = PrefixKeys<Data, 'data'>
// { dataA: string; dataB: number }
```

## SuffixKeys

Suffix all keys with a string.

```typescript
import type { SuffixKeys } from 'uni-types'

type Data = { a: string; b: number }
type Suffixed = SuffixKeys<Data, 'Data'>
// { aData: string; bData: number }
```

## PascalCaseKeys

Convert all keys to PascalCase.

```typescript
import type { PascalCaseKeys } from 'uni-types'

type Data = { helloWorld: string; fooBar: number }
type Pascal = PascalCaseKeys<Data>
// { HelloWorld: string; FooBar: number }
```

## KeysByValueType

Get keys by value type.

```typescript
import type { KeysByValueType } from 'uni-types'

interface User {
  name: string
  age: number
  email: string
}

type StringKeys = KeysByValueType<User, string>  // 'name' | 'email'
type NumberKeys = KeysByValueType<User, number>  // 'age'
```

## FilterKeys

Get keys that match a pattern.

```typescript
import type { FilterKeys } from 'uni-types'

interface User {
  userName: string
  userId: number
  userEmail: string
  age: number
}

type UserPrefixed = FilterKeys<User, `user${string}`>
// 'userName' | 'userId' | 'userEmail'
```
