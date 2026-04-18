# Library Interop

**Since 1.4.0**

Type-level interoperability utilities.

## type-fest Interop

### ToTypeFest / FromTypeFest

Convert to/from type-fest format.

```typescript
import type { ToTypeFest, FromTypeFest } from 'uni-types'

type FestType = ToTypeFest<{ a: string; b?: number }>
type UniType = FromTypeFest<{ a: string }>
```

### TypeFestCamelCase / TypeFestSnakeCase

type-fest case conversions.

```typescript
import type { TypeFestCamelCase, TypeFestSnakeCase } from 'uni-types'

type Camel = TypeFestCamelCase<'foo-bar'>  // 'fooBar'
type Snake = TypeFestSnakeCase<'fooBar'>  // 'foo_bar'
```

## ts-toolbelt Interop

### ToTsToolbelt / FromTsToolbelt

Convert to/from ts-toolbelt format.

```typescript
import type { ToTsToolbelt, FromTsToolbelt } from 'uni-types'

type ToolbeltType = ToTsToolbelt<{ a: string }>
type UniType = FromTsToolbelt<{ a: string }>
```

### ToolbeltUnionPick / ToolbeltUnionExclude

ts-toolbelt Union operations.

```typescript
import type { ToolbeltUnionPick, ToolbeltUnionExclude } from 'uni-types'

type Picked = ToolbeltUnionPick<string | number, string>  // string
type Excluded = ToolbeltUnionExclude<string | number, string>  // number
```

### ToolbeltDeepPartial

ts-toolbelt deep partial.

```typescript
import type { ToolbeltDeepPartial } from 'uni-types'

type Partial = ToolbeltDeepPartial<{ a: { b: string } }>
```

## utility-types Interop

### ToUtilityTypes / FromUtilityTypes

Convert to/from utility-types format.

```typescript
import type { ToUtilityTypes, FromUtilityTypes } from 'uni-types'

type UtilityType = ToUtilityTypes<{ a: string }>
type UniType = FromUtilityTypes<{ a: string }>
```

### UtilityDeepPartial / UtilityDeepReadonly

utility-types deep operations.

```typescript
import type { UtilityDeepPartial, UtilityDeepReadonly } from 'uni-types'

type Partial = UtilityDeepPartial<{ a: { b: string } }>
type Readonly = UtilityDeepReadonly<{ a: { b: string } }>
```

## Converter Utilities

### ConvertTo / ConvertFrom

Convert type to/from specific format.

```typescript
import type { ConvertTo, ConvertFrom } from 'uni-types'

type Fest = ConvertTo<{ a: string }, 'type-fest'>
type Toolbelt = ConvertTo<{ a: string }, 'ts-toolbelt'>
type Uni = ConvertFrom<{ a: string }, 'type-fest'>
```

### ConversionMap

Type conversion map.

```typescript
import type { ConversionMap } from 'uni-types'

type Map = ConversionMap<{ a: string }>
// { 'type-fest': ...; 'ts-toolbelt': ...; 'utility-types': ...; 'uni-types': ... }
```

## Type Compatibility

### IsCompatible

Check if types are compatible (structurally).

```typescript
import type { IsCompatible } from 'uni-types'

type Compatible = IsCompatible<{ a: string }, { a: string; b?: number }>  // true
```

### CompatibleWith

Check if type is compatible with multiple libraries.

```typescript
import type { CompatibleWith } from 'uni-types'

type Compat = CompatibleWith<{ a: string }, ['type-fest', 'ts-toolbelt']>
```

### CompatibleKeys / IncompatibleKeys

Get compatible/incompatible keys.

```typescript
import type { CompatibleKeys, IncompatibleKeys } from 'uni-types'

type Keys = CompatibleKeys<{ a: string; b: number }, { a: string }>  // 'a'
type Incompat = IncompatibleKeys<{ a: string; b: number }, { a: string }>  // 'b'
```

### CompatibilityReport

Type compatibility report.

```typescript
import type { CompatibilityReport } from 'uni-types'

type Report = CompatibilityReport<{ a: string }, { a: number }>
// { compatible: false; compatibleKeys: 'a'; incompatibleKeys: never; ... }
```

## Utility Mapping

### UtilityMap

Map uni-types utility to library equivalent.

```typescript
import type { UtilityMap } from 'uni-types'

type Fest = UtilityMap<'DeepPartial', 'type-fest'>  // 'PartialDeep'
type Toolbelt = UtilityMap<'DeepReadonly', 'ts-toolbelt'>  // 'O.Readonly'
```

### LibraryFeatures

Library feature comparison.

```typescript
import type { LibraryFeatures } from 'uni-types'

type FestFeatures = LibraryFeatures<'type-fest'>
// ['CamelCase', 'SnakeCase', 'PartialDeep', ...]
```

## Related

- [Ecosystem](./ecosystem) - Framework integrations
- [Schema Validation](./schema) - Schema types