import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import ClientOnly from '../components/ClientOnly.vue'
import TypePlayground from '../components/TypePlayground.vue'
import './style.css'

export default {
	enhanceApp({ app }) {
		// Register global components
		app.component('TypePlayground', TypePlayground)
		app.component('ClientOnly', ClientOnly)
	},
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {})
	},
} satisfies Theme
