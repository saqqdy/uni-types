import eslintConfig from '@eslint-sets/eslint-config'

export default eslintConfig({
	type: 'lib',
	ignores: ['examples/**', 'tests/**'],
	markdown: false,
	react: false,
	stylistic: {
		indent: 'tab',
	},
	typescript: true,
})
