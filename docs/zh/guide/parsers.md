# 类型级解析器

**自 1.4.0 起**

用于 JSON、URL、CSV 和表达式的类型级解析工具。

## JSON 解析器

### IsValidJSON

检查字符串是否为有效的 JSON。

```typescript
import type { IsValidJSON } from 'uni-types'

type Valid = IsValidJSON<'{"name": "test"}'>  // true
type Invalid = IsValidJSON<'invalid'>  // false
```

### ParseJSON

将 JSON 字符串解析为类型（有限支持）。

```typescript
import type { ParseJSON } from 'uni-types'

type Str = ParseJSON<'"hello"'>  // 'hello'
type Num = ParseJSON<'123'>  // 123
type Bool = ParseJSON<'true'>  // true
type Null = ParseJSON<'null'>  // null
```

### StringifyJSON

将类型转换为 JSON 字符串表示。

```typescript
import type { StringifyJSON } from 'uni-types'

type Str = StringifyJSON<'hello'>  // '"hello"'
type Num = StringifyJSON<123>  // '123'
```

## URL 解析器

### ParseURL

将 URL 字符串解析为组件。

```typescript
import type { ParseURL } from 'uni-types'

type URL = ParseURL<'https://example.com/path?q=1'>
// { protocol: 'https'; host: 'example.com'; pathname: '/path'; search: '?q=1'; hash: '' }
```

### QueryParams

将查询字符串解析为对象。

```typescript
import type { QueryParams } from 'uni-types'

type Params = QueryParams<'?a=1&b=2'>  // { a: '1'; b: '2' }
```

### PathParams

从路由模式中提取路径参数。

```typescript
import type { PathParams } from 'uni-types'

type Params = PathParams<'/users/:id', '/users/123'>  // { id: '123' }
```

## CSV 解析器

### ParseCSV

将 CSV 字符串解析为记录元组。

```typescript
import type { ParseCSV } from 'uni-types'

type Data = ParseCSV<'name,age\nJohn,30\nJane,25'>
// [{ name: 'John'; age: '30' }, { name: 'Jane'; age: '25' }]
```

### SplitByComma

按逗号分隔字符串。

```typescript
import type { SplitByComma } from 'uni-types'

type Parts = SplitByComma<'a,b,c'>  // ['a', 'b', 'c']
```

## 相关

- [字符串操作](./string) - 字符串操作类型
- [HTTP & API](./http) - HTTP 类型
