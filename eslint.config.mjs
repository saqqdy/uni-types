import eslintConfig from '@eslint-sets/eslint-config'

export default eslintConfig({
	type: 'lib',
	ignores: ['examples/**', 'src/**/*.test.ts'],
	markdown: false,
	stylistic: {
		indent: 'tab',
	},
	typescript: true,
})
