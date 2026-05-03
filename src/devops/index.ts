/**
 * DevOps Types
 *
 * Type definitions for DevOps and infrastructure tools.
 */

// ============== Docker Types ==============

/**
 * Dockerfile configuration
 */
export interface Dockerfile {
	from: string
	arg?: Record<string, string>
	env?: Record<string, string>
	workdir?: string
	copy?: DockerCopyInstruction | DockerCopyInstruction[]
	run?: string | string[]
	cmd?: string | string[]
	expose?: number | number[]
	entrypoint?: string | string[]
	volume?: string | string[]
	user?: string
	label?: Record<string, string>
	healthcheck?: DockerHealthCheck
	stopsignal?: string
	onbuild?: string[]
	maintainer?: string
}

export interface DockerCopyInstruction {
	src: string | string[]
	dest: string
	from?: string
	chown?: string
	chmod?: string
}

export interface DockerHealthCheck {
	cmd: string
	interval?: string
	timeout?: string
	startPeriod?: string
	retries?: number
}

/**
 * Docker image configuration
 */
export interface DockerImage {
	id: string
	repoTags: string[]
	size: number
	virtualSize: number
	created: string
	labels: Record<string, string>
	architecture: string
	os: string
	digest: string
}

/**
 * Docker container configuration
 */
export interface DockerContainer {
	id: string
	name: string
	image: string
	status: DockerContainerStatus
	state: 'running' | 'exited' | 'paused' | 'restarting' | 'dead'
	created: string
	ports: DockerPort[]
	labels: Record<string, string>
	command: string
	entrypoint?: string
	environment: Record<string, string>
	volumes: DockerVolume[]
	networks: string[]
	health?: DockerHealthStatus
}

export type DockerContainerStatus
	= | 'created'
	| 'running'
	| 'paused'
	| 'restarting'
	| 'exited'
	| 'removing'
	| 'dead'

export interface DockerPort {
	privatePort: number
	publicPort?: number
	type: 'tcp' | 'udp'
	ip?: string
}

export interface DockerVolume {
	type: 'bind' | 'volume' | 'tmpfs' | 'npipe'
	source: string
	destination: string
	mode?: string
	rw?: boolean
	propagation?: 'private' | 'shared' | 'slave' | 'rprivate' | 'rshared' | 'rslave'
}

export interface DockerHealthStatus {
	status: 'none' | 'starting' | 'healthy' | 'unhealthy'
	failingStreak?: number
}

/**
 * Docker Compose configuration
 */
export interface DockerCompose {
	version?: string
	services: Record<string, DockerComposeService>
	networks?: Record<string, DockerComposeNetwork>
	volumes?: Record<string, DockerComposeVolume>
	configs?: Record<string, DockerComposeConfig>
	secrets?: Record<string, DockerComposeSecret>
}

export interface DockerComposeLoggingConfig {
	driver?: string
	options?: Record<string, string>
}

export interface DockerComposeService {
	image?: string
	build?: string | DockerComposeBuild
	container_name?: string
	ports?: string[]
	expose?: string[]
	environment?: Record<string, string | number> | string[]
	env_file?: string | string[]
	depends_on?: string[] | Record<string, { condition?: 'service_started' | 'service_healthy' | 'service_completed_successfully' }>
	volumes?: (string | { type: string, source?: string, target: string })[]
	networks?: string[]
	restart?: 'no' | 'always' | 'on-failure' | 'unless-stopped'
	command?: string | string[]
	entrypoint?: string | string[]
	labels?: Record<string, string> | string[]
	healthcheck?: DockerComposeHealthCheck
	deploy?: DockerComposeDeploy
	resources?: DockerComposeResources
	profiles?: string[]
	logging?: DockerComposeLoggingConfig
	user?: string
	working_dir?: string
	hostname?: string
	domainname?: string
	privileged?: boolean
	cap_add?: string[]
	cap_drop?: string[]
	security_opt?: string[]
	read_only?: boolean
	stdin_open?: boolean
	tty?: boolean
}

export interface DockerComposeBuild {
	context: string
	dockerfile?: string
	args?: Record<string, string | number>
	cache_from?: string[]
	labels?: Record<string, string>
	shm_size?: string
	target?: string
	network?: string
}

export interface DockerComposeHealthCheck {
	test: string[] | string
	interval?: string
	timeout?: string
	retries?: number
	start_period?: string
	disable?: boolean
}

export interface DockerComposeDeploy {
	mode?: 'replicated' | 'global'
	replicas?: number
	labels?: string[]
	update_config?: {
		parallelism?: number
		delay?: string
		failure_action?: 'continue' | 'rollback' | 'pause'
		monitor?: string
		max_failure_ratio?: number
		order?: 'stop-first' | 'start-first'
	}
	rollback_config?: {
		parallelism?: number
		delay?: string
		failure_action?: 'continue' | 'pause'
		monitor?: string
		max_failure_ratio?: number
		order?: 'stop-first' | 'start-first'
	}
	resources?: DockerComposeResources
	restart_policy?: {
		condition?: 'none' | 'on-failure' | 'any'
		delay?: string
		max_attempts?: number
		window?: string
	}
	placement?: {
		constraints?: string[]
		preferences?: { spread: string }[]
		max_replicas_per_node?: number
	}
	endpoint_mode?: 'vip' | 'dnsrr'
}

export interface DockerComposeResources {
	limits?: {
		cpus?: string
		memory?: string
	}
	reservations?: {
		cpus?: string
		memory?: string
		generic_resources?: unknown[]
	}
}

export interface DockerComposeNetwork {
	driver?: 'bridge' | 'host' | 'overlay' | 'macvlan' | 'none'
	driver_opts?: Record<string, string>
	ipam?: {
		driver?: 'default' | 'null'
		config?: { subnet?: string, gateway?: string, ip_range?: string }[]
	}
	external?: boolean | { name: string }
	name?: string
	labels?: Record<string, string> | string[]
}

