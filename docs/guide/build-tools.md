# Build Tools Types

Type definitions for build tools and bundlers.

## Webpack

Webpack configuration types.

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

Vite configuration types.

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

Rollup configuration types.

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

esbuild configuration types.

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

Babel configuration types.

```typescript
import type { BabelConfig, BabelPreset, BabelPlugin } from 'uni-types'

const config: BabelConfig = {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  plugins: ['@babel/plugin-transform-runtime']
}
```

## SWC

SWC configuration types.

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

Parcel configuration types.

```typescript
import type { ParcelConfig, ParcelTransformer } from 'uni-types'

const config: ParcelConfig = {
  transformers: {
    '*.ts': ['@parcel/transformer-typescript']
  }
}
```

## Turbopack

Turbopack configuration types.

```typescript
import type { TurbopackConfig } from 'uni-types'

const config: TurbopackConfig = {
  entry: 'src/index.ts',
  output: {
    path: 'dist'
  }
}
```