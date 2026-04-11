# StrictExclude

严格排除类型。

## 签名

```typescript
type StrictExclude<T, U extends T> = T extends U ? never : T
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 源类型 |
| `U` | 要排除的类型（必须是 T 的子类型） |

## 描述

类似于 TypeScript 内置的 `Exclude`，但要求 `U` 必须是 `T` 的子类型，提供更严格的类型检查。

## 示例

### 基本用法

```typescript
import type { StrictExclude } from 'uni-types'

type Status = 'pending' | 'active' | 'inactive' | 'deleted'

type NonPending = StrictExclude<Status, 'pending'>
// 'active' | 'inactive' | 'deleted'
```

### 与联合类型一起使用

```typescript
type Event = {
  type: 'click'
  x: number
  y: number
} | {
  type: 'scroll'
  scrollTop: number
} | {
  type: 'keypress'
  key: string
}

type NonClickEvent = StrictExclude<Event, { type: 'click' }>
// { type: 'scroll'; scrollTop: number } | { type: 'keypress'; key: string }
```

## 相关

- [`StrictExtract`](./strict-extract) - 严格提取类型
- [`Exclude`](https://www.typescriptlang.org/docs/handbook/utility-types.html#exclude-type-excludedunion) - TypeScript 内置 Exclude
