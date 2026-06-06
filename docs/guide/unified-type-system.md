# Unified Type System Preview

Preview of the unified type system that consolidates all type categories into a coherent framework.

## UnifiedType

A unified type representation that works across all type categories.

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

Represents the kind of a unified type.

```typescript
import type { TypeKind } from 'uni-types'

type PrimitiveKind = TypeKind<string>       // 'primitive'
type ObjectKind = TypeKind<{ a: string }>   // 'object'
type TupleKind = TypeKind<[1, 2, 3]>        // 'tuple'
type UnionKind = TypeKind<string | number>  // 'union'
type FunctionKind = TypeKind<() => void>    // 'function'
```

## TypeSchema

Schema representation for any type in the unified system.

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

Defines relations between types in the unified system.

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

Type coercion within the unified type system.

```typescript
import type { Coerce } from 'uni-types'

type CoercedNumber = Coerce<string, number>
// number (safe coercion path)

type CoercedString = Coerce<number, string>
// string (safe coercion path)
```

## Unify

Unify two types into a compatible representation.

```typescript
import type { Unify } from 'uni-types'

type UnifiedResult = Unify<{ a: string }, { a: string; b: number }>
// { a: string; b: number }
```

## TypeCategory

Categorize a type within the unified system.

```typescript
import type { TypeCategory } from 'uni-types'

type StringCategory = TypeCategory<string>           // 'scalar'
type ArrayCategory = TypeCategory<string[]>          // 'collection'
type ObjectCategory = TypeCategory<{ a: string }>    // 'record'
type FunctionCategory = TypeCategory<() => void>     // 'callable'
type NullCategory = TypeCategory<null>               // 'nil'
```

## TypeCompatibility

Check compatibility between two types in the unified system.

```typescript
import type { TypeCompatibility } from 'uni-types'

type Compatible = TypeCompatibility<{ a: string }, { a: string; b: number }>
// 'compatible'

type Incompatible = TypeCompatibility<{ a: string }, { a: number }>
// 'incompatible'

type PartiallyCompatible = TypeCompatibility<{ a: string }, { a?: string }>
// 'partial'
```
