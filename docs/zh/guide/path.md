# 路径工具

嵌套对象的类型安全路径操作。

## ValidPath

检查路径是否存在于类型中。

```typescript
import type { ValidPath } from 'uni-types'

interface Obj {
  a: {
    b: string
    c: {
      d: number
    }
  }
}

type Path1 = ValidPath<Obj, 'a.b'>    // true
type Path2 = ValidPath<Obj, 'a.c.d'>  // true
type Path3 = ValidPath<Obj, 'a.x'>    // false
```

## ArrayPaths

获取包含数组索引的所有路径。

```typescript
import type { ArrayPaths } from 'uni-types'

interface Users {
  users: { name: string; age: number }[]
}

type Paths = ArrayPaths<Users>
// 'users' | `users.${number}` | `users.${number}.name` | `users.${number}.age`
```

## LeafPaths

仅获取叶子节点（原始值）的路径。

```typescript
import type { LeafPaths } from 'uni-types'

interface Data {
  config: {
    host: string
    port: number
  }
}

type Paths = LeafPaths<Data>
// 'config.host' | 'config.port'
```

## PathLength

获取路径的段数。

```typescript
import type { PathLength } from 'uni-types'

type A = PathLength<'a.b.c'>   // 3
type B = PathLength<'single'>  // 1
type C = PathLength<''>        // 0
```

## ParentPath

获取路径的父路径。

```typescript
import type { ParentPath } from 'uni-types'

type A = ParentPath<'a.b.c'>  // 'a.b'
type B = ParentPath<'a'>      // ''
```

## PathLeaf

获取路径的最后一段。

```typescript
import type { PathLeaf } from 'uni-types'

type A = PathLeaf<'a.b.c'>  // 'c'
type B = PathLeaf<'a'>      // 'a'
```

## DeepOmit & DeepPick

移除或选择嵌套路径的属性。

```typescript
import type { DeepOmit, DeepPick } from 'uni-types'

interface User {
  profile: {
    name: string
    email: string
    settings: {
      theme: string
      lang: string
    }
  }
}

type WithoutSettings = DeepOmit<User, 'profile.settings'>
// { profile: { name: string; email: string } }

type JustName = DeepPick<User, 'profile.name'>
// { profile: { name: string } }
```

### 联合路径

对于联合路径，使用 `DeepPickPaths` 和 `DeepOmitPaths`：

```typescript
import type { DeepPickPaths } from 'uni-types'

type Multiple = DeepPickPaths<User, 'profile.name' | 'profile.email'>
// { profile: { name: string; email: string } }
```