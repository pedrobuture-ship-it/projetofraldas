import { useEffect } from "react";

const blockSelector = [
  ".section-heading",
  ".center-heading",
  ".story-image",
  ".story-copy",
  ".impact-grid > div",
  ".rotary-row",
  ".donation-copy",
  ".contact-row",
  ".purpose-grid > article",
  ".help-grid > article",
  ".partners-grid > a",
  ".partners-grid > div",
  ".gallery-grid > button",
].join(",");

export default function useScrollReveal() {
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(blockSelector),
    );
    const reveal = (element: HTMLElement) => {
      element.dataset.reveal = "visible";
      observer.unobserve(element);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (isIntersecting) reveal(target as HTMLElement);
        });
      },
      { threshold: 0, rootMargin: "0px 0px -24px 0px" },
    );

    elements.forEach((element) => {
      const box = element.getBoundingClientRect();
      // Conteúdo inicial e destinos de âncora permanecem disponíveis imediatamente.
      if (query.matches || box.top < window.innerHeight) return;
      element.dataset.reveal = "pending";
      const siblings = Array.from(element.parentElement?.children ?? []);
      if (
        element.matches(
          ".partners-grid > *, .purpose-grid > *, .help-grid > *, .gallery-grid > *",
        )
      ) {
        element.style.setProperty(
          "--reveal-delay",
          `${(siblings.indexOf(element) % 3) * 60}ms`,
        );
      }
      observer.observe(element);
    });
    const revealWithin = (target: Element | null) => {
      elements.forEach((element) => {
        if (target && (target.contains(element) || element.contains(target))) {
          reveal(element);
          element.dataset.reveal = "instant";
        }
      });
    };
    const onFocus = (event: FocusEvent) =>
      revealWithin(event.target as Element);
    const onHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (id) revealWithin(document.getElementById(id));
    };
    const onPreference = () => {
      if (query.matches) elements.forEach(reveal);
    };
    document.addEventListener("focusin", onFocus);
    window.addEventListener("hashchange", onHash);
    query.addEventListener("change", onPreference);
    onHash();
    return () => {
      observer.disconnect();
      elements.forEach((element) => {
        delete element.dataset.reveal;
        element.style.removeProperty("--reveal-delay");
      });
      document.removeEventListener("focusin", onFocus);
      window.removeEventListener("hashchange", onHash);
      query.removeEventListener("change", onPreference);
    };
  }, []);
}
