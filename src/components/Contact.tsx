import { ArrowUpRight } from "lucide-react";
import { contactLinks, officialWebsite } from "../data";

export default function Contact() {
  return (
    <section id="contato" className="contact-section">
      <div className="container contact-row">
        <div>
          <span className="eyebrow">VAMOS SOMAR CUIDADO</span>
          <h2>Uma rede se fortalece com pessoas.</h2>
          {contactLinks.length > 0 ? (
            <nav className="contact-links" aria-label="Contato do projeto">
              {contactLinks.map(({ label, href }) => (
                <a
                  key={href}
                  className="text-link"
                  href={href}
                  target={href.startsWith("https:") ? "_blank" : undefined}
                  rel={
                    href.startsWith("https:")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {label} <ArrowUpRight size={17} />
                </a>
              ))}
            </nav>
          ) : (
            <p>Conheça as organizações que fazem parte dessa história.</p>
          )}
        </div>
        {officialWebsite ? (
          <a
            className="text-link"
            href={officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
          >
            Conheça também nosso site oficial <ArrowUpRight size={19} />
          </a>
        ) : (
          <a className="text-link" href="#quem-ajuda">
            Conheça os parceiros <ArrowUpRight size={19} />
          </a>
        )}
      </div>
    </section>
  );
}
