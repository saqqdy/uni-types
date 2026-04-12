# 在线演练场

在浏览器中直接体验 `uni-types`，实时查看类型检查效果！

<TypePlayground />

## 如何使用

1. **编辑代码** - 在编辑器中修改 TypeScript 代码
2. **查看类型提示** - 将鼠标悬停在类型名称上查看定义
3. **检查错误** - 实时显示类型错误
4. **加载示例** - 点击示例按钮加载不同的代码示例

## 功能特性

- 🎯 **实时类型检查** - 输入时即可看到类型错误
- 💡 **智能提示** - 悬停查看类型定义
- 📦 **预加载类型** - 所有 uni-types 都可直接导入
- 🎨 **语法高亮** - 完整的 TypeScript 语法支持

## 可用类型

所有 `uni-types` 类型都可用：

```typescript
// 核心操作
import type { PickRequired, PickPartial, OmitRequired, OmitPartial } from 'uni-types'

// 元组操作
import type { Head, Last, Tail, Init, Reverse, Flatten } from 'uni-types'

// 深度操作
import type { DeepPartial, DeepRequired, DeepReadonly, DeepMutable } from 'uni-types'

// 类型判断
import type { IsArray, IsTuple, IsEqual, IsAny, IsNever } from 'uni-types'

// 品牌类型
import type { Brand, Unbrand } from 'uni-types'

// 条件类型
import type { If, Not, And, Or } from 'uni-types'

// 性能优化
import type { Simplify, DeepSimplify, Compact } from 'uni-types'

// 更多类型...
```

## 外部资源

- [TypeScript Playground](https://www.typescriptlang.org/play) - TypeScript 官方演练场
- [Type Challenges](https://github.com/type-challenges/type-challenges) - TypeScript 类型挑战练习
