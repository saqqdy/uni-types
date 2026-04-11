# Introduction

**uni-types** is a comprehensive TypeScript type utility library that provides 50+ type helpers for safer, cleaner TypeScript development.

## Why uni-types?

TypeScript's built-in utility types (`Partial`, `Required`, `Pick`, `Omit`, etc.) are powerful but limited. uni-types extends them with:

- **Deep operations** - Transform nested objects recursively
- **Tuple manipulation** - Head, Tail, Reverse, Flatten, and more
- **Type guards** - Check types at compile time
- **Type inference** - Extract types from complex structures
- **String transformations** - CamelCase, SnakeCase conversions

## Features

- 🎯 **50+ utility types** covering common use cases
- 🔒 **Fully type-safe** with complete TypeScript definitions
- 🚀 **Zero runtime overhead** - pure type-level utilities
- 📦 **Tree-shakable** - import only what you need
- 🔄 **Deep operations** for nested object transformations

## Comparison with Built-in Types

| Built-in | uni-types | Description |
|----------|-----------|-------------|
| `Partial<T>` | `DeepPartial<T>` | Recursively make all properties optional |
| `Required<T>` | `DeepRequired<T>` | Recursively make all properties required |
| `Readonly<T>` | `DeepReadonly<T>` | Recursively make all properties readonly |
| - | `DeepMutable<T>` | Remove readonly from all nested properties |
| `Pick<T, K>` | `PickRequired<T, K>` | Make specific properties required |
| `Omit<T, K>` | `OmitRequired<T, K>` | Make properties required except specified |

## Installation

See [Installation](./installation) for setup instructions.

## Quick Start

See [Quick Start](./quick-start) to get started quickly.