# Cuidado que Acolhe

Site institucional em React, TypeScript, Vite, Tailwind CSS e Lucide React.

## Executar

Requer Node.js 20.19+ ou 22.12+.

```sh
npm install
npm run dev
```

Verificações: `npm run lint`, `npm run typecheck`, `npm run build`.
Para revisar a versão de produção: `npm run preview`.

## Conteúdo

Os dados editáveis estão centralizados em `src/data.ts`, e os arquivos prontos para o site ficam em `public/assets/`.

Não há domínio de publicação definido. Ao publicar, configurar canonical, URLs absolutas de Open Graph/Twitter e sitemap com o domínio real. Não é necessário serviço externo ou variável de ambiente para executar o site.

Os números no bloco de planejamento são estimativas, não resultados. Métricas de impacto realizado só devem ser adicionadas quando documentadas.

Consulte `CONTEUDO-E-AUDITORIA.md` para as fontes, pendências e verificações.

## Animações

Os tempos e a curva de movimento estão nas variáveis `--motion-*` de `src/styles.css`. `useScrollReveal` usa um único IntersectionObserver para entradas discretas, uma vez por bloco. `usePresence` mantém menu e lightbox montados durante o fechamento. O sistema acompanha `prefers-reduced-motion`; a foto principal e o QR Code permanecem estáveis.

O PIX atual usa a chave de e-mail autorizada pelo responsável. Para regenerar a imagem a partir do payload de `src/data.ts`, execute `node scripts/generate-pix.mjs`. O script confere a correspondência da chave e o CRC antes de gerar a imagem.

