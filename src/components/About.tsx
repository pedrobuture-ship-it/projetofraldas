import { Baby, HeartHandshake, PawPrint, ArrowUpRight } from "lucide-react";
import { impactMetrics, photos } from "../data";
export default function About() {
  return (
    <>
      <section id="projeto" tabIndex={-1} className="section">
        <div className="container">
          <div className="section-heading two-columns">
            <div>
              <span className="eyebrow">O QUE NOS MOVE</span>
              <h2>
                O cuidado ganha forma.
                <br />E chega a quem precisa.
              </h2>
            </div>
            <p>
              O Cuidado que Acolhe produz e distribui fraldas infantis e
              geriátricas de forma solidária. As sobras de materiais são
              reaproveitadas na confecção de tapetes pet, unindo dignidade
              humana e responsabilidade ambiental.
            </p>
          </div>
          <div className="purpose-grid">
            {[
              {
                Icon: Baby,
                title: "Dignidade em cada fase",
                text: "Fraldas para crianças e idosos em situação de vulnerabilidade, com atenção ao conforto e à higiene.",
              },
              {
                Icon: HeartHandshake,
                title: "Solidariedade na prática",
                text: "Rotarianos, funcionários de empresas parceiras e pessoas da comunidade transformam tempo em cuidado.",
              },
              {
                Icon: PawPrint,
                title: "O que sobra também acolhe",
                text: "O reaproveitamento dos materiais na produção de tapetes pet reduz o desperdício e amplia o cuidado com os animais.",
              },
            ].map(({ Icon, title, text }) => (
              <article key={title}>
                <span className="purpose-icon">
                  <Icon size={27} strokeWidth={1.5} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="story">
            <div className="story-image">
              <img
                src={photos[4].src}
                alt={photos[4].alt}
                width="1600"
                height="1200"
                loading="lazy"
              />
              <span>O cuidado começa aqui, no trabalho de cada um.</span>
            </div>
            <div className="story-copy">
              <span className="eyebrow">COMO TUDO COMEÇOU</span>
              <h2>
                Uma rede de pessoas.
                <br />
                Um mesmo propósito.
              </h2>
              <p>
                O projeto nasce para transformar cuidado em ação, reunindo o
                Rotary, empresas, voluntários e a comunidade em uma rede de
                solidariedade.
              </p>
              <p>
                Com máquinas já existentes e produção em lotes, conforme a
                disponibilidade dos voluntários, cada etapa é pensada com
                atenção: da preparação dos materiais à higienização, embalagem e
                distribuição.
              </p>
              <p>
                O documento do projeto prevê a continuidade do atendimento às
                famílias cadastradas no Projeto Magnólias e a ampliação do
                cuidado a outros públicos.
              </p>
              <a className="text-link" href="#quem-ajuda">
                Conheça quem faz parte <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="impacto" className="impact-section">
        <div className="container impact-grid">
          <div>
            <span className="eyebrow">CUIDADO COM RESPONSABILIDADE</span>
            <h2>
              Nosso impacto
              <br />
              começa no compromisso.
            </h2>
            <p>
              Produção solidária, participação da comunidade e reaproveitamento
              de materiais são os pilares do projeto.
            </p>
          </div>
          <div className="planning">
            <span className="planning-label">
              PLANEJAMENTO INICIAL DO PROJETO
            </span>
            <div className="planning-values">
              <div>
                <strong>R$ 4 mil</strong>
                <span>
                  necessidade mensal
                  <br />
                  estimada de recursos
                </span>
              </div>
            </div>
            <p>
              Estimativa do documento institucional. Não representa valor
              arrecadado.
            </p>
          </div>
          {impactMetrics.length > 0 && (
            <div className="metrics">
              {impactMetrics.map((m) => (
                <div key={m.label}>
                  <strong>{m.value}</strong>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
