# ComponentProps

**Since 1.2.0**

Extract props from a React component or intrinsic element.

## Signature

```typescript
type ComponentProps<T> = T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : T extends ReactComponentType<infer P>
    ? P
    : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | Component type or intrinsic element key |

## Examples

### Intrinsic Elements

```typescript
import type { ComponentProps } from 'uni-types'

type ButtonProps = ComponentProps<'button'>
type InputProps = ComponentProps<'input'>
type DivProps = ComponentProps<'div'>
```

### Custom Components

```typescript
import type { ComponentProps } from 'uni-types'

const MyButton = (props: { variant: 'primary' | 'secondary'; onClick: () => void }) => null

type Props = ComponentProps<typeof MyButton>
// { variant: 'primary' | 'secondary'; onClick: () => void }
```

### Extending Props

```typescript
interface CustomButtonProps extends ComponentProps<'button'> {
  variant: 'primary' | 'secondary'
}
```

## Related

- [`PropsWithChildren`](./props-with-children) - Add children prop
- [`RequiredProps`](./required-props) - Get required prop keys
- [`OptionalProps`](./optional-props) - Get optional prop keys