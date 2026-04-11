# Exclusive

Create mutually exclusive properties.

## Signature

```typescript
type Exclusive<T, K extends keyof T> = Omit<T, K> & {
  [P in K]: Pick<T, P> & Partial<Record<Exclude<K, P>, never>>
}[K]
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The base object type |
| `K` | The keys to make mutually exclusive |

## Description

Creates a type where specified properties are mutually exclusive - only one can be chosen. When one property is selected, other mutually exclusive properties must be `never`.

## Examples

### Basic Usage

```typescript
import type { Exclusive } from 'uni-types'

type Button = Exclusive<{
  onClick: () => void
  href: string
  to: string
  disabled: boolean
}, 'onClick' | 'href' | 'to'>

// Valid: only onClick
const clickButton: Button = {
  onClick: () => console.log('clicked'),
  disabled: false
}

// Valid: only href
const linkButton: Button = {
  href: 'https://example.com',
  disabled: false
}

// Invalid: cannot have both onClick and href
const invalid: Button = {
  onClick: () => {},
  href: 'https://example.com', // Error: type is never
  disabled: false
}
```

### Form Input Types

```typescript
type Input = Exclusive<{
  type: 'text' | 'email' | 'password'
  options: string[]
  min: number
  max: number
}, 'type' | 'options'>
```

## Related

- [`AtLeastOne`](./at-least-one) - Require at least one property
- [`Merge`](./merge) - Merge two types
