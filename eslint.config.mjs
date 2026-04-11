import eslintConfig from '@eslint-sets/eslint-config'

export default eslintConfig({
	type: 'lib',
	ignores: ['examples/**', 'docs/**', 'tests/**'],
	markdown: false,
	stylistic: {
		indent: 'tab',
	},
	typescript: true,
})
