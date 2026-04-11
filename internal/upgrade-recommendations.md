# uni-types 升级优化建议

> 分析日期：2026-04-11
> 当前版本：1.0.0-beta.1
> **状态：已全部完成 ✅**

## 项目现状概述

`uni-types` 是一个 TypeScript 类型工具库，已从 4 个核心类型工具扩展到 **42 个**。

---

## 一、构建框架升级 ✅

### 1.1 迁移到 tsdown（已完成）

**已完成的改进：**
- ✅ 使用 tsdown 替代 Rollup 3.x
- ✅ 配置从 ~130 行减少到 ~10 行
- ✅ 移除 api-extractor，tsdown 内置类型声明生成
- ✅ 构建速度提升

**优势对比：**

| 特性 | 之前 (Rollup) | 之后 (tsdown) |
|-----|--------------|---------------|
| 配置行数 | ~130 行 | ~10 行 |
| 类型声明生成 | 需要 api-extractor | 内置支持 |
| 构建速度 | 较慢 | 更快 (Rolldown) |
| 维护成本 | 高 | 低 |

---

## 二、功能扩展 ✅

### 2.1 核心类型工具扩展（已完成）

已添加以下实用类型工具（按模块组织）：

**core/** - 基础操作：
- `PickRequired<T, K>` - 将指定属性变为必需
- `PickPartial<T, K>` - 将指定属性变为可选
- `OmitRequired<T, K>` - 将指定属性之外变为必需
- `OmitPartial<T, K>` - 将指定属性之外变为可选

**deep/** - 深度操作：
- `DeepPartial<T>` - 深度可选
- `DeepRequired<T>` - 深度必需
- `DeepReadonly<T>` - 深度只读

**guards/** - 类型判断：
- `IsArray<T>` - 判断是否为数组
- `IsTuple<T>` - 判断是否为元组
- `IsEqual<X, Y>` - 判断类型相等
- `IsAny<T>` - 判断是否为 any
- `IsNever<T>` - 判断是否为 never
- `IsUnknown<T>` - 判断是否为 unknown

**infer/** - 类型推导：
- `Awaited<T>` - 获取 Promise 值类型
- `ArrayElement<T>` - 获取数组元素类型
- `ValueOf<T>` - 获取对象值类型
- `FunctionKeys<T>` - 获取函数类型的键
- `NonFunctionKeys<T>` - 获取非函数类型的键
- `FirstParameter<T>` - 获取函数第一个参数类型
- `FunctionOnly<T>` - 提取函数属性
- `DataOnly<T>` - 提取非函数属性

**utils/** - 实用工具：
- `Merge<T, U>` - 合并两个类型
- `NonNullable<T>` - 非 null/undefined
- `Exclusive<T, K>` - 互斥属性
- `NoNullish<T>` - 忽略 null/undefined
- `LoosePartial<T>` - 宽松可选
- `Literal` - 字面量类型
- `LiteralString/Number/Boolean` - 精确字面量
- `Nullable/Optional/Maybe` - 可空类型
- `CamelCase/SnakeCase` - 字符串转换
- `CamelCaseKeys/SnakeCaseKeys` - 键名转换
- `AtLeastOne<T>` - 至少一个属性
- `StrictExtract/StrictExclude` - 严格操作
- `UnionToIntersection/UnionToTuple` - 联合类型转换

### 2.2 类型工具分类组织（已完成）

代码结构已按功能模块组织：

```
src/
├── index.ts              # 统一导出
├── index.test.ts         # 类型测试
├── core/
│   ├── index.ts
│   ├── pick.ts           # PickRequired, PickPartial
│   └── omit.ts           # OmitRequired, OmitPartial
├── deep/
│   └── index.ts          # DeepPartial, DeepRequired, DeepReadonly
├── guards/
│   └── index.ts          # IsArray, IsTuple, IsEqual 等
├── infer/
│   └── index.ts          # Awaited, ArrayElement, ValueOf 等
└── utils/
    └── index.ts          # Merge, NonNullable, CamelCase 等
```

---

## 三、依赖更新 ✅

### 3.1 已更新依赖

| 依赖 | 旧版本 | 新版本 |
|-----|-------|-------|
| tsdown | - | ^0.21.7 |
| vitest | - | ^4.1.4 |
| publint | - | ^0.3.0 |
| @arethetypeswrong/cli | - | ^0.17.0 |
| @types/node | ^20.4.5 | ^22.19.17 |

### 3.2 已移除的依赖

- ❌ `@babel/core`, `@babel/preset-env`, `@babel/preset-typescript`
- ❌ `babel-loader`
- ❌ `@microsoft/api-extractor`
- ❌ `@rollup/plugin-*` 系列
- ❌ `rollup`, `rollup-plugin-*` 系列
- ❌ `jest`, `ts-jest`, `@types/jest`
- ❌ `core-js`
- ❌ `cross-env`, `coveralls`

---

## 四、package.json 改进 ✅

### 4.1 exports 字段优化

```json
{
  "exports": {
    ".": {
      "import": {
        "types": "./dist/index.d.mts",
        "default": "./dist/index.mjs"
      },
      "require": {
        "types": "./dist/index.d.cts",
        "default": "./dist/index.cjs"
      }
    }
  }
}
```

### 4.2 scripts 简化

```json
{
  "scripts": {
    "build": "tsdown",
    "dev": "tsdown --watch",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "typecheck": "tsc --noEmit",
    "lint": "eslint --fix .",
    "format": "prettier --write \"**/*.{js,ts,jsx,tsx,yml,json,md}\""
  }
}
```

---

## 五、测试完善 ✅

### 5.1 使用 Vitest 替代 Jest

- ✅ 已安装 vitest
- ✅ 已创建 vitest.config.ts
- ✅ 已编写 50 个类型测试用例
- ✅ 所有测试通过

### 5.2 测试覆盖

- 基础操作测试：8 个
- 深度操作测试：3 个
- 类型判断测试：12 个
- 类型推导测试：8 个
- 实用工具测试：12 个
- 字面量测试：4 个
- 字符串转换测试：4 个
- 其他工具测试：7 个

---

## 六、文档完善 ✅

### 6.1 README 增强

- ✅ 添加完整的 API 文档
- ✅ 每个类型工具的使用示例
- ✅ 分类清晰的功能表格
- ✅ 开发指南

---

## 七、CI/CD 优化 ✅

### 7.1 GitHub Actions 改进

- ✅ 合并 build.yml 和 lint.yml 为 ci.yml
- ✅ 更新 actions 版本到 v4
- ✅ 添加 publint 和 @arethetypeswrong/cli 检查
- ✅ 简化 publish.yml 工作流

---

## 八、开发体验改进 ✅

### 8.1 VSCode 配置优化

- ✅ 更新 settings.json
- ✅ 添加 extensions.json（推荐扩展）

### 8.2 其他

- ✅ 更新 .node-version 到 20
- ✅ 更新 packageManager 到 pnpm@9.15.9

---

## 九、总结

所有建议的升级优化已全部完成：

| 维度 | 之前 | 之后 | 状态 |
|-----|-----|-----|-----|
| 类型数量 | 4 个 | 42 个 | ✅ |
| 构建工具 | Rollup 3.x | tsdown | ✅ |
| 测试框架 | Jest | Vitest | ✅ |
| 测试用例 | 0 | 50 | ✅ |
| 文档质量 | 基础 | 完善 | ✅ |
| CI/CD | 分散 | 统一 | ✅ |
| 代码结构 | 单文件 | 模块化 | ✅ |
| 依赖数量 | ~50 | ~12 | ✅ |
