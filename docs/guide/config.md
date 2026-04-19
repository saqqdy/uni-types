# Configuration Management

**Since 1.5.0**

Types for configuration and environment management.

## Overview

Configuration Management provides types for managing application configuration across environments. It supports multiple configuration sources, environment variables, secrets management, and feature flags with full type safety.

This module enables building robust configuration systems that can load from files, environment variables, remote sources, and command-line arguments. It includes validation, transformation, and hot-reloading capabilities.

## Basic Usage

```typescript
import type { Config, Environment, EnvVar, FeatureFlag } from 'uni-types'

// Define typed configuration
type AppConfig = Config<{
  database: { host: string; port: number }
  api: { baseUrl: string; timeout: number }
}>

// Environment variable with metadata
type DatabaseUrl = EnvVar<string>
// { value: string; source: ConfigSource; required: boolean; default?: string }

// Feature flag
type NewFeature = FeatureFlag<boolean>
```

## Key Types

### Config

Configuration container type.

```typescript
type Config<T = unknown> = {
  [key: string]: T
} & {
  __config?: true
}
```

### Environment

Environment type for configuration contexts.

```typescript
type Environment = 'development' | 'staging' | 'production' | 'test' | 'local'
```

### EnvVar

Environment variable with metadata.

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

Secret type for sensitive configuration.

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

Feature flag with targeting and variants.

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

## Related

- [API Reference](/api/config/)
- [Validation](./validation) - Validation types