export interface DockerComposeVolume {
	driver?: string
	driver_opts?: Record<string, string>
	external?: boolean | { name: string }
	labels?: Record<string, string> | string[]
	name?: string
}

export interface DockerComposeConfig {
	file: string
	external?: boolean | { name: string }
	name?: string
}

export interface DockerComposeSecret {
	file: string
	external?: boolean | { name: string }
	name?: string
}

// ============== Kubernetes Types ==============

/**
 * Kubernetes Deployment configuration
 */
export interface K8sDeployment {
	apiVersion: 'apps/v1'
	kind: 'Deployment'
	metadata: K8sObjectMeta
	spec: {
		replicas?: number
		selector: { matchLabels: Record<string, string> }
		template: {
			metadata: { labels: Record<string, string> }
			spec: K8sPodSpec
		}
		strategy?: {
			type?: 'Recreate' | 'RollingUpdate'
			rollingUpdate?: {
				maxUnavailable?: number | string
				maxSurge?: number | string
			}
		}
		minReadySeconds?: number
		revisionHistoryLimit?: number
		progressDeadlineSeconds?: number
	}
}

/**
 * Kubernetes Service configuration
 */
export interface K8sService {
	apiVersion: 'v1'
	kind: 'Service'
	metadata: K8sObjectMeta
	spec: {
		type?: 'ClusterIP' | 'NodePort' | 'LoadBalancer' | 'ExternalName'
		selector: Record<string, string>
		ports: K8sServicePort[]
		clusterIP?: string
		clusterIPs?: string[]
		externalIPs?: string[]
		externalName?: string
		externalTrafficPolicy?: 'Cluster' | 'Local'
		healthCheckNodePort?: number
		ipFamilies?: ('IPv4' | 'IPv6')[]
		ipFamilyPolicy?: 'SingleStack' | 'PreferDualStack' | 'RequireDualStack'
		loadBalancerIP?: string
		loadBalancerSourceRanges?: string[]
		publishNotReadyAddresses?: boolean
		sessionAffinity?: 'None' | 'ClientIP'
		sessionAffinityConfig?: { clientIP: { timeoutSeconds?: number } }
		topologyKeys?: string[]
	}
}

export interface K8sServicePort {
	name?: string
	protocol?: 'TCP' | 'UDP' | 'SCTP'
	port: number
	targetPort?: number | string
	nodePort?: number
	appProtocol?: string
}

/**
 * Kubernetes Pod configuration
 */
export interface K8sPod {
	apiVersion: 'v1'
	kind: 'Pod'
	metadata: K8sObjectMeta
	spec: K8sPodSpec
}

export interface K8sPodSpec {
	containers: K8sContainer[]
	initContainers?: K8sContainer[]
	volumes?: K8sVolume[]
	restartPolicy?: 'Always' | 'OnFailure' | 'Never'
	terminationGracePeriodSeconds?: number
	activeDeadlineSeconds?: number
	dnsPolicy?: 'ClusterFirst' | 'Default' | 'ClusterFirstWithHostNet' | 'None'
	nodeSelector?: Record<string, string>
	serviceAccountName?: string
	automountServiceAccountToken?: boolean
	nodeName?: string
	hostNetwork?: boolean
	hostPID?: boolean
	hostIPC?: boolean
	shareProcessNamespace?: boolean
	securityContext?: K8sPodSecurityContext
	imagePullSecrets?: { name: string }[]
	affinity?: K8sAffinity
	tolerations?: K8sToleration[]
	topologySpreadConstraints?: K8sTopologySpreadConstraint[]
	priorityClassName?: string
	priority?: number
	preemptionPolicy?: 'PreemptLowerPriority' | 'Never'
	runtimeClassName?: string
	overhead?: Record<string, string>
	schedulerName?: string
	dnsConfig?: {
		nameservers?: string[]
		searches?: string[]
		options?: { name: string, value?: string }[]
	}
	hostname?: string
	subdomain?: string
	hostnameFQDN?: string
	setHostnameAsFQDN?: boolean
	hostAliases?: { ip: string, hostnames: string[] }[]
}

export interface K8sContainer {
	name: string
	image: string
	imagePullPolicy?: 'Always' | 'Never' | 'IfNotPresent'
	command?: string[]
	args?: string[]
	workingDir?: string
	ports?: K8sContainerPort[]
	env?: K8sEnvVar[]
	envFrom?: (K8sEnvVarSource & { prefix?: string })[]
	resources?: K8sResourceRequirements
	volumeMounts?: K8sVolumeMount[]
	livenessProbe?: K8sProbe
	readinessProbe?: K8sProbe
	startupProbe?: K8sProbe
	lifecycle?: K8sLifecycle
	securityContext?: K8sSecurityContext
	stdin?: boolean
	stdinOnce?: boolean
	tty?: boolean
	terminationMessagePath?: string
	terminationMessagePolicy?: 'File' | 'FallbackToLogsOnError'
	envValueFrom?: Record<string, K8sEnvVarSource>
}

export interface K8sContainerPort {
	name?: string
	containerPort: number
	protocol?: 'TCP' | 'UDP' | 'SCTP'
	hostIP?: string
	hostPort?: number
}

export interface K8sEnvVar {
	name: string
	value?: string
	valueFrom?: K8sEnvVarSource
}

export interface K8sEnvVarSource {
	fieldRef?: { apiVersion?: string, fieldPath: string }
	resourceFieldRef?: { containerName?: string, resource: string, divisor?: string }
	configMapKeyRef?: { name: string, key: string, optional?: boolean }
	secretKeyRef?: { name: string, key: string, optional?: boolean }
}

export interface K8sResourceRequirements {
	limits?: Record<string, string>
	requests?: Record<string, string>
}

