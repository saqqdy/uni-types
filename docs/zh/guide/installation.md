# 安装

## 包管理器

::: code-group

```bash [pnpm]
pnpm add uni-types
```

```bash [yarn]
yarn add uni-types
```

```bash [npm]
npm install uni-types
```

:::

## 环境要求

- Node.js >= 18.0.0
- TypeScript >= 5.0.0

## 使用方式

使用 TypeScript 的 `import type` 语法导入类型：

```typescript
import type { PickRequired, DeepPartial, IsArray } from 'uni-types'
```

或使用常规导入：

```typescript
import { type PickRequired, type DeepPartial } from 'uni-types'
```

## 验证安装

创建测试文件验证安装：

```typescript
// test.ts
import type { PickRequired, DeepPartial } from 'uni-types'

interface User {
  name?: string
  age?: number
  email: string
}

type RequiredUser = PickRequired<User, 'name'>

// 应该编译无错误
const user: RequiredUser = {
  name: 'John',
  email: 'john@example.com'
}
```

使用 TypeScript 编译：

```bash
npx tsc test.ts --noEmit
```

如果没有错误，说明安装成功！