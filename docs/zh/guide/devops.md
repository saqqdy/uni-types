# DevOps 类型

用于 DevOps 和基础设施工具的类型定义。

## Docker

Docker 和 Docker Compose 类型。

```typescript
import type { Dockerfile, DockerCompose, DockerComposeService } from 'uni-types'

const compose: DockerCompose = {
  services: {
    web: {
      image: 'nginx:latest',
      ports: ['80:80']
    },
    db: {
      image: 'postgres:15',
      environment: {
        POSTGRES_PASSWORD: 'secret'
      }
    }
  }
}
```

## Kubernetes

Kubernetes 资源类型。

```typescript
import type { K8sDeployment, K8sService, K8sConfigMap, K8sSecret } from 'uni-types'

const deployment: K8sDeployment = {
  apiVersion: 'apps/v1',
  kind: 'Deployment',
  metadata: {
    name: 'my-app'
  },
  spec: {
    replicas: 3,
    selector: {
      matchLabels: { app: 'my-app' }
    },
    template: {
      metadata: { labels: { app: 'my-app' } },
      spec: {
        containers: [{
          name: 'app',
          image: 'my-app:latest'
        }]
      }
    }
  }
}
```

## Terraform

Terraform 配置类型。

```typescript
import type { TerraformConfig, TerraformResource, TerraformVariable } from 'uni-types'

const config: TerraformConfig = {
  resource: {
    aws_instance: {
      web: {
        ami: 'ami-12345',
        instance_type: 't2.micro'
      }
    }
  }
}
```

## Ansible

Ansible playbook 类型。

```typescript
import type { AnsiblePlaybook, AnsibleTask, AnsibleRole } from 'uni-types'

const playbook: AnsiblePlaybook = {
  name: '部署应用',
  hosts: 'all',
  tasks: [
    {
      name: '安装依赖',
      apt: { name: 'nginx', state: 'present' }
    }
  ]
}
```

## GitHub Actions

GitHub Actions workflow 类型。

```typescript
import type { GitHubWorkflow, GitHubJob, GitHubStep } from 'uni-types'

const workflow: GitHubWorkflow = {
  name: 'CI',
  on: { push: { branches: ['main'] } },
  jobs: {
    build: {
      'runs-on': 'ubuntu-latest',
      steps: [
        { uses: 'actions/checkout@v4' },
        { run: 'npm install' },
        { run: 'npm test' }
      ]
    }
  }
}
```

## GitLab CI

GitLab CI pipeline 类型。

```typescript
import type { GitLabPipeline, GitLabJob } from 'uni-types'

const pipeline: GitLabPipeline = {
  stages: ['build', 'test', 'deploy'],
  build: {
    stage: 'build',
    script: ['npm run build']
  }
}
```

## 云平台

AWS、Azure、GCP 资源类型。

```typescript
import type { AWSResource, AzureResource, GCPResource, CloudFormation } from 'uni-types'

const s3Bucket: AWSResource = {
  Type: 'AWS::S3::Bucket',
  Properties: {
    BucketName: 'my-bucket'
  }
}
```

## Helm

Helm chart 类型。

```typescript
import type { HelmChart, HelmRelease, HelmValues } from 'uni-types'

const chart: HelmChart = {
  apiVersion: 'v2',
  name: 'my-chart',
  version: '1.0.0'
}
```