export interface K8sVolumeMount {
	name: string
	mountPath: string
	readOnly?: boolean
	subPath?: string
	subPathExpr?: string
	mountPropagation?: 'None' | 'HostToContainer' | 'Bidirectional'
}

export interface K8sVolume {
	name: string
	configMap?: { name: string, items?: { key: string, path: string, mode?: number }[], defaultMode?: number, optional?: boolean }
	secret?: { secretName: string, items?: { key: string, path: string, mode?: number }[], defaultMode?: number, optional?: boolean }
	emptyDir?: { medium?: 'default' | 'Memory' | 'HugePages', sizeLimit?: string }
	persistentVolumeClaim?: { claimName: string, readOnly?: boolean }
	hostPath?: { path: string, type?: 'DirectoryOrCreate' | 'Directory' | 'FileOrCreate' | 'File' | 'Socket' | 'CharDevice' | 'BlockDevice' | '' }
	nfs?: { server: string, path: string, readOnly?: boolean }
	iscsi?: { targetPortal: string, iqns: string, lun: number, fsType?: string, readOnly?: boolean, portals?: string[], chapAuthSession?: boolean, chapAuthDiscovery?: boolean, secretRef?: { name: string } }
	flexVolume?: { driver: string, fsType?: string, secretRef?: { name: string }, readOnly?: boolean, options?: Record<string, string> }
	csi?: { driver: string, fsType?: string, nodePublishSecretRef?: { name: string }, readOnly?: boolean, volumeAttributes?: Record<string, string> }
	projected?: { sources: K8sProjectedVolumeSource[], defaultMode?: number }
	gitRepo?: { repository: string, revision?: string, directory?: string }
	azureDisk?: { diskName: string, diskURI: string, cachingMode?: 'None' | 'ReadOnly' | 'ReadWrite', fsType?: string, kind?: 'Shared' | 'Dedicated', readOnly?: boolean }
	azureFile?: { secretName: string, shareName: string, readOnly?: boolean }
}

export interface K8sProjectedVolumeSource {
	configMap?: { name: string, items?: { key: string, path: string, mode?: number }[], optional?: boolean }
	secret?: { name: string, items?: { key: string, path: string, mode?: number }[], optional?: boolean }
	serviceAccountToken?: { audience?: string, expirationSeconds?: number, path: string }
	downwardAPI?: { items: { path: string, fieldRef: { apiVersion?: string, fieldPath: string } }[] }
}

export interface K8sProbe {
	exec?: { command: string[] }
	httpGet?: { port: number | string, path: string, host?: string, scheme?: 'HTTP' | 'HTTPS', httpHeaders?: { name: string, value: string }[] }
	tcpSocket?: { port: number | string, host?: string }
	initialDelaySeconds?: number
	timeoutSeconds?: number
	periodSeconds?: number
	successThreshold?: number
	failureThreshold?: number
	terminationGracePeriodSeconds?: number
}

export interface K8sLifecycle {
	postStart?: K8sHandler
	preStop?: K8sHandler
}

export interface K8sHandler {
	exec?: { command: string[] }
	httpGet?: { port: number | string, path: string, host?: string, scheme?: 'HTTP' | 'HTTPS', httpHeaders?: { name: string, value: string }[] }
	tcpSocket?: { port: number | string, host?: string }
}

export interface K8sPodSecurityContext {
	runAsUser?: number
	runAsGroup?: number
	runAsNonRoot?: boolean
	fsGroup?: number
	fsGroupChangePolicy?: 'OnRootMismatch' | 'Always'
	supplementalGroups?: number[]
	seLinuxOptions?: { user?: string, role?: string, type?: string, level?: string }
	seccompProfile?: { type: 'Unconfined' | 'RuntimeDefault' | 'Localhost', localhostProfile?: string }
	sysctls?: { name: string, value: string }[]
	windowsOptions?: { gmsaCredentialSpec?: string, gmsaCredentialSpecName?: string, runAsUserName?: string, hostProcess?: boolean }
}

export interface K8sSecurityContext {
	runAsUser?: number
	runAsGroup?: number
	runAsNonRoot?: boolean
	allowPrivilegeEscalation?: boolean
	readOnlyRootFilesystem?: boolean
	privileged?: boolean
	capabilities?: { add?: string[], drop?: string[] }
	seLinuxOptions?: { user?: string, role?: string, type?: string, level?: string }
	seccompProfile?: { type: 'Unconfined' | 'RuntimeDefault' | 'Localhost', localhostProfile?: string }
	windowsOptions?: { gmsaCredentialSpec?: string, gmsaCredentialSpecName?: string, runAsUserName?: string, hostProcess?: boolean }
	procMount?: 'Default' | 'Unmasked'
}

export interface K8sAffinity {
	nodeAffinity?: K8sNodeAffinity
	podAffinity?: K8sPodAffinity
	podAntiAffinity?: K8sPodAffinity
}

export interface K8sNodeAffinity {
	requiredDuringSchedulingIgnoredDuringExecution?: K8sNodeSelector
	preferredDuringSchedulingIgnoredDuringExecution?: { weight: number, preference: K8sNodeSelectorTerm }[]
}

export interface K8sPodAffinity {
	requiredDuringSchedulingIgnoredDuringExecution?: K8sPodAffinityTerm[]
	preferredDuringSchedulingIgnoredDuringExecution?: { weight: number, podAffinityTerm: K8sPodAffinityTerm }[]
}

export interface K8sToleration {
	key: string
	operator?: 'Equal' | 'Exists'
	value?: string
	effect?: 'NoSchedule' | 'PreferNoSchedule' | 'NoExecute'
	tolerationSeconds?: number
}

