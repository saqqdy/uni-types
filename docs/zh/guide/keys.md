# 键工具

用于操作对象键的工具类型。

## RenameKeys

根据映射重命名对象键。

```typescript
import type { RenameKeys } from 'uni-types'

type Old = { oldName: string; value: number }
type New = RenameKeys<Old, { oldName: 'newName' }>
// { newName: string; value: number }
```

## PrefixKeys

为所有键添加前缀。

```typescript
import type { PrefixKeys } from 'uni-types'

type Data = { a: string; b: number }
type Prefixed = PrefixKeys<Data, 'data'>
// { dataA: string; dataB: number }
```

## SuffixKeys

为所有键添加后缀。

```typescript
import type { SuffixKeys } from 'uni-types'

type Data = { a: string; b: number }
type Suffixed = SuffixKeys<Data, 'Data'>
// { aData: string; bData: number }
```

## PascalCaseKeys

将所有键转换为帕斯卡命名。

```typescript
import type { PascalCaseKeys } from 'uni-types'

type Data = { helloWorld: string; fooBar: number }
type Pascal = PascalCaseKeys<Data>
// { HelloWorld: string; FooBar: number }
```

## KeysByValueType

按值类型获取键。

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

获取匹配模式的键。

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