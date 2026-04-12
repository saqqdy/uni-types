# Playground

Try `uni-types` directly in your browser with real-time type checking!

<TypePlayground />

## How to Use

1. **Edit the code** - Modify the TypeScript code in the editor
2. **See type hints** - Hover over type names to see their definitions
3. **Check for errors** - Type errors appear in real-time
4. **Load examples** - Click the example buttons to load different code samples

## Features

- 🎯 **Real-time Type Checking** - See type errors as you type
- 💡 **IntelliSense** - Hover over types to see their definitions
- 📦 **Pre-loaded Types** - All uni-types are available for import
- 🎨 **Syntax Highlighting** - Full TypeScript syntax support

## Available Types

All types from `uni-types` are available:

```typescript
// Core Operations
import type { PickRequired, PickPartial, OmitRequired, OmitPartial } from 'uni-types'

// Tuple Operations
import type { Head, Last, Tail, Init, Reverse, Flatten } from 'uni-types'

// Deep Operations
import type { DeepPartial, DeepRequired, DeepReadonly, DeepMutable } from 'uni-types'

// Type Guards
import type { IsArray, IsTuple, IsEqual, IsAny, IsNever } from 'uni-types'

// Brand Types
import type { Brand, Unbrand } from 'uni-types'

// Conditional Types
import type { If, Not, And, Or } from 'uni-types'

// Performance
import type { Simplify, DeepSimplify, Compact } from 'uni-types'

// And many more...
```

## External Resources

- [TypeScript Playground](https://www.typescriptlang.org/play) - Official TypeScript playground
- [Type Challenges](https://github.com/type-challenges/type-challenges) - Practice TypeScript type challenges
