export type Service = {
  slug: string;
  index: string;
  title: string;
  short: string;
  description: string;
  scope: string[];
  materials: string[];
  whenYouNeed: string[];
  duration: string;
  warranty: string;
};

export const services: Service[] = [
  {
    slug: "impermeabilizacoes",
    index: "01",
    title: "Impermeabilizações & Isolamentos",
    short:
      "Telhados, terraços, fachadas e caves protegidos contra água e humidade.",
    description:
      "Diagnosticamos a origem das infiltrações e aplicamos a solução técnica certa — desde telas asfálticas e membranas líquidas a tinta aborrachada e isolamento térmico exterior — com garantia escrita e materiais certificados.",
    scope: [
      "Telas asfálticas e membranas EPDM em terraços planos",
      "Tela de alumínio em cumeeiras, chaminés e platibandas",
      "Pintura aborrachada de telhas e coberturas",
      "Isolamento térmico ETICS em fachadas (Capoto)",
      "Tratamento de muros e caves enterradas",
      "Reparação pontual de infiltrações ativas",
    ],
    materials: ["Sika", "Mapei", "Weber Saint-Gobain", "Cin", "Imperalum"],
    whenYouNeed: [
      "Manchas de humidade em tetos ou paredes",
      "Água a escorrer em dias de chuva",
      "Pintura a empolar ou estuque a soltar",
      "Fatura de aquecimento sempre demasiado alta",
    ],
    duration: "3 a 14 dias úteis",
    warranty: "Até 10 anos consoante o sistema",
  },
  {
    slug: "remodelacoes",
    index: "02",
    title: "Remodelações Interiores",
    short: "Cozinhas, casas de banho e habitações reconfiguradas de raiz.",
    description:
      "Coordenamos todas as especialidades — demolição, alvenaria, canalização, eletricidade, revestimentos, pinturas e mobiliário — para entregar a casa pronta a habitar, sem que tenha de gerir empreiteiros diferentes.",
    scope: [
      "Demolição controlada e remoção de entulho",
      "Reconfiguração de divisões e abertura de vãos",
      "Cozinhas e casas de banho completas",
      "Tetos falsos em pladur com iluminação embutida",
      "Revestimentos, rodapés e portas",
      "Pinturas de acabamento e limpeza final",
    ],
    materials: ["Pladur Knauf", "Roca", "Grohe", "Bosch", "Cin"],
    whenYouNeed: [
      "Comprou casa para recuperar antes de habitar",
      "Cozinha ou WC com mais de 20 anos",
      "Quer juntar duas divisões num espaço aberto",
      "Pretende valorizar o imóvel antes de vender",
    ],
    duration: "3 a 12 semanas",
    warranty: "5 anos em estruturas e instalações",
  },
  {
    slug: "fachadas",
    index: "03",
    title: "Remodelações Exteriores & Fachadas",
    short:
      "Recuperação completa de fachadas, varandas e coberturas de prédios e moradias.",
    description:
      "Montagem de andaime, picagem de reboco solto, reparação de fissuras, aplicação de primário, reboco fino e pintura exterior com tinta de longa duração resistente a UV e chuva ácida.",
    scope: [
      "Montagem de andaime certificado",
      "Picagem e reboco de zonas degradadas",
      "Selagem de fissuras com mástique elástico",
      "Pintura exterior com tinta aquosa de longa duração",
      "Reparação de varandas e gradeamentos",
      "Limpeza de fachada com hidropressão",
    ],
    materials: ["Cin Novatex", "Robbialac Velatura", "Sika MonoTop"],
    whenYouNeed: [
      "Fachada com fissuras visíveis ou bolor",
      "Condomínio precisa de obra de manutenção",
      "Está a vender e a fachada compromete a foto",
    ],
    duration: "2 a 6 semanas",
    warranty: "7 anos na pintura exterior",
  },
  {
    slug: "canalizacoes",
    index: "04",
    title: "Canalizações",
    short: "Redes de água, esgoto e gás reparadas ou instaladas de raiz.",
    description:
      "Equipa certificada para intervenções urgentes ou planeadas. Substituição de tubagem antiga em chumbo ou ferro, deteção de fugas sem destruição, instalação de termoacumuladores e bombas.",
    scope: [
      "Substituição de tubagem em PEX e multicamada",
      "Deteção de fugas com câmara termográfica",
      "Desentupimento de esgotos e algerozes",
      "Instalação de termoacumuladores e esquentadores",
      "Ligação à rede pública e contadores",
    ],
    materials: ["Uponor", "Geberit", "Vulcano", "Junkers"],
    whenYouNeed: [
      "Pressão de água a cair em casa",
      "Mancha húmida sem causa aparente",
      "Cheiro a esgoto persistente",
      "Quer trocar caldeira ou termoacumulador",
    ],
    duration: "1 dia a 2 semanas",
    warranty: "2 anos na mão-de-obra",
  },
  {
    slug: "eletricidade",
    index: "05",
    title: "Eletricidade",
    short: "Instalações elétricas conformes RTIEBT, ligações à rede e certificação.",
    description:
      "Eletricistas com TIE válida fazem a remodelação total ou parcial da instalação, incluindo quadros, tomadas, iluminação e ligação à rede com certificação CERTIEL.",
    scope: [
      "Remodelação de quadro elétrico e diferenciais",
      "Passagem de novas tubagens e cablagem",
      "Iluminação LED embutida e linhas dedicadas",
      "Tomadas USB, RJ45 e domótica básica",
      "Certificação CERTIEL e ligação EDP",
    ],
    materials: ["Schneider", "Hager", "Legrand", "Cabelte"],
    whenYouNeed: [
      "Disjuntores a saltar com frequência",
      "Casa antiga sem terra ou diferencial",
      "Quer mais tomadas ou pontos de luz",
    ],
    duration: "2 dias a 3 semanas",
    warranty: "3 anos na instalação",
  },
  {
    slug: "revestimentos",
    index: "06",
    title: "Revestimentos",
    short:
      "Mosaico, azulejo, porcelânico e parquet flutuante com acabamento perfeito.",
    description:
      "Preparação de subleito, regularização com auto-nivelante, assentamento à régua e laser e remate em silicone neutro. Trabalhamos com peças grande formato até 120×60 cm.",
    scope: [
      "Cerâmico e porcelânico em pavimentos e paredes",
      "Parquet flutuante e laminado AC4/AC5",
      "Rodapés MDF lacados ao tom",
      "Pedra natural e mármore",
      "Auto-nivelantes e regularização de pisos",
    ],
    materials: ["Recer", "Margres", "Quick-Step", "Tarkett"],
    whenYouNeed: [
      "Quer atualizar pavimentos sem obra grande",
      "Casa com sons ocos ou tijoleira partida",
      "Pretende renovar WC ou cozinha rapidamente",
    ],
    duration: "3 dias a 3 semanas",
    warranty: "5 anos na assentagem",
  },
  {
    slug: "afagamentos",
    index: "07",
    title: "Afagamento & Envernizamento",
    short: "Soalhos antigos recuperados ao seu acabamento original.",
    description:
      "Lixagem em três passagens, aspiração industrial, betumagem dos espaços entre tábuas e aplicação de 3 demãos de verniz aquoso ou óleo de cera com 24h de cura entre demãos.",
    scope: [
      "Lixagem industrial em 3 grãos progressivos",
      "Betumagem e regularização de juntas",
      "Aplicação de verniz aquoso ou óleo natural",
      "Acabamento mate, acetinado ou brilhante",
    ],
    materials: ["Bona", "Loba", "Osmo"],
    whenYouNeed: [
      "Soalho de pinho marcado e descolorado",
      "Verniz brilhante a soltar",
      "Quer mudar tonalidade sem trocar piso",
    ],
    duration: "4 a 7 dias úteis",
    warranty: "3 anos no verniz",
  },
  {
    slug: "construcao-civil",
    index: "08",
    title: "Construção Civil",
    short: "Pequenas e médias obras de raiz, anexos, muros e ampliações.",
    description:
      "Da licença ao acabamento. Tratamos do projeto, alvará e execução de obra nova, ampliações até 40 m² e construção de muros, churrasqueiras e piscinas.",
    scope: [
      "Anexos e ampliações até 40 m²",
      "Muros e vedações em betão ou bloco",
      "Churrasqueiras e fornos a lenha",
      "Pavimentos exteriores e calçada portuguesa",
      "Acompanhamento de licenciamento municipal",
    ],
    materials: ["Cimpor", "Maxit", "Secil"],
    whenYouNeed: [
      "Quer ampliar a casa ou criar um anexo",
      "Precisa de muro ou vedação nova",
      "Tem terreno para construir do zero",
    ],
    duration: "4 semanas a 6 meses",
    warranty: "5 anos estruturais",
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);