export interface K8sTopologySpreadConstraint {
	maxSkew: number
	topologyKey: string
	whenUnsatisfiable: 'DoNotSchedule' | 'ScheduleAnyway'
	labelSelector?: { matchLabels?: Record<string, string>, matchExpressions?: { key: string, operator: 'In' | 'NotIn' | 'Exists' | 'DoesNotExist', values?: string[] }[] }
	minDomains?: number
	topologySpreadConstraintRef?: { name: string }
}

export interface K8sNodeSelector {
	nodeSelectorTerms: K8sNodeSelectorTerm[]
}

export interface K8sNodeSelectorTerm {
	matchExpressions?: { key: string, operator: 'In' | 'NotIn' | 'Exists' | 'DoesNotExist' | 'Gt' | 'Lt', values?: string[] }[]
	matchFields?: { key: string, operator: 'In' | 'NotIn' | 'Exists' | 'DoesNotExist' | 'Gt' | 'Lt', values?: string[] }[]
}

export interface K8sPodAffinityTerm {
	labelSelector?: { matchLabels?: Record<string, string>, matchExpressions?: { key: string, operator: 'In' | 'NotIn' | 'Exists' | 'DoesNotExist', values?: string[] }[] }
	namespaces?: string[]
	topologyKey: string
	namespaceSelector?: { matchLabels?: Record<string, string>, matchExpressions?: { key: string, operator: 'In' | 'NotIn' | 'Exists' | 'DoesNotExist', values?: string[] }[] }
}

export interface K8sObjectMeta {
	name: string
	namespace?: string
	labels?: Record<string, string>
	annotations?: Record<string, string>
	uid?: string
	resourceVersion?: string
	generation?: number
	creationTimestamp?: string
	deletionTimestamp?: string
	deletionGracePeriodSeconds?: number
	ownerReferences?: { apiVersion: string, kind: string, name: string, uid: string, controller?: boolean, blockOwnerDeletion?: boolean }[]
	finalizers?: string[]
	clusterName?: string
	managedFields?: unknown[]
}

/**
 * Kubernetes ConfigMap configuration
 */
export interface K8sConfigMap {
	apiVersion: 'v1'
	kind: 'ConfigMap'
	metadata: K8sObjectMeta
	data?: Record<string, string>
	binaryData?: Record<string, string>
	immutable?: boolean
}

/**
 * Kubernetes Secret configuration
 */
export interface K8sSecret {
	apiVersion: 'v1'
	kind: 'Secret'
	metadata: K8sObjectMeta
	type?: string
	data?: Record<string, string>
	stringData?: Record<string, string>
	immutable?: boolean
}

/**
 * Kubernetes Ingress configuration
 */
export interface K8sIngress {
	apiVersion: 'networking.k8s.io/v1'
	kind: 'Ingress'
	metadata: K8sObjectMeta
	spec: {
		ingressClassName?: string
		defaultBackend?: { service: { name: string, port: K8sServicePort } }
		tls?: { hosts?: string[], secretName: string }[]
		rules: {
			host?: string
			http: {
				paths: {
					path: string
					pathType: 'Exact' | 'Prefix' | 'ImplementationSpecific'
					backend: {
						service: { name: string, port: K8sServicePort }
						resource?: { apiGroup: string, kind: string, name: string }
					}
				}[]
			}
		}[]
	}
}

// ============== Terraform Types ==============

/**
 * Terraform resource configuration
 */
export interface TerraformResource<T = Record<string, unknown>> {
	type: string
	name: string
	properties: T
	depends_on?: string[]
	count?: number | string
	for_each?: Record<string, unknown>
	provider?: string
	lifecycle?: {
		create_before_destroy?: boolean
		prevent_destroy?: boolean
		ignore_changes?: string[]
		replace_triggered_by?: string[]
	}
	provisioner?: TerraformProvisioner[]
	connection?: TerraformConnection
}

export interface TerraformProvisioner {
	type: 'local-exec' | 'remote-exec' | 'chef' | 'file' | 'habitat' | 'puppet' | 'salt-masterless'
	when?: 'create' | 'destroy'
	on_failure?: 'continue' | 'fail'
	command?: string | { interpreter: string[], script: string, scripts?: string[] }
	inline?: string[]
	inline_command?: string[]
	insecure_connection?: boolean | string
	use_sudo?: boolean
	execute_command?: string[]
}

export interface TerraformConnection {
	type?: 'ssh' | 'winrm'
	host?: string
	port?: number
	user?: string
	password?: string
	private_key?: string
	agent?: boolean
	agent_identity?: string
	host_key?: string
	timeout?: string
	script_path?: string
	https?: boolean
	insecure?: boolean
	use_ntlm?: boolean
	cacert_path?: string
}

/**
 * Terraform module configuration
 */
export interface TerraformModule<T = Record<string, unknown>> {
	source: string
	version?: string
	properties?: T
	providers?: Record<string, string>
	depends_on?: string[]
	for_each?: Record<string, unknown>
	count?: number | string
}

/**
 * Terraform provider configuration
 */
export interface TerraformProvider<T = Record<string, unknown>> {
	source?: string
	version?: string | { source: string, version: string }
	properties?: T
	alias?: string
}

/**
 * Terraform variable configuration
 */
export interface TerraformVariable<T = unknown> {
	type?: string
	description?: string
	default?: T
	sensitive?: boolean
	nullable?: boolean
	validation?: {
		condition: boolean | string
		error_message: string
	}[]
}

/**
 * Terraform output configuration
 */
export interface TerraformOutput {
	value: unknown
	description?: string
	sensitive?: boolean
	depends_on?: string[]
	precondition?: {
		condition: boolean | string
		error_message: string
	}[]
}

/**
 * Terraform configuration file
 */
