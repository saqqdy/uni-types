# RenameKeys

根据映射重命名对象键。

## 签名

```typescript
type RenameKeys<T, M extends Record<string, string>> = {
  [K in keyof T as K extends keyof M ? M[K] : K]: T[K]
}
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 对象类型 |
| `M` | 旧键名到新键名的映射 |

## 示例

### 基本用法

```typescript
import type { RenameKeys } from 'uni-types'

type Old = { oldName: string; value: number }
type New = RenameKeys<Old, { oldName: 'newName' }>
// { newName: string; value: number }
```

### 多个重命名

```typescript
type Legacy = {
  usr_nm: string
  usr_age: number
  usr_email: string
}

type Modern = RenameKeys<Legacy, {
  usr_nm: 'name'
  usr_age: 'age'
  usr_email: 'email'
}>
// { name: string; age: number; email: string }
```

### API 响应转换

```typescript
type APIResponse = {
  data: User[]
  total_count: number
  per_page: number
}

type Cleaned = RenameKeys<APIResponse, {
  total_count: 'totalCount'
  per_page: 'perPage'
}>
```

## 相关

- [`PrefixKeys`](./prefix-keys) - 为所有键添加前缀
- [`SuffixKeys`](./suffix-keys) - 为所有键添加后缀