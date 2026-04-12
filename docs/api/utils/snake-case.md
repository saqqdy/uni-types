# SnakeCase

**Since 1.0.0**

Convert a string to snake_case.

## Signature

```typescript
type SnakeCase<S extends string> = ...
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `S` | The string type to convert |

## Description

Converts camelCase strings to snake_case. Correctly handles consecutive uppercase letters.

## Examples

### Basic Usage

```typescript
import type { SnakeCase } from 'uni-types'

type Result1 = SnakeCase<'helloWorld'> // 'hello_world'
type Result2 = SnakeCase<'fooBarBaz'> // 'foo_bar_baz'
```

### Consecutive Uppercase

```typescript
type Result3 = SnakeCase<'XMLParser'> // 'xml_parser'
type Result4 = SnakeCase<'HTMLElement'> // 'html_element'
type Result5 = SnakeCase<'HTTPSConnection'> // 'https_connection'
```

### Single Word

```typescript
type Result6 = SnakeCase<'hello'> // 'hello'
```

## Related

- [`CamelCase`](./camel-case) - Convert to camelCase
- [`SnakeCaseKeys`](./snake-case-keys) - Convert object keys