# Installation

## Package Manager

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

## Requirements

- Node.js >= 18.0.0
- TypeScript >= 5.0.0

## Usage

Import types using TypeScript's `import type` syntax:

```typescript
import type { PickRequired, DeepPartial, IsArray } from 'uni-types'
```

Or use regular imports:

```typescript
import { type PickRequired, type DeepPartial } from 'uni-types'
```

## Verify Installation

Create a test file to verify the installation:

```typescript
// test.ts
import type { PickRequired, DeepPartial } from 'uni-types'

interface User {
  name?: string
  age?: number
  email: string
}

type RequiredUser = PickRequired<User, 'name'>

// This should compile without errors
const user: RequiredUser = {
  name: 'John',
  email: 'john@example.com'
}
```

Compile with TypeScript:

```bash
npx tsc test.ts --noEmit
```

If there are no errors, the installation is successful!