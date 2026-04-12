# ValidPath

**自 1.1.0 起**

检查路径是否存在于类型中。

## 签名

```typescript
type ValidPath<T, P extends string> = T extends Primitive
  ? P extends ''
    ? true
    : false
  : P extends ''
    ? true
    : P extends `${infer K}.${infer Rest}`
      ? K extends keyof T
        ? ValidPath<T[K], Rest>
        : false
      : P extends keyof T
        ? true
        : false
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 对象类型 |
| `P` | 要检查的路径 |

## 描述

如果路径存在于类型中返回 `true`，否则返回 `false`。

## 示例

### 基本用法

```typescript
import type { ValidPath } from 'uni-types'

interface Obj {
  a: {
    b: string
    c: {
      d: number
    }
  }
}

type Path1 = ValidPath<Obj, 'a.b'>    // true
type Path2 = ValidPath<Obj, 'a.c.d'>  // true
type Path3 = ValidPath<Obj, 'a.x'>    // false
type Path4 = ValidPath<Obj, ''>       // true（根路径）
```

### 条件类型

```typescript
type SafePath<T, P extends string> = ValidPath<T, P> extends true
  ? P
  : never
```

## 相关

- [`PathLength`](./path-length) - 获取路径段数
- [`DeepPick`](../deep/deep-pick) - 选择嵌套属性