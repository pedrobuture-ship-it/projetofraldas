import { useEffect, useRef, useState } from "react";
import {
  Check,
  Copy,
  Heart,
  HandHeart,
  Package,
  Users,
  ArrowDown,
} from "lucide-react";
import { project } from "../data";
export default function Donation() {
  const [feedback, setFeedback] = useState("");
  const [copied, setCopied] = useState<"key" | "payload" | null>(null);
  const [manualCopy, setManualCopy] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copy(value: string, kind: "key" | "payload") {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(kind);
      setManualCopy("");
      setFeedback(kind === "key" ? "Chave copiada ✓" : "Código PIX copiado ✓");
    } catch {
      setCopied(null);
      setManualCopy(value);
      setFeedback("Não foi possível copiar. Selecione e copie o texto abaixo.");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setFeedback("");
      setCopied(null);
    }, 4000);
  }
  return (
    <>
      <section id="como-ajudar" tabIndex={-1} className="section help-section">
        <div className="container">
          <div className="center-heading">
            <span className="eyebrow">SEU GESTO FAZ PARTE</span>
            <h2>Há muitas formas de acolher.</h2>
            <p>
              Doe recursos, materiais ou tempo.
              <br />
              Cada contribuição ajuda a transformar cuidado em ação.
            </p>
          </div>
          <div className="help-grid">
            {[
              {
                Icon: Package,
                title: "Some com a sua empresa",
                text: "A doação de matéria-prima e as parcerias com empresas integram a sustentabilidade do projeto.",
                action: {
                  href: project.volunteerContact.url,
                  label: `WhatsApp: ${project.volunteerContact.label}`,
                  external: true,
                },
              },
              {
                Icon: HandHeart,
                title: "Contribua com uma doação",
                text: "Apoios financeiros pontuais ou recorrentes ajudam a viabilizar a produção solidária.",
                action: {
                  href: "#pix",
                  label: "Contribua pelo PIX",
                  external: false,
                },
              },
              {
                Icon: Users,
                title: "Doe seu tempo",
                text: "O trabalho voluntário reúne a comunidade, rotarianos e funcionários de empresas parceiras.",
                action: {
                  href: project.volunteerContact.url,
                  label: `WhatsApp: ${project.volunteerContact.label}`,
                  external: true,
                },
              },
            ].map(({ Icon, title, text, action }) => (
              <article key={title}>
                <Icon size={30} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{text}</p>
                <a
                  className="text-link help-contact"
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                  aria-label={
                    action.external
                      ? `${title}: ${action.label} (abre em nova aba)`
                      : undefined
                  }
                >
                  {action.label}
                  {!action.external && (
                    <ArrowDown size={17} aria-hidden="true" />
                  )}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="pix" tabIndex={-1} className="donation-section">
        <div className="container donation-grid">
          <div className="donation-copy">
            <span className="eyebrow">
              UM GESTO SEU. MAIS CUIDADO PARA TODOS.
            </span>
            <h2>
              Ajude o<br />
              Cuidado que Acolhe<span>.</span>
            </h2>
            <p>
              Sua contribuição apoia a produção solidária de fraldas para
              crianças e idosos e o reaproveitamento de materiais para tapetes
              pet.
            </p>
            <div className="donation-note">
              <Heart size={24} />
              <span>
                Solidariedade que se transforma
                <br />
                em dignidade, respeito e cuidado.
              </span>
            </div>
          </div>
          <div className="pix-card">
            <span className="pix-label">FAÇA UMA DOAÇÃO PELO PIX</span>
            <img
              className="qr-code"
              src="/assets/pix-email.png"
              alt={`QR Code PIX para ${project.pixKey}, do projeto ${project.name}`}
              width="625"
              height="625"
              loading="lazy"
            />
            <p>
              Abra o aplicativo do seu banco e<br />
              escaneie o QR Code para contribuir.
            </p>
            {project.pixKey && (
              <>
                <label htmlFor="pix-key">Chave PIX</label>
                <input
                  id="pix-key"
                  readOnly
                  value={project.pixKey}
                  onFocus={(e) => e.target.select()}
                />
                <button
                  className="button"
                  onClick={() => copy(project.pixKey, "key")}
                >
                  <span
                    key={copied === "key" ? "copied" : "copy"}
                    className="copy-icon"
                    aria-hidden="true"
                  >
                    {copied === "key" ? (
                      <Check size={17} />
                    ) : (
                      <Copy size={17} />
                    )}
                  </span>
                  {copied === "key" ? "Chave copiada ✓" : "Copiar chave PIX"}
                </button>
              </>
            )}
            {project.pixPayload && (
              <button
                className="button button-outline"
                onClick={() => copy(project.pixPayload, "payload")}
              >
                <span
                  key={copied === "payload" ? "copied" : "copy"}
                  className="copy-icon"
                  aria-hidden="true"
                >
                  {copied === "payload" ? (
                    <Check size={17} />
                  ) : (
                    <Copy size={17} />
                  )}
                </span>
                {copied === "payload"
                  ? "Código PIX copiado ✓"
                  : "Copiar PIX Copia e Cola"}
              </button>
            )}
            <span className="copy-feedback" role="status" aria-live="polite">
              {feedback && (
                <span key={feedback} className="copy-message">
                  <Check size={15} />
                  {feedback}
                </span>
              )}
            </span>
            {manualCopy && (
              <textarea
                className="manual-copy"
                aria-label="PIX para cópia manual"
                readOnly
                value={manualCopy}
                onFocus={(e) => e.target.select()}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
