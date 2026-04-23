/**
 * utils.ts
 * Funciones utilitarias generales del proyecto.
 */

/**
 * Devuelve true si el código está ejecutándose en el cliente (browser).
 */
export const isBrowser = (): boolean => typeof window !== "undefined";

/**
 * Aplica un debounce a una función.
 */
export function debounce<T extends (...args: unknown[]) => void>(
    fn: T,
    delay: number,
): (...args: Parameters<T>) => void {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

/**
 * Genera un slug a partir de un string.
 */
export function toSlug(text: string): string {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
}

/**
 * Formatea un número como moneda.
 */
export function formatCurrency(
    amount: number,
    currency = "USD",
    locale = "es-MX",
): string {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
    }).format(amount);
}
