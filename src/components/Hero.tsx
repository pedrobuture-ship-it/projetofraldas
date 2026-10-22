import { ArrowDown, ArrowUpRight, Heart } from "lucide-react";
import { heroPhoto } from "../data";
export default function Hero() {
  return (
    <section id="inicio" tabIndex={-1} className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="little-line" /> CUIDADO QUE ACOLHE
          </span>
          <h1>
            Mais que fraldas.
            <br />
            Cuidar é um gesto
            <br />
            que <span>transforma vidas.</span>
          </h1>
          <p>
            Unimos trabalho voluntário, dignidade e sustentabilidade para levar
            cuidado a crianças, idosos e animais.
          </p>
          <div className="hero-actions">
            <a href="#projeto" className="button">
              Conheça o projeto <ArrowUpRight size={18} />
            </a>
            <a href="#pix" className="text-link hero-donate">
              <Heart size={18} /> Quero ajudar
            </a>
          </div>
          <div className="hero-note">
            <span className="note-icon">
              <Heart size={19} />
            </span>
            <span>
              Tempo, trabalho e solidariedade.
              <br />
              <strong>É assim que o cuidado acontece.</strong>
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="photo-frame">
            <img
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              width={heroPhoto.width}
              height={heroPhoto.height}
              fetchPriority="high"
            />
            <span className="photo-label">
              <span aria-hidden="true" /> MÃOS QUE FAZEM A DIFERENÇA
            </span>
          </div>
          <div className="photo-caption">
            <Heart size={21} aria-hidden="true" />
            <span>
              Cuidado feito por pessoas.
              <br />
              <strong>Para transformar outras vidas.</strong>
            </span>
          </div>
        </div>
      </div>
      <div className="container hero-bottom">
        <span>Um projeto que transforma cuidado em ação.</span>
        <a href="#projeto" aria-label="Explorar o projeto">
          <ArrowDown size={17} />
        </a>
        <span>VOLUNTARIADO · DIGNIDADE · SUSTENTABILIDADE</span>
      </div>
    </section>
  );
}
