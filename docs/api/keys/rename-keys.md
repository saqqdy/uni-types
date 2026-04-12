# RenameKeys

**Since 1.1.0**

Rename object keys based on a mapping.

## Signature

```typescript
type RenameKeys<T, M extends Record<string, string>> = {
  [K in keyof T as K extends keyof M ? M[K] : K]: T[K]
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |
| `M` | Mapping of old key names to new key names |

## Examples

### Basic Usage

```typescript
import type { RenameKeys } from 'uni-types'

type Old = { oldName: string; value: number }
type New = RenameKeys<Old, { oldName: 'newName' }>
// { newName: string; value: number }
```

### Multiple Renames

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

### API Response Transformation

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

## Related

- [`PrefixKeys`](./prefix-keys) - Add prefix to all keys
- [`SuffixKeys`](./suffix-keys) - Add suffix to all keys