export interface TerraformConfig {
	terraform?: {
		required_version?: string
		required_providers?: Record<string, { source?: string, version?: string, configuration_aliases?: unknown }>
		backend?: {
			type: 'local' | 'remote' | 's3' | 'azurerm' | 'gcs' | 'consul' | 'pg' | 'http' | 'artifactory'
			config?: Record<string, unknown>
		}
		cloud?: {
			organization: string
			workspaces: { name: string } | { prefix: string }
		}
	}
	provider?: TerraformProvider[] | Record<string, TerraformProvider>
	resource?: Record<string, Record<string, TerraformResource>>
	data?: Record<string, Record<string, TerraformResource>>
	module?: Record<string, TerraformModule>
	variable?: Record<string, TerraformVariable>
	output?: Record<string, TerraformOutput>
	locals?: Record<string, unknown>
}

// ============== Ansible Types ==============

/**
 * Ansible playbook configuration
 */
export interface AnsiblePlaybook {
	name: string
	hosts: string | string[]
	gather_facts?: boolean
	become?: boolean
	become_user?: string
	become_method?: 'sudo' | 'su' | 'pbrun' | 'pfexec' | 'doas' | 'dzdo' | 'ksu' | 'runas'
	become_flags?: string
	remote_user?: string
	serial?: number | string | number[]
	max_fail_percentage?: number
	tags?: string | string[]
	vars?: Record<string, unknown>
	vars_files?: string[]
	vars_prompt?: {
		name: string
		prompt: string
		private?: boolean
		default?: string
		confirm?: boolean
		encrypt?: string
		salt?: string
		salt_size?: number
	}[]
	pre_tasks?: AnsibleTask[]
	tasks?: AnsibleTask[]
	post_tasks?: AnsibleTask[]
	roles?: (string | AnsibleRole)[]
	handlers?: AnsibleHandler[]
	strategy?: 'linear' | 'free' | 'host_pinned'
	order?: 'inventory' | 'sorted' | 'reverse_sorted' | 'reverse_inventory'
	forks?: number
	connection?: 'smart' | 'paramiko' | 'ssh' | 'local' | 'winrm'
	environment?: Record<string, string>
	check_mode?: boolean
	diff?: boolean
}

/**
 * Ansible task configuration
 */
export interface AnsibleTask {
	name?: string
	action?: string | Record<string, unknown>
	module?: string
	args?: Record<string, unknown>
	when?: string | string[]
	loop?: string | unknown[]
	loop_control?: {
		index_var?: string
		label?: string
		pause?: number | string
		extended?: boolean
		extended_allitems?: boolean
	}
	with_items?: unknown[]
	with_dict?: unknown
	with_fileglob?: string
	with_filetree?: string
	with_first_found?: { files: string[], paths?: string[], skip?: boolean }
	with_indexed_items?: unknown[]
	with_lines?: string
	with_random_choice?: unknown[]
	with_sequence?: { start?: number, end?: number, stride?: number, count?: number, format?: string }
	with_subelements?: { list: unknown[], subelement: string }
	with_together?: unknown[][]
	with_nested?: unknown[][]
	notify?: string | string[]
	register?: string
	failed_when?: string | string[]
	changed_when?: string | string[]
	ignore_errors?: boolean
	retries?: number
	delay?: number
	until?: string
	tags?: string | string[]
	delegate_to?: string
	local_action?: string | Record<string, unknown>
	run_once?: boolean
	become?: boolean
	become_user?: string
	become_method?: string
	no_log?: boolean
	block?: AnsibleTask[]
	rescue?: AnsibleTask[]
	always?: AnsibleTask[]
}

/**
 * Ansible role configuration
 */
export interface AnsibleRole {
	name: string
	role?: string
	vars?: Record<string, unknown>
	defaults?: Record<string, unknown>
	tasks?: AnsibleTask[]
	handlers?: AnsibleHandler[]
	templates?: string[]
	files?: string[]
	meta?: {
		dependencies?: (string | AnsibleRole)[]
		galaxy_info?: {
			author?: string
			description?: string
			license?: string
			min_ansible_version?: string
			platforms?: { name: string, versions?: string[] }[]
			galaxy_tags?: string[]
		}
	}
	when?: string | string[]
}

/**
 * Ansible handler configuration
 */
export interface AnsibleHandler extends AnsibleTask {
	listen?: string
}

/**
 * Ansible inventory configuration
 */
export interface AnsibleInventory {
	all?: {
		hosts?: Record<string, { ansible_host?: string, ansible_user?: string, ansible_port?: number, [key: string]: unknown }>
		vars?: Record<string, unknown>
		children?: Record<string, { hosts?: Record<string, unknown>, vars?: Record<string, unknown>, children?: Record<string, unknown> }>
	}
	ungrouped?: {
		hosts?: Record<string, unknown>
		vars?: Record<string, unknown>
	}
}

// ============== CI/CD Types ==============

/**
 * GitHub Actions workflow configuration
 */
export interface GitHubWorkflow {
	name?: string
	on?: string | string[] | {
		push?: { branches?: string[], branches_ignore?: string[], paths?: string[], paths_ignore?: string[], tags?: string[], tags_ignore?: string[] }
		pull_request?: { branches?: string[], branches_ignore?: string[], paths?: string[], paths_ignore?: string[], types?: string[] }
		schedule?: { cron: string }[]
		workflow_dispatch?: { inputs?: Record<string, { description?: string, required?: boolean, default?: string, type?: 'string' | 'choice' | 'boolean' | 'environment', options?: string[] }> }
		repository_dispatch?: { types?: string[] }
		workflow_call?: {
			inputs?: Record<string, { description?: string, required?: boolean, default?: string, type: 'string' | 'choice' | 'boolean' | 'environment' | 'number', options?: string[] }>
			outputs?: Record<string, { description?: string, value: string }>
			secrets?: Record<string, { description?: string, required?: boolean }>
		}
		workflow_run?: { workflows?: string[], types?: string[], branches?: string[] }
		release?: { types?: string[] }
		page_build?: unknown
	}
	env?: Record<string, string | number>
	defaults?: { run?: { shell?: string, working_directory?: string } }
	concurrency?: { group?: string, cancel_in_progress?: boolean }
	jobs: Record<string, GitHubJob>
}

