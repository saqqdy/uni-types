# DeepMutable

**自 1.0.0 起**

递归地将所有嵌套属性设置为可变（移除只读修饰符）。

## 签名

```typescript
type DeepMutable<T> = T extends BuiltIn
  ? T
  : T extends Map<infer K, infer V>
    ? Map<DeepMutable<K>, DeepMutable<V>>
    : T extends Set<infer V>
      ? Set<DeepMutable<V>>
      : T extends readonly (infer E)[]
        ? DeepMutable<E>[]
        : T extends object
          ? { -readonly [P in keyof T]: DeepMutable<T[P]> }
          : T
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 目标类型 |

## 描述

`DeepMutable` 是 `DeepReadonly` 的反向操作。它移除所有嵌套属性的 `readonly` 修饰符。

## 示例

### 基本用法

```typescript
import type { DeepMutable } from 'uni-types'

interface Config {
  readonly database: {
    readonly host: string
    readonly port: number
  }
}

type MutableConfig = DeepMutable<Config>
/*
{
  database: {
    host: string
    port: number
  }
}
*/
```

### 与只读数组一起使用

```typescript
type ReadonlyArray = readonly string[]
type MutableArray = DeepMutable<ReadonlyArray> // string[]
```

### 与 DeepReadonly 一起使用

```typescript
import type { DeepReadonly, DeepMutable } from 'uni-types'

interface Data {
  items: { name: string }[]
}

type Readonly = DeepReadonly<Data>
type BackToMutable = DeepMutable<Readonly> // 与 Data 相同
```

## 相关

- [`DeepReadonly`](./deep-readonly) - 将所有嵌套属性设置为只读
- [`DeepPartial`](./deep-partial) - 将所有嵌套属性设置为可选
- [`DeepRequired`](./deep-required) - 将所有嵌套属性设置为必需
