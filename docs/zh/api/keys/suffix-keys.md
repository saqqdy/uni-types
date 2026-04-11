# SuffixKeys

为所有键添加后缀。

## 签名

```typescript
type SuffixKeys<T, S extends string> = {
  [K in keyof T as `${K & string}${S}`]: T[K]
}
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 对象类型 |
| `S` | 要添加的后缀 |

## 示例

### 基本用法

```typescript
import type { SuffixKeys } from 'uni-types'

type Data = { a: string; b: number }
type Suffixed = SuffixKeys<Data, 'Data'>
// { aData: string; bData: number }
```

### 状态管理

```typescript
type State = {
  loading: boolean
  error: string | null
  data: User[]
}

type LoadingState = SuffixKeys<State, 'Loading'>
// { loadingLoading: boolean; errorLoading: string | null; dataLoading: User[] }
```

### 事件处理器

```typescript
type Events = { click: Function; hover: Function }
type Handlers = SuffixKeys<Events, 'Handler'>
// { clickHandler: Function; hoverHandler: Function }
```

## 相关

- [`PrefixKeys`](./prefix-keys) - 为所有键添加前缀
- [`RenameKeys`](./rename-keys) - 重命名特定键