export interface GitHubJob {
	name?: string
	needs?: string | string[]
	if?: string
	runs_on: string | string[]
	timeout_minutes?: number
	strategy?: {
		matrix?: Record<string, unknown[]> | { include: Record<string, unknown>[], exclude: Record<string, unknown>[] }
		fail_fast?: boolean
		max_parallel?: number
	}
	container?: string | { image: string, credentials?: { username?: string, password?: string }, env?: Record<string, string>, ports?: number[], volumes?: string[], options?: string }
	services?: Record<string, { image: string, credentials?: { username?: string, password?: string }, env?: Record<string, string>, ports?: number[], volumes?: string[], options?: string }>
	env?: Record<string, string | number>
	steps: GitHubStep[]
	outputs?: Record<string, string>
	permissions?: Record<string, 'read' | 'write' | 'none'> | string
	environment?: string | { name: string, url?: string }
	continue_on_error?: boolean
}

export interface GitHubStep {
	id?: string
	name?: string
	if?: string
	run?: string
	shell?: 'bash' | 'pwsh' | 'python' | 'sh' | 'cmd' | 'powershell'
	working_directory?: string
	uses?: string
	with?: Record<string, string | number | boolean | string[]>
	env?: Record<string, string | number>
	continue_on_error?: boolean
	timeout_minutes?: number
}

/**
 * GitLab CI pipeline configuration
 */
export interface GitLabPipeline {
	image?: string | { name: string, entrypoint?: string | string[] }
	stages?: string[]
	default?: {
		image?: string | { name: string, entrypoint?: string | string[] }
		services?: (string | GitLabService)[]
		before_script?: string[]
		after_script?: string[]
		cache?: GitLabCache
		interruptible?: boolean
		timeout?: string
		artifacts?: GitLabArtifacts
	}
	variables?: Record<string, string | { value: string, description?: string }>
	workflow?: { rules?: { if?: string, variables?: Record<string, string> }[] }
	include?: (string | { local?: string, remote?: string, template?: string, project?: string, ref?: string, file: string })[]
	[job: string]: GitLabJob | unknown
}

export interface GitLabJob {
	image?: string | { name: string, entrypoint?: string | string[], docker?: { platform?: string } }
	services?: (string | GitLabService)[]
	script: string[]
	stage?: string
	rules?: { if?: string, changes?: string[], exists?: string[], variables?: Record<string, string>, when?: string, allow_failure?: boolean }[]
	needs?: (string | { job: string, artifacts?: boolean, optional?: boolean })[]
	dependencies?: string[]
	extends?: string | string[]
	variables?: Record<string, string>
	environment?: string | { name: string, url?: string, on_stop?: string, action?: 'start' | 'stop' | 'access' | 'prepare' }
	cache?: GitLabCache
	artifacts?: GitLabArtifacts
	only?: string | string[] | { refs?: string[], variables?: string[], changes?: string[], kubernetes?: string }
	except?: string | string[] | { refs?: string[], variables?: string[], changes?: string[], kubernetes?: string }
	ref?: string
	tags?: string[]
	allow_failure?: boolean | { exit_codes: number | number[] }
	when?: 'on_success' | 'on_failure' | 'always' | 'manual' | 'delayed' | 'never'
	delay?: number
	start_in?: string
	retry?: number | { max: number, when: string | string[] }
	timeout?: string
	parallel?: number | { matrix: Record<string, unknown[]>[] }
	interruptible?: boolean
	resource_group?: string
	trigger?: string | { project?: string, branch?: string, strategy?: string }
	coverage?: string
	release?: { tag_name: string, name?: string, description: string, ref?: string, milestones?: string[], released_at?: string }
	inherit?: { variables?: boolean | string[], default?: boolean | string[] }
	identity_trust?: string
	secrets?: Record<string, { vault: { engine: { name: string, path: string }, path: string, field: string } }>
	id_tokens?: Record<string, { aud: string | string[] }>
	before_script?: string[]
	after_script?: string[]
}

export interface GitLabService {
	name: string
	entrypoint?: string | string[]
	command?: string[]
	variables?: Record<string, string>
	alias?: string
	ports?: number[]
	credentials?: { username: string, password: string }
}

export interface GitLabCache {
	key?: string | { files: string[], prefix?: string }
	paths: string[]
	policy?: 'pull' | 'push' | 'pull-push' | 'push-pull'
	when?: 'on_success' | 'on_failure' | 'always'
	fallback_keys?: string[]
	unprotect?: boolean
	untracked?: boolean
}

export interface GitLabArtifacts {
	paths?: string[]
	exclude?: string[]
	expire_in?: string
	name?: string
	when?: 'on_success' | 'on_failure' | 'always'
	expose_as?: string
	reports?: {
		junit?: string
		cobertura?: string
		codequality?: string
		sast?: string
		secret_detection?: string
		dependency_scanning?: string
		container_scanning?: string
		dast?: string
		license_management?: string
		performance?: string
		load_performance?: string
		lsif?: string
		terraform?: string
		dotenv?: string
		coverage_report?: { coverage_format: string, path: string }
	}
}

/**
 * Jenkins pipeline configuration
 */
