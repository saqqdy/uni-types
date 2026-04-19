# 配置管理

**自 1.5.0 起**

用于配置和环境管理的类型工具。

## 概述

配置管理模块提供了应用程序配置的类型支持，包括环境变量、配置模式、密钥管理和功能开关。这些类型可以帮助你构建类型安全的配置系统，确保配置值在编译时和运行时都得到正确验证。

通过这些类型工具，你可以定义配置结构、验证环境变量、安全地管理敏感信息，以及实现动态的功能开关控制。

## 基本用法

```typescript
import type { Config, Environment, EnvVar, Secret, FeatureFlag } from 'uni-types'

// 定义应用配置
interface AppConfig {
  database: { host: string; port: number }
  redis: { url: string }
}

type MyConfig = Config<AppConfig>

// 定义环境变量
type DatabaseUrl = EnvVar<string>

// 定义密钥
type ApiKey = Secret<string>

// 定义功能开关
type BetaFeature = FeatureFlag<boolean>
```

## 主要类型

### Config

配置类型，定义应用程序的配置结构。

```typescript
type Config<T = unknown> = {
  [key: string]: T
} & {
  __config?: true
}
```

### Environment

环境类型，表示应用程序运行的环境。

```typescript
type Environment = 'development' | 'staging' | 'production' | 'test' | 'local'
```

### EnvVar

环境变量类型，包含值、来源和是否必需的信息。

```typescript
type EnvVar<T = unknown> = {
  value: T
  source: ConfigSource
  required: boolean
  default?: T
  description?: string
}
```

### Secret

密钥类型，用于安全地存储和管理敏感配置值。

```typescript
type Secret<T = string> = {
  __secret: true
  value: T
  expiresAt?: Date
  rotatedAt?: Date
  version?: number
}
```

### FeatureFlag

功能开关类型，用于控制功能的启用状态和目标规则。

```typescript
type FeatureFlag<T = boolean> = {
  name: string
  enabled: T
  description?: string
  variants?: FeatureFlagVariant<T>[]
  targeting?: FeatureTargeting[]
  createdAt: Date
  updatedAt: Date
}
```

## 相关

- [API 参考](/zh/api/config/)
