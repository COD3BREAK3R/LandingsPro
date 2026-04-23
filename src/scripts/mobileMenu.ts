/**
 * mobileMenu.ts
 * Lógica del menú móvil: toggle, cierre con Escape y cierre al hacer click fuera.
 */

export function initMobileMenu(): void {
    const toggle = document.getElementById(
        "menu-toggle",
    ) as HTMLButtonElement | null;
    const header = document.querySelector(".header") as HTMLElement | null;

    if (!toggle || !header) return;

    let mobileMenu: HTMLElement | null = null;

    function openMenu(): void {
        if (!mobileMenu) {
            mobileMenu = buildMobileMenu();
            header!.after(mobileMenu);
        }
        mobileMenu.hidden = false;
        toggle!.setAttribute("aria-expanded", "true");
        toggle!.setAttribute("aria-label", "Cerrar menú");
        document.addEventListener("keydown", handleEscape);
        document.addEventListener("click", handleOutsideClick);
    }

    function closeMenu(): void {
        if (!mobileMenu) return;
        mobileMenu.hidden = true;
        toggle!.setAttribute("aria-expanded", "false");
        toggle!.setAttribute("aria-label", "Abrir menú");
        document.removeEventListener("keydown", handleEscape);
        document.removeEventListener("click", handleOutsideClick);
    }

    function toggleMenu(): void {
        const isExpanded = toggle!.getAttribute("aria-expanded") === "true";
        isExpanded ? closeMenu() : openMenu();
    }

    function handleEscape(event: KeyboardEvent): void {
        if (event.key === "Escape") closeMenu();
    }

    function handleOutsideClick(event: MouseEvent): void {
        const target = event.target as Node;
        const isInsideHeader = header!.contains(target);
        const isInsideMenu = mobileMenu?.contains(target) ?? false;
        if (!isInsideHeader && !isInsideMenu) closeMenu();
    }

    toggle.addEventListener("click", toggleMenu);
}

function buildMobileMenu(): HTMLElement {
    const nav = document.querySelector(".header__nav");
    const cta = document.querySelector(".header__cta");

    const menu = document.createElement("div");
    menu.id = "mobile-menu";
    menu.setAttribute("role", "dialog");
    menu.setAttribute("aria-label", "Menú de navegación");
    menu.style.cssText = `
    position: fixed;
    inset: 4rem 0 0;
    background: var(--color-bg-surface, #1e293b);
    padding: 1.5rem;
    border-top: 1px solid var(--color-border, #334155);
    z-index: 20;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `;

    if (nav) menu.appendChild(nav.cloneNode(true));
    if (cta) menu.appendChild(cta.cloneNode(true));

    return menu;
}
