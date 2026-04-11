# LiteralBoolean

布尔字面量类型。

## 签名

```typescript
type LiteralBoolean<T> = T extends boolean ? (boolean extends T ? never : T) : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要检查的类型 |

## 描述

确保类型是布尔字面量（`true` 或 `false`），而不是宽泛的 `boolean` 类型。

## 示例

### 基本用法

```typescript
import type { LiteralBoolean } from 'uni-types'

type A = LiteralBoolean<true> // true
type B = LiteralBoolean<false> // false
type C = LiteralBoolean<boolean> // never
```

### 配置选项

```typescript
interface FeatureFlag<T extends boolean> {
  name: string
  enabled: LiteralBoolean<T>
}

const darkMode: FeatureFlag<true> = {
  name: 'darkMode',
  enabled: true
}

const beta: FeatureFlag<false> = {
  name: 'betaFeatures',
  enabled: false
}
```

## 相关

- [`Literal`](./literal) - 字面量类型
- [`LiteralString`](./literal-string) - 字符串字面量
- [`LiteralNumber`](./literal-number) - 数字字面量
