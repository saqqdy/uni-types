# 无障碍访问类型

用于网页无障碍 (a11y) 模式和 ARIA 的类型定义。

## ARIA 角色

ARIA 角色类型。

```typescript
import type { ARIARole, ARIARoleCategory } from 'uni-types'

const buttonRole: ARIARole = 'button'
const dialogRole: ARIARole = 'dialog'
const navigationRole: ARIARole = 'navigation'
```

## ARIA 属性

ARIA 属性类型。

```typescript
import type { ARIAProperty, ARIAState, ARIALiveValue } from 'uni-types'

const liveRegion: ARIALiveValue = 'polite'
const hasPopup: ARIAHasPopupValue = 'menu'
```

## 无障碍属性

组件无障碍属性。

```typescript
import type {
  AccessibilityProps,
  ButtonAccessibilityProps,
  InputAccessibilityProps
} from 'uni-types'

const buttonProps: ButtonAccessibilityProps = {
  role: 'button',
  'aria-pressed': false,
  'aria-expanded': false
}

const inputProps: InputAccessibilityProps = {
  role: 'textbox',
  'aria-required': true,
  'aria-invalid': false
}
```

## 焦点管理

焦点陷阱和焦点管理器类型。

```typescript
import type { FocusTrap, FocusManager, FocusState } from 'uni-types'

const trap: FocusTrap = {
  enabled: true,
  container: null,
  returnFocus: true
}
```

## 屏幕阅读器

屏幕阅读器类型。

```typescript
import type { ScreenReaderAnnouncement, LiveRegion } from 'uni-types'

const liveRegion: LiveRegion = {
  'aria-live': 'polite',
  'aria-atomic': true,
  role: 'status'
}
```

## 键盘导航

键盘导航类型。

```typescript
import type { KeyboardNavigation, KeyBinding, KeyCode } from 'uni-types'

const navigation: KeyboardNavigation = {
  orientation: 'vertical',
  loop: true
}

const binding: KeyBinding = {
  key: 'Enter',
  action: 'submit',
  description: '提交表单'
}
```

## 颜色对比

颜色对比类型。

```typescript
import type { ContrastRatio, WCAGLevel, ColorContrast } from 'uni-types'

const contrast: ColorContrast = {
  foreground: '#000000',
  background: '#ffffff',
  ratio: 21,
  wcagAA: { normal: true, large: true }
}
```

## 动作敏感度

动作偏好类型。

```typescript
import type { MotionPreference, AnimationOptions } from 'uni-types'

const prefersReducedMotion: MotionPreference = 'reduce'

const animationOptions: AnimationOptions = {
  duration: 300,
  reduceMotion: true
}
```

## 无障碍树

无障碍树类型。

```typescript
import type { AccessibilityNode, AccessibilityTree } from 'uni-types'

const node: AccessibilityNode = {
  role: 'button',
  name: '提交',
  focused: false
}
```