export interface JenkinsPipeline {
	agent: 'any' | 'none' | { label?: string, docker?: string | { image: string, args?: string }, dockerfile?: { filename?: string, dir?: string, label?: string, additionalBuildArgs?: string, args?: string }, kubernetes?: unknown }
	environment?: Record<string, string | { credentials: string }>
	options?: {
		buildDiscarder?: { logRotator: { numToKeepStr?: string, daysToKeepStr?: string, artifactDaysToKeepStr?: string, artifactNumToKeepStr?: string } }
		checkoutToSubdirectory?: string
		disableConcurrentBuilds?: boolean | { abortPrevious: boolean }
		disableResume?: boolean
		newContainerPerStage?: boolean
		overrideIndexTriggers?: { ignoreMacroTriggers: boolean, ignoreRemoteTriggers: boolean }
		preserveStashes?: boolean | { buildCount: number }
		quietPeriod?: number
		retry?: number
		skipDefaultCheckout?: boolean
		skipStagesAfterUnstable?: boolean
		timeout?: { time: number, unit?: 'NANOSECONDS' | 'MICROSECONDS' | 'MILLISECONDS' | 'SECONDS' | 'MINUTES' | 'HOURS' | 'DAYS' }
		timestamps?: boolean
		parallelsAlwaysFailInFast?: boolean
	}
	parameters?: { name: string, type: 'string' | 'text' | 'boolean' | 'choice' | 'password' | 'password' | 'boolean', defaultValue?: unknown, description?: string, choices?: string[] }[]
	triggers?: { cron?: string, pollSCM?: string, github?: unknown }
	stages: JenkinsStage[]
	post?: { always?: JenkinsStep[], success?: JenkinsStep[], failure?: JenkinsStep[], unstable?: JenkinsStep[], changed?: JenkinsStep[], aborted?: JenkinsStep[], cleanup?: JenkinsStep[] }
}

export interface JenkinsStage {
	stage: string
	agent?: 'any' | 'none' | { label?: string, docker?: string | { image: string, args?: string } }
	when?: { branch?: string, environment?: { name: string, value: string }, expression?: string, not?: unknown, allOf?: unknown[], anyOf?: unknown[], beforeAgent?: boolean, beforeInput?: boolean, beforeOptions?: boolean }
	environment?: Record<string, string | { credentials: string }>
	steps?: JenkinsStep[]
	parallel?: JenkinsStage[]
	matrix?: { axes: { name: string, values: string[] }[], excludes?: { axis: { name: string, values: string[] }[] }[], agent?: unknown, when?: unknown }
	stages?: JenkinsStage[]
	input?: { message: string, id?: string, ok?: string, submitter?: string, submitterParameter?: string, parameters?: unknown[] }
	options?: unknown
	post?: unknown
}

export interface JenkinsStep {
	script?: string
	sh?: string | { script: string, returnStdout?: boolean, returnStatus?: boolean, encoding?: string }
	bat?: string | { script: string, returnStdout?: boolean, returnStatus?: boolean, encoding?: string }
	pwsh?: string | { script: string, returnStdout?: boolean, returnStatus?: boolean, encoding?: string }
	echo?: string
	dir?: string
	withCredentials?: { usernamePassword: { credentialsId: string, usernameVariable: string, passwordVariable: string }[], string: { credentialsId: string, variable: string }[] }
	withEnv?: Record<string, string>
	error?: string
	retry?: number
	sleep?: number | { time: number, unit: 'NANOSECONDS' | 'MICROSECONDS' | 'MILLISECONDS' | 'SECONDS' | 'MINUTES' | 'HOURS' | 'DAYS' }
	timeout?: { time: number, unit?: string }
	waitUntil?: JenkinsStep[]
	writeFile?: { file: string, text: string, encoding?: string }
	readFile?: string | { file: string, encoding?: string }
	fileExists?: string
	archiveArtifacts?: string | { artifacts: string, allowEmptyArchive?: boolean, fingerprint?: boolean, onlyIfSuccessful?: boolean, defaultExcludes?: boolean }
	junit?: string | { testResults: string, allowEmptyResults?: boolean, keepLongStdio?: boolean, healthScaleFactor?: number }
	publishHTML?: { reportDir: string, reportFiles: string, reportName?: string, keepAll?: boolean, allowMissing?: boolean, alwaysLinkToLastBuild?: boolean }
	emailext?: unknown
	slack?: unknown
	milestone?: number
	build?: { job: string, parameters?: Record<string, string>, propagate?: boolean, wait?: boolean }
}

/**
 * CircleCI configuration
 */
export interface CircleCIConfig {
	version: string | number
	setup?: boolean
	parameters?: Record<string, { type: 'string' | 'boolean' | 'integer' | 'enum', default?: unknown, description?: string, enum?: string[] }>
	orbs?: Record<string, { commands?: Record<string, unknown>, executors?: Record<string, unknown>, jobs?: Record<string, unknown> } | string>
	executors?: Record<string, { docker?: { image: string, command?: string, environment?: Record<string, string> }[], resource_class?: string }>
	commands?: Record<string, { description?: string, parameters?: Record<string, unknown>, steps: unknown[] }>
	jobs?: Record<string, CircleCIJob>
	workflows?: Record<string, {
		triggers?: { schedule: { cron: string, filters: { branches: { only?: string[], ignore?: string[] } } } }[]
		when?: string
		unless?: string
		jobs: (string | { [job: string]: { filters?: { branches: { only?: string[], ignore?: string[] }, tags: { only?: string[], ignore?: string[] } }, requires?: string[], context?: string | string[], type?: 'approval' } })[]
	}>
}

export interface CircleCIJob {
	docker?: { image: string, command?: string, environment?: Record<string, string> }[]
	machine?: { image: string, docker_layer_caching?: boolean }
	macos?: { xcode: string }
	windows?: { image: string, shell: 'bash.exe' | 'powershell.exe' }
	environment?: Record<string, string>
	shell?: '/bin/sh' | '/bin/bash' | '/usr/bin/env bash' | '/usr/bin/env sh'
	parameters?: Record<string, unknown>
	steps: CircleCIStep[]
	working_directory?: string
	resource_class?: string
	docker_layer_caching?: boolean
}

