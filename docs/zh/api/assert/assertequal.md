# AssertEqual

**自 1.3.0 起**

在编译时断言类型 `T` 等于 `Expected`。

## 签名

```typescript
type AssertEqual<T, Expected> = (() => T extends Expected
  ? Expected extends T
    ? 1
    : 2
  : 2) extends () => 1
  ? T
  : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要检查的类型 |
| `Expected` | 期望匹配的类型 |

## 示例

### 基本用法

```typescript
import type { AssertEqual } from 'uni-types'

type Result = AssertEqual<string, string> // string
type Failed = AssertEqual<string, number> // never
```

### 对象类型

```typescript
type Obj = { name: string }
type Result = AssertEqual<Obj, { name: string }> // { name: string }
```

### 类型测试

```typescript
type Test = AssertEqual<'hello' | 'world', 'world' | 'hello'> // 'hello' | 'world'
```

## 相关

- [`AssertExtends`](./assertextends) - 断言类型扩展另一个类型
- [`AssertKeyof`](./assertkeyof) - 断言键存在于类型上
