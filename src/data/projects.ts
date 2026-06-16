import interior from "@/assets/project-interior.jpg";
import waterproofing from "@/assets/project-waterproofing.jpg";
import painting from "@/assets/project-painting.jpg";
import tiling from "@/assets/project-tiling.jpg";
import roof from "@/assets/project-roof.jpg";
import floor from "@/assets/project-floor.jpg";
import plaster from "@/assets/project-plaster.jpg";
import facade from "@/assets/hero-facade.jpg";

export type ProjectCategory =
  | "Impermeabilização"
  | "Pintura"
  | "Remodelação"
  | "Isolamento"
  | "Reboco"
  | "Revestimento";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  duration: string;
  area: string;
  cover: string;
  challenge: string;
  solution: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "fachada-mem-martins",
    title: "Reabilitação de fachada — Prédio em Mem Martins",
    category: "Pintura",
    location: "Mem Martins",
    year: 2024,
    duration: "4 semanas",
    area: "640 m²",
    cover: facade,
    challenge:
      "Fachada degradada com fissuras ativas, manchas de humidade e tinta a empolar em vários pisos do alçado norte.",
    solution:
      "Montagem de andaime, picagem das zonas comprometidas, selagem de fissuras com mástique elástico, aplicação de primário consolidante e duas demãos de tinta texturada Cin Novatex.",
    outcome:
      "Fachada uniforme, sem fissuras visíveis e com proteção UV garantida por 7 anos. Condomínio reduziu queixas de humidade em 100%.",
  },
  {
    slug: "wc-master-cascais",
    title: "WC suite contemporâneo — Moradia em Cascais",
    category: "Remodelação",
    location: "Cascais",
    year: 2024,
    duration: "3 semanas",
    area: "12 m²",
    cover: tiling,
    challenge:
      "Substituir WC dos anos 90 por uma suite contemporânea sem perder espaço útil, mantendo a tubagem existente.",
    solution:
      "Demolição seletiva, redesenho do layout com banheira oval, vanity suspensa, porcelânico cinza grande formato e ventilação forçada nova.",
    outcome:
      "Espaço perceptivamente maior, com iluminação natural valorizada por skylight e tubagem oculta em pladur hidrófugo.",
  },
  {
    slug: "telhado-vivenda-sintra",
    title: "Isolamento de cumeeira e chaminé — Vivenda em Sintra",
    category: "Impermeabilização",
    location: "Sintra",
    year: 2023,
    duration: "5 dias",
    area: "230 m²",
    cover: roof,
    challenge:
      "Infiltrações recorrentes na sala em dias de chuva intensa, com origem na cumeeira e remate de chaminé.",
    solution:
      "Levantamento de telhas afetadas, aplicação de tela de alumínio Imperalum em toda a cumeeira e contorno de chaminé, repintura de telhas com tinta aborrachada cor original.",
    outcome:
      "Zero infiltrações há 18 meses, mesmo durante tempestades. Garantia de 10 anos na solução.",
  },
  {
    slug: "terraco-oeiras",
    title: "Impermeabilização de terraço — Apartamento em Oeiras",
    category: "Impermeabilização",
    location: "Oeiras",
    year: 2024,
    duration: "8 dias",
    area: "85 m²",
    cover: waterproofing,
    challenge:
      "Terraço comum a duas frações com infiltração para o piso inferior. Solução tinha de ser rápida e transitável.",
    solution:
      "Lavagem com hidropressão, aplicação de primário, dupla camada de tela autoprotegida com solape de 15cm e remate em sancas com banda reforçada.",
    outcome:
      "Terraço pisável, esteticamente limpo e impermeabilizado com garantia de 10 anos.",
  },
  {
    slug: "soalho-lisboa",
    title: "Afagamento de soalho — Apartamento pombalino",
    category: "Revestimento",
    location: "Lisboa, Príncipe Real",
    year: 2023,
    duration: "6 dias",
    area: "95 m²",
    cover: floor,
    challenge:
      "Soalho original em pinho de Riga, com mais de 100 anos, marcado por anos de uso e demãos sucessivas de verniz.",
    solution:
      "Três passagens de lixagem progressiva, betumagem das juntas com pó da própria madeira, três demãos de óleo Osmo natural.",
    outcome:
      "Soalho recuperado mantendo a pátina histórica, com acabamento mate sedoso e proteção contra desgaste.",
  },
  {
    slug: "sala-mem-martins",
    title: "Remodelação integral — T2 em Mem Martins",
    category: "Remodelação",
    location: "Mem Martins",
    year: 2025,
    duration: "9 semanas",
    area: "78 m²",
    cover: interior,
    challenge:
      "Apartamento devoluto há 12 anos, com instalações elétricas e hidráulicas obsoletas, divisões pequenas e teto baixo.",
    solution:
      "Demolição de parede entre sala e cozinha, instalações novas de raiz, teto falso com iluminação linear, parquet de carvalho em espinha e cozinha lacada à medida.",
    outcome:
      "Casa entregue chave-na-mão em 9 semanas, valorizada em ~38% face ao preço de compra.",
  },
  {
    slug: "predio-pintura-sintra",
    title: "Pintura de prédio — Condomínio em Sintra",
    category: "Pintura",
    location: "Sintra",
    year: 2023,
    duration: "5 semanas",
    area: "1.180 m²",
    cover: painting,
    challenge:
      "Pintura exterior do prédio com 18 anos, com diversos pisos desfasados em tonalidade após reparações pontuais.",
    solution:
      "Lavagem da fachada, regularização de tons, primário e dois acabamentos com tinta texturada uniforme.",
    outcome:
      "Fachada com aspecto unificado, valorização visível do imóvel e proteção renovada por 7 anos.",
  },
  {
    slug: "reboco-vivenda",
    title: "Reparação de estuque — Sala de moradia",
    category: "Reboco",
    location: "Algés",
    year: 2024,
    duration: "4 dias",
    area: "28 m²",
    cover: plaster,
    challenge:
      "Estuque com fissuras estruturais após sismo de baixa intensidade. Risco de queda de placas de teto.",
    solution:
      "Remoção controlada de estuque solto, aplicação de rede de fibra de vidro nas fissuras, reposição com estuque projetado e acabamento à régua.",
    outcome:
      "Tetos planos, sem fissuras visíveis, prontos a pintar. Sem reincidência após 14 meses.",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const categories: ProjectCategory[] = [
  "Impermeabilização",
  "Pintura",
  "Remodelação",
  "Isolamento",
  "Reboco",
  "Revestimento",
];