# FeatureFlag

**自 1.5.0 起**

Represents a feature flag with enabled state, variants, and targeting rules.

## 签名

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

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | The enabled value type (defaults to boolean) |

## 示例

### 基本用法

```typescript
import type { FeatureFlag } from 'uni-types'

const darkModeFlag: FeatureFlag = {
  name: 'dark-mode',
  enabled: true,
  description: 'Enable dark mode for the UI',
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-03-15')
}

if (darkModeFlag.enabled) {
  console.log('Dark mode is available')
}
```

### With Variants and Targeting

```typescript
import type { FeatureFlag } from 'uni-types'

type ButtonVariant = 'control' | 'variant-a' | 'variant-b'

const buttonTestFlag: FeatureFlag<ButtonVariant> = {
  name: 'button-style',
  enabled: 'control',
  description: 'A/B test for button styling',
  variants: [
    { name: 'control', value: 'control', weight: 33 },
    { name: 'variant-a', value: 'variant-a', weight: 33 },
    { name: 'variant-b', value: 'variant-b', weight: 34 }
  ],
  targeting: [
    { attribute: 'country', operator: 'in', values: ['US', 'UK'], variant: 'variant-a' },
    { attribute: 'premium', operator: 'eq', values: [true], variant: 'variant-b' }
  ],
  createdAt: new Date('2024-02-01'),
  updatedAt: new Date('2024-02-15')
}
```

## 相关

- [`FeatureFlags`](./feature-flags)
- [`FeatureTargeting`](./feature-targeting)
