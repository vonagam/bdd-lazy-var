interface GetLazyVar {
  (name: string): any;
}

export const get: GetLazyVar;
export function def(name: string, implementation: () => any): void;
export function sharedExamplesFor(summary: string, implementation: () => void): void;
export function itBehavesLike(summary: string, ...vars: any[]): void;
export function includeExamplesFor(summary: string, ...vars: any[]): void;

declare global {
  const get: GetLazyVar;
  function def(name: string, implementation: () => any): void;
  function sharedExamplesFor(summary: string, implementation: () => void): void;
  function itBehavesLike(summary: string, ...vars: any[]): void;
  function includeExamplesFor(summary: string, ...vars: any[]): void;
}