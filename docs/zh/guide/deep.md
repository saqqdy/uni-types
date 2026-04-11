# 深度操作

递归转换嵌套对象类型。

## DeepPartial

将所有嵌套属性设置为可选。

```typescript
import type { DeepPartial } from 'uni-types'

interface Config {
  database: {
    host: string
    port: number
    credentials: {
      username: string
      password: string
    }
  }
}

type PartialConfig = DeepPartial<Config>
/*
{
  database?: {
    host?: string
    port?: number
    credentials?: {
      username?: string
      password?: string
    }
  }
}
*/
```

### 数组

数组会被正确处理——它们保持为数组：

```typescript
interface Data {
  items: string[]
  nested: { id: number }[]
}

type PartialData = DeepPartial<Data>
// items 变为 (string | undefined)[] | undefined
```

### 内置类型

`Date`、`Function`、`Map`、`Set` 等内置类型会被保留：

```typescript
interface AppState {
  createdAt: Date
  handler: () => void
  cache: Map<string, number>
}

type PartialState = DeepPartial<AppState>
// createdAt、handler、cache 类型被保留（只是变为可选）
```

## DeepRequired

将所有嵌套属性设置为必选。

```typescript
import type { DeepRequired } from 'uni-types'

interface Config {
  database?: {
    host?: string
    port?: number
  }
}

type RequiredConfig = DeepRequired<Config>
/*
{
  database: {
    host: string
    port: number
  }
}
*/
```

## DeepReadonly

将所有嵌套属性设置为只读。

```typescript
import type { DeepReadonly } from 'uni-types'

interface Config {
  database: {
    host: string
    port: number
  }
}

type ReadonlyConfig = DeepReadonly<Config>
/*
{
  readonly database: {
    readonly host: string
    readonly port: number
  }
}
*/
```

## DeepMutable

移除所有嵌套属性的只读修饰符。

```typescript
import type { DeepMutable } from 'uni-types'

interface Config {
  readonly database: {
    readonly host: string
    readonly port: number
  }
}

type MutableConfig = DeepMutable<Config>
/*
{
  database: {
    host: string
    port: number
  }
}
*/
```

### 只读数组

适用于只读数组：

```typescript
type ReadonlyArray = readonly string[]
type MutableArray = DeepMutable<ReadonlyArray> // string[]
```

## DeepOmit

移除嵌套路径处的属性。

```typescript
import type { DeepOmit } from 'uni-types'

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
```

## DeepPick

仅保留指定路径处的属性。

```typescript
import type { DeepPick } from 'uni-types'

interface User {
  profile: {
    name: string
    email: string
    settings: {
      theme: string
    }
  }
}

type JustName = DeepPick<User, 'profile.name'>
// { profile: { name: string } }
```

### 多个路径

对于联合路径，使用 `DeepPickPaths`：

```typescript
import type { DeepPickPaths } from 'uni-types'

type NameAndEmail = DeepPickPaths<User, 'profile.name' | 'profile.email'>
// { profile: { name: string; email: string } }
```
