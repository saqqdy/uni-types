# 库互操作

**自 1.4.0 起**

类型级互操作工具。

## type-fest 互操作

### ToTypeFest / FromTypeFest

转换为/从 type-fest 格式。

```typescript
import type { ToTypeFest, FromTypeFest } from 'uni-types'

type FestType = ToTypeFest<{ a: string; b?: number }>
type UniType = FromTypeFest<{ a: string }>
```

### TypeFestCamelCase / TypeFestSnakeCase

type-fest 大小写转换。

```typescript
import type { TypeFestCamelCase, TypeFestSnakeCase } from 'uni-types'

type Camel = TypeFestCamelCase<'foo-bar'>  // 'fooBar'
type Snake = TypeFestSnakeCase<'fooBar'>  // 'foo_bar'
```

## ts-toolbelt 互操作

### ToTsToolbelt / FromTsToolbelt

转换为/从 ts-toolbelt 格式。

```typescript
import type { ToTsToolbelt, FromTsToolbelt } from 'uni-types'

type ToolbeltType = ToTsToolbelt<{ a: string }>
type UniType = FromTsToolbelt<{ a: string }>
```

### ToolbeltUnionPick / ToolbeltUnionExclude

ts-toolbelt Union 操作。

```typescript
import type { ToolbeltUnionPick, ToolbeltUnionExclude } from 'uni-types'

type Picked = ToolbeltUnionPick<string | number, string>  // string
type Excluded = ToolbeltUnionExclude<string | number, string>  // number
```

### ToolbeltDeepPartial

ts-toolbelt 深度可选。

```typescript
import type { ToolbeltDeepPartial } from 'uni-types'

type Partial = ToolbeltDeepPartial<{ a: { b: string } }>
```

## utility-types 互操作

### ToUtilityTypes / FromUtilityTypes

转换为/从 utility-types 格式。

```typescript
import type { ToUtilityTypes, FromUtilityTypes } from 'uni-types'

type UtilityType = ToUtilityTypes<{ a: string }>
type UniType = FromUtilityTypes<{ a: string }>
```

### UtilityDeepPartial / UtilityDeepReadonly

utility-types 深度操作。

```typescript
import type { UtilityDeepPartial, UtilityDeepReadonly } from 'uni-types'

type Partial = UtilityDeepPartial<{ a: { b: string } }>
type Readonly = UtilityDeepReadonly<{ a: { b: string } }>
```

## 转换工具

### ConvertTo / ConvertFrom

转换为/从特定格式。

```typescript
import type { ConvertTo, ConvertFrom } from 'uni-types'

type Fest = ConvertTo<{ a: string }, 'type-fest'>
type Toolbelt = ConvertTo<{ a: string }, 'ts-toolbelt'>
type Uni = ConvertFrom<{ a: string }, 'type-fest'>
```

### ConversionMap

类型转换映射。

```typescript
import type { ConversionMap } from 'uni-types'

type Map = ConversionMap<{ a: string }>
// { 'type-fest': ...; 'ts-toolbelt': ...; 'utility-types': ...; 'uni-types': ... }
```

## 类型兼容性

### IsCompatible

检查类型是否兼容（结构上）。

```typescript
import type { IsCompatible } from 'uni-types'

type Compatible = IsCompatible<{ a: string }, { a: string; b?: number }>  // true
```

### CompatibleWith

检查类型是否与多个库兼容。

```typescript
import type { CompatibleWith } from 'uni-types'

type Compat = CompatibleWith<{ a: string }, ['type-fest', 'ts-toolbelt']>
```

### CompatibleKeys / IncompatibleKeys

获取兼容/不兼容的键。

```typescript
import type { CompatibleKeys, IncompatibleKeys } from 'uni-types'

type Keys = CompatibleKeys<{ a: string; b: number }, { a: string }>  // 'a'
type Incompat = IncompatibleKeys<{ a: string; b: number }, { a: string }>  // 'b'
```

### CompatibilityReport

类型兼容性报告。

```typescript
import type { CompatibilityReport } from 'uni-types'

type Report = CompatibilityReport<{ a: string }, { a: number }>
// { compatible: false; compatibleKeys: 'a'; incompatibleKeys: never; ... }
```

## 工具映射

### UtilityMap

将 uni-types 工具映射到库等效项。

```typescript
import type { UtilityMap } from 'uni-types'

type Fest = UtilityMap<'DeepPartial', 'type-fest'>  // 'PartialDeep'
type Toolbelt = UtilityMap<'DeepReadonly', 'ts-toolbelt'>  // 'O.Readonly'
```

### LibraryFeatures

库功能比较。

```typescript
import type { LibraryFeatures } from 'uni-types'

type FestFeatures = LibraryFeatures<'type-fest'>
// ['CamelCase', 'SnakeCase', 'PartialDeep', ...]
```

## 相关

- [生态系统](./ecosystem) - 框架集成
- [Schema 验证](./schema) - Schema 类型