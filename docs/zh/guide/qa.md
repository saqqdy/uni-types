# 质量保证类型

用于代码质量、linting、格式化和分析工具的类型定义。

## ESLint

ESLint 配置类型。

```typescript
import type { ESLintConfig, ESLintRule, ESLintPlugin } from 'uni-types'

const config: ESLintConfig = {
  extends: ['eslint:recommended'],
  rules: {
    'no-unused-vars': 'error',
    'semi': ['error', 'always']
  }
}
```

## Prettier

Prettier 配置类型。

```typescript
import type { PrettierConfig, FormatOptions } from 'uni-types'

const config: PrettierConfig = {
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  singleQuote: true
}
```

## 代码分析

代码分析结果类型。

```typescript
import type { CodeAnalysis, CodeMetrics, ComplexityReport } from 'uni-types'

interface AnalysisResult extends CodeAnalysis {
  files: AnalyzedFile[]
  summary: AnalysisSummary
  metrics: CodeMetrics
}
```

## 安全

安全审计类型。

```typescript
import type { SecurityAudit, Vulnerability, SecurityReport } from 'uni-types'

interface AuditResult extends SecurityAudit {
  vulnerabilities: Vulnerability[]
  summary: SecuritySummary
  recommendations: SecurityRecommendation[]
}
```

## 依赖

依赖审计类型。

```typescript
import type { DependencyAudit, OutdatedPackage, LicenseCheck } from 'uni-types'

interface DepsResult extends DependencyAudit {
  dependencies: DependencyInfo[]
  outdated: OutdatedPackage[]
  vulnerabilities: Vulnerability[]
}
```

## 性能

性能审计类型。

```typescript
import type { PerformanceAudit, BundleAnalysis, LighthouseScore } from 'uni-types'

interface PerfResult extends PerformanceAudit {
  metrics: PerformanceMetric[]
  opportunities: PerformanceOpportunity[]
  bundleAnalysis: BundleAnalysis
}
```

## 质量门禁

质量门禁类型。

```typescript
import type { QualityGate, GateCondition, GateResult } from 'uni-types'

const gate: QualityGate = {
  id: 'main-gate',
  name: '主要质量门禁',
  conditions: [
    { metric: 'coverage', operator: 'GREATER_THAN', value: 80 },
    { metric: 'bugs', operator: 'LESS_THAN', value: 5 }
  ]
}
```

## 测试

测试结果类型。

```typescript
import type { TestResult, TestCoverage, TestSummary } from 'uni-types'

interface TestOutput extends TestResult {
  testFiles: TestFile[]
  coverage: TestCoverage
  summary: TestSummary
}
```