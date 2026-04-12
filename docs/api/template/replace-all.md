# ReplaceAll

**Since 1.1.0**

Replace all occurrences of a substring.

## Signature

```typescript
type ReplaceAll<S extends string, From extends string, To extends string> = 
  From extends ''
    ? S
    : S extends `${infer Before}${From}${infer After}`
      ? `${Before}${To}${ReplaceAll<After, From, To>}`
      : S
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `S` | The source string |
| `From` | The substring to replace |
| `To` | The replacement string |

## Examples

### Basic Usage

```typescript
import type { ReplaceAll } from 'uni-types'

type A = ReplaceAll<'hello world world', 'world', 'there'>
// 'hello there there'

type B = ReplaceAll<'aaa', 'a', 'b'>
// 'bbb'
```

### Snake to Camel Case

```typescript
type SnakeCase = 'hello_world_foo_bar'
type CamelCase = ReplaceAll<SnakeCase, '_', ''>
// 'helloworldfoobar'
```

## Related

- [`Replace`](./replace) - Replace first occurrence only