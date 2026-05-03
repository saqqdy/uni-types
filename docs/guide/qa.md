# Quality Assurance Types

Type definitions for code quality, linting, formatting, and analysis tools.

## ESLint

ESLint configuration types.

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

Prettier configuration types.

```typescript
import type { PrettierConfig, FormatOptions } from 'uni-types'

const config: PrettierConfig = {
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  singleQuote: true
}
```

## Code Analysis

Code analysis result types.

```typescript
import type { CodeAnalysis, CodeMetrics, ComplexityReport } from 'uni-types'

interface AnalysisResult extends CodeAnalysis {
  files: AnalyzedFile[]
  summary: AnalysisSummary
  metrics: CodeMetrics
}
```

## Security

Security audit types.

```typescript
import type { SecurityAudit, Vulnerability, SecurityReport } from 'uni-types'

interface AuditResult extends SecurityAudit {
  vulnerabilities: Vulnerability[]
  summary: SecuritySummary
  recommendations: SecurityRecommendation[]
}
```

## Dependencies

Dependency audit types.

```typescript
import type { DependencyAudit, OutdatedPackage, LicenseCheck } from 'uni-types'

interface DepsResult extends DependencyAudit {
  dependencies: DependencyInfo[]
  outdated: OutdatedPackage[]
  vulnerabilities: Vulnerability[]
}
```

## Performance

Performance audit types.

```typescript
import type { PerformanceAudit, BundleAnalysis, LighthouseScore } from 'uni-types'

interface PerfResult extends PerformanceAudit {
  metrics: PerformanceMetric[]
  opportunities: PerformanceOpportunity[]
  bundleAnalysis: BundleAnalysis
}
```

## Quality Gates

Quality gate types.

```typescript
import type { QualityGate, GateCondition, GateResult } from 'uni-types'

const gate: QualityGate = {
  id: 'main-gate',
  name: 'Main Quality Gate',
  conditions: [
    { metric: 'coverage', operator: 'GREATER_THAN', value: 80 },
    { metric: 'bugs', operator: 'LESS_THAN', value: 5 }
  ]
}
```

## Testing

Testing result types.

```typescript
import type { TestResult, TestCoverage, TestSummary } from 'uni-types'

interface TestOutput extends TestResult {
  testFiles: TestFile[]
  coverage: TestCoverage
  summary: TestSummary
}
```