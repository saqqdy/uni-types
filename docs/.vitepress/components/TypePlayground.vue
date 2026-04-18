<script setup lang="ts">
import { ref, shallowRef, defineAsyncComponent } from 'vue'

const props = defineProps<{
  initialCode?: string
  title?: string
}>()

// Lazy load Monaco Editor only on client side
const VueMonacoEditor = defineAsyncComponent(() =>
  import('@guolao/vue-monaco-editor').then(m => m.VueMonacoEditor)
)

const code = ref(props.initialCode || defaultCode)
const editorRef = shallowRef()
const isClient = ref(false)

// Check if running on client
if (typeof window !== 'undefined') {
  isClient.value = true
}

// Default code example
const defaultCode = `import type {
  PickRequired,
  DeepPartial,
  Brand,
  If,
  Simplify
} from 'uni-types'

// ============================================
// 🎯 Try uni-types Playground
// ============================================
// Edit the code below and see type hints!
// Hover over types to see details

// --- Core: PickRequired ---
interface User {
  name?: string
  age?: number
  email: string
}

type RequiredUser = PickRequired<User, 'name' | 'age'>
// { name: string; age: number; email: string }

// --- Deep: DeepPartial ---
interface Config {
  database: {
    host: string
    port: number
  }
}

type PartialConfig = DeepPartial<Config>
// { database?: { host?: string; port?: number } }

// --- Brand: Nominal Types ---
type UserId = Brand<string, 'UserId'>
type OrderId = Brand<string, 'OrderId'>
// UserId and OrderId are not interchangeable!

// --- Conditional: If ---
type Success = If<true, 'success', 'error'>  // 'success'
type Failure = If<false, 'success', 'error'> // 'error'

// --- Performance: Simplify ---
type Complex = { a: string } & { b: number }
type Simple = Simplify<Complex>
// { a: string; b: number }

// ============================================
// 💡 Tips:
// - Hover over type names to see their definitions
// - Check the Problems panel for type errors
// - Try your own types below!
// ============================================
`

// Monaco editor configuration
const options = {
  minimap: { enabled: false },
  fontSize: 14,
  lineNumbers: 'on' as const,
  roundedSelection: true,
  scrollBeyondLastLine: false,
  readOnly: false,
  automaticLayout: true,
  tabSize: 2,
  wordWrap: 'on' as const,
  folding: true,
  glyphMargin: false,
  lineDecorationsWidth: 10,
  lineNumbersMinChars: 3,
  renderLineHighlight: 'line' as const,
  scrollbar: {
    vertical: 'auto' as const,
    horizontal: 'auto' as const,
    verticalScrollbarSize: 10,
    horizontalScrollbarSize: 10,
  },
}

// Handle editor mount
function handleMount(editor: any) {
  editorRef.value = editor
}

