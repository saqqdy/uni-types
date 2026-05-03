# 构建工具类型

用于构建工具和打包器的类型定义。

## Webpack

Webpack 配置类型。

```typescript
import type { WebpackConfig, WebpackPlugin, WebpackLoader } from 'uni-types'

const config: WebpackConfig = {
  entry: './src/index.ts',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: []
}
```

## Vite

Vite 配置类型。

```typescript
import type { ViteConfig, VitePlugin, ViteBuild } from 'uni-types'

const config: ViteConfig = {
  plugins: [],
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  server: {
    port: 3000
  }
}
```

## Rollup

Rollup 配置类型。

```typescript
import type { RollupConfig, RollupOutput, RollupPlugin } from 'uni-types'

const config: RollupConfig = {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'esm'
  },
  plugins: []
}
```

## esbuild

esbuild 配置类型。

```typescript
import type { ESBuildOptions, ESBuildPlugin } from 'uni-types'

const options: ESBuildOptions = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/bundle.js',
  format: 'esm',
  minify: true
}
```

## Babel

Babel 配置类型。

```typescript
import type { BabelConfig, BabelPreset, BabelPlugin } from 'uni-types'

const config: BabelConfig = {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  plugins: ['@babel/plugin-transform-runtime']
}
```

## SWC

SWC 配置类型。

```typescript
import type { SWCConfig, SWCParser, SWCTransform } from 'uni-types'

const config: SWCConfig = {
  jsc: {
    parser: {
      syntax: 'typescript'
    },
    transform: {}
  }
}
```

## Parcel

Parcel 配置类型。

```typescript
import type { ParcelConfig, ParcelTransformer } from 'uni-types'

const config: ParcelConfig = {
  transformers: {
    '*.ts': ['@parcel/transformer-typescript']
  }
}
```

## Turbopack

Turbopack 配置类型。

```typescript
import type { TurbopackConfig } from 'uni-types'

const config: TurbopackConfig = {
  entry: 'src/index.ts',
  output: {
    path: 'dist'
  }
}
```