# 统一类型系统预览

将所有类型类别整合为一个连贯框架的统一类型系统预览。

## UnifiedType

跨所有类型类别工作的统一类型表示。

```typescript
import type { UnifiedType } from 'uni-types'

interface Data {
	name: string
	age: number
}

type Unified = UnifiedType<Data>
// { __unified: true; name: string; age: number }
```

## TypeKind

表示统一类型的类别。

```typescript
import type { TypeKind } from 'uni-types'

type PrimitiveKind = TypeKind<string>       // 'primitive'
type ObjectKind = TypeKind<{ a: string }>   // 'object'
type TupleKind = TypeKind<[1, 2, 3]>        // 'tuple'
type UnionKind = TypeKind<string | number>  // 'union'
type FunctionKind = TypeKind<() => void>    // 'function'
```

## TypeSchema

统一系统中任何类型的模式表示。

```typescript
import type { TypeSchema } from 'uni-types'

interface User {
	name: string
	age: number
}

type UserSchema = TypeSchema<User>
// { kind: 'object'; properties: { name: { kind: 'primitive'; type: 'string' }; age: { kind: 'primitive'; type: 'number' } } }
```

## TypeRelation

定义统一系统中类型之间的关系。

```typescript
import type { TypeRelation } from 'uni-types'

interface Animal {
	name: string
}

interface Dog extends Animal {
	breed: string
}

type DogRelation = TypeRelation<Dog, Animal>
// { extends: true; addedProperties: 'breed' }
```

## Coerce

统一类型系统内的类型强制转换。

```typescript
import type { Coerce } from 'uni-types'

type CoercedNumber = Coerce<string, number>
// number（安全转换路径）

type CoercedString = Coerce<number, string>
// string（安全转换路径）
```

## Unify

将两个类型统一为兼容的表示形式。

```typescript
import type { Unify } from 'uni-types'

type UnifiedResult = Unify<{ a: string }, { a: string; b: number }>
// { a: string; b: number }
```

## TypeCategory

在统一系统中对类型进行分类。

```typescript
import type { TypeCategory } from 'uni-types'

type StringCategory = TypeCategory<string>           // 'scalar'
type ArrayCategory = TypeCategory<string[]>          // 'collection'
type ObjectCategory = TypeCategory<{ a: string }>    // 'record'
type FunctionCategory = TypeCategory<() => void>     // 'callable'
type NullCategory = TypeCategory<null>               // 'nil'
```

## TypeCompatibility

检查统一系统中两个类型之间的兼容性。

```typescript
import type { TypeCompatibility } from 'uni-types'

type Compatible = TypeCompatibility<{ a: string }, { a: string; b: number }>
// 'compatible'

type Incompatible = TypeCompatibility<{ a: string }, { a: number }>
// 'incompatible'

type PartiallyCompatible = TypeCompatibility<{ a: string }, { a?: string }>
// 'partial'
```
