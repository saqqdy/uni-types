/**
 * Accessibility Types
 *
 * Type definitions for web accessibility (a11y) patterns and ARIA.
 */

// ============== ARIA Role Types ==============

/**
 * ARIA role type
 */
export type ARIARole
	// Document structure roles
	= | 'article'
	| 'cell'
	| 'columnheader'
	| 'definition'
	| 'directory'
	| 'document'
	| 'feed'
	| 'figure'
	| 'group'
	| 'heading'
	| 'img'
	| 'list'
	| 'listitem'
	| 'math'
	| 'none'
	| 'note'
	| 'presentation'
	| 'region'
	| 'row'
	| 'rowgroup'
	| 'rowheader'
	| 'separator'
	| 'table'
	| 'term'
	| 'tooltip'
	// Widget roles
	| 'alert'
	| 'alertdialog'
	| 'button'
	| 'checkbox'
	| 'combobox'
	| 'dialog'
	| 'grid'
	| 'gridcell'
	| 'link'
	| 'listbox'
	| 'listitem'
	| 'menu'
	| 'menubar'
	| 'menuitem'
	| 'menuitemcheckbox'
	| 'menuitemradio'
	| 'option'
	| 'progressbar'
	| 'radio'
	| 'radiogroup'
	| 'scrollbar'
	| 'searchbox'
	| 'slider'
	| 'spinbutton'
	| 'switch'
	| 'tab'
	| 'tablist'
	| 'tabpanel'
	| 'textbox'
	| 'tree'
	| 'treeitem'
	// Landmark roles
	| 'banner'
	| 'complementary'
	| 'contentinfo'
	| 'form'
	| 'main'
	| 'navigation'
	| 'search'
	// Live region roles
	| 'log'
	| 'marquee'
	| 'status'
	| 'timer'
	// Window roles
	| 'dialog'
	| 'alertdialog'
	// Abstract roles (for completeness)
	| 'command'
	| 'composite'
	| 'input'
	| 'landmark'
	| 'range'
	| 'roletype'
	| 'section'
	| 'sectionhead'
	| 'select'
	| 'structure'
	| 'widget'
	| 'window'

/**
 * ARIA role category
 */
export type ARIARoleCategory
	= | 'document-structure'
	| 'widget'
	| 'landmark'
	| 'live-region'
	| 'window'
	| 'abstract'

// ============== ARIA Property Types ==============

/**
 * ARIA property attribute names
 */
export type ARIAProperty
	= | 'aria-activedescendant'
	| 'aria-atomic'
	| 'aria-autocomplete'
	| 'aria-busy'
	| 'aria-checked'
	| 'aria-colcount'
	| 'aria-colindex'
	| 'aria-colspan'
	| 'aria-controls'
	| 'aria-current'
	| 'aria-describedby'
	| 'aria-details'
	| 'aria-disabled'
	| 'aria-dropeffect'
	| 'aria-errormessage'
	| 'aria-expanded'
	| 'aria-flowto'
	| 'aria-grabbed'
	| 'aria-haspopup'
	| 'aria-hidden'
	| 'aria-invalid'
	| 'aria-keyshortcuts'
	| 'aria-label'
	| 'aria-labelledby'
	| 'aria-level'
	| 'aria-live'
	| 'aria-modal'
	| 'aria-multiline'
	| 'aria-multiselectable'
	| 'aria-orientation'
	| 'aria-owns'
	| 'aria-placeholder'
	| 'aria-posinset'
	| 'aria-pressed'
	| 'aria-readonly'
	| 'aria-relevant'
	| 'aria-required'
	| 'aria-roledescription'
	| 'aria-rowcount'
	| 'aria-rowindex'
	| 'aria-rowspan'
	| 'aria-selected'
	| 'aria-setsize'
	| 'aria-sort'
	| 'aria-valuemax'
	| 'aria-valuemin'
	| 'aria-valuenow'
	| 'aria-valuetext'

/**
 * ARIA state attribute names
 */
export type ARIAState
	= | 'aria-checked'
	| 'aria-disabled'
	| 'aria-expanded'
	| 'aria-hidden'
	| 'aria-invalid'
	| 'aria-pressed'
	| 'aria-selected'
	| 'aria-busy'
	| 'aria-grabbed'
	| 'aria-modal'

