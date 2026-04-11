# 介绍

**uni-types** 是一个全面的 TypeScript 类型工具库，提供 50+ 类型助手，让 TypeScript 开发更安全、更简洁。

## 为什么选择 uni-types？

TypeScript 内置的工具类型（`Partial`、`Required`、`Pick`、`Omit` 等）功能强大但有限。uni-types 扩展了它们：

- **深度操作** - 递归转换嵌套对象
- **元组操作** - Head、Tail、Reverse、Flatten 等
- **类型判断** - 编译时类型检查
- **类型推导** - 从复杂结构提取类型
- **字符串转换** - CamelCase、SnakeCase 转换

## 特性

- 🎯 **50+ 实用类型工具** 覆盖常见场景
- 🔒 **完全类型安全** 完整的 TypeScript 定义
- 🚀 **零运行时开销** 纯类型级别工具
- 📦 **Tree-shakable** 按需导入
- 🔄 **深度操作** 支持嵌套对象转换

## 与内置类型对比

| 内置类型 | uni-types | 描述 |
|----------|-----------|------|
| `Partial<T>` | `DeepPartial<T>` | 递归将所有属性变为可选 |
| `Required<T>` | `DeepRequired<T>` | 递归将所有属性变为必需 |
| `Readonly<T>` | `DeepReadonly<T>` | 递归将所有属性变为只读 |
| - | `DeepMutable<T>` | 移除所有嵌套 readonly |
| `Pick<T, K>` | `PickRequired<T, K>` | 将指定属性变为必需 |
| `Omit<T, K>` | `OmitRequired<T, K>` | 将指定属性之外变为必需 |

## 安装

查看 [安装](./installation) 了解安装说明。

## 快速开始

查看 [快速上手](./quick-start) 快速入门。