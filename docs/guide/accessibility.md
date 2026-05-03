# Accessibility Types

Type definitions for web accessibility (a11y) patterns and ARIA.

## ARIA Roles

ARIA role types.

```typescript
import type { ARIARole, ARIARoleCategory } from 'uni-types'

const buttonRole: ARIARole = 'button'
const dialogRole: ARIARole = 'dialog'
const navigationRole: ARIARole = 'navigation'
```

## ARIA Properties

ARIA property attribute types.

```typescript
import type { ARIAProperty, ARIAState, ARIALiveValue } from 'uni-types'

const liveRegion: ARIALiveValue = 'polite'
const hasPopup: ARIAHasPopupValue = 'menu'
```

## Accessibility Props

Component accessibility props.

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

## Focus Management

Focus trap and manager types.

```typescript
import type { FocusTrap, FocusManager, FocusState } from 'uni-types'

const trap: FocusTrap = {
  enabled: true,
  container: null,
  returnFocus: true
}
```

## Screen Reader

Screen reader types.

```typescript
import type { ScreenReaderAnnouncement, LiveRegion } from 'uni-types'

const liveRegion: LiveRegion = {
  'aria-live': 'polite',
  'aria-atomic': true,
  role: 'status'
}
```

## Keyboard Navigation

Keyboard navigation types.

```typescript
import type { KeyboardNavigation, KeyBinding, KeyCode } from 'uni-types'

const navigation: KeyboardNavigation = {
  orientation: 'vertical',
  loop: true
}

const binding: KeyBinding = {
  key: 'Enter',
  action: 'submit',
  description: 'Submit form'
}
```

## Color Contrast

Color contrast types.

```typescript
import type { ContrastRatio, WCAGLevel, ColorContrast } from 'uni-types'

const contrast: ColorContrast = {
  foreground: '#000000',
  background: '#ffffff',
  ratio: 21,
  wcagAA: { normal: true, large: true }
}
```

## Motion Sensitivity

Motion preference types.

```typescript
import type { MotionPreference, AnimationOptions } from 'uni-types'

const prefersReducedMotion: MotionPreference = 'reduce'

const animationOptions: AnimationOptions = {
  duration: 300,
  reduceMotion: true
}
```

## Accessibility Tree

Accessibility tree types.

```typescript
import type { AccessibilityNode, AccessibilityTree } from 'uni-types'

const node: AccessibilityNode = {
  role: 'button',
  name: 'Submit',
  focused: false
}
```