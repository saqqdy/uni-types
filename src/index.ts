
export type PickRequired<T, K extends keyof T> = {
	[P in K]-?: T[P]
} & Omit<T, K>

export type OmitRequired<T, K extends keyof T> = {
	[P in K]: T[P]
} & Omit<Required<T>, K>

export type PickPartial<T, K extends keyof T> = {
	[P in K]?: T[P]
} & Omit<T, K>

export type OmitPartial<T, K extends keyof T> = {
	[P in K]: T[P]
} & Omit<Partial<T>, K>
