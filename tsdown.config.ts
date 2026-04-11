import { defineConfig } from 'tsdown'

export default defineConfig({
	entry: 'src/index.ts',
	format: ['esm', 'cjs'],
	dts: true,
	clean: true,
	sourcemap: false,
	minify: false, // 纯类型库无需压缩
})