/**
 * ARIA property value types
 */
export type ARIAPropertyValue<T = unknown>
	= | boolean
	| string
	| number
	| 'true'
	| 'false'
	| 'mixed'
	| T

/**
 * aria-current values
 */
export type ARIACurrentValue
	= | 'page'
	| 'step'
	| 'location'
	| 'date'
	| 'time'
	| 'true'
	| 'false'

/**
 * aria-haspopup values
 */
export type ARIAHasPopupValue
	= | 'false'
	| 'true'
	| 'menu'
	| 'listbox'
	| 'tree'
	| 'grid'
	| 'dialog'

/**
 * aria-live values
 */
export type ARIALiveValue = 'off' | 'polite' | 'assertive'

/**
 * aria-relevant values
 */
export type ARIARelevantValue
	= | 'additions'
	| 'removals'
	| 'text'
	| 'all'
	| `${'additions' | 'removals' | 'text'} ${'additions' | 'removals' | 'text'}`

/**
 * aria-sort values
 */
export type ARIASortValue = 'ascending' | 'descending' | 'none' | 'other'

/**
 * aria-autocomplete values
 */
export type ARIAAutocompleteValue = 'inline' | 'list' | 'both' | 'none'

/**
 * aria-invalid values
 */
export type ARIAInvalidValue = 'true' | 'false' | 'grammar' | 'spelling'

/**
 * aria-orientation values
 */
export type ARIAOrientationValue = 'horizontal' | 'vertical' | 'undefined'

// ============== Accessibility Attributes ==============

/**
 * Accessibility props type
 */
export interface AccessibilityProps {
	role?: ARIARole
	'aria-label'?: string
	'aria-labelledby'?: string
	'aria-describedby'?: string
	'aria-details'?: string
	'aria-hidden'?: boolean | 'true' | 'false'
	'aria-live'?: ARIALiveValue
	'aria-atomic'?: boolean | 'true' | 'false'
	'aria-relevant'?: ARIARelevantValue
	'aria-current'?: ARIACurrentValue
	'aria-expanded'?: boolean | 'true' | 'false'
	'aria-controls'?: string
	'aria-owns'?: string
	'aria-haspopup'?: ARIAHasPopupValue
	'aria-pressed'?: boolean | 'true' | 'false' | 'mixed'
	'aria-checked'?: boolean | 'true' | 'false' | 'mixed'
	'aria-selected'?: boolean | 'true' | 'false'
	'aria-disabled'?: boolean | 'true' | 'false'
	'aria-readonly'?: boolean | 'true' | 'false'
	'aria-required'?: boolean | 'true' | 'false'
	'aria-invalid'?: ARIAInvalidValue
	'aria-errormessage'?: string
	'aria-busy'?: boolean | 'true' | 'false'
	'aria-valuemin'?: number
	'aria-valuemax'?: number
	'aria-valuenow'?: number
	'aria-valuetext'?: string
	'aria-level'?: number
	'aria-posinset'?: number
	'aria-setsize'?: number
	'aria-colcount'?: number
	'aria-colindex'?: number
	'aria-colspan'?: number
	'aria-rowcount'?: number
	'aria-rowindex'?: number
	'aria-rowspan'?: number
	'aria-sort'?: ARIASortValue
	'aria-autocomplete'?: ARIAAutocompleteValue
	'aria-multiline'?: boolean | 'true' | 'false'
	'aria-multiselectable'?: boolean | 'true' | 'false'
	'aria-orientation'?: ARIAOrientationValue
	'aria-placeholder'?: string
	'aria-roledescription'?: string
	'aria-keyshortcuts'?: string
	'aria-modal'?: boolean | 'true' | 'false'
	'aria-flowto'?: string
	'aria-activedescendant'?: string
	tabIndex?: number
	id?: string
}

/**
 * Button accessibility props
 */
export interface ButtonAccessibilityProps extends AccessibilityProps {
	role?: 'button'
	'aria-pressed'?: boolean | 'true' | 'false' | 'mixed'
	'aria-expanded'?: boolean | 'true' | 'false'
	'aria-disabled'?: boolean | 'true' | 'false'
	disabled?: boolean
}

