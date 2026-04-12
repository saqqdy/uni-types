# PropsWithChildren

**Since 1.2.0**

Add children prop to a props type.

## Signature

```typescript
type PropsWithChildren<P = unknown> = P & { children?: ReactNode }
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `P` | The base props type |

## Examples

### Basic Usage

```typescript
import type { PropsWithChildren } from 'uni-types'

interface CardProps {
  title: string
}

type CardWithChildren = PropsWithChildren<CardProps>
// { title: string; children?: ReactNode }
```

### Component Definition

```typescript
type Props = PropsWithChildren<{ className?: string }>

const Container = ({ children, className }: Props) => {
  return <div className={className}>{children}</div>
}
```

### Default Props

```typescript
type DefaultProps = PropsWithChildren
// { children?: ReactNode }
```

## Related

- [`PropsWithoutChildren`](./props-without-children) - Remove children prop
- [`ComponentProps`](./component-props) - Extract component props