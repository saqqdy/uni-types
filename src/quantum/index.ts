/**
 * Type-Level Quantum Computing
 *
 * Type-level quantum computing simulation utilities.
 */

// ============================================================================
// Qubit Types
// ============================================================================

/**
 * Qubit state representation
 */
export type QubitState = '|0⟩' | '|1⟩' | '|+⟩' | '|-⟩' | '|i⟩' | '|i-⟩'

/**
 * Qubit amplitude type for superposition states
 */
export interface QubitAmplitude {
	readonly alpha: number
	readonly beta: number
}

/**
 * Single qubit type
 */
export interface Qubit<T extends QubitState = QubitState> {
	state: T
	amplitude?: QubitAmplitude
	measured?: 0 | 1
}

/**
 * Qubit array for multi-qubit systems
 */
export type QubitArray<N extends number, T extends QubitState = QubitState> = N extends 0
	? []
	: N extends 1
		? [Qubit<T>]
		: N extends 2
			? [Qubit<T>, Qubit<T>]
			: N extends 3
				? [Qubit<T>, Qubit<T>, Qubit<T>]
				: N extends 4
					? [Qubit<T>, Qubit<T>, Qubit<T>, Qubit<T>]
					: Qubit<T>[]

// ============================================================================
// Quantum Gates
// ============================================================================

/**
 * Single qubit gate type
 */
export type SingleQubitGate = 'H' | 'X' | 'Y' | 'Z' | 'S' | 'T' | 'I'

/**
 * Two qubit gate type
 */
export type TwoQubitGate = 'CNOT' | 'CZ' | 'SWAP' | 'iSWAP'

/**
 * Three qubit gate type
 */
export type ThreeQubitGate = 'Toffoli' | 'Fredkin'

/**
 * Multi-qubit gate type
 */
export type MultiQubitGate = 'CNOT' | 'Toffoli' | 'Fredkin' | 'MCX' | 'MCZ'

/**
 * Hadamard gate
 */
export interface Hadamard {
	type: 'H'
	target: number
}

/**
 * Pauli-X gate (NOT gate)
 */
export interface PauliX {
	type: 'X'
	target: number
}

/**
 * Pauli-Y gate
 */
export interface PauliY {
	type: 'Y'
	target: number
}

/**
 * Pauli-Z gate
 */
export interface PauliZ {
	type: 'Z'
	target: number
}

/**
 * CNOT gate (Controlled-NOT)
 */
export interface CNOT {
	type: 'CNOT'
	control: number
	target: number
}

/**
 * Toffoli gate (CCNOT)
 */
export interface Toffoli {
	type: 'Toffoli'
	control1: number
	control2: number
	target: number
}

/**
 * Phase gate
 */
export interface PhaseGate {
	type: 'P' | 'S' | 'T'
	target: number
	phase?: number
}

/**
 * Rotation gate
 */
export interface RotationGate {
	type: 'RX' | 'RY' | 'RZ'
	target: number
	angle: number
}

/**
 * All quantum gate types
 */
export type QuantumGate
	= | Hadamard
	| PauliX
	| PauliY
	| PauliZ
	| CNOT
	| Toffoli
	| PhaseGate
	| RotationGate

// ============================================================================
// Quantum Circuit Types
// ============================================================================

/**
 * Circuit gate with position
 */
export interface CircuitGate<G extends QuantumGate = QuantumGate> {
	gate: G
	qubits: number[]
	timeStep: number
}

/**
 * Quantum circuit type
 */
export interface QuantumCircuit<
	N extends number = number,
	G extends QuantumGate = QuantumGate,
> {
	qubits: N
	gates: CircuitGate<G>[]
	depth: number
	name?: string
}

/**
 * Circuit depth type
 */
export type CircuitDepth = number

/**
 * Circuit width type (number of qubits)
 */
export type CircuitWidth = number

// ============================================================================
// Quantum Register
// ============================================================================

/**
 * Quantum register type
 */
export interface QuantumRegister<N extends number = number> {
	qubits: Qubit[]
	size: N
	name?: string
}

/**
 * Classical register for measurement results
 */
export interface ClassicalRegister<N extends number = number> {
	bits: (0 | 1)[]
	size: N
	name?: string
}

/**
 * Measurement result
 */
export type MeasurementResult = 0 | 1

/**
 * Measurement outcome type
 */
export interface MeasurementOutcome<N extends number = number> {
	results: MeasurementResult[]
	probability: number
	qubits: N
}

// ============================================================================
// Quantum State
// ============================================================================

/**
 * Quantum state type
 */
export interface QuantumState {
	vector: number[]
	dimension: number
	normalized: boolean
}

/**
 * State vector representation
 */
export type StateVector<N extends number> = N extends 0
	? []
	: N extends 1
		? [number, number]
		: number[]

/**
 * Density matrix representation
 */
export interface DensityMatrix {
	matrix: number[][]
	dimension: number
	pure: boolean
}

// ============================================================================
// Entanglement Types
// ============================================================================

/**
 * Entangled state type
 */
export type EntangledState = 'bell' | 'ghz' | 'w' | 'cluster'

/**
 * Bell state type
 */
