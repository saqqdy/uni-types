# String Operations

**Since 1.3.0**

Advanced string type operations for type-level string manipulation.

## String Parsing

### Split

Split string by delimiter.

```typescript
import type { Split } from 'uni-types'

type Parts = Split<'a,b,c', ','>  // ['a', 'b', 'c']
type Words = Split<'hello world', ' '>  // ['hello', 'world']
```

### Join

Join string array with separator.

```typescript
import type { Join } from 'uni-types'

type Str = Join<['a', 'b', 'c'], ','>  // 'a,b,c'
type Path = Join<['users', '123'], '/'>  // 'users/123'
```

## Case Conversion

### KebabCase

Convert string to kebab-case.

```typescript
import type { KebabCase } from 'uni-types'

type Kebab = KebabCase<'fooBar'>  // 'foo-bar'
type Kebab2 = KebabCase<'FooBar'>  // '-foo-bar'
```

### PascalCase

Convert string to PascalCase.

```typescript
import type { PascalCase } from 'uni-types'

type Pascal = PascalCase<'foo-bar'>  // 'FooBar'
type Pascal2 = PascalCase<'foo_bar'>  // 'FooBar'
```

### ConstantCase

Convert string to CONSTANT_CASE.

```typescript
import type { ConstantCase } from 'uni-types'

type Const = ConstantCase<'fooBar'>  // 'FOO_BAR'
```

### DotCase

Convert string to dot.case.

```typescript
import type { DotCase } from 'uni-types'

type Dot = DotCase<'fooBar'>  // 'foo.bar'
```

## String Validation

### IsEmail

Check if string matches email pattern.

```typescript
import type { IsEmail } from 'uni-types'

type Valid = IsEmail<'test@example.com'>  // true
type Invalid = IsEmail<'invalid'>  // false
```

### IsUUID

Check if string is a valid UUID.

```typescript
import type { IsUUID } from 'uni-types'

type Valid = IsUUID<'123e4567-e89b-12d3-a456-426614174000'>  // true
type Invalid = IsUUID<'invalid'>  // false
```

### IsURL

Check if string is a valid URL.

```typescript
import type { IsURL } from 'uni-types'

type Valid = IsURL<'https://example.com'>  // true
type Invalid = IsURL<'invalid'>  // false
```

### IsNumeric

Check if string is numeric.

```typescript
import type { IsNumeric } from 'uni-types'

type Numeric = IsNumeric<'123'>  // true
type NotNumeric = IsNumeric<'abc'>  // false
```

### IsEmptyString

Check if string is empty.

```typescript
import type { IsEmptyString } from 'uni-types'

type Empty = IsEmptyString<''>  // true
type NotEmpty = IsEmptyString<'a'>  // false
```

## String Transformation

### ReverseString

Reverse a string.

```typescript
import type { ReverseString } from 'uni-types'

type Reversed = ReverseString<'hello'>  // 'olleh'
```

### RemoveSpaces

Remove all spaces from string.

```typescript
import type { RemoveSpaces } from 'uni-types'

type NoSpaces = RemoveSpaces<'hello world'>  // 'helloworld'
```

### UpperCase / LowerCase

Case transformation.

```typescript
import type { UpperCase, LowerCase } from 'uni-types'

type Upper = UpperCase<'hello'>  // 'HELLO'
type Lower = LowerCase<'HELLO'>  // 'hello'
```

### Between

Get substring between two markers.

```typescript
import type { Between } from 'uni-types'

type Middle = Between<'(hello)', '(', ')'>  // 'hello'
```

## Related

- [Template Literals](./template) - Template literal types
- [Parsers](./parsers) - JSON, URL, CSV parsers