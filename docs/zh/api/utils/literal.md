# Literal

**自 1.0.0 起**

字面量类型约束。

## 签名

```typescript
type Literal = string | number | boolean | bigint | null | undefined
```

## 描述

表示所有可能的字面量类型的联合。用于约束泛型参数为字面量类型。

## 示例

### 基本用法

```typescript
import type { Literal } from 'uni-types'

function setConfig<K extends string, V extends Literal>(key: K, value: V): Record<K, V> {
  return { [key]: value } as Record<K, V>
}

const config = setConfig('theme', 'dark')
// { theme: 'dark' }
```

### 作为类型约束

```typescript
type ConfigValue = Literal

interface Config {
  name: string
  value: ConfigValue
}
```

## 相关

- [`LiteralString`](./literal-string) - 字符串字面量
- [`LiteralNumber`](./literal-number) - 数字字面量
- [`LiteralBoolean`](./literal-boolean) - 布尔字面量
