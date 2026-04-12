# ComponentProps

从 React 组件或内置元素中提取 props。

## 签名

```typescript
type ComponentProps<T> = T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : T extends ReactComponentType<infer P>
    ? P
    : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 组件类型或内置元素键 |

## 示例

### 内置元素

```typescript
import type { ComponentProps } from 'uni-types'

type ButtonProps = ComponentProps<'button'>
type InputProps = ComponentProps<'input'>
type DivProps = ComponentProps<'div'>
```

### 自定义组件

```typescript
import type { ComponentProps } from 'uni-types'

const MyButton = (props: { variant: 'primary' | 'secondary'; onClick: () => void }) => null

type Props = ComponentProps<typeof MyButton>
// { variant: 'primary' | 'secondary'; onClick: () => void }
```

### 扩展 Props

```typescript
interface CustomButtonProps extends ComponentProps<'button'> {
  variant: 'primary' | 'secondary'
}
```

## 相关

- [`PropsWithChildren`](./props-with-children) - 添加 children prop
- [`RequiredProps`](./required-props) - 获取必需的 prop 键
- [`OptionalProps`](./optional-props) - 获取可选的 prop 键