export interface CircleCIStep {
	run?: string | { name?: string, command: string, shell?: string, when?: 'always' | 'on_success' | 'on_fail', environment?: Record<string, string>, working_directory?: string, background?: boolean, no_output_timeout?: string }
	when?: 'always' | 'on_success' | 'on_fail'
	checkout?: { path?: string }
	persist_to_workspace?: { root: string, paths: string[] }
	attach_workspace?: { at: string }
	restore_cache?: { keys: string[] }
	save_cache?: { key: string, paths: string[] }
	store_artifacts?: { path: string, destination?: string }
	store_test_results?: { path: string }
	deploy?: string | { command: string }
}

// ============== Cloud Types ==============

/**
 * AWS resource configuration
 */
export interface AWSResource<T = Record<string, unknown>> {
	Type: string
	Properties: T
	DependsOn?: string | string[]
	Metadata?: Record<string, unknown>
	DeletionPolicy?: 'Delete' | 'Retain' | 'Snapshot'
	UpdateReplacePolicy?: 'Delete' | 'Retain' | 'Snapshot'
	UpdatePolicy?: unknown
	CreationPolicy?: unknown
}

/**
 * Azure resource configuration
 */
export interface AzureResource<T = Record<string, unknown>> {
	type: string
	apiVersion: string
	name: string
	location?: string
	properties?: T
	tags?: Record<string, string>
	dependsOn?: string[]
	sku?: { name: string, tier?: string, capacity?: number }
	zones?: string[]
	resources?: AzureResource[]
}

/**
 * GCP resource configuration
 */
export interface GCPResource<T = Record<string, unknown>> {
	type: string
	name: string
	properties: T
	metadata?: {
		dependsOn?: string[]
		dependsOnExpr?: string[]
		createTimeout?: string
		updateTimeout?: string
		deleteTimeout?: string
		annotations?: Record<string, string>
		labels?: Record<string, string>
	}
}

/**
 * CloudFormation template configuration
 */
export interface CloudFormation {
	AWSTemplateFormatVersion?: string
	Transform?: string | string[]
	Description?: string
	Parameters?: Record<string, {
		Type: 'String' | 'Number' | 'List<Number>' | 'CommaDelimitedList' | 'AWS::EC2::KeyPair::KeyName' | 'AWS::EC2::SecurityGroup::Id' | 'AWS::EC2::VPC::Id' | 'AWS::EC2::Subnet::Id' | 'AWS::EC2::Image::Id' | 'AWS::Route53::HostedZone::Id' | 'AWS::SSM::Parameter::Name' | 'AWS::SSM::Parameter::Value<String>' | 'AWS::SSM::Parameter::Value<List<String>>' | 'List<AWS::EC2::SecurityGroup::Id>' | 'List<AWS::EC2::Subnet::Id>' | 'List<AWS::EC2::VPC::Id>'
		Default?: unknown
		Description?: string
		AllowedValues?: unknown[]
		AllowedPattern?: string
		MaxLength?: number
		MinLength?: number
		MaxValue?: number
		MinValue?: number
		NoEcho?: boolean
		ConstraintDescription?: string
	}>
	Mappings?: Record<string, Record<string, Record<string, unknown>>>
	Conditions?: Record<string, unknown>
	Resources: Record<string, AWSResource>
	Outputs?: Record<string, { Value: unknown, Description?: string, Export?: { Name: string } }>
	Metadata?: Record<string, unknown>
}

// ============== Helm Types ==============

/**
 * Helm chart configuration
 */
export interface HelmChart {
	apiVersion: 'v2'
	name: string
	version: string
	description?: string
	type?: 'application' | 'library'
	appVersion?: string
	icon?: string
	home?: string
	sources?: string[]
	maintainers?: { name: string, email?: string, url?: string }[]
	keywords?: string[]
	annotations?: Record<string, string>
	deprecated?: boolean
	dependencies?: {
		name: string
		version: string
		repository: string
		condition?: string
		tags?: string[]
		enabled?: boolean
		importValues?: unknown[]
		alias?: string
	}[]
}

/**
 * Helm release configuration
 */
export interface HelmRelease {
	name: string
	namespace?: string
	chart: string
	version?: string
	values?: HelmValues
	set?: Record<string, string>
	set_string?: Record<string, string>
	set_file?: Record<string, string>
	wait?: boolean
	timeout?: string
	atomic?: boolean
	cleanup_on_fail?: boolean
	create_namespace?: boolean
	dry_run?: boolean
	force?: boolean
	recreate_pods?: boolean
	replace?: boolean
	skip_crds?: boolean
	skip_tests?: boolean
	tiller_namespace?: string
	verify?: boolean
}

export type HelmValues = Record<string, unknown>

/**
 * Helm values configuration
 */
export interface HelmValuesFile {
	image?: { repository: string, tag?: string, pullPolicy?: 'Always' | 'Never' | 'IfNotPresent' }
	replicaCount?: number
	imagePullSecrets?: { name: string }[]
	nameOverride?: string
	fullnameOverride?: string
	serviceAccount?: { create?: boolean, annotations?: Record<string, string>, name?: string }
	podAnnotations?: Record<string, string>
	podSecurityContext?: K8sPodSecurityContext
	securityContext?: K8sSecurityContext
	service?: { type: 'ClusterIP' | 'NodePort' | 'LoadBalancer', port: number }
	ingress?: { enabled?: boolean, className?: string, annotations?: Record<string, string>, hosts?: { host?: string, paths: { path: string, pathType: string }[] }[], tls?: { secretName: string, hosts?: string[] }[] }
	resources?: K8sResourceRequirements
	autoscaling?: { enabled?: boolean, minReplicas?: number, maxReplicas?: number, targetCPUUtilizationPercentage?: number, targetMemoryUtilizationPercentage?: number }
	nodeSelector?: Record<string, string>
	tolerations?: K8sToleration[]
	affinity?: K8sAffinity
	[key: string]: unknown
}
