# Type-Level Parsers

**Since 1.4.0**

Type-level parsing utilities for JSON, URL, CSV, and expressions.

## JSON Parser

### IsValidJSON

Check if string is valid JSON.

```typescript
import type { IsValidJSON } from 'uni-types'

type Valid = IsValidJSON<'{"name": "test"}'>  // true
type Invalid = IsValidJSON<'invalid'>  // false
```

### ParseJSON

Parse JSON string to type (limited support).

```typescript
import type { ParseJSON } from 'uni-types'

type Str = ParseJSON<'"hello"'>  // 'hello'
type Num = ParseJSON<'123'>  // 123
type Bool = ParseJSON<'true'>  // true
type Null = ParseJSON<'null'>  // null
```

### StringifyJSON

Stringify type to JSON string representation.

```typescript
import type { StringifyJSON } from 'uni-types'

type Str = StringifyJSON<'hello'>  // '"hello"'
type Num = StringifyJSON<123>  // '123'
```

## URL Parser

### ParseURL

Parse URL string into components.

```typescript
import type { ParseURL } from 'uni-types'

type URL = ParseURL<'https://example.com/path?q=1'>
// { protocol: 'https'; host: 'example.com'; pathname: '/path'; search: '?q=1'; hash: '' }
```

### QueryParams

Parse query string into object.

```typescript
import type { QueryParams } from 'uni-types'

type Params = QueryParams<'?a=1&b=2'>  // { a: '1'; b: '2' }
```

### PathParams

Extract path params from route pattern.

```typescript
import type { PathParams } from 'uni-types'

type Params = PathParams<'/users/:id', '/users/123'>  // { id: '123' }
```

## CSV Parser

### ParseCSV

Parse CSV string to tuple of records.

```typescript
import type { ParseCSV } from 'uni-types'

type Data = ParseCSV<'name,age\nJohn,30\nJane,25'>
// [{ name: 'John'; age: '30' }, { name: 'Jane'; age: '25' }]
```

### SplitByComma

Split string by comma delimiter.

```typescript
import type { SplitByComma } from 'uni-types'

type Parts = SplitByComma<'a,b,c'>  // ['a', 'b', 'c']
```

## Related

- [String Operations](./string) - String manipulation types
- [HTTP & API](./http) - HTTP types
