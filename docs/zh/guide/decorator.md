# 类型装饰器

TypeScript 装饰器模式的类型工具。

## 概述

`decorator` 模块提供了完整的装饰器模式类型工具，包括装饰器上下文、元数据管理和常用装饰器模式。

## 装饰器类型

### 基本装饰器

```ts
import type { Decorator, ClassDecorator, MethodDecorator, PropertyDecorator } from 'uni-types'

// 泛型装饰器
type MyDecorator = Decorator<MyClass>

// 类装饰器
type MyClassDecorator = ClassDecorator<typeof MyClass>

// 方法装饰器
type MyMethodDecorator = MethodDecorator<(arg: string) => number>

// 属性装饰器
type MyPropertyDecorator = PropertyDecorator<string>
```

### 装饰器上下文

TypeScript 5.0+ 装饰器上下文：

```ts
import type {
  ClassDecoratorContext,
  ClassMethodDecoratorContext,
  ClassFieldDecoratorContext,
} from 'uni-types'
```

## 元数据类型

### 元数据管理

```ts
import type { MetadataKey, MetadataValue, MetadataMap } from 'uni-types'

const key: MetadataKey = 'myMetadata'
const value: MetadataValue<string> = 'metadata value'
```

## 常用装饰器

### Frozen / Sealed

```ts
import type { Frozen, Sealed } from 'uni-types'

type FrozenObj = Frozen<{ a: number }> // { readonly a: number }
```

### Required / Optional

```ts
import type { Required, Optional } from 'uni-types'

type Req = Required<{ a?: number }> // { a: number }
type Opt = Optional<{ a: number }> // { a?: number }
```

## API 参考

| 类型 | 描述 |
|------|------|
| `Decorator<T>` | 泛型装饰器类型 |
| `ClassDecorator<T>` | 类装饰器类型 |
| `MethodDecorator<T>` | 方法装饰器类型 |
| `ClassDecoratorContext` | 类装饰器上下文 |
| `MetadataKey` | 元数据键类型 |
| `Frozen<T>` |冻结类型 |
| `Required<T>` | 必需属性 |
| `Optional<T>` | 可选属性 |
| `CacheOptions` | 缓存装饰器选项 |
| `RetryOptions` | 重试装饰器选项 |