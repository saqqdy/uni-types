# Type-Safe Configuration

Type-safe configuration management utilities.

## Overview

The `typesafe-config` module provides comprehensive type-safe configuration management, including schema validation, environment variables, multi-source config, and config watching.

## Config Schema

### ConfigSchema

Define a configuration schema:

```ts
import type { ConfigSchema, ConfigField, ConfigFieldType } from 'uni-types'

interface AppConfig extends ConfigSchema<{
  port: number
  host: string
  debug: boolean
}> {
  port: ConfigField<number>
  host: ConfigField<string>
  debug: ConfigField<boolean>
}
```

### ConfigField

```ts
import type { ConfigField } from 'uni-types'

interface PortConfig extends ConfigField<number> {
  type: 'number'
  required: true
  default: 3000
  description: 'Server port'
  env: 'PORT'
  min: 1
  max: 65535
}
```

## Environment Config

### EnvConfig

```ts
import type { EnvConfig, EnvField, EnvMapping } from 'uni-types'

interface AppEnv extends EnvConfig<{
  NODE_ENV: string
  PORT: number
  DEBUG: boolean
}> {
  NODE_ENV: EnvField<string>
  PORT: EnvField<number>
  DEBUG: EnvField<boolean>
}
```

### EnvMapping

```ts
import type { EnvMapping } from 'uni-types'

interface MyMapping extends EnvMapping<{
  port: number
  host: string
}> {
  port: 'PORT'
  host: 'HOST'
}
```

## Multi-Source Config

### ConfigSource

```ts
import type { ConfigSource, ConfigPriority, MergedConfig } from 'uni-types'

interface FileSource extends ConfigSource<{ port: number }> {
  name: 'file'
  priority: 1
  load: () => Promise<{ port: number }>
  watch?: (callback: (config: { port: number }) => void) => () => void
}
```

## Config Builder

### ConfigBuilder

```ts
import type { ConfigBuilder, BuildConfig } from 'uni-types'

interface MyAppConfigBuilder extends ConfigBuilder<{ port: number }> {
  schema: <S extends ConfigSchema>(schema: S) => ConfigBuilder<{ port: number }>
  defaults: <D extends Partial<{ port: number }>>(defaults: D) => ConfigBuilder<{ port: number } & D>
  env: <E extends EnvMapping>(mapping: E) => ConfigBuilder<{ port: number }>
  source: <S extends ConfigSource>(source: S) => ConfigBuilder<{ port: number }>
  build: () => Promise<{ port: number }>
}
```

## Config Loader

### ConfigLoader / LoadResult

```ts
import type { ConfigLoader, LoadResult, LoadError } from 'uni-types'

interface MyLoader extends ConfigLoader<{ port: number }> {
  load: () => Promise<{ port: number }>
  reload: () => Promise<{ port: number }>
  validate: (config: unknown) => ConfigValidationResult<{ port: number }>
}

type Result = LoadResult<{ port: number }>
// | { success: true, config: { port: number }, warnings: ConfigWarning[] }
// | { success: false, error: LoadError, warnings: ConfigWarning[] }
```

## Config Watching

### ConfigWatcher

```ts
import type { ConfigWatcher, ConfigChange } from 'uni-types'

interface MyWatcher extends ConfigWatcher<{ port: number }> {
  start: () => void
  stop: () => void
  onChange: (callback: (config: { port: number }) => void) => () => void
}
```

## Secret Config

### SecretSource

```ts
import type { SecretConfig, SecretSource, SecretValue } from 'uni-types'

type AWSSecret = { type: 'aws-sm', name: 'my-secret', region?: 'us-east-1' }
type VaultSecret = { type: 'vault', path: 'secret/my-app', key: 'api-key' }
```

## Config Accessors

### ConfigAccessor / DeepConfigAccessor

```ts
import type { ConfigAccessor, DeepConfigAccessor, PathValue } from 'uni-types'

interface MyAccessor extends ConfigAccessor<{ server: { port: number } }> {
  get: <K extends 'server'>('server') => { port: number }
  getOr: <K extends 'server'>('server', defaultValue) => { port: number }
  has: <K extends 'server'>('server') => boolean
}

type Port = PathValue<{ server: { port: number } }, 'server.port'> // number
```

## API Reference

| Type | Description |
|------|-------------|
| `ConfigSchema<T>` | Configuration schema type |
| `ConfigField<T>` | Configuration field definition |
| `EnvConfig<T>` | Environment configuration |
| `EnvMapping<T>` | Environment variable mapping |
| `ConfigSource<T>` | Configuration source |
| `ConfigBuilder<T>` | Configuration builder |
| `ConfigLoader<T>` | Configuration loader |
| `ConfigWatcher<T>` | Configuration watcher |
| `SecretSource` | Secret source types |
| `ConfigAccessor<T>` | Configuration accessor |
| `PathValue<T, P>` | Value at path |