/**
 * Link accessibility props
 */
export interface LinkAccessibilityProps extends AccessibilityProps {
	role?: 'link'
	'aria-disabled'?: boolean | 'true' | 'false'
	href?: string
}

/**
 * Input accessibility props
 */
export interface InputAccessibilityProps extends AccessibilityProps {
	role?: 'textbox' | 'searchbox' | 'spinbutton' | 'slider'
	'aria-required'?: boolean | 'true' | 'false'
	'aria-invalid'?: ARIAInvalidValue
	'aria-readonly'?: boolean | 'true' | 'false'
	'aria-placeholder'?: string
	'aria-valuenow'?: number
	'aria-valuemin'?: number
	'aria-valuemax'?: number
	disabled?: boolean
	readOnly?: boolean
	required?: boolean
	placeholder?: string
}

/**
 * Checkbox accessibility props
 */
export interface CheckboxAccessibilityProps extends AccessibilityProps {
	role?: 'checkbox'
	'aria-checked'?: boolean | 'true' | 'false' | 'mixed'
	'aria-required'?: boolean | 'true' | 'false'
	'aria-disabled'?: boolean | 'true' | 'false'
	'aria-readonly'?: boolean | 'true' | 'false'
	disabled?: boolean
}

/**
 * Radio accessibility props
 */
export interface RadioAccessibilityProps extends AccessibilityProps {
	role?: 'radio'
	'aria-checked'?: boolean | 'true' | 'false'
	'aria-required'?: boolean | 'true' | 'false'
	'aria-disabled'?: boolean | 'true' | 'false'
	disabled?: boolean
}

/**
 * Dialog accessibility props
 */
export interface DialogAccessibilityProps extends AccessibilityProps {
	role?: 'dialog' | 'alertdialog'
	'aria-modal'?: boolean | 'true' | 'false'
	'aria-labelledby'?: string
	'aria-describedby'?: string
}

/**
 * Menu accessibility props
 */
export interface MenuAccessibilityProps extends AccessibilityProps {
	role?: 'menu' | 'menubar'
	'aria-orientation'?: ARIAOrientationValue
	'aria-activedescendant'?: string
}

/**
 * MenuItem accessibility props
 */
export interface MenuItemAccessibilityProps extends AccessibilityProps {
	role?: 'menuitem' | 'menuitemcheckbox' | 'menuitemradio'
	'aria-checked'?: boolean | 'true' | 'false'
	'aria-disabled'?: boolean | 'true' | 'false'
	'aria-expanded'?: boolean | 'true' | 'false'
	'aria-haspopup'?: ARIAHasPopupValue
}

/**
 * Listbox accessibility props
 */
export interface ListboxAccessibilityProps extends AccessibilityProps {
	role?: 'listbox'
	'aria-multiselectable'?: boolean | 'true' | 'false'
	'aria-required'?: boolean | 'true' | 'false'
	'aria-activedescendant'?: string
}

/**
 * Option accessibility props
 */
export interface OptionAccessibilityProps extends AccessibilityProps {
	role?: 'option'
	'aria-selected'?: boolean | 'true' | 'false'
	'aria-disabled'?: boolean | 'true' | 'false'
}

/**
 * Tab accessibility props
 */
export interface TabAccessibilityProps extends AccessibilityProps {
	role?: 'tab'
	'aria-selected'?: boolean | 'true' | 'false'
	'aria-controls'?: string
	'aria-expanded'?: boolean | 'true' | 'false'
}

/**
 * TabPanel accessibility props
 */
export interface TabPanelAccessibilityProps extends AccessibilityProps {
	role?: 'tabpanel'
	'aria-labelledby'?: string
}

/**
 * TabList accessibility props
 */
export interface TabListAccessibilityProps extends AccessibilityProps {
	role?: 'tablist'
	'aria-orientation'?: ARIAOrientationValue
}

/**
 * Grid accessibility props
 */
