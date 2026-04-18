# 字符串操作

**自 1.3.0 起**

类型级字符串操作的高级字符串类型。

## 字符串解析

### Split

按分隔符拆分字符串。

```typescript
import type { Split } from 'uni-types'

type Parts = Split<'a,b,c', ','>  // ['a', 'b', 'c']
type Words = Split<'hello world', ' '>  // ['hello', 'world']
```

### Join

用分隔符连接字符串数组。

```typescript
import type { Join } from 'uni-types'

type Str = Join<['a', 'b', 'c'], ','>  // 'a,b,c'
type Path = Join<['users', '123'], '/'>  // 'users/123'
```

## 大小写转换

### KebabCase

转换为 kebab-case。

```typescript
import type { KebabCase } from 'uni-types'

type Kebab = KebabCase<'fooBar'>  // 'foo-bar'
type Kebab2 = KebabCase<'FooBar'>  // '-foo-bar'
```

### PascalCase

转换为 PascalCase。

```typescript
import type { PascalCase } from 'uni-types'

type Pascal = PascalCase<'foo-bar'>  // 'FooBar'
type Pascal2 = PascalCase<'foo_bar'>  // 'FooBar'
```

### ConstantCase

转换为 CONSTANT_CASE。

```typescript
import type { ConstantCase } from 'uni-types'

type Const = ConstantCase<'fooBar'>  // 'FOO_BAR'
```

### DotCase

转换为 dot.case。

```typescript
import type { DotCase } from 'uni-types'

type Dot = DotCase<'fooBar'>  // 'foo.bar'
```

## 字符串验证

### IsEmail

检查字符串是否匹配邮箱模式。

```typescript
import type { IsEmail } from 'uni-types'

type Valid = IsEmail<'test@example.com'>  // true
type Invalid = IsEmail<'invalid'>  // false
```

### IsUUID

检查字符串是否为有效的 UUID。

```typescript
import type { IsUUID } from 'uni-types'

type Valid = IsUUID<'123e4567-e89b-12d3-a456-426614174000'>  // true
type Invalid = IsUUID<'invalid'>  // false
```

### IsURL

检查字符串是否为有效的 URL。

```typescript
import type { IsURL } from 'uni-types'

type Valid = IsURL<'https://example.com'>  // true
type Invalid = IsURL<'invalid'>  // false
```

### IsNumeric

检查字符串是否为数字。

```typescript
import type { IsNumeric } from 'uni-types'

type Numeric = IsNumeric<'123'>  // true
type NotNumeric = IsNumeric<'abc'>  // false
```

### IsEmptyString

检查字符串是否为空。

```typescript
import type { IsEmptyString } from 'uni-types'

type Empty = IsEmptyString<''>  // true
type NotEmpty = IsEmptyString<'a'>  // false
```

## 字符串转换

### ReverseString

反转字符串。

```typescript
import type { ReverseString } from 'uni-types'

type Reversed = ReverseString<'hello'>  // 'olleh'
```

### RemoveSpaces

移除所有空格。

```typescript
import type { RemoveSpaces } from 'uni-types'

type NoSpaces = RemoveSpaces<'hello world'>  // 'helloworld'
```

### UpperCase / LowerCase

大小写转换。

```typescript
import type { UpperCase, LowerCase } from 'uni-types'

type Upper = UpperCase<'hello'>  // 'HELLO'
type Lower = LowerCase<'HELLO'>  // 'hello'
```

### Between

获取两个标记之间的子字符串。

```typescript
import type { Between } from 'uni-types'

type Middle = Between<'(hello)', '(', ')'>  // 'hello'
```

## 相关

- [模板字面量](./template) - 模板字面量类型
- [解析器](./parsers) - JSON、URL、CSV 解析器