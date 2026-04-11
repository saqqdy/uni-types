# Core Operations

Core type operations for modifying property requirements.

## PickRequired

Make specified properties required.

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

**See also:** [PickPartial](#pickpartial), [OmitRequired](#omitrequired)

## PickPartial

Make specified properties optional.

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

**See also:** [PickRequired](#pickrequired), [OmitPartial](#omitpartial)

## OmitRequired

Make all properties required except specified ones.

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

**See also:** [PickRequired](#pickrequired), [OmitPartial](#omitpartial)

## OmitPartial

Make all properties optional except specified ones.

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

**See also:** [PickPartial](#pickpartial), [OmitRequired](#omitrequired)