export type BellState
	= | '|Φ+⟩' // (|00⟩ + |11⟩) / √2
	| '|Φ-⟩' // (|00⟩ - |11⟩) / √2
	| '|Ψ+⟩' // (|01⟩ + |10⟩) / √2
	| '|Ψ-⟩' // (|01⟩ - |10⟩) / √2

/**
 * GHZ state (Greenberger–Horne–Zeilinger)
 */
export interface GHZState<N extends number = number> {
	type: 'GHZ'
	qubits: N
	state: N extends 2 ? BellState : string
}

/**
 * Entangled pair
 */
export interface EntangledPair {
	qubit1: Qubit
	qubit2: Qubit
	state: BellState
	correlation: number
}

// ============================================================================
// Quantum Algorithms
// ============================================================================

/**
 * Quantum algorithm type
 */
export interface QuantumAlgorithm<I = unknown, O = unknown> {
	name: string
	input: I
	output: O
	circuit: QuantumCircuit
	iterations?: number
}

/**
 * Grover's search algorithm
 */
export interface Grover<T = unknown> {
	type: 'Grover'
	oracle: (item: T) => boolean
	searchSpace: number
	iterations: number
}

/**
 * Shor's factoring algorithm
 */
export interface Shor {
	type: 'Shor'
	numberToFactor: number
	period: number | null
	factors: [number, number] | null
}

/**
 * Quantum Fourier Transform
 */
export interface QFT<N extends number = number> {
	type: 'QFT'
	qubits: N
	inverse: boolean
}

/**
 * Variational Quantum Eigensolver
 */
export interface VQE {
	type: 'VQE'
	hamiltonian: number[][]
	ansatz: QuantumCircuit
	parameters: number[]
	energy: number
}

/**
 * Quantum Approximate Optimization Algorithm
 */
export interface QAOA {
	type: 'QAOA'
	problemHamiltonian: number[][]
	mixerHamiltonian: number[][]
	depth: number
	parameters: number[]
}

// ============================================================================
// Quantum Operations
// ============================================================================

/**
 * Quantum operation result
 */
export type QuantumResult<T>
	= | { success: true, state: T }
	| { success: false, error: string }

/**
 * Quantum simulation config
 */
export interface QuantumSimulatorConfig {
	noise: boolean
	decoherence: number
	gateErrors: number
	measurementErrors: number
}

/**
 * Quantum teleportation protocol
 */
export interface QuantumTeleportation {
	source: Qubit
	destination: Qubit
	channel: EntangledPair
	classicalBits: [0 | 1, 0 | 1]
}

/**
 * Superdense coding protocol
 */
export interface SuperdenseCoding {
	bitsToSend: [0 | 1, 0 | 1]
	sharedEntanglement: EntangledPair
	message: 0 | 1 | 2 | 3
}

// ============================================================================
// Quantum Error Correction
// ============================================================================

/**
 * Error correction code type
 */
export type QECCode = 'surface' | 'steane' | 'shor' | 'repetition'

/**
 * Surface code configuration
 */
export interface SurfaceCode {
	distance: number
	dataQubits: number
	ancillaQubits: number
	errorRate: number
}

/**
 * Logical qubit with error correction
 */
export interface LogicalQubit<C extends QECCode = QECCode> {
	code: C
	physicalQubits: Qubit[]
	logicalState: QubitState
	errorSyndrome: number[]
}

// ============================================================================
// Quantum Hardware Types
// ============================================================================

/**
 * Quantum hardware backend type
 */
export type QuantumBackend = 'simulator' | 'ibm' | 'google' | 'ionq' | 'rigetti' | 'quantinuum'

/**
 * Qubit connectivity type
 */
export type ConnectivityType = 'linear' | 'grid' | 'full' | 'heavy-hex'

/**
 * Quantum hardware specifications
 */
export interface QuantumHardware {
	backend: QuantumBackend
	qubitCount: number
	connectivity: ConnectivityType
	gates: QuantumGate[]
	t1: number // Relaxation time (μs)
	t2: number // Dephasing time (μs)
	gateTimes: Record<SingleQubitGate | TwoQubitGate, number>
}

/**
 * Quantum job type
 */
export interface QuantumJob<C extends QuantumCircuit = QuantumCircuit> {
	id: string
	circuit: C
	shots: number
	status: 'queued' | 'running' | 'completed' | 'failed'
	result?: JobResult
}

/**
 * Job result type
 */
export interface JobResult {
	counts: Record<string, number>
	statevector?: number[]
	executionTime: number
}

// ============================================================================
// Utility Types
// ============================================================================

/**
 * Bloch sphere coordinates
 */
export interface BlochSphereCoordinates {
	theta: number // Polar angle (0 to π)
	phi: number // Azimuthal angle (0 to 2π)
}

/**
 * Pauli basis
 */
export type PauliBasis = 'X' | 'Y' | 'Z'

/**
 * Expectation value type
 */
export type ExpectationValue = number

/**
 * Fidelity measure
 */
export type Fidelity = number

/**
 * Quantum volume metric
 */
export type QuantumVolume = number

/**
 * Gate fidelity type
 */
export interface GateFidelity<G extends QuantumGate = QuantumGate> {
	gate: G
	fidelity: Fidelity
	errorRate: number
}
