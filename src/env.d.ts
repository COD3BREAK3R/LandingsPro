/// <reference types="astro/client" />

// Declaraciones de módulo para que el Astro language server resuelva
// los alias de tsconfig dentro de los bloques <script> de archivos .astro
declare module "@scripts/mobileMenu" {
    export function initMobileMenu(): void;
}

declare module "@scripts/scrollAnimations" {
    export function initScrollAnimations(): void;
}

declare module "@scripts/utils" {
    export function debounce<T extends (...args: unknown[]) => unknown>(
        fn: T,
        delay: number,
    ): (...args: Parameters<T>) => void;
}
