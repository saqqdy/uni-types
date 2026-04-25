# 类型安全配置

类型安全的配置管理工具。

## 概述

`typesafe-config` 模块提供全面的类型安全配置管理，包括 schema 验证、环境变量、多源配置和配置监听。

## 配置 Schema

### ConfigSchema

定义配置 schema：

```ts
import type { ConfigSchema, ConfigField } from 'uni-types'

interface AppConfig extends ConfigSchema<{
  port: number
  host: string
  debug: boolean
}> {
  port: ConfigField<number>
  host: ConfigField<string>
}
```

## 环境配置

### EnvConfig

```ts
import type { EnvConfig, EnvField, EnvMapping } from 'uni-types'

interface AppEnv extends EnvConfig<{
  NODE_ENV: string
  PORT: number
}> {
  NODE_ENV: EnvField<string>
  PORT: EnvField<number>
}
```

## 配置构建器

### ConfigBuilder

```ts
import type { ConfigBuilder } from 'uni-types'

interface MyAppConfigBuilder extends ConfigBuilder<{ port: number }> {
  schema: <S>(schema: S) => ConfigBuilder<{ port: number }>
  defaults: <D>(defaults: D) => ConfigBuilder<{ port: number } & D>
  build: () => Promise<{ port: number }>
}
```

## API 参考

| 类型 | 描述 |
|------|------|
| `ConfigSchema<T>` | 配置 schema 类型 |
| `ConfigField<T>` | 配置字段定义 |
| `EnvConfig<T>` | 环境配置 |
| `ConfigSource<T>` | 配置源 |
| `ConfigLoader<T>` | 配置加载器 |
| `SecretSource` | 密钥源类型 |