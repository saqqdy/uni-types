# 对象操作

**自 1.3.0 起**

高级对象类型操作。

## 对象转换

### ObjectMap

对对象值进行转换映射。

```typescript
import type { ObjectMap } from 'uni-types'

type Doubled = ObjectMap<{ a: 1; b: 2 }, (x: number) => number>  // { a: number; b: number }
```

### ObjectFilter

按谓词过滤对象属性。

```typescript
import type { ObjectFilter } from 'uni-types'

type Strings = ObjectFilter<{ a: 'x'; b: 1; c: 'y' }, string>  // { a: 'x'; c: 'y' }
```

### ObjectPickByType / ObjectOmitByType

按值类型选取或排除属性。

```typescript
import type { ObjectPickByType, ObjectOmitByType } from 'uni-types'

type Strings = ObjectPickByType<{ a: 'x'; b: 1 }, string>  // { a: 'x' }
type Numbers = ObjectOmitByType<{ a: 'x'; b: 1 }, string>  // { b: 1 }
```

### ObjectInvert

反转对象（交换键和值）。

```typescript
import type { ObjectInvert } from 'uni-types'

type Inverted = ObjectInvert<{ a: 'x'; b: 'y' }>  // { x: 'a'; y: 'b' }
```

### ObjectEntries

获取对象条目为元组联合类型。

```typescript
import type { ObjectEntries } from 'uni-types'

type Entries = ObjectEntries<{ a: 1; b: 2 }>  // ['a', 1] | ['b', 2]
```

## 对象合并

### DeepMerge

深度合并两个对象（B 优先）。

```typescript
import type { DeepMerge } from 'uni-types'

type Merged = DeepMerge<{ a: { b: 1 } }, { a: { c: 2 } }>  // { a: { b: 1; c: 2 } }
```

### MergeAllObjects

合并多个对象（从右到左优先）。

```typescript
import type { MergeAllObjects } from 'uni-types'

type Merged = MergeAllObjects<[{ a: 1 }, { b: 2 }, { c: 3 }]>  // { a: 1; b: 2; c: 3 }
```

## 对象验证

### HasProperty / HasProperties

检查对象是否有属性。

```typescript
import type { HasProperty, HasProperties } from 'uni-types'

type Has = HasProperty<{ a: 1 }, 'a'>  // true
type HasAll = HasProperties<{ a: 1; b: 2 }, 'a' | 'b'>  // true
```

### HasMethod

检查对象是否有方法。

```typescript
import type { HasMethod } from 'uni-types'

type Has = HasMethod<{ fn: () => void }, 'fn'>  // true
```

### IsEmptyObject

检查对象是否为空。

```typescript
import type { IsEmptyObject } from 'uni-types'

type Empty = IsEmptyObject<{}>  // true
type NotEmpty = IsEmptyObject<{ a: 1 }>  // false
```

## 键操作

### KeysOfType

获取特定类型的键。

```typescript
import type { KeysOfType } from 'uni-types'

type StringKeys = KeysOfType<{ a: 'x'; b: 1 }, string>  // 'a'
```

## 路径操作

### ObjectPath

获取路径上的值（带默认值）。

```typescript
import type { ObjectPath } from 'uni-types'

type Value = ObjectPath<{ a: { b: 1 } }, 'a.b'>  // 1
type Default = ObjectPath<{ a: 1 }, 'c', 'default'>  // 'default'
```

### PathExists

检查路径是否存在。

```typescript
import type { PathExists } from 'uni-types'

type Exists = PathExists<{ a: { b: 1 } }, 'a.b'>  // true
type NotExists = PathExists<{ a: 1 }, 'a.b'>  // false
```

## 相关

- [深度操作](./deep) - 深度转换工具
- [路径工具](./path) - 路径处理工具