// Code examples for quick loading
const examples = [
  {
    name: 'Core Types',
    code: `import type { PickRequired, PickPartial, OmitRequired, OmitPartial } from 'uni-types'

interface User {
  name?: string
  age?: number
  email: string
  phone?: string
}

// Make name and age required
type RequiredName = PickRequired<User, 'name' | 'age'>
// { name: string; age: number; email: string; phone?: string }

// Make email optional
type OptionalEmail = PickPartial<User, 'email'>
// { name?: string; age?: number; email?: string; phone?: string }

// Make all required except name
type AllRequiredExceptName = OmitRequired<User, 'name'>
// { name?: string; age: number; email: string; phone: number }

// Make all optional except email
type AllOptionalExceptEmail = OmitPartial<User, 'email'>
// { name?: string; age?: number; email: string; phone?: string }`,
  },
  {
    name: 'Deep Operations',
    code: `import type { DeepPartial, DeepRequired, DeepReadonly, DeepMutable } from 'uni-types'

interface Config {
  database: {
    host: string
    port: number
    credentials: {
      username: string
      password: string
    }
  }
  cache: {
    enabled: boolean
    ttl: number
  }
}

// All nested properties become optional
type PartialConfig = DeepPartial<Config>

// All nested properties become required
type RequiredConfig = DeepRequired<{
  database?: {
    host?: string
  }
}>

// All nested properties become readonly
type ReadonlyConfig = DeepReadonly<Config>

// All nested properties become mutable
type MutableConfig = DeepMutable<{
  readonly database: {
    readonly host: string
  }
}>`,
  },
  {
    name: 'Brand Types',
    code: `import type { Brand, Unbrand } from 'uni-types'

// Create nominal types for type safety
type UserId = Brand<string, 'UserId'>
type OrderId = Brand<string, 'OrderId'>
type ProductId = Brand<string, 'ProductId'>

// These are not interchangeable!
const userId = 'user-123' as UserId
const orderId = 'order-456' as OrderId

// This would cause a type error:
// const wrong: OrderId = userId  // Error!

// Extract the underlying type
type RawId = Unbrand<UserId>  // string

// Use cases:
type Email = Brand<string, 'Email'>
type ValidatedEmail = Brand<Email, 'Validated'>

type Celsius = Brand<number, 'Celsius'>
type Fahrenheit = Brand<number, 'Fahrenheit'>
// Prevents mixing temperature units!`,
  },
  {
    name: 'Conditional Types',
    code: `import type { If, Not, And, Or } from 'uni-types'

// Basic conditional
type Result1 = If<true, 'yes', 'no'>    // 'yes'
type Result2 = If<false, 'yes', 'no'>   // 'no'

// Logical operations
type NotTrue = Not<true>   // false
type NotFalse = Not<false> // true

type BothTrue = And<true, true>    // true
type OneFalse = And<true, false>   // false

type EitherTrue = Or<true, false>  // true
type BothFalse = Or<false, false>  // false

// Practical example: Conditional props
type ApiResponse<T extends boolean> = {
  success: T
  data: If<T, string, null>
  error: If<Not<T>, string, null>
}

type SuccessResponse = ApiResponse<true>
// { success: true; data: string; error: null }

type ErrorResponse = ApiResponse<false>
// { success: false; data: null; error: string }`,
  },
  {
    name: 'Type Guards',
    code: `import type { IsArray, IsTuple, IsEqual, IsAny, IsNever } from 'uni-types'

// Array checks
type IsArrayResult = IsArray<string[]>      // true
type IsNotArray = IsArray<string>           // false

// Tuple checks
type IsTupleResult = IsTuple<[string, number]>  // true
type IsNotTuple = IsTuple<string[]>             // false

// Equality checks
type AreEqual = IsEqual<string, string>     // true
type AreNotEqual = IsEqual<string, number>  // false

// Special type checks
type IsAnyResult = IsAny<any>       // true
type IsNotAny = IsAny<string>       // false

type IsNeverResult = IsNever<never> // true
type IsNotNever = IsNever<string>   // false

// Practical use: Conditional types
type SafeHead<T> = IsArray<T> extends true
  ? T extends (infer E)[] ? E : never
  : never`,
  },
  {
    name: 'Tuple Operations',
    code: `import type { Head, Last, Tail, Init, Reverse, Flatten, TupleLength } from 'uni-types'

type MyTuple = [1, 2, 3, 4, 5]

// Get first element
type First = Head<MyTuple>  // 1

// Get last element
type LastElem = Last<MyTuple>  // 5

// Get all except first
type Rest = Tail<MyTuple>  // [2, 3, 4, 5]

// Get all except last
type AllButLast = Init<MyTuple>  // [1, 2, 3, 4]

// Reverse tuple
type Reversed = Reverse<MyTuple>  // [5, 4, 3, 2, 1]

// Flatten nested tuples
type Nested = [1, [2, 3], [4, [5]]]
type Flat = Flatten<Nested>  // [1, 2, 3, 4, 5]

// Get tuple length
type Length = TupleLength<MyTuple>  // 5`,
  },
  {
    name: 'Path Utilities',
    code: `import type { Paths, PathValue, ValidPath } from 'uni-types'

interface User {
  id: string
  profile: {
    name: string
    email: string
    address: {
      city: string
      country: string
    }
  }
  posts: Array<{
    id: number
    title: string
  }>
}

// Get all possible paths
type UserPaths = Paths<User>
// 'id' | 'profile' | 'profile.name' | 'profile.email' | ...

// Get value at path
type Name = PathValue<User, 'profile.name'>     // string
type Address = PathValue<User, 'profile.address'>  // { city: string; country: string }

// Validate path exists
type IsValid = ValidPath<User, 'profile.name'>  // true
type IsInvalid = ValidPath<User, 'invalid'>     // never`,
  },
  {
    name: 'Performance',
    code: `import type { Simplify, DeepSimplify, Compact, StripNever, MergeAll } from 'uni-types'

// Simplify intersection types
type Complex = { a: string } & { b: number } & { c: boolean }
type Simple = Simplify<Complex>
// { a: string; b: number; c: boolean }

// Deep simplify nested intersections
type Nested = {
  user: { name: string } & { age: number }
  settings: { theme: string } & { lang: string }
}
type DeepSimple = DeepSimplify<Nested>

// Remove never properties
type WithNever = { a: string; b: never; c: number }
type WithoutNever = StripNever<WithNever>
// { a: string; c: number }

// Compact: remove never and undefined
type Noisy = { a: string; b: never; c?: undefined; d: number }
type Clean = Compact<Noisy>
// { a: string; d: number }

// Merge multiple types
type Merged = MergeAll<[
  { id: string },
  { name: string },
  { age: number }
]>
// { id: string; name: string; age: number }`,
  },
]

function loadExample(example: typeof examples[0]) {
  code.value = example.code
}
</script>

<template>
	<div class="playground-container">
		<div class="playground-header">
			<h2>{{ title || 'TypeScript Playground' }}</h2>
			<p class="playground-desc">
				Edit the code below and see real-time type checking. Hover over types to see their definitions.
			</p>
		</div>

		<div class="examples-bar">
			<span class="examples-label">Examples:</span>
			<button
				v-for="example in examples"
				:key="example.name"
				class="example-btn"
				@click="loadExample(example)"
			>
				{{ example.name }}
			</button>
		</div>

		<div class="editor-wrapper">
			<ClientOnly>
				<VueMonacoEditor
					v-model:value="code"
					language="typescript"
					:options="options"
					@mount="handleMount"
					class="monaco-editor"
				/>
				<template #fallback>
					<div class="loading-placeholder">
						<div class="loading-spinner"></div>
						<p>Loading TypeScript editor...</p>
					</div>
				</template>
			</ClientOnly>
		</div>

		<div class="playground-footer">
			<div class="tips">
				<strong>💡 Tips:</strong>
				<ul>
					<li>Hover over type names to see their definitions</li>
					<li>Check the Problems panel for type errors</li>
					<li>Click examples above to load different code samples</li>
				</ul>
			</div>
			<a
				href="https://www.typescriptlang.org/play"
				target="_blank"
				rel="noopener noreferrer"
				class="ts-playground-link"
			>
				Open in TypeScript Playground ↗
			</a>
		</div>
	</div>
</template>

<style scoped>
.playground-container {
  margin: 1rem 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
}

.playground-header {
  padding: 1rem 1.5rem;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.playground-header h2 {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.playground-desc {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.examples-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--vp-c-divider);
}

.examples-label {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
}

.example-btn {
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: all 0.2s;
}

.example-btn:hover {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.editor-wrapper {
  height: 500px;
}

.monaco-editor {
  height: 100%;
}

.loading-placeholder {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-2);
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--vp-c-divider);
  border-top-color: var(--vp-c-brand-1);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.playground-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 1.5rem;
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
  gap: 1rem;
}

.tips {
  flex: 1;
}

.tips strong {
  color: var(--vp-c-text-1);
}

.tips ul {
  margin: 0.5rem 0 0;
  padding-left: 1.5rem;
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
}

.tips li {
  margin: 0.25rem 0;
}

.ts-playground-link {
  font-size: 0.85rem;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  white-space: nowrap;
}

.ts-playground-link:hover {
  text-decoration: underline;
}

/* Dark mode adjustments */
html:not(.dark) .playground-container {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

html.dark .playground-container {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}
</style>
