# 核心操作

用于修改属性要求的核心类型操作。

## PickRequired

将指定属性设置为必选。

```typescript
import type { PickRequired } from 'uni-types'

interface User {
  name?: string
  age?: number
  email: string
}

type RequiredName = PickRequired<User, 'name'>
// { name: string; age?: number; email: string }

type RequiredMultiple = PickRequired<User, 'name' | 'age'>
// { name: string; age: number; email: string }
```

**相关：** [PickPartial](#pickpartial), [OmitRequired](#omitrequired)

## PickPartial

将指定属性设置为可选。

```typescript
import type { PickPartial } from 'uni-types'

interface User {
  name: string
  age: number
  email: string
}

type OptionalEmail = PickPartial<User, 'email'>
// { name: string; age: number; email?: string }
```

**相关：** [PickRequired](#pickrequired), [OmitPartial](#omitpartial)

## OmitRequired

将除指定属性外的所有属性设置为必选。

```typescript
import type { OmitRequired } from 'uni-types'

interface User {
  name?: string
  age?: number
  email?: string
}

type RequiredExceptName = OmitRequired<User, 'name'>
// { name?: string; age: number; email: string }
```

**相关：** [PickRequired](#pickrequired), [OmitPartial](#omitpartial)

## OmitPartial

将除指定属性外的所有属性设置为可选。

```typescript
import type { OmitPartial } from 'uni-types'

interface User {
  name: string
  age: number
  email: string
}

type OptionalExceptEmail = OmitPartial<User, 'email'>
// { name?: string; age?: number; email: string }
```

**相关：** [PickPartial](#pickpartial), [OmitRequired](#omitrequired)
