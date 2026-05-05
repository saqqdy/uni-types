/**
 * Performance optimization types
 *
 * This module provides utilities for optimizing type compilation:
 * - Lazy: Defer type evaluation
 * - Cache: Memoize type computations
 * - Optimize: Simplify complex types
 * - Monitor: Performance monitoring & analysis (v1.11.0)
 */

// Type caching
export * from './cache'

// Lazy type evaluation
export * from './lazy'

// Performance monitoring & analysis (v1.11.0)
export * from './monitor'

// Type optimization
export * from './optimize'