export interface GridAccessibilityProps extends AccessibilityProps {
	role?: 'grid'
	'aria-multiselectable'?: boolean | 'true' | 'false'
	'aria-readonly'?: boolean | 'true' | 'false'
	'aria-rowcount'?: number
	'aria-colcount'?: number
	'aria-activedescendant'?: string
}

/**
 * GridCell accessibility props
 */
export interface GridCellAccessibilityProps extends AccessibilityProps {
	role?: 'gridcell'
	'aria-selected'?: boolean | 'true' | 'false'
	'aria-readonly'?: boolean | 'true' | 'false'
	'aria-disabled'?: boolean | 'true' | 'false'
}

/**
 * Tree accessibility props
 */
export interface TreeAccessibilityProps extends AccessibilityProps {
	role?: 'tree'
	'aria-multiselectable'?: boolean | 'true' | 'false'
	'aria-required'?: boolean | 'true' | 'false'
	'aria-activedescendant'?: string
}

/**
 * TreeItem accessibility props
 */
export interface TreeItemAccessibilityProps extends AccessibilityProps {
	role?: 'treeitem'
	'aria-selected'?: boolean | 'true' | 'false'
	'aria-expanded'?: boolean | 'true' | 'false'
	'aria-level'?: number
	'aria-setsize'?: number
	'aria-posinset'?: number
}

/**
 * Table accessibility props
 */
export interface TableAccessibilityProps extends AccessibilityProps {
	role?: 'table'
	'aria-colcount'?: number
	'aria-rowcount'?: number
}

/**
 * Row accessibility props
 */
export interface RowAccessibilityProps extends AccessibilityProps {
	role?: 'row'
	'aria-rowindex'?: number
	'aria-selected'?: boolean | 'true' | 'false'
}

/**
 * ColumnHeader accessibility props
 */
export interface ColumnHeaderAccessibilityProps extends AccessibilityProps {
	role?: 'columnheader'
	'aria-sort'?: ARIASortValue
	'aria-colindex'?: number
}

/**
 * RowHeader accessibility props
 */
export interface RowHeaderAccessibilityProps extends AccessibilityProps {
	role?: 'rowheader'
	'aria-rowindex'?: number
}

// ============== Focus Types ==============

/**
 * Focus state type
 */
export type FocusState
	= | 'none'
	| 'self'
	| 'children'
	| 'scope'

/**
 * Focus trap type
 */
export interface FocusTrap<T = HTMLElement> {
	enabled: boolean
	container: T | null
	initialFocus?: T | string | (() => T | null)
	fallbackFocus?: T | string | (() => T | null)
	returnFocus?: boolean | T | string | (() => T | null)
	escapeDeactivates?: boolean | ((e: KeyboardEvent) => boolean)
	clickOutsideDeactivates?: boolean | ((e: MouseEvent) => boolean)
	delayInitialFocus?: boolean
	preventScroll?: boolean
	allowOutsideClick?: boolean | ((e: MouseEvent) => boolean)
	setReturnFocus?: (previousActiveElement: T) => T | boolean
	tabbableOptions?: TabbableOptions
}

/**
 * Tabbable options
 */
export interface TabbableOptions {
	includeContainer?: boolean
	includeHidden?: boolean
	includeDisabled?: boolean
	visibilityCheck?: boolean
	displayCheck?: 'full' | 'none' | 'non-zero-area'
}

/**
 * Focus manager type
 */
export interface FocusManager<T = HTMLElement> {
	focusFirst: () => void
	focusLast: () => void
	focusNext: () => void
	focusPrevious: () => void
	getCurrentFocus: () => T | null
	setFocus: (element: T) => void
	resetFocus: () => void
}

/**
 * Focusable element type
 */
export type FocusableElement
	= | HTMLButtonElement
	| HTMLInputElement
	| HTMLSelectElement
	| HTMLTextAreaElement
	| HTMLAnchorElement
	| HTMLIFrameElement
	| HTMLAreaElement
	| HTMLElement & { tabindex: number }

/**
 * Focus event type
 */
export interface FocusEvent<T = HTMLElement> {
	type: 'focus' | 'blur'
	target: T
	relatedTarget: T | null
	timeStamp: number
}

/**
 * Focus visibility type
 */
export type FocusVisibility = 'visible' | 'hidden' | 'auto'

