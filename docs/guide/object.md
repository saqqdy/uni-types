# Object Operations

**Since 1.3.0**

Advanced object type operations.

## Object Transformations

### ObjectMap

Map over object values with transformation.

```typescript
import type { ObjectMap } from 'uni-types'

type Doubled = ObjectMap<{ a: 1; b: 2 }, (x: number) => number>  // { a: number; b: number }
```

### ObjectFilter

Filter object properties by predicate.

```typescript
import type { ObjectFilter } from 'uni-types'

type Strings = ObjectFilter<{ a: 'x'; b: 1; c: 'y' }, string>  // { a: 'x'; c: 'y' }
```

### ObjectPickByType / ObjectOmitByType

Pick or omit properties by value type.

```typescript
import type { ObjectPickByType, ObjectOmitByType } from 'uni-types'

type Strings = ObjectPickByType<{ a: 'x'; b: 1 }, string>  // { a: 'x' }
type Numbers = ObjectOmitByType<{ a: 'x'; b: 1 }, string>  // { b: 1 }
```

### ObjectInvert

Invert object (swap keys and values).

```typescript
import type { ObjectInvert } from 'uni-types'

type Inverted = ObjectInvert<{ a: 'x'; b: 'y' }>  // { x: 'a'; y: 'b' }
```

### ObjectEntries

Get object entries as tuple union.

```typescript
import type { ObjectEntries } from 'uni-types'

type Entries = ObjectEntries<{ a: 1; b: 2 }>  // ['a', 1] | ['b', 2]
```

## Object Merging

### DeepMerge

Deep merge two objects (B takes precedence).

```typescript
import type { DeepMerge } from 'uni-types'

type Merged = DeepMerge<{ a: { b: 1 } }, { a: { c: 2 } }>  // { a: { b: 1; c: 2 } }
```

### MergeAllObjects

Merge multiple objects (right to left precedence).

```typescript
import type { MergeAllObjects } from 'uni-types'

type Merged = MergeAllObjects<[{ a: 1 }, { b: 2 }, { c: 3 }]>  // { a: 1; b: 2; c: 3 }
```

## Object Validation

### HasProperty / HasProperties

Check if object has property/properties.

```typescript
import type { HasProperty, HasProperties } from 'uni-types'

type Has = HasProperty<{ a: 1 }, 'a'>  // true
type HasAll = HasProperties<{ a: 1; b: 2 }, 'a' | 'b'>  // true
```

### HasMethod

Check if object has a method.

```typescript
import type { HasMethod } from 'uni-types'

type Has = HasMethod<{ fn: () => void }, 'fn'>  // true
```

### IsEmptyObject

Check if object is empty.

```typescript
import type { IsEmptyObject } from 'uni-types'

type Empty = IsEmptyObject<{}>  // true
type NotEmpty = IsEmptyObject<{ a: 1 }>  // false
```

## Key Operations

### KeysOfType

Get keys of specific type.

```typescript
import type { KeysOfType } from 'uni-types'

type StringKeys = KeysOfType<{ a: 'x'; b: 1 }, string>  // 'a'
```

## Path Operations

### ObjectPath

Get value at path (with default).

```typescript
import type { ObjectPath } from 'uni-types'

type Value = ObjectPath<{ a: { b: 1 } }, 'a.b'>  // 1
type Default = ObjectPath<{ a: 1 }, 'c', 'default'>  // 'default'
```

### PathExists

Check if path exists.

```typescript
import type { PathExists } from 'uni-types'

type Exists = PathExists<{ a: { b: 1 } }, 'a.b'>  // true
type NotExists = PathExists<{ a: 1 }, 'a.b'>  // false
```

## Related

- [Deep Operations](./deep) - Deep transformation utilities
- [Path Utilities](./path) - Path handling utilities