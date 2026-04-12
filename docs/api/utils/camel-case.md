# CamelCase

**Since 1.0.0**

Convert a string to camelCase.

## Signature

```typescript
type CamelCase<S extends string> = S extends `${infer P}_${infer Q}`
  ? `${P}${Capitalize<CamelCase<Q>>}`
  : S extends `${infer P}-${infer Q}`
    ? `${P}${Capitalize<CamelCase<Q>>}`
    : S
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `S` | The string type to convert |

## Description

Converts snake_case or kebab-case strings to camelCase.

## Examples

### From snake_case

```typescript
import type { CamelCase } from 'uni-types'

type Result1 = CamelCase<'hello_world'> // 'helloWorld'
type Result2 = CamelCase<'foo_bar_baz'> // 'fooBarBaz'
```

### From kebab-case

```typescript
type Result3 = CamelCase<'hello-world'> // 'helloWorld'
type Result4 = CamelCase<'foo-bar-baz'> // 'fooBarBaz'
```

### Mixed Separators

```typescript
type Result5 = CamelCase<'hello_world-foo'> // 'helloWorldFoo'
```

## Related

- [`SnakeCase`](./snake-case) - Convert to snake_case
- [`CamelCaseKeys`](./camel-case-keys) - Convert object keys