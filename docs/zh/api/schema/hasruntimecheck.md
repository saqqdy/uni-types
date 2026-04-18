# HasRuntimeCheck

**自 1.2.0 起**

检查类型是否具有运行时检查函数。

## 签名

```typescript
type HasRuntimeCheck<T> = T extends string | number | boolean | symbol | bigint | null | undefined
  ? true
  : T extends Array<infer _>
    ? true
    : T extends Map<infer _, infer _>
      ? true
      : T extends Set<infer _>
        ? true
        : T extends Date
          ? true
          : false
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要检查的类型 |

## 描述

确定类型是否可以使用 JavaScript 的 `typeof` 或 `instanceof` 运算符在运行时进行检查。原始类型、数组、Map、Set 和 Date 具有内置的运行时检查。

## 示例

### 基本用法

```typescript
import type { HasRuntimeCheck } from 'uni-types'

type CheckString = HasRuntimeCheck<string>  // true
type CheckObject = HasRuntimeCheck<{ a: string }>  // false
```

### 与内置类型一起使用

```typescript
import type { HasRuntimeCheck } from 'uni-types'

type CheckArray = HasRuntimeCheck<number[]>  // true
type CheckDate = HasRuntimeCheck<Date>  // true
type CheckMap = HasRuntimeCheck<Map<string, number>>  // true
```

## 相关

- [`RuntimeGuard`](./runtime-guard) - 定义类型守卫函数
- [`GuardedType`](./guarded-type) - 从守卫中提取类型
