import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import { photos } from "../data";
import { usePresence } from "../hooks/useMotion";
export default function Gallery() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const present = usePresence(open);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const startX = useRef<number | null>(null);
  const move = (delta: number) => {
    if (open) setActive((i) => (i + delta + photos.length) % photos.length);
  };
  useEffect(() => {
    if (!present) return;
    const el = dialog.current!;
    el.showModal();
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      el.close();
      document.body.style.overflow = old;
      trigger.current?.focus();
    };
  }, [present]);
  return (
    <section id="galeria" tabIndex={-1} className="section gallery-section">
      <div className="container">
        <div className="section-heading two-columns">
          <div>
            <span className="eyebrow">NOSSO DIA A DIA</span>
            <h2>Momentos que acolhem</h2>
          </div>
          <p>
            Mãos à obra, pessoas reunidas e cuidado em cada etapa. Conheça os
            registros reais do projeto.
          </p>
        </div>
        <div className="gallery-grid">
          {photos.map((p, i) => (
            <button
              key={p.src}
              className={`gallery-photo gallery-photo-${i}`}
              aria-label={`Ampliar foto ${i + 1}: ${p.alt}`}
              onClick={(e) => {
                trigger.current = e.currentTarget;
                setActive(i);
                setOpen(true);
              }}
            >
              <img
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                loading="lazy"
              />
              <span>
                <Expand size={18} />
              </span>
            </button>
          ))}
        </div>
        <p className="gallery-footnote">
          Cada encontro transforma solidariedade em ação.
          <span>
            Clique nas fotos para ampliar <ArrowUpRightIcon />
          </span>
        </p>
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        data-state={open ? "open" : "closing"}
        aria-label="Galeria de fotos do projeto"
        onCancel={(event) => {
          event.preventDefault();
          setOpen(false);
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") move(1);
          if (e.key === "ArrowLeft") move(-1);
        }}
        onTouchStart={(e) => {
          startX.current = e.changedTouches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (startX.current !== null) {
            const delta = e.changedTouches[0].clientX - startX.current;
            if (Math.abs(delta) > 50) move(delta < 0 ? 1 : -1);
            startX.current = null;
          }
        }}
      >
        {present && (
          <>
            <button
              className="lightbox-close"
              aria-label="Fechar galeria"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
            <button
              className="lightbox-prev"
              aria-label="Foto anterior"
              onClick={() => move(-1)}
            >
              <ArrowLeft />
            </button>
            <figure>
              <img
                key={photos[active].src}
                className="lightbox-image"
                src={photos[active].src}
                alt={photos[active].alt}
                width={photos[active].width}
                height={photos[active].height}
              />
              <figcaption aria-live="polite">
                {active + 1} / {photos.length} · {photos[active].alt}
              </figcaption>
            </figure>
            <button
              className="lightbox-next"
              aria-label="Próxima foto"
              onClick={() => move(1)}
            >
              <ArrowRight />
            </button>
          </>
        )}
      </dialog>
    </section>
  );
}
function ArrowUpRightIcon() {
  return <span aria-hidden="true">↗</span>;
}
