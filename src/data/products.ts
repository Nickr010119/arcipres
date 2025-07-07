export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  features: string[];
  specs: {
    [key: string]: string;
  };
  featured?: boolean;
};

export const products: Product[] = [
  {
    "id": "1",
    "name": "Sardinel A10",
    "price": 36000,
    "image": "/Concreto/a10.png",
    "category": "Concreto",
    "description": "Elemento prefabricado de concreto pequeño, usado como delimitador de zonas verdes o senderos peatonales. Ideal para urbanismo ligero.",
    "features": [
      "Color: Gris natural",
      "Peso: 130 kg",
      "Medidas: 80 x 20 x 50 cm"
    ],
    "specs": {
      "mduloderotura28das": "3.5 MPa",
      "resistencia": "5000 PSI",
      "absorcindeagua": "≤ 6%"
    },
    "featured": true
  },
  {
    "id": "2",
    "name": "Sardinel A40",
    "price": 34000,
    "image": "/Concreto/a40.png",
    "category": "Concreto",
    "description": "Sardinel de concreto de mayor altura, utilizado para separar áreas peatonales de zonas vehiculares en vías urbanas.",
    "features": [
      "Color: Gris",
      "Peso: 116 kg",
      "Medidas: 100 x 17 x 40 cm"
    ],
    "specs": {
      "mduloderotura28das": "3.5 MPa",
      "resistencia": "5000 PSI",
      "absorcindeagua": "≤ 6%"
    }
  },
  {
    "id": "ss",
    "name": "Sardinel A100",
    "price": 28000,
    "image": "/Concreto/A-100.png",
    "category": "Concreto",
    "description": "Pieza robusta de concreto empleada en separadores viales o bordes de andenes; soporta tránsito peatonal y liviano.",
    "features": [
      "Color: Gris",
      "Peso: 93 kg",
      "Medidas: 60 x 20 x (35-50) cm"
    ],
    "specs": {
      "mduloderotura28das": "3.5 MPa",
      "resistencia": "5000 PSI",
      "absorcindeagua": "≤ 6%"
    }
  },
  {
    "id": "4",
    "name": "Sardinel A86",
    "price": 27800,
    "image": "/Concreto/a86.png",
    "category": "Concreto",
    "description": "Elemento intermedio en tamaño, usado para delimitar calzadas, jardineras o pasos peatonales en zonas residenciales.",
    "features": [
      "Color: Gris",
      "Peso: 97 kg",
      "Medidas: 86 x 20 x 35 cm"
    ],
    "specs": {
      "mduloderotura28das": "3.5 MPa",
      "resistencia": "5000 PSI",
      "absorcindeagua": "≤ 6%"
    }
  },
  {
    "id": "5",
    "name": "Sardinel A85",
    "price": 27000,
    "image": "/Concreto/a85.png",
    "category": "Concreto",
    "description": "Prefabricado decorativo y funcional, adecuado para bordes de vías internas, zonas verdes y senderos.",
    "features": [
      "Color: Gris",
      "Peso: 97.44 kg",
      "Medidas: 80 x 20 x 35 cm"
    ],
    "specs": {
      "mduloderotura28das": "3.5 MPa",
      "resistencia": "5000 PSI",
      "absorcindeagua": "≤ 6%"
    }
  },
  {
    "id": "6",
    "name": "Sardinel A105",
    "price": 30000,
    "image": "/Concreto/a105.png",
    "category": "Concreto",
    "description": "Sardinel de alto desempeño, diseñado para proyectos urbanos con tráfico peatonal y delimitación vial duradera.",
    "features": [
      "Color: Gris",
      "Peso: 114 kg",
      "Medidas: 80 x 40 x 27.5 cm"
    ],
    "specs": {
      "mduloderotura28das": "3.5 MPa",
      "resistencia": "5000 PSI",
      "absorcindeagua": "≤ 6%"
    }
  },
  {
    "id": "7",
    "name": "Bordillo A80",
    "price": 27800,
    "image": "/Concreto/a80.png",
    "category": "Concreto",
    "description": "Bordillo prefabricado de concreto para andenes y calzadas. Proporciona contención y guía al flujo vehicular y peatonal.",
    "features": [
      "Color: Gris",
      "Peso: 87 kg",
      "Medidas: 80 x 20 x 35 cm"
    ],
    "specs": {
      "mduloderotura28das": "3.5 MPa",
      "resistencia": "5000 PSI",
      "absorcindeagua": "≤ 6%"
    }
  },
  {
    "id": "8",
    "name": "Bordillo A81",
    "price": 27000,
    "image": "/Concreto/a81.png",
    "category": "Concreto",
    "description": "Variante reforzada del bordillo A80, utilizada en zonas de mayor exigencia estructural como avenidas y entradas vehiculares.",
    "features": [
      "Color: Gris",
      "Peso: 82 kg",
      "Medidas: 80 x 15 x 35 cm"
    ],
    "specs": {
      "mduloderotura28das": "3.5 MPa",
      "resistencia": "5000 PSI",
      "absorcindeagua": "≤ 6%"
    }
  },
  {
    "id": "9",
    "name": "Bordillos B-20; B-30",
    "price": 19000,
    "image": "/Concreto/b20.png",
    "category": "Concreto",
    "description": "Bordillos de concreto para tráfico pesado (B-30) y tráfico medio (B-20). Usados en vías principales, parques industriales y urbanismos.",
    "features": [
      "Color: Gris",
      "Peso: B-20: 50 kg; B-30: 50 kg",
      "Medidas: 100 x 10 x 20 cm"
    ],
    "specs": {
      "mduloderotura28das": "3.5 MPa",
      "resistencia": "5000 PSI",
      "absorcindeagua": "≤ 6%"
    }
  },
  {
    "id": "10",
    "name": "Bloque Liso 14",
    "price": 4800,
    "image": "/Concreto/Bloque liso.png",
    "category": "Concreto",
    "description": "Bloque estructural de concreto de superficie plana. Se emplea en la construcción de muros portantes y divisiones.",
    "features": [
      "Color: Gris",
      "Peso: 14 kg",
      "Medidas: 40 x 20 x 20 cm"
    ],
    "specs": {
      "rendimiento": "12.5 unidades/m²",
      "resistencia": "1500 PSI",
      "absorcindeagua": "≤ 14%"
    },
    "featured": true
  },
  {
    "id": "11",
    "name": "Bloque Abujardado",
    "price": 5300,
    "image": "/Concreto/bloque abujardado.png",
    "category": "Concreto",
    "description": "Bloque decorativo con textura rugosa. Ideal para fachadas, muros exteriores y detalles arquitectónicos.",
    "features": [
      "Color: Gris",
      "Peso: 14 kg",
      "Medidas: 40 x 20 x 20 cm"
    ],
    "specs": {
      "rendimiento": "12.5 unidades/m²",
      "resistencia": "1500 PSI",
      "absorcindeagua": "≤ 14%"
    }
  },
  {
    "id": "12",
    "name": "Adoquín en concreto",
    "price": 980,
    "image": "/Concreto/adoquin.png",
    "category": "Concreto",
    "description": "Pieza prefabricada para pavimentos. Resistente al desgaste, se usa en andenes, ciclorutas, zonas peatonales y parques.",
    "features": [
      "Color: Gris, rojo, ocre",
      "Peso: 2.7 kg/unidad",
      "Medidas: 20 x 10 x 6 cm; 20 x 10 x 8 cm"
    ],
    "specs": {
      "rendimiento": "50 unidades/m²",
      "resistencia": "6000 PSI",
      "absorcindeagua": "≤ 6%"
    }
  },
  {
    "id": "13",
    "name": "Loseta en concreto",
    "price": 9500,
    "image": "/Concreto/loseta.png",
    "category": "Concreto",
    "description": "Baldosa rectangular de concreto. Aplicada en pisos peatonales, plazas, corredores y espacios públicos.",
    "features": [
      "Color: Gris o pigmentada",
      "Tipo: Guía, Toperol, Lisa o Cuadrática",
      "Peso: 22 kg",
      "Medidas: 40 x 40 x 6 cm"
    ],
    "specs": {
      "rendimiento": "6.25 unidades/m²",
      "resistencia": "4000 PSI",
      "absorcindeagua": "≤ 6%"
    }
  },
  {
    "id": "14",
    "name": "Tapa de inspección 0.70",
    "price": 195000,
    "image": "/Alcantarillado/tapa.png",
    "category": "Acueducto y Alcantarillado",
    "description": "Tapa de concreto de 70 cm de diámetro, usada en redes de alcantarillado y cajas de inspección para acceso y mantenimiento.",
    "features": [
      "Color: Gris oscuro",
      "Peso: 100 kg",
      "Diámetro: 70 cm",
      "Uso: Acceso a pozos"
    ],
    "specs": {
      "uso": "Acceso a pozos",
      "resistencia": "5000 PSI",
      "absorcindeagua": "≤ 6%"
    },
    "featured": false
  },
  {
    "id": "15",
    "name": "Cargue en concreto 1.70",
    "price": 930000,
    "image": "/Alcantarillado/cargue.png",
    "category": "Acueducto y Alcantarillado",
    "description": "Elemento prefabricado que facilita la transición entre estructuras o cubrimiento en sistemas de drenaje o alcantarillado.",
    "features": [
      "Color: Gris",
      "Peso: Variable",
      "Medidas: Variable",
      "Uso: Nivelación estructural"
    ],
    "specs": {
      "uso": "Nivelación estructural",
      "resistencia": "4000 PSI",
      "absorcindeagua": "≤ 6%"
    },
    "featured": true
  },
  {
    "id": "16",
    "name": "Cono de reducción",
    "price": 520000,
    "image": "/Alcantarillado/conodereduccion.png",
    "category": "Acueducto y Alcantarillado",
    "description": "Pieza de concreto en forma cónica, reduce el diámetro de cámaras de inspección en redes sanitarias o pluviales.",
    "features": [
      "Color: Gris",
      "Peso: 150 kg",
      "Medidas: Base 100 a 70 cm",
      "Uso: Reducción en pozos"
    ],
    "specs": {
      "uso": "Reducción en pozos",
      "resistencia": "5000 PSI",
      "absorcindeagua": "≤ 6%"
    }
  },
  {
    "id": "17",
    "name": "Sección cilindrica",
    "price": 0,
    "image": "/Alcantarillado/seccioncilindirica.png",
    "category": "Acueducto y Alcantarillado",
    "description": "Anillo vertical de concreto, forma el cuerpo de pozos o cámaras de inspección en sistemas de alcantarillado.",
    "features": [
      "Color: Gris",
      "Peso: 300 kg",
      "Medidas: Diámetro 100 x 50 cm de alto",
      "Uso: Pozos de inspección"
    ],
    "specs": {
      "uso": "Pozos de inspección",
      "resistencia": "5000 PSI",
      "absorcindeagua": "≤ 6%"
    }
  },
  {
    "id": "18",
    "name": "Anillo de reducción",
    "price": 0,
    "image": "/Alcantarillado/anillo.png",
    "category": "Acueducto y Alcantarillado",
    "description": "Pieza que permite reducir el diámetro superior de una sección cilíndrica para acoplar tapas de inspección.",
    "features": [
      "Color: Gris",
      "Peso: 60 kg",
      "Medidas: Diámetro 70 cm",
      "Uso: Reducción superior de cámaras"
    ],
    "specs": {
      "uso": "Reducción superior de cámaras",
      "resistencia": "5000 PSI",
      "absorcindeagua": "≤ 6%"
    }
  },
  {
    "id": "19",
    "name": "Rejilla SL-100",
    "price": 195000,
    "image": "/Alcantarillado/sl100.png",
    "category": "Acueducto y Alcantarillado",
    "description": "Rejilla de concreto con ranuras para drenaje superficial. Usada en andenes, zonas peatonales y parques.",
    "features": [
      "Color: Gris",
      "Peso: 100 kg",
      "Medidas: 83.5 x 45.5 x 14 cm",
      "Uso: Drenaje superficial Vehicular"
    ],
    "specs": {
      "uso": "Drenaje superficial",
      "resistencia": "5000 PSI",
      "absorcindeagua": "≤ 6%"
    }
  },
  {
    "id": "20",
    "name": "Marco de rejilla en concreto",
    "price": 95000,
    "image": "/Alcantarillado/marco rejilla.png",
    "category": "Acueducto y Alcantarillado",
    "description": "Soporte estructural para instalar rejillas de drenaje. Asegura estabilidad y correcta alineación con el pavimento.",
    "features": [
      "Color: Gris",
      "Peso: 55 kg",
      "Medidas: Variable",
      "Uso: Soporte estructural"
    ],
    "specs": {
      "uso": "Soporte estructural",
      "resistencia": "5000 PSI",
      "absorcindeagua": "≤ 6%"
    }
  },
  {
    "id": "21",
    "name": "Rejilla vehicular en concreto",
    "price": 177000,
    "image": "/Alcantarillado/rejilla vehicular.png",
    "category": "Acueducto y Alcantarillado",
    "description": "Diseñada para soportar carga vehicular. Se emplea en zonas de acceso, calles y parqueaderos.",
    "features": [
      "Color: Gris reforzado",
      "Peso: 80 kg",
      "Medidas: 80 x 40 x 10 cm",
      "Uso: Vías vehiculares"
    ],
    "specs": {
      "uso": "Vías vehiculares",
      "resistencia": "6000 PSI",
      "absorcindeagua": "≤ 6%"
    }
  },
  {
    "id": "22",
    "name": "Rejilla peatonal en concreto",
    "price": 26000,
    "image": "/Alcantarillado/rejilla peatonal.png",
    "category": "Acueducto y Alcantarillado",
    "description": "Rejilla liviana, ideal para desagües en zonas peatonales, senderos y espacios públicos.",
    "features": [
      "Color: Gris",
      "Peso: 35 kg",
      "Medidas: 100 x 25 cm",
      "Uso: Caminos peatonales"
    ],
    "specs": {
      "uso": "Caminos peatonales",
      "resistencia": "5000 PSI",
      "absorcindeagua": "≤ 6%"
    }
  },
  {
    "id": "23",
    "name": "Bloque Número 4",
    "price": 950,
    "image": "/Arcilla/bloque arcilla.png",
    "category": "Arcilla",
    "description": "Bloque de arcilla o concreto, tamaño convencional, usado en la construcción de muros divisorios y cerramientos.",
    "features": [
      "Color: Rojo",
      "Peso: 2.5 kg",
      "Medidas: 30 x 20 x 10 cm",
      "Rendimiento: 12.5 unidades/m²"
    ],
    "specs": {
      "resistencia": "800 PSI",
      "absorcindeagua": "≤ 18%"
    }
  },
  {
    "id": "24",
    "name": "Ladrillo recocido",
    "price": 410,
    "image": "/Arcilla/ladrillorecocido.png",
    "category": "Arcilla",
    "description": "Ladrillo tradicional cocido en horno, resistente y de buen acabado. Usado en muros estructurales y decorativos.",
    "features": [
      "Color: Rojo/terracota",
      "Peso: 2.3 kg",
      "Medidas: 20 x 10 x 6 cm",
      "Rendimiento: 50 unidades/m²"
    ],
    "specs": {
      "resistencia": "800 PSI",
      "absorcindeagua": "≤ 18%"
    },
    "featured": true
  },
  {
    "id": "25",
    "name": "Adoquín en arcilla",
    "price": 0,
    "image": "/Arcilla/adoquin arcilla.png",
    "category": "Arcilla",
    "description": "Pieza modular de arcilla cocida. Brinda acabado estético a pisos peatonales, plazas y zonas de tránsito ligero.",
    "features": [
      "Color: Rojo, café",
      "Peso: 3.5 kg",
      "Medidas: 20 x 10 x 6 cm",
      "Rendimiento: 50 unidades/m²"
    ],
    "specs": {
      "resistencia": "6000 PSI",
      "absorcindeagua": "≤ 6%"
    }
  },
  {
    "id": "26",
    "name": "Bloquelón",
    "price": 0,
    "image": "/Arcilla/bloquelon.png",
    "category": "Arcilla",
    "description": "Bloque de gran tamaño, utilizado en cubiertas livianas o como formaleta perdida en techos.",
    "features": [
      "Color: Gris",
      "Peso: 9 kg",
      "Medidas: 80 x 22.8 x 7.7 cm",
      "Rendimiento: 4.93 unidades/m²"
    ],
    "specs": {
      "resistencia": "1500 PSI",
      "absorcindeagua": "≤ 14%"
    }
  },
  {
    "id": "27",
    "name": "Banca M30",
    "price": 0,
    "image": "/Urbanismo/m30.png",
    "category": "Mobiliario Urbano",
    "description": "Banca urbana en concreto, diseño compacto. Se instala en parques, zonas comunes y espacios públicos.",
    "features": [
      "Color: Gris o pigmentada",
      "Peso: 140 kg",
      "Medidas: 1.80 x 0.60 x 0.45 m"
    ],
    "specs": {
      "resistencia": "3000 PSI",
      "absorcindeagua": "≤ 6%"
    },
    "featured": false
  },
  {
    "id": "28",
    "name": "Banca Modular M40",
    "price": 105000,
    "image": "/Urbanismo/m40.png",
    "category": "Mobiliario Urbano",
    "description": "Sistema de banca modular para urbanismo, combinable entre sí. Ideal para espacios públicos de gran afluencia.",
    "features": [
      "Color: Gris",
      "Peso: 121 kg",
      "Medidas: 52 x 55 x 40 cm"
    ],
    "specs": {
      "resistencia": "3000 PSI",
      "absorcindeagua": "≤ 6%"
    },
    "featured": false
  },
  {
    "id": "29",
    "name": "Bolardo M60",
    "price": 110000,
    "image": "/Urbanismo/m60.png",
    "category": "Mobiliario Urbano",
    "description": "Elemento cilíndrico de concreto que delimita áreas peatonales. Previene el acceso vehicular no autorizado.",
    "features": [
      "Color: Gris",
      "Peso: 50 kg",
      "Altura: 60 cm"
    ],
    "specs": {
      "resistencia": "4000 PSI",
      "absorcindeagua": "≤ 6%"
    },
    "featured": true
  },
  {
    "id": "30",
    "name": "Postes para cerramiento",
    "price": 0,
    "image": "/Urbanismo/cerramiento.png",
    "category": "Mobiliario Urbano",
    "description": "Postes prefabricados de concreto utilizados en la instalación de cercas perimetrales en fincas, obras y terrenos.",
    "features": [
      "Color: Gris",
      "Peso: 25-35 kg",
      "Medidas: 250 cm de alto x 10 cm de diámetro"
    ],
    "specs": {
      "resistencia": "4000 PSI",
      "absorcindeagua": "≤ 6%"
    }
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured === true);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getCategories = (): string[] => {
  const categories = [...new Set(products.map(product => product.category))];
  return categories.sort();
};
