export const project = {
  name: "Cuidado que Acolhe",
  slogan: "Mais que fraldas. Cuidar é um gesto que transforma vidas.",
  pixKey: "rotaryclubpgcamposgerais@gmail.com",
  volunteerContact: {
    label: "+55 42 98811-0359",
    url: "https://wa.me/5542988110359",
  },
  pixPayload:
    "00020126560014br.gov.bcb.pix0134rotaryclubpgcamposgerais@gmail.com5204000053039865802BR5918CUIDADO QUE ACOLHE6006Cidade62070503***63048580",
};
export const navigation = [
  ["Início", "#inicio"],
  ["O Projeto", "#projeto"],
  ["Quem Ajuda", "#quem-ajuda"],
  ["Galeria", "#galeria"],
  ["Como Ajudar", "#como-ajudar"],
] as const;
export const heroPhoto = {
  src: "/assets/hero-producao.webp",
  width: 890,
  height: 703,
  alt: "Mãos organizando fraldas sobre uma mesa para embalagem.",
};
export const photos = [
  {
    src: "/assets/foto-1.webp",
    width: 1600,
    height: 1200,
    alt: "Voluntários com equipamentos de proteção junto à máquina de produção de fraldas.",
  },
  {
    src: "/assets/foto-2.webp",
    width: 1600,
    height: 1200,
    alt: "Voluntários reunidos à mesa com materiais para a confecção de fraldas.",
  },
  {
    src: "/assets/foto-3.webp",
    width: 1600,
    height: 1200,
    alt: "Equipe de voluntários na área de produção do projeto.",
  },
  {
    src: "/assets/foto-4.webp",
    width: 1200,
    height: 1600,
    alt: "Trabalho voluntário na máquina de produção de fraldas.",
  },
  {
    src: "/assets/foto-5.webp",
    width: 1600,
    height: 1200,
    alt: "Três voluntários trabalhando no corte de materiais.",
  },
];
export const supporters: {
  name: string;
  image: number;
  url?: string;
  locationUrl?: string;
}[] = [
  { name: "Sicredi", image: 3, url: "https://www.sicredi.com.br" },
  {
    name: "Casa Coelho",
    image: 5,
    url: "https://www.instagram.com/casacoelhopg/",
  },
  { name: "Gerassol", image: 6, url: "https://gerassol.ind.br/" },
  { name: "PRS Sistemas", image: 7, url: "https://prs.net.br" },
  { name: "Pellissari", image: 8, url: "https://www.pellissari.com.br/" },
  { name: "Future RH", image: 9, url: "https://futurerh.com/" },
  {
    name: "Mercado Sky",
    image: 10,
    locationUrl: "https://maps.app.goo.gl/hKQ7o42SLEtpWNiT9",
  },
  { name: "PG Multipack", image: 11, url: "https://pgmultipack.com/" },
  { name: "Arte e Talento", image: 12, url: "https://linktr.ee/arteetalento_" },
];
// Somente resultados documentados devem ser adicionados aqui; estimativas ficam separadas.
export const impactMetrics: { value: string; label: string }[] = [];

// Preencher apenas com canais públicos confirmados pelo responsável.
export const contactLinks: { label: string; href: string }[] = [];
export const officialWebsite: string | null = null;
