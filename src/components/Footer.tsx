import { Heart } from "lucide-react";
import { navigation } from "../data";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-top">
            <a href="#inicio" className="footer-brand">
              <img
                src="/assets/logo.webp"
                alt="Cuidado que Acolhe"
                width="120"
                height="120"
              />
              <span>
                Mais que fraldas.
                <br />
                Cuidar é um gesto
                <br />
                que transforma vidas.
              </span>
            </a>
            <p>
              Trabalho voluntário, dignidade humana
              <br />e sustentabilidade. Uma rede de cuidado
              <br />
              que começa em cada um de nós.
            </p>
            <nav aria-label="Navegação do rodapé">
              {navigation.slice(1).map(([label, href]) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Cuidado que Acolhe.</span>
            <span>
              Feito de pessoas. Movido pelo cuidado. <Heart size={14} />
            </span>
            <a href="#inicio">Voltar ao início ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
