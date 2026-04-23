/**
 * scrollAnimations.ts
 * Anima elementos cuando entran en el viewport usando IntersectionObserver.
 * Uso: añadir data-animate al elemento HTML que se quiera animar.
 */

export function initScrollAnimations(): void {
    if (!("IntersectionObserver" in window)) return;

    const elements = document.querySelectorAll<HTMLElement>("[data-animate]");
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    elements.forEach((el) => observer.observe(el));
}
