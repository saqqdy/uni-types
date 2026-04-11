# 模板字面量

类型级别的字符串操作。

## Replace & ReplaceAll

替换字符串类型中的子串。

```typescript
import type { Replace, ReplaceAll } from 'uni-types'

// 替换第一个匹配
type A = Replace<'hello world world', 'world', 'there'>
// 'hello there world'

// 替换所有匹配
type B = ReplaceAll<'aaa', 'a', 'b'>
// 'bbb'
```

## Trim, TrimLeft, TrimRight

从字符串中移除空白字符。

```typescript
import type { Trim, TrimLeft, TrimRight } from 'uni-types'

type A = Trim<'  hello  '>      // 'hello'
type B = TrimLeft<'  hello'>    // 'hello'
type C = TrimRight<'hello  '>   // 'hello'

// 处理所有类型的空白字符
type D = Trim<'\n\ttext\n'>     // 'text'
```

## CapitalizeAll & UncapitalizeAll

将所有单词大写或取消大写。

```typescript
import type { CapitalizeAll, UncapitalizeAll } from 'uni-types'

type A = CapitalizeAll<'hello world'>     // 'Hello World'
type B = UncapitalizeAll<'Hello World'>   // 'hello world'
```

## StartsWith & EndsWith

检查字符串前缀和后缀。

```typescript
import type { StartsWith, EndsWith } from 'uni-types'

type A = StartsWith<'hello world', 'hello'>  // true
type B = StartsWith<'hello world', 'world'>  // false

type C = EndsWith<'hello world', 'world'>    // true
type D = EndsWith<'hello world', 'hello'>    // false
```

## StringLength

获取类型级别的字符串长度。

```typescript
import type { StringLength } from 'uni-types'

type A = StringLength<'hello'>  // 5
type B = StringLength<''>       // 0
```

## Repeat

将字符串重复 N 次。

```typescript
import type { Repeat } from 'uni-types'

type A = Repeat<'ab', 3>  // 'ababab'
type B = Repeat<'x', 5>   // 'xxxxx'
```

## PadStart & PadEnd

将字符串填充到指定长度。

```typescript
import type { PadStart, PadEnd } from 'uni-types'

type A = PadStart<'5', 3, '0'>  // '005'
type B = PadEnd<'5', 3, '0'>    // '500'
```

## StringToArray

将字符串转换为字符数组。

```typescript
import type { StringToArray } from 'uni-types'

type A = StringToArray<'abc'>  // ['a', 'b', 'c']
```