# Template Literals

String manipulation at the type level.

## Replace & ReplaceAll

Replace substrings in string types.

```typescript
import type { Replace, ReplaceAll } from 'uni-types'

// Replace first occurrence
type A = Replace<'hello world world', 'world', 'there'>
// 'hello there world'

// Replace all occurrences
type B = ReplaceAll<'aaa', 'a', 'b'>
// 'bbb'
```

## Trim, TrimLeft, TrimRight

Remove whitespace from strings.

```typescript
import type { Trim, TrimLeft, TrimRight } from 'uni-types'

type A = Trim<'  hello  '>      // 'hello'
type B = TrimLeft<'  hello'>    // 'hello'
type C = TrimRight<'hello  '>   // 'hello'

// Handles all whitespace types
type D = Trim<'\n\ttext\n'>     // 'text'
```

## CapitalizeAll & UncapitalizeAll

Capitalize or uncapitalize all words.

```typescript
import type { CapitalizeAll, UncapitalizeAll } from 'uni-types'

type A = CapitalizeAll<'hello world'>     // 'Hello World'
type B = UncapitalizeAll<'Hello World'>   // 'hello world'
```

## StartsWith & EndsWith

Check string prefixes and suffixes.

```typescript
import type { StartsWith, EndsWith } from 'uni-types'

type A = StartsWith<'hello world', 'hello'>  // true
type B = StartsWith<'hello world', 'world'>  // false

type C = EndsWith<'hello world', 'world'>    // true
type D = EndsWith<'hello world', 'hello'>    // false
```

## StringLength

Get the length of a string at type level.

```typescript
import type { StringLength } from 'uni-types'

type A = StringLength<'hello'>  // 5
type B = StringLength<''>       // 0
```

## Repeat

Repeat a string N times.

```typescript
import type { Repeat } from 'uni-types'

type A = Repeat<'ab', 3>  // 'ababab'
type B = Repeat<'x', 5>   // 'xxxxx'
```

## PadStart & PadEnd

Pad strings to a specific length.

```typescript
import type { PadStart, PadEnd } from 'uni-types'

type A = PadStart<'5', 3, '0'>  // '005'
type B = PadEnd<'5', 3, '0'>    // '500'
```

## StringToArray

Convert a string to an array of characters.

```typescript
import type { StringToArray } from 'uni-types'

type A = StringToArray<'abc'>  // ['a', 'b', 'c']
```
