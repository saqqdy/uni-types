# PropsWithChildren

**自 1.2.0 起**

向 props 类型添加 children 属性。

## 签名

```typescript
type PropsWithChildren<P = unknown> = P & { children?: ReactNode }
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `P` | 基础 props 类型 |

## 示例

### 基本用法

```typescript
import type { PropsWithChildren } from 'uni-types'

interface CardProps {
  title: string
}

type CardWithChildren = PropsWithChildren<CardProps>
// { title: string; children?: React.ReactNode }
```

### 在组件中使用

```typescript
function Card({ title, children }: PropsWithChildren<CardProps>) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  )
}
```

## 相关

- [`ComponentProps`](./component-props) - 提取组件 props
- [`PropsWithoutChildren`](./props-without-children) - 移除 children
