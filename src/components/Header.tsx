import { useEffect, useRef, useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { navigation } from "../data";
import { usePresence } from "../hooks/useMotion";
export default function Header() {
  const [open, setOpen] = useState(false);
  const present = usePresence(open);
  const destination = useRef<string | null>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!present) return;
    const toggleButton = toggle.current;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector("a")?.focus();
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
      if (e.key === "Tab") {
        const items = [
          toggleButton,
          ...Array.from(panel.current?.querySelectorAll("a") ?? []),
        ].filter(Boolean) as HTMLElement[];
        const first = items[0],
          last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const resize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("keydown", handle);
    window.addEventListener("resize", resize);
    return () => {
      document.body.style.overflow = old;
      window.removeEventListener("keydown", handle);
      window.removeEventListener("resize", resize);
      const target = destination.current;
      destination.current = null;
      if (target)
        document
          .querySelector<HTMLElement>(target)
          ?.focus({ preventScroll: true });
      else toggleButton?.focus();
    };
  }, [present]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          href="#inicio"
          className="brand"
          aria-label="Cuidado que Acolhe — início"
        >
          <img
            src="/assets/logo.webp"
            alt="Cuidado que Acolhe"
            width="96"
            height="96"
          />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="button button-small header-donate" href="#pix">
          <Heart size={16} /> Quero ajudar
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => {
            destination.current = null;
            setOpen(!open);
          }}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {present && (
        <div
          ref={panel}
          id="mobile-menu"
          className="mobile-menu"
          data-state={open ? "open" : "closing"}
        >
          <nav aria-label="Navegação mobile">
            {navigation.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => {
                  destination.current = href;
                  setOpen(false);
                }}
              >
                {label}
              </a>
            ))}
            <a
              className="button"
              href="#pix"
              onClick={() => {
                destination.current = "#pix";
                setOpen(false);
              }}
            >
              Quero ajudar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