// ============== Screen Reader Types ==============

/**
 * Screen reader announcement type
 */
export type ScreenReaderAnnouncement = 'polite' | 'assertive' | 'off'

/**
 * Live region type
 */
export interface LiveRegion<T = unknown> {
	'aria-live': ARIALiveValue
	'aria-atomic'?: boolean | 'true' | 'false'
	'aria-relevant'?: ARIARelevantValue
	'aria-busy'?: boolean | 'true' | 'false'
	content?: string | T
	role?: 'status' | 'alert' | 'log' | 'marquee' | 'timer'
}

/**
 * Screen reader text type
 */
export type ScreenReaderText = string

/**
 * Visually hidden props
 */
export interface VisuallyHiddenProps {
	as?: string
	children?: unknown
	className?: string
	style?: Record<string, string>
	focusable?: boolean
	unmountOnExit?: boolean
}

/**
 * Skip link props
 */
export interface SkipLinkProps {
	targetId: string
	label?: string
	position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

/**
 * Skip to content props
 */
export interface SkipToContentProps {
	contentId: string
	label?: string
}

// ============== Keyboard Navigation Types ==============

/**
 * Keyboard navigation type
 */
export interface KeyboardNavigation<T = HTMLElement> {
	orientation?: 'horizontal' | 'vertical' | 'both'
	loop?: boolean
	keys?: {
		next: string[]
		previous: string[]
		first?: string[]
		last?: string[]
	}
	onNavigate?: (element: T, index: number) => void
	focusOnHover?: boolean
	selectOnFocus?: boolean
}

/**
 * Key handler type
 */
export type KeyHandler<T = Event> = (event: T) => void

/**
 * Key binding type
 */
export interface KeyBinding {
	key: string
	ctrlKey?: boolean
	shiftKey?: boolean
	altKey?: boolean
	metaKey?: boolean
	code?: string
	action: string | (() => void)
	description?: string
	selector?: string
	preventDefault?: boolean
	stopPropagation?: boolean
}

/**
 * Keyboard shortcut type
 */
export type KeyboardShortcut = string | {
	key: string
	modifiers?: ('ctrl' | 'shift' | 'alt' | 'meta')[]
	description?: string
	action?: () => void
}

/**
 * Key code type
 */
export type KeyCode
	= | 'Enter'
	| 'Space'
	| 'Escape'
	| 'Tab'
	| 'ArrowUp'
	| 'ArrowDown'
	| 'ArrowLeft'
	| 'ArrowRight'
	| 'Home'
	| 'End'
	| 'PageUp'
	| 'PageDown'
	| 'Backspace'
	| 'Delete'
	| 'Insert'
	| 'F1'
	| 'F2'
	| 'F3'
	| 'F4'
	| 'F5'
	| 'F6'
	| 'F7'
	| 'F8'
	| 'F9'
	| 'F10'
	| 'F11'
	| 'F12'
	| string

/**
 * Keyboard event type
 */
export interface KeyEvent {
	key: string
	code: string
	ctrlKey: boolean
	shiftKey: boolean
	altKey: boolean
	metaKey: boolean
	location: number
	repeat: boolean
	type: 'keydown' | 'keyup' | 'keypress'
}

/**
 * Navigation direction
 */
export type NavigationDirection = 'up' | 'down' | 'left' | 'right' | 'next' | 'previous' | 'first' | 'last'

// ============== Color Contrast Types ==============

/**
 * Contrast ratio type
 */
export type ContrastRatio = number

/**
 * WCAG level type
 */
export type WCAGLevel = 'A' | 'AA' | 'AAA'

/**
 * Color contrast type
 */
export interface ColorContrast<T = unknown> {
	foreground: string
	background: string
	ratio: ContrastRatio
	wcagAA: boolean
	wcagAAALarge: boolean
	wcagAAANormal: boolean
	custom?: T
}

/**
 * Color contrast result
 */
export interface ColorContrastResult {
	contrastRatio: ContrastRatio
	wcagAA: { normal: boolean, large: boolean }
	wcagAAA: { normal: boolean, large: boolean }
	recommendations?: ColorContrastRecommendation[]
}

/**
 * Color contrast recommendation
 */
export interface ColorContrastRecommendation {
	type: 'foreground' | 'background'
	originalColor: string
	suggestedColor: string
	newRatio: number
	wcagLevel: WCAGLevel
}

/**
 * WCAG contrast requirements
 */
export interface WCAGContrastRequirements {
	AA: {
		normal: 4.5
		large: 3
	}
	AAA: {
		normal: 7
		large: 4.5
	}
}

// ============== Motion Sensitivity Types ==============

/**
 * Motion preference type
 */
export type MotionPreference = 'no-preference' | 'reduce'

/**
 * Animation options type (accessibility-specific)
 */
export interface AccessibilityAnimationOptions<T = unknown> {
	duration?: number
	delay?: number
	easing?: string
	iterations?: number | 'infinite'
	direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'
	fill?: 'none' | 'forwards' | 'backwards' | 'both'
	playState?: 'running' | 'paused'
	reduceMotion?: boolean
	custom?: T
}

/**
 * Motion-safe animation
 */
export type MotionSafeAnimation<T = unknown> = T | {
	reducedMotion: T
}

/**
 * Prefers-reduced-motion media query result
 */
export interface MotionMediaQuery {
	matches: boolean
	media: string
	onchange: ((this: unknown, ev: unknown) => void) | null
}

/**
 * Vestibular sensitivity
 */
export type VestibularTrigger
	= | 'scale'
	| 'rotate'
	| 'spin'
	| 'flip'
	| 'slide'
	| 'wipe'
	| 'fade'
	| 'zoom'
	| 'parallax'

/**
 * Safe animation types
 */
export type SafeAnimationType
	= | 'fade'
	| 'slide-up'
	| 'slide-down'
	| 'slide-left'
	| 'slide-right'
	| 'opacity'
	| 'transform-origin'

// ============== Accessibility Tree Types ==============

/**
 * Accessibility node type
 */
export interface AccessibilityNode<T = unknown> {
	role: ARIARole | string
	name: string
	description?: string
	value?: string | number
	state?: Record<string, boolean | string | number>
	properties?: Record<string, unknown>
	children?: AccessibilityNode[]
	focused?: boolean
	visible?: boolean
	enabled?: boolean
	editable?: boolean
	custom?: T
}

/**
 * Accessibility tree type
 */
export interface AccessibilityTree<T = unknown> {
	root: AccessibilityNode<T>
	focusOrder: AccessibilityNode<T>[]
	landmarks: { type: string, node: AccessibilityNode<T> }[]
	headings: { level: number, node: AccessibilityNode<T> }[]
	links: AccessibilityNode<T>[]
	forms: AccessibilityNode<T>[]
	custom?: T
}

/**
 * Accessibility node properties
 */
export interface AccessibilityNodeProperties {
	name: {
		value: string
		source: 'attribute' | 'contents' | 'author' | 'computed'
	}
	description?: {
		value: string
		source: 'attribute' | 'contents' | 'author' | 'computed'
	}
	role: ARIARole
	focusable: boolean
	focused: boolean
}

// ============== Accessibility Check Types ==============

/**
 * Accessibility violation type
 */
export interface AccessibilityViolation {
	id: string
	impact: 'minor' | 'moderate' | 'serious' | 'critical'
	description: string
	help: string
	helpUrl: string
	nodes: {
		html: string
		target: string[]
		failureSummary: string
	}[]
	tags: string[]
	wcag?: string[]
	section508?: string[]
	bestPractice?: boolean
}

/**
 * Accessibility check result
 */
export interface AccessibilityCheckResult {
	violations: AccessibilityViolation[]
	incomplete: AccessibilityViolation[]
	inapplicable: { id: string }[]
	passes: { id: string, nodes: { html: string }[] }[]
	summary: {
		violations: number
		incomplete: number
		passes: number
		inapplicable: number
	}
	timestamp: string
	url: string
}

/**
 * Accessibility rule type
 */
export interface AccessibilityRule {
	id: string
	selector: string
	enabled: boolean
	any: unknown[]
	all: unknown[]
	none: unknown[]
	tags: string[]
	metadata: {
		description: string
		help: string
	}
}

/**
 * WCAG criterion type
 */
export interface WCAGCriterion {
	id: string
	level: WCAGLevel
	title: string
	description: string
	url: string
}

// ============== Form Accessibility Types ==============

/**
 * Form field accessibility
 */
export interface FormFieldAccessibility {
	id: string
	label: string
	description?: string
	errorMessage?: string
	hint?: string
	required: boolean
	disabled: boolean
	invalid: boolean
	autocomplete?: string
}

/**
 * Form accessibility props
 */
export interface FormAccessibilityProps {
	'aria-label'?: string
	'aria-labelledby'?: string
	'aria-describedby'?: string
	'aria-errormessage'?: string
	'aria-required'?: boolean | 'true' | 'false'
	'aria-invalid'?: ARIAInvalidValue
	autocomplete?: string
	novalidate?: boolean
}

/**
 * Label accessibility props
 */
export interface LabelAccessibilityProps {
	htmlFor?: string
	id?: string
	'aria-label'?: string
}

/**
 * Error message props
 */
export interface ErrorMessageProps {
	id: string
	children: string
	className?: string
	role?: 'alert' | 'status'
	live?: 'polite' | 'assertive' | 'off'
}

/**
 * Hint text props
 */
export interface HintTextProps {
	id: string
	children: string
	className?: string
}

// ============== Landmark Types ==============

/**
 * Landmark type
 */
export type LandmarkType
	= | 'banner'
	| 'complementary'
	| 'contentinfo'
	| 'form'
	| 'main'
	| 'navigation'
	| 'region'
	| 'search'

/**
 * Landmark props
 */
export interface LandmarkProps {
	role?: LandmarkType
	'aria-label'?: string
	'aria-labelledby'?: string
}

/**
 * Main content props
 */
export interface MainContentProps extends LandmarkProps {
	role: 'main'
	id?: string
}

/**
 * Navigation props
 */
export interface NavigationProps extends LandmarkProps {
	role: 'navigation'
	'aria-current'?: ARIACurrentValue
}

/**
 * Banner props
 */
export interface BannerProps extends LandmarkProps {
	role: 'banner'
}

/**
 * Content info props
 */
export interface ContentInfoProps extends LandmarkProps {
	role: 'contentinfo'
}

/**
 * Complementary props
 */
export interface ComplementaryProps extends LandmarkProps {
	role: 'complementary'
}

// ============== Alt Text Types ==============

/**
 * Alt text type
 */
export type AltText = string

/**
 * Image accessibility props
 */
export interface ImageAccessibilityProps {
	alt: AltText
	role?: 'img' | 'presentation' | 'none'
	'aria-label'?: string
	'aria-labelledby'?: string
	'aria-describedby'?: string
	title?: string
	loading?: 'lazy' | 'eager'
	decoding?: 'async' | 'auto' | 'sync'
}

/**
 * Decorative image props
 */
export interface DecorativeImageProps {
	alt: ''
	role: 'presentation' | 'none'
}

/**
 * Functional image props
 */
export interface FunctionalImageProps {
	alt: string
	role?: 'button' | 'link'
}

/**
 * Informative image props
 */
export interface InformativeImageProps {
	alt: string
	role?: 'img'
	'aria-describedby'?: string
}

// ============== Accessible Name Types ==============

/**
 * Accessible name type
 */
export type AccessibleName = string

/**
 * Accessible name sources
 */
export interface AccessibleNameSource {
	source: 'aria-label' | 'aria-labelledby' | 'title' | 'alt' | 'label' | 'contents' | 'placeholder' | 'attribute'
	value: string
	priority: number
}

/**
 * Accessible description type
 */
export type AccessibleDescription = string

// ============== Touch Target Types ==============

/**
 * Touch target size
 */
export interface TouchTargetSize {
	width: number
	height: number
	minWidth?: number
	minHeight?: number
	spacing?: number
}

/**
 * Touch target props
 */
export interface TouchTargetProps {
	minWidth?: number
	minHeight?: number
	spacing?: number
}

/**
 * WCAG touch target requirements
 */
export const WCAGTouchTargetRequirements = {
	minWidth: 44,
	minHeight: 44,
	minSpacing: 0,
} as const
