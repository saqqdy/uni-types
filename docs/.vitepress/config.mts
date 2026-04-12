import { defineConfig } from 'vitepress'

export default defineConfig({
	base: '/uni-types/',
	ignoreDeadLinks: true,
	head: [
		['link', { href: '/uni-types/logo.svg', rel: 'icon' }],
		['meta', { name: 'theme-color', content: '#3178c6' }],
	],

	locales: {
		root: {
			description: 'A comprehensive collection of TypeScript type utilities',
			label: 'English',
			lang: 'en',
			themeConfig: {
				darkModeSwitchLabel: 'Theme',
				darkModeSwitchTitle: 'Switch to dark theme',
				docFooter: { next: 'Next', prev: 'Previous' },
				editLink: {
					pattern: 'https://github.com/saqqdy/uni-types/edit/master/docs/:path',
					text: 'Edit this page on GitHub',
				},
				footer: {
					copyright: 'Copyright © 2024-present saqqdy',
					message: 'Released under the MIT License.',
				},
				langMenuLabel: 'Language',
				lastUpdated: {
					formatOptions: { dateStyle: 'medium', timeStyle: 'short' },
					text: 'Last updated',
				},
				lightModeSwitchTitle: 'Switch to light theme',
				nav: [
					{ activeMatch: '/guide/', link: '/guide/', text: 'Guide' },
					{ activeMatch: '/api/', link: '/api/', text: 'API' },
					{
						items: [
							{ link: 'https://github.com/saqqdy/uni-types', text: 'GitHub' },
							{ link: 'https://www.npmjs.com/package/uni-types', text: 'NPM' },
						],
						text: 'Links',
					},
				],
				outline: { label: 'On this page' },
				returnToTopLabel: 'Return to top',
				sidebar: {
					'/api/': [
						{
							items: [{ link: '/api/', text: 'Overview' }],
							text: 'API Reference',
						},
						{
							collapsed: false,
							items: [
								{ link: '/api/core/pick-required', text: 'PickRequired' },
								{ link: '/api/core/pick-partial', text: 'PickPartial' },
								{ link: '/api/core/omit-required', text: 'OmitRequired' },
								{ link: '/api/core/omit-partial', text: 'OmitPartial' },
							],
							text: 'Core Operations',
						},
						{
							collapsed: false,
							items: [
								{ link: '/api/core/head', text: 'Head' },
								{ link: '/api/core/last', text: 'Last' },
								{ link: '/api/core/tail', text: 'Tail' },
								{ link: '/api/core/init', text: 'Init' },
								{ link: '/api/core/reverse', text: 'Reverse' },
								{ link: '/api/core/flatten', text: 'Flatten' },
								{ link: '/api/core/tuple-length', text: 'TupleLength' },
								{ link: '/api/core/is-empty-tuple', text: 'IsEmptyTuple' },
							],
							text: 'Tuple Operations',
						},
						{
							collapsed: false,
							items: [
								{ link: '/api/deep/deep-partial', text: 'DeepPartial' },
								{ link: '/api/deep/deep-required', text: 'DeepRequired' },
								{ link: '/api/deep/deep-readonly', text: 'DeepReadonly' },
								{ link: '/api/deep/deep-mutable', text: 'DeepMutable' },
								{ link: '/api/deep/deep-omit', text: 'DeepOmit' },
								{ link: '/api/deep/deep-pick', text: 'DeepPick' },
							],
							text: 'Deep Operations',
						},
						{
							collapsed: false,
							items: [
								{ link: '/api/brand/brand', text: 'Brand' },
								{ link: '/api/brand/unbrand', text: 'Unbrand' },
							],
							text: 'Brand Types',
						},
						{
							collapsed: false,
							items: [
								{ link: '/api/conditional/if', text: 'If' },
								{ link: '/api/conditional/not', text: 'Not' },
								{ link: '/api/conditional/and', text: 'And' },
								{ link: '/api/conditional/or', text: 'Or' },
							],
							text: 'Conditional Types',
						},
						{
							collapsed: false,
							items: [
								{ link: '/api/functions/parameters', text: 'Parameters' },
								{ link: '/api/functions/return-type', text: 'ReturnType' },
								{ link: '/api/functions/nth-parameter', text: 'NthParameter' },
								{ link: '/api/functions/async-return-type', text: 'AsyncReturnType' },
							],
							text: 'Function Types',
						},
						{
							collapsed: false,
							items: [
								{ link: '/api/keys/rename-keys', text: 'RenameKeys' },
								{ link: '/api/keys/prefix-keys', text: 'PrefixKeys' },
								{ link: '/api/keys/suffix-keys', text: 'SuffixKeys' },
								{ link: '/api/keys/keys-by-value-type', text: 'KeysByValueType' },
							],
							text: 'Key Utilities',
						},
						{
							collapsed: false,
							items: [
								{ link: '/api/numeric/inc', text: 'Inc' },
								{ link: '/api/numeric/dec', text: 'Dec' },
								{ link: '/api/numeric/add', text: 'Add' },
								{ link: '/api/numeric/subtract', text: 'Subtract' },
								{ link: '/api/numeric/range', text: 'Range' },
							],
							text: 'Numeric Types',
						},
						{
							collapsed: false,
							items: [
								{ link: '/api/path/valid-path', text: 'ValidPath' },
								{ link: '/api/path/array-paths', text: 'ArrayPaths' },
								{ link: '/api/path/leaf-paths', text: 'LeafPaths' },
								{ link: '/api/path/path-length', text: 'PathLength' },
							],
							text: 'Path Utilities',
						},
						{
							collapsed: false,
							items: [
								{ link: '/api/record/deep-nullable', text: 'DeepNullable' },
								{ link: '/api/record/deep-optional', text: 'DeepOptional' },
								{ link: '/api/record/immutable', text: 'Immutable' },
								{ link: '/api/record/mutable', text: 'Mutable' },
							],
							text: 'Record Types',
						},
						{
							collapsed: false,
							items: [
								{ link: '/api/template/replace-all', text: 'ReplaceAll' },
								{ link: '/api/template/trim', text: 'Trim' },
								{ link: '/api/template/string-length', text: 'StringLength' },
								{ link: '/api/template/repeat', text: 'Repeat' },
							],
							text: 'Template Literals',
						},
						{
							collapsed: false,
							items: [
								{ link: '/api/schema/runtime-guard', text: 'RuntimeGuard' },
								{ link: '/api/schema/guarded-type', text: 'GuardedType' },
								{ link: '/api/schema/zod-output', text: 'ZodOutput' },
							],
							text: 'Schema Validation',
						},
						{
							collapsed: false,
							items: [
								{ link: '/api/ecosystem/component-props', text: 'ComponentProps' },
								{ link: '/api/ecosystem/props-with-children', text: 'PropsWithChildren' },
								{ link: '/api/ecosystem/prisma-create-input', text: 'PrismaCreateInput' },
							],
							text: 'Ecosystem',
						},
						{
							collapsed: false,
							items: [
								{ link: '/api/perf/simplify', text: 'Simplify' },
								{ link: '/api/perf/deep-simplify', text: 'DeepSimplify' },
							],
							text: 'Performance',
						},
						{
							collapsed: false,
							items: [
								{ link: '/api/guards/is-array', text: 'IsArray' },
								{ link: '/api/guards/is-tuple', text: 'IsTuple' },
								{ link: '/api/guards/is-equal', text: 'IsEqual' },
								{ link: '/api/guards/is-any', text: 'IsAny' },
								{ link: '/api/guards/is-never', text: 'IsNever' },
								{ link: '/api/guards/is-unknown', text: 'IsUnknown' },
							],
							text: 'Type Guards',
						},
						{
							collapsed: false,
							items: [
								{ link: '/api/infer/awaited', text: 'Awaited' },
								{ link: '/api/infer/array-element', text: 'ArrayElement' },
								{ link: '/api/infer/value-of', text: 'ValueOf' },
								{ link: '/api/infer/function-keys', text: 'FunctionKeys' },
								{ link: '/api/infer/non-function-keys', text: 'NonFunctionKeys' },
								{ link: '/api/infer/first-parameter', text: 'FirstParameter' },
								{ link: '/api/infer/function-only', text: 'FunctionOnly' },
								{ link: '/api/infer/data-only', text: 'DataOnly' },
							],
							text: 'Type Inference',
						},
						{
							collapsed: true,
							items: [
								{ link: '/api/utils/merge', text: 'Merge' },
								{ link: '/api/utils/non-nullable', text: 'NonNullable' },
								{ link: '/api/utils/exclusive', text: 'Exclusive' },
								{ link: '/api/utils/no-nullish', text: 'NoNullish' },
								{ link: '/api/utils/nullable', text: 'Nullable' },
								{ link: '/api/utils/optional', text: 'Optional' },
								{ link: '/api/utils/maybe', text: 'Maybe' },
								{ link: '/api/utils/loose-partial', text: 'LoosePartial' },
							],
							text: 'Utility Types',
						},
						{
							collapsed: true,
							items: [
								{ link: '/api/utils/at-least-one', text: 'AtLeastOne' },
								{ link: '/api/utils/strict-extract', text: 'StrictExtract' },
								{ link: '/api/utils/strict-exclude', text: 'StrictExclude' },
								{ link: '/api/utils/union-to-intersection', text: 'UnionToIntersection' },
								{ link: '/api/utils/union-to-tuple', text: 'UnionToTuple' },
							],
							text: 'Advanced Types',
						},
					],
					'/guide/': [
						{
							items: [
								{ link: '/guide/', text: 'Introduction' },
								{ link: '/guide/installation', text: 'Installation' },
								{ link: '/guide/quick-start', text: 'Quick Start' },
							],
							text: 'Getting Started',
						},
						{
							items: [
								{ link: '/guide/core', text: 'Core Operations' },
								{ link: '/guide/tuple', text: 'Tuple Operations' },
								{ link: '/guide/deep', text: 'Deep Operations' },
								{ link: '/guide/brand', text: 'Brand Types' },
								{ link: '/guide/conditional', text: 'Conditional Types' },
								{ link: '/guide/functions', text: 'Function Types' },
								{ link: '/guide/keys', text: 'Key Utilities' },
								{ link: '/guide/numeric', text: 'Numeric Types' },
								{ link: '/guide/path', text: 'Path Utilities' },
								{ link: '/guide/record', text: 'Record Types' },
								{ link: '/guide/template', text: 'Template Literals' },
								{ link: '/guide/schema', text: 'Schema Validation' },
								{ link: '/guide/ecosystem', text: 'Ecosystem' },
								{ link: '/guide/perf', text: 'Performance' },
								{ link: '/guide/guards', text: 'Type Guards' },
								{ link: '/guide/infer', text: 'Type Inference' },
								{ link: '/guide/utils', text: 'Utility Types' },
							],
							text: 'Categories',
						},
					],
				},
				sidebarMenuLabel: 'Menu',
			},
			title: 'uni-types',
		},
		zh: {
			description: '全面的 TypeScript 类型工具集合',
			label: '简体中文',
			lang: 'zh-CN',
			link: '/zh/',
			themeConfig: {
				darkModeSwitchLabel: '主题',
				darkModeSwitchTitle: '切换到深色模式',
				docFooter: { next: '下一页', prev: '上一页' },
				editLink: {
					pattern: 'https://github.com/saqqdy/uni-types/edit/master/docs/:path',
					text: '在 GitHub 上编辑此页',
				},
				footer: {
					copyright: '版权所有 © 2024-present saqqdy',
					message: '基于 MIT 许可发布',
				},
				langMenuLabel: '语言',
				lastUpdated: {
					formatOptions: { dateStyle: 'medium', timeStyle: 'short' },
					text: '最后更新于',
				},
				lightModeSwitchTitle: '切换到浅色模式',
				nav: [
					{ activeMatch: '/zh/guide/', link: '/zh/guide/', text: '指南' },
					{ activeMatch: '/zh/api/', link: '/zh/api/', text: 'API' },
					{
						items: [
							{ link: 'https://github.com/saqqdy/uni-types', text: 'GitHub' },
							{ link: 'https://www.npmjs.com/package/uni-types', text: 'NPM' },
						],
						text: '链接',
					},
				],
				outline: { label: '页面导航' },
				returnToTopLabel: '回到顶部',
				sidebar: {
					'/zh/api/': [
						{
							items: [{ link: '/zh/api/', text: '概览' }],
							text: 'API 参考',
						},
						{
							collapsed: false,
							items: [
								{ link: '/zh/api/core/pick-required', text: 'PickRequired' },
								{ link: '/zh/api/core/pick-partial', text: 'PickPartial' },
								{ link: '/zh/api/core/omit-required', text: 'OmitRequired' },
								{ link: '/zh/api/core/omit-partial', text: 'OmitPartial' },
							],
							text: '核心操作',
						},
						{
							collapsed: false,
							items: [
								{ link: '/zh/api/core/head', text: 'Head' },
								{ link: '/zh/api/core/last', text: 'Last' },
								{ link: '/zh/api/core/tail', text: 'Tail' },
								{ link: '/zh/api/core/init', text: 'Init' },
								{ link: '/zh/api/core/reverse', text: 'Reverse' },
								{ link: '/zh/api/core/flatten', text: 'Flatten' },
								{ link: '/zh/api/core/tuple-length', text: 'TupleLength' },
								{ link: '/zh/api/core/is-empty-tuple', text: 'IsEmptyTuple' },
							],
							text: '元组操作',
						},
						{
							collapsed: false,
							items: [
								{ link: '/zh/api/deep/deep-partial', text: 'DeepPartial' },
								{ link: '/zh/api/deep/deep-required', text: 'DeepRequired' },
								{ link: '/zh/api/deep/deep-readonly', text: 'DeepReadonly' },
								{ link: '/zh/api/deep/deep-mutable', text: 'DeepMutable' },
								{ link: '/zh/api/deep/deep-omit', text: 'DeepOmit' },
								{ link: '/zh/api/deep/deep-pick', text: 'DeepPick' },
							],
							text: '深度操作',
						},
						{
							collapsed: false,
							items: [
								{ link: '/zh/api/brand/brand', text: 'Brand' },
								{ link: '/zh/api/brand/unbrand', text: 'Unbrand' },
							],
							text: '品牌类型',
						},
						{
							collapsed: false,
							items: [
								{ link: '/zh/api/conditional/if', text: 'If' },
								{ link: '/zh/api/conditional/not', text: 'Not' },
								{ link: '/zh/api/conditional/and', text: 'And' },
								{ link: '/zh/api/conditional/or', text: 'Or' },
							],
							text: '条件类型',
						},
						{
							collapsed: false,
							items: [
								{ link: '/zh/api/functions/parameters', text: 'Parameters' },
								{ link: '/zh/api/functions/return-type', text: 'ReturnType' },
								{ link: '/zh/api/functions/nth-parameter', text: 'NthParameter' },
								{ link: '/zh/api/functions/async-return-type', text: 'AsyncReturnType' },
							],
							text: '函数类型',
						},
						{
							collapsed: false,
							items: [
								{ link: '/zh/api/keys/rename-keys', text: 'RenameKeys' },
								{ link: '/zh/api/keys/prefix-keys', text: 'PrefixKeys' },
								{ link: '/zh/api/keys/suffix-keys', text: 'SuffixKeys' },
								{ link: '/zh/api/keys/keys-by-value-type', text: 'KeysByValueType' },
							],
							text: '键工具',
						},
						{
							collapsed: false,
							items: [
								{ link: '/zh/api/numeric/inc', text: 'Inc' },
								{ link: '/zh/api/numeric/dec', text: 'Dec' },
								{ link: '/zh/api/numeric/add', text: 'Add' },
								{ link: '/zh/api/numeric/subtract', text: 'Subtract' },
								{ link: '/zh/api/numeric/range', text: 'Range' },
							],
							text: '数字类型',
						},
						{
							collapsed: false,
							items: [
								{ link: '/zh/api/path/valid-path', text: 'ValidPath' },
								{ link: '/zh/api/path/array-paths', text: 'ArrayPaths' },
								{ link: '/zh/api/path/leaf-paths', text: 'LeafPaths' },
								{ link: '/zh/api/path/path-length', text: 'PathLength' },
							],
							text: '路径工具',
						},
						{
							collapsed: false,
							items: [
								{ link: '/zh/api/record/deep-nullable', text: 'DeepNullable' },
								{ link: '/zh/api/record/deep-optional', text: 'DeepOptional' },
								{ link: '/zh/api/record/immutable', text: 'Immutable' },
								{ link: '/zh/api/record/mutable', text: 'Mutable' },
							],
							text: '记录类型',
						},
						{
							collapsed: false,
							items: [
								{ link: '/zh/api/template/replace-all', text: 'ReplaceAll' },
								{ link: '/zh/api/template/trim', text: 'Trim' },
								{ link: '/zh/api/template/string-length', text: 'StringLength' },
								{ link: '/zh/api/template/repeat', text: 'Repeat' },
							],
							text: '模板字面量',
						},
						{
							collapsed: false,
							items: [
								{ link: '/zh/api/schema/runtime-guard', text: 'RuntimeGuard' },
								{ link: '/zh/api/schema/guarded-type', text: 'GuardedType' },
								{ link: '/zh/api/schema/zod-output', text: 'ZodOutput' },
							],
							text: 'Schema 验证',
						},
						{
							collapsed: false,
							items: [
								{ link: '/zh/api/ecosystem/component-props', text: 'ComponentProps' },
								{ link: '/zh/api/ecosystem/props-with-children', text: 'PropsWithChildren' },
								{ link: '/zh/api/ecosystem/prisma-create-input', text: 'PrismaCreateInput' },
							],
							text: '生态系统',
						},
						{
							collapsed: false,
							items: [
								{ link: '/zh/api/perf/simplify', text: 'Simplify' },
								{ link: '/zh/api/perf/deep-simplify', text: 'DeepSimplify' },
							],
							text: '性能优化',
						},
						{
							collapsed: false,
							items: [
								{ link: '/zh/api/guards/is-array', text: 'IsArray' },
								{ link: '/zh/api/guards/is-tuple', text: 'IsTuple' },
								{ link: '/zh/api/guards/is-equal', text: 'IsEqual' },
								{ link: '/zh/api/guards/is-any', text: 'IsAny' },
								{ link: '/zh/api/guards/is-never', text: 'IsNever' },
								{ link: '/zh/api/guards/is-unknown', text: 'IsUnknown' },
							],
							text: '类型判断',
						},
						{
							collapsed: false,
							items: [
								{ link: '/zh/api/infer/awaited', text: 'Awaited' },
								{ link: '/zh/api/infer/array-element', text: 'ArrayElement' },
								{ link: '/zh/api/infer/value-of', text: 'ValueOf' },
								{ link: '/zh/api/infer/function-keys', text: 'FunctionKeys' },
								{ link: '/zh/api/infer/non-function-keys', text: 'NonFunctionKeys' },
								{ link: '/zh/api/infer/first-parameter', text: 'FirstParameter' },
								{ link: '/zh/api/infer/function-only', text: 'FunctionOnly' },
								{ link: '/zh/api/infer/data-only', text: 'DataOnly' },
							],
							text: '类型推导',
						},
						{
							collapsed: true,
							items: [
								{ link: '/zh/api/utils/merge', text: 'Merge' },
								{ link: '/zh/api/utils/non-nullable', text: 'NonNullable' },
								{ link: '/zh/api/utils/exclusive', text: 'Exclusive' },
								{ link: '/zh/api/utils/no-nullish', text: 'NoNullish' },
								{ link: '/zh/api/utils/nullable', text: 'Nullable' },
								{ link: '/zh/api/utils/optional', text: 'Optional' },
								{ link: '/zh/api/utils/maybe', text: 'Maybe' },
								{ link: '/zh/api/utils/loose-partial', text: 'LoosePartial' },
							],
							text: '实用类型',
						},
						{
							collapsed: true,
							items: [
								{ link: '/zh/api/utils/at-least-one', text: 'AtLeastOne' },
								{ link: '/zh/api/utils/strict-extract', text: 'StrictExtract' },
								{ link: '/zh/api/utils/strict-exclude', text: 'StrictExclude' },
								{ link: '/zh/api/utils/union-to-intersection', text: 'UnionToIntersection' },
								{ link: '/zh/api/utils/union-to-tuple', text: 'UnionToTuple' },
							],
							text: '高级类型',
						},
					],
					'/zh/guide/': [
						{
							items: [
								{ link: '/zh/guide/', text: '介绍' },
								{ link: '/zh/guide/installation', text: '安装' },
								{ link: '/zh/guide/quick-start', text: '快速上手' },
							],
							text: '开始',
						},
						{
							items: [
								{ link: '/zh/guide/core', text: '核心操作' },
								{ link: '/zh/guide/tuple', text: '元组操作' },
								{ link: '/zh/guide/deep', text: '深度操作' },
								{ link: '/zh/guide/brand', text: '品牌类型' },
								{ link: '/zh/guide/conditional', text: '条件类型' },
								{ link: '/zh/guide/functions', text: '函数类型' },
								{ link: '/zh/guide/keys', text: '键工具' },
								{ link: '/zh/guide/numeric', text: '数字类型' },
								{ link: '/zh/guide/path', text: '路径工具' },
								{ link: '/zh/guide/record', text: '记录类型' },
								{ link: '/zh/guide/template', text: '模板字面量' },
								{ link: '/zh/guide/schema', text: 'Schema 验证' },
								{ link: '/zh/guide/ecosystem', text: '生态系统' },
								{ link: '/zh/guide/perf', text: '性能优化' },
								{ link: '/zh/guide/guards', text: '类型判断' },
								{ link: '/zh/guide/infer', text: '类型推导' },
								{ link: '/zh/guide/utils', text: '实用类型' },
							],
							text: '分类',
						},
					],
				},
				sidebarMenuLabel: '菜单',
			},
			title: 'uni-types',
		},
	},

	themeConfig: {
		logo: '/logo.svg',
		search: {
			provider: 'local',
		},
		siteTitle: 'uni-types',
		socialLinks: [{ icon: 'github', link: 'https://github.com/saqqdy/uni-types' }],
	},

	title: 'uni-types',
})
