import { ArrowUpRight, MapPin } from "lucide-react";
import { supporters } from "../data";
export default function Supporters() {
  return (
    <section id="quem-ajuda" tabIndex={-1} className="section supporters">
      <div className="container">
        <div className="center-heading">
          <span className="eyebrow">UMA REDE QUE ACOLHE</span>
          <h2>Quem faz acontecer</h2>
          <p>
            Por trás de cada gesto, há pessoas e organizações
            <br className="desktop-break" /> que acreditam no poder de cuidar.
          </p>
        </div>
        <div className="rotary-row">
          <img
            src="/assets/parceiro-13.webp"
            alt="Rotary Club de Ponta Grossa Campos Gerais"
            width="400"
            height="150"
            loading="lazy"
          />
          <p>
            O Rotary integra a rede de mobilização do projeto, junto às empresas
            parceiras, voluntários e comunidade.
          </p>
        </div>
        <h3 className="group-label">PARCEIROS</h3>
        <div className="partners-grid">
          {supporters.map((s) => {
            const href = s.locationUrl ?? s.url;
            const contents = (
              <>
                <img
                  src={`/assets/parceiro-${s.image}.webp`}
                  alt={s.name}
                  width="220"
                  height="110"
                  loading="lazy"
                />
                <span>
                  {s.name}
                  {s.locationUrl ? (
                    <MapPin size={13} aria-hidden="true" />
                  ) : (
                    s.url && <ArrowUpRight size={13} />
                  )}
                </span>
                {s.locationUrl && <span>Ver localização</span>}
              </>
            );
            return href ? (
              <a
                key={s.name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.locationUrl ? "Ver localização de" : "Conhecer"} ${s.name} (abre em nova aba)`}
              >
                {contents}
              </a>
            ) : (
              <div key={s.name}>{contents}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
