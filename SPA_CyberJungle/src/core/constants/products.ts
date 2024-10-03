import Product from "../product/Product";

const products: Product[] = [
  {
    id: 1,
    name: "Acer Nitro 5 Gaming Laptop",
    description:
      "The Acer Nitro 5 is a powerful gaming laptop, ideal for heavy games and multitasking.",
    brand: "Acer",
    model: "AN515-54-58CL",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Facer-nitro-5.png?alt=media&token=094ba6a8-1a4d-414a-b32c-c176bfeaca8e",
    score: 4.5,
    videoReview:
      "https://www.youtube.com/embed/8NQFr9De3lU?si=s_lN2KTQresD-36Y",
    tags: ["Baixou"],
    priceBase: 6499.99,
    pricePromotional: 5999.99,
    smallerPrice: 4850.9,
    biggerPrice: 9800.8,
    priceAverage: 6503.7,
    specifications: {
      highlight: "NVIDIA GeForce RTX 2060",
      Processor: "Intel Core i5-9300H",
      Memory: "16GB DDR4",
      Storage: "512GB SSD",
      "Video Card": "NVIDIA GeForce RTX 2060",
      Screen: "15.6 inches Full HD",
      Weight: "2.5 Kg",
    },
  },
  {
    id: 2,
    name: "Dell G5 Gaming Laptop",
    description:
      "The Dell G5 delivers a smooth gaming experience with high-quality graphics.",
    brand: "Dell",
    model: "G5-5590-A30B",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fdell-g5.png?alt=media&token=ac1cb3fa-4cc4-4f30-a831-19bca5b85644",
    score: 5,
    videoReview:
      "https://www.youtube.com/embed/N5C1ALQkv1Q?si=KuVr4V6-A02Z23XK",
    tags: [],
    priceBase: 7299.99,
    pricePromotional: 6799.99,
    smallerPrice: 4850,
    biggerPrice: 9800,
    priceAverage: 6500,
    specifications: {
      highlight: "NVIDIA GeForce GTX 1660 Ti",
      Processor: "Intel Core i7-9750H",
      Memory: "16GB DDR4",
      Storage: "1TB HDD + 256GB SSD",
      "Video Card": "NVIDIA GeForce GTX 1660 Ti",
      Screen: "15.6 inches Full HD",
      Weight: "2.68 Kg",
    },
  },
  {
    id: 3,
    name: "Lenovo Legion Y540 Gaming Laptop",
    description:
      "The Lenovo Legion Y540 is a high-performance gaming laptop with a stylish design.",
    brand: "Lenovo",
    model: "Legion Y540-15IRH",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Flegion-y540.png?alt=media&token=b36f6c61-8b7d-4454-9940-d945b89d44f8",
    score: 4.5,
    videoReview:
      "https://www.youtube.com/embed/knhriyVTMpA?si=3RduZcEVx4mjEwER",
    tags: ["Recomendado"],
    priceBase: 6999.99,
    pricePromotional: 6499.99,
    smallerPrice: 4850,
    biggerPrice: 9800,
    priceAverage: 6500,
    specifications: {
      highlight: "NVIDIA GeForce GTX 1660 Ti",
      Processor: "Intel Core i7-9750H",
      Memory: "16GB DDR4",
      Storage: "512GB SSD",
      "Video Card": "NVIDIA GeForce GTX 1660 Ti",
      Screen: "15.6 inches Full HD",
      Weight: "2.3 Kg",
    },
  },
  {
    id: 4,
    name: "HP Pavilion Gaming Laptop",
    description:
      "The HP Pavilion is a gaming laptop with solid performance and a modern design, perfect for gamers looking for value.",
    brand: "HP",
    model: "Pavilion 15-dk0010",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fhp-pavilion-dk0010.png?alt=media&token=6f0d7c8d-0612-4ca9-9ee8-1849971ae8c4",
    score: 4,
    videoReview:
      "https://www.youtube.com/embed/dCvvugSjnZ4?si=zOMGbydgNdkB9QwY",
    tags: [],
    priceBase: 5499.99,
    pricePromotional: 4999.99,
    smallerPrice: 4133,
    biggerPrice: 7990.9,
    priceAverage: 5107.9,
    specifications: {
      highlight: "NVIDIA GeForce GTX 1650",
      Processor: "Intel Core i5-9300H",
      Memory: "8GB DDR4",
      Storage: "256GB SSD",
      "Video Card": "NVIDIA GeForce GTX 1650",
      Screen: "15.6 inches Full HD",
      Weight: "2.25 Kg",
    },
  },
  {
    id: 5,
    name: "ASUS TUF A15 Gaming Laptop",
    description:
      "The ASUS TUF Gaming A15 combines military durability with excellent gaming performance.",
    brand: "ASUS",
    model: "TUF A15 FA506IV",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fasus-tuf-a15.png?alt=media&token=989d3375-f26b-4ada-a920-afa41dfdb8de",
    score: 5,
    videoReview:
      "https://www.youtube.com/embed/v-LmH_Gfnn8?si=IGQmsvb-eZyDInwV",
    tags: ["Oportunidade"],
    priceBase: 7499.99,
    pricePromotional: 6999.99,
    smallerPrice: 4133,
    biggerPrice: 7990.9,
    priceAverage: 5107.9,
    specifications: {
      highlight: "NVIDIA GeForce RTX 2060",
      Processor: "AMD Ryzen 7 4800H",
      Memory: "16GB DDR4",
      Storage: "512GB SSD",
      "Video Card": "NVIDIA GeForce RTX 2060",
      Screen: "15.6 inches Full HD 144Hz",
      Weight: "2.3 Kg",
    },
  },
  {
    id: 6,
    name: "MSI GL65 Leopard Gaming Laptop",
    description:
      "The MSI GL65 Leopard delivers superior performance with an aggressive design and customizable RGB keyboard.",
    brand: "MSI",
    model: "GL65 Leopard 10SFK-062",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmsi-gl65.png?alt=media&token=24798828-8546-4720-bfe7-f813f4e78507",
    score: 4,
    videoReview:
      "https://www.youtube.com/embed/uT-YHREKDaE?si=Z7e2lk9G-H7-cghs",
    tags: ["Melhor RTX 2070"],
    priceBase: 8999.99,
    pricePromotional: 8499.99,
    smallerPrice: 4133,
    biggerPrice: 7990.9,
    priceAverage: 5107.9,
    specifications: {
      highlight: "NVIDIA GeForce RTX 2070",
      Processor: "Intel Core i7-10750H",
      Memory: "16GB DDR4",
      Storage: "512GB SSD",
      "Video Card": "NVIDIA GeForce RTX 2070",
      Screen: "15.6 inches Full HD 144Hz",
      Weight: "2.3 Kg",
    },
  },
  {
    id: 7,
    name: "Razer Blade 15 Gaming Laptop",
    description:
      "The Razer Blade 15 is a premium gaming laptop with an ultra-thin design and top-of-the-line hardware.",
    brand: "Razer",
    model: "Blade 15 Base",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Frazer-blade-15.png?alt=media&token=6e23866d-56d0-4da9-94e8-feb1b57d8fac",
    score: 5,
    videoReview:
      "https://www.youtube.com/embed/7kpreUxmHvA?si=wj5A9bw4F8zm_w_Y",
    tags: [],
    priceBase: 12499.99,
    pricePromotional: 11999.99,
    smallerPrice: 6850,
    biggerPrice: 13500,
    priceAverage: 10900.9,
    specifications: {
      highlight: "NVIDIA GeForce RTX 2070",
      Processor: "Intel Core i7-10750H",
      Memory: "16GB DDR4",
      Storage: "512GB SSD",
      "Video Card": "NVIDIA GeForce RTX 2070",
      Screen: "15.6 inches Full HD 144Hz",
      Weight: "2.1 Kg",
    },
  },
  {
    id: 8,
    name: "Alienware m15 Gaming Laptop",
    description:
      "The Alienware m15 is a high-performance gaming laptop with a futuristic design and advanced features.",
    brand: "Dell",
    model: "m15 R3",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Falienware-m15.png?alt=media&token=85df89d1-3db1-4978-9581-4802b42d7c6e",
    score: 4.5,
    videoReview:
      "https://www.youtube.com/embed/OywbZPwHJBw?si=cZmqJESmXGh-D1Bw",
    tags: ["Sem juros"],
    priceBase: 14999.99,
    pricePromotional: 13999.99,
    smallerPrice: 4133,
    biggerPrice: 7990.9,
    priceAverage: 5107.9,
    specifications: {
      highlight: "NVIDIA GeForce RTX 2080 Super",
      Processor: "Intel Core i7-10875H",
      Memory: "16GB DDR4",
      Storage: "1TB SSD",
      "Video Card": "NVIDIA GeForce RTX 2080 Super",
      Screen: "15.6 inches Full HD 240Hz",
      Weight: "2.5 Kg",
    },
  },
  {
    id: 9,
    name: "AMD Ryzen 7 5700X3D Processor",
    description:
      "Enjoy supersonic speeds with 8 cores and 16 processing threads, ready to tackle the most demanding titles. Base frequency of 3.0GHz and dynamic boost up to 4.1GHz to eliminate any lag.",
    brand: "AMD",
    model: "100-100001503WOF",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fryzen-7-5700x3d.png?alt=media&token=62caf240-b3c6-41d9-889a-c4ca882822d9",
    score: 4.5,
    videoReview: "https://www.youtube.com/embed/ic8a_L15Z98&t=67s",
    tags: ["Sem juros", "Mais Vendidos", "Custo Benefício"],
    priceBase: 2499.99,
    pricePromotional: 1189.99,
    smallerPrice: 999.99,
    biggerPrice: 3290.9,
    priceAverage: 1699.9,
    specifications: {
      highlight: "AMD Ryzen 7 5700X3D",
      "CPU Cores": 8,
      "Number of threads": 16,
      "Max Boost Clock": 4.1,
      "Base Clock": 3.0,
      "Total L2 Cache": "4MB",
      "Total L3 Cache": "96MB",
      Socket: "AM4",
      "Max Temperature": "90°C",
      weight: "243 g",
    },
  },
  {
    id: 10,
    name: "Intel Core i9-13900K Processor",
    description:
      "The Intel Core i9-13900K is the ideal processor for gamers and professionals who need extreme performance. Equipped with 24 cores and 32 threads, it reaches frequencies of up to 5.8 GHz in turbo mode, offering unmatched performance.",
    brand: "Intel",
    model: "BX8071513900K",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fcore-i9-13900k.png?alt=media&token=9d185bf6-64ca-48bf-bdb7-acd0de317f09",
    score: 4.8,
    videoReview: "https://www.youtube.com/embed/tV-FbmLJejg",
    tags: ["Desempenho Máximo", "Recomendado para Jogos", "Overclock"],
    priceBase: 3899.99,
    pricePromotional: 3299.99,
    smallerPrice: 2999.99,
    biggerPrice: 4199.9,
    priceAverage: 3599.9,
    specifications: {
      highlight: "Intel Core i9-13900K",
      "CPU Cores": 24,
      "Number of threads": 32,
      "Max Boost Clock": 5.8,
      "Base Clock": 3.0,
      "Total L2 Cache": "32 MB",
      "Total L3 Cache": "36 MB",
      Socket: "LGA 1700",
      weight: "101 g",
    },
  },
  {
    id: 11,
    name: "AMD Ryzen 9 7950X3D Processor",
    description:
      "The AMD Ryzen 9 7950X3D redefines gaming and productivity performance, with 16 cores and 32 threads and a total cache of 128MB. Boost frequency up to 5.7 GHz, ideal for intense workloads and multitasking.",
    brand: "AMD",
    model: "100-100001700WOF",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fryzen-9-7950x3d.png?alt=media&token=74ab9ea8-1250-42b8-b653-db430969d3cf",
    score: 4.9,
    videoReview: "https://www.youtube.com/embed/3XFI1jhZMEU",
    tags: ["Performance Extrema", "Topo de Linha", "Gamer"],
    priceBase: 5899.99,
    pricePromotional: 4599.99,
    smallerPrice: 4199.99,
    biggerPrice: 5999.9,
    priceAverage: 4999.9,
    specifications: {
      highlight: "AMD Ryzen 9 7950X3D",
      "CPU Cores": 16,
      "Number of threads": 32,
      "Max Boost Clock": 5.7,
      "Base Clock": 4.2,
      "Total L2 Cache": "16 MB",
      "Total L3 Cache": "128 MB",
      Socket: "AM5",
      "Max Temperature": "95°C",
      weight: "190 g",
    },
  },
  {
    id: 12,
    name: "Razer BlackWidow V3 Mechanical Gaming Keyboard",
    description:
      "The Razer BlackWidow V3 is equipped with Razer Green mechanical switches for precise tactile feedback and satisfying auditory feedback. Features Razer Chroma RGB lighting and an aluminum frame for durability.",
    brand: "Razer",
    model: "RZ03-03540100-R3U1",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fteclado-razer-blackwidow-v3.png?alt=media&token=41cf33c1-66d7-4c4f-a36f-a358d9061d29",
    score: 4.7,
    videoReview: "https://www.youtube.com/embed/HVPSyfIs-84",
    tags: ["RGB Personalizável", "Durabilidade", "Switch Tátil"],
    priceBase: 1299.99,
    pricePromotional: 999.99,
    smallerPrice: 799.99,
    biggerPrice: 1599.99,
    priceAverage: 999.99,
    specifications: {
      highlight: "Razer Green Switch",
      "Switch Type": "Mechanical",
      Connectivity: "USB Cable",
      Lighting: "Razer Chroma RGB",
      Structure: "Aluminum",
      "Anti-Ghosting": "Yes, N-Key Rollover",
      weight: "1130 g",
    },
  },
  {
    id: 13,
    name: "Corsair K70 RGB MK.2 Mechanical Gaming Keyboard",
    description:
      "With Cherry MX Red switches, the Corsair K70 RGB MK.2 delivers a linear and silent response. Built in brushed aluminum, ideal for long gameplay sessions, and with dynamic RGB lighting.",
    brand: "Corsair",
    model: "CH-9109010-NA",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fteclado-corsair-k70.png?alt=media&token=3dbe507e-1df9-4743-b8c4-cd782cfe6c63",
    score: 4.8,
    videoReview:
      "https://www.youtube.com/embed/1ABIgPdZrkI?si=7HUrXG7JD-vkQR5_",
    tags: ["RGB Dinâmico", "Estrutura em Alumínio", "Switch Silencioso"],
    priceBase: 1799.99,
    pricePromotional: 1349.99,
    smallerPrice: 1199.99,
    biggerPrice: 2299.9,
    priceAverage: 1249.9,
    specifications: {
      highlight: "Cherry MX Red Switch",
      "Switch Type": "Mechanical",
      Connectivity: "USB Cable",
      Lighting: "Per-Key RGB",
      Structure: "Brushed Aluminum",
      "Anti-Ghosting": "Yes, N-Key Rollover",
      weight: "1250 g",
    },
  },
  {
    id: 14,
    name: "Redragon Draconic K530 Mechanical Gaming Keyboard",
    description:
      "The Redragon Draconic K530 is a compact, wireless mechanical keyboard designed for maximum portability and performance. Equipped with Outemu Brown switches, ideal for those looking for a balance between tactile feedback and silence, plus Bluetooth connectivity.",
    brand: "Redragon",
    model: "K530-RGB",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fteclado-redragon-draconic-k530.png?alt=media&token=d456ac67-d742-40ed-9a99-2c3281b9a2c2",
    score: 4.6,
    videoReview: "https://www.youtube.com/embed/6sAqSwcjjt0",
    tags: ["Bluetooth", "Compacto", "Portátil", "Switch Tátil"],
    priceBase: 549.99,
    pricePromotional: 429.99,
    smallerPrice: 399.99,
    biggerPrice: 599.99,
    priceAverage: 499.99,
    specifications: {
      highlight: "Outemu Brown Switch",
      "Switch Type": "Mechanical",
      Connectivity: "Bluetooth 5.0 / USB-C Cable",
      Lighting: "RGB",
      Structure: "Reinforced ABS Plastic",
      Keys: "61(Layout 60 %)",
      "Anti-Ghosting": "Yes, N-Key Rollover",
      weight: "600 g",
    },
  },
  {
    id: 15,
    name: "Logitech G403 Hero Gaming Mouse",
    description:
      "The Logitech G403 Hero is equipped with the HERO 25K sensor, offering maximum precision with up to 25,600 adjustable DPI. Ergonomic design, lightweight structure and adjustable weight, ideal for those seeking comfort and high performance in games.",
    brand: "Logitech",
    model: "910-005631",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmouse-logitech-g403-hero.png?alt=media&token=869b7dff-b08e-449f-b35c-c16d95d5cbe3",
    score: 4.8,
    videoReview: "https://www.youtube.com/embed/SjxHa-hv_2c",
    tags: ["Ergonômico", "Peso Ajustável", "Sensor HERO", "Custo Benefício"],
    priceBase: 399.99,
    pricePromotional: 299.99,
    smallerPrice: 279.99,
    biggerPrice: 449.9,
    priceAverage: 349.99,
    specifications: {
      highlight: "HERO 16K / 25K",
      "Max DPI": 25600,
      Connectivity: "USB Cable",
      "Programmable Buttons": 6,
      Lighting: "RGB LIGHTSYNC",
      "Response Time": "1ms",
      Structure: "ABS Plastic and Textured Rubber",
      weight: "87 g (with 10 g adjustable weight)",
    },
  },
  {
    id: 16,
    name: "Razer DeathAdder V2 Gaming Mouse",
    description:
      "The Razer DeathAdder V2 features the Focus+ 20,000 DPI optical sensor, with optical switches for faster clicks and durability up to 70 million clicks. Ergonomic and lightweight design, with SpeedFlex cable for drag-free movement.",
    brand: "Razer",
    model: "RZ01-03210100-R3U1",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmouse-razer-deathadder-v2.png?alt=media&token=6b3d7cf9-334d-4950-8c66-a15d136216a6",
    score: 4.7,
    videoReview: "https://www.youtube.com/embed/jlmeKfzu_is",
    tags: ["Ergonomia", "Sensor Óptico", "Switches Ópticos"],
    priceBase: 499.99,
    pricePromotional: 399.99,
    smallerPrice: 349.99,
    biggerPrice: 549.9,
    priceAverage: 449.99,
    specifications: {
      highlight: "Focus+ Sensor",
      "Max DPI": 20000,
      Connectivity: "USB SpeedFlex Cable",
      "Programmable Buttons": 8,
      Lighting: "Razer Chroma RGB",
      "Response Time": "0.2ms (optical switch)",
      Structure: "Textured ABS Plastic",
      weight: "88 g",
    },
  },
  {
    id: 17,
    name: "HyperX Pulsefire FPS Pro Gaming Mouse",
    description:
      "The HyperX Pulsefire FPS Pro is ideal for gamers seeking precision and comfort. Equipped with the Pixart 3389 sensor up to 16,000 DPI and Omron buttons with high durability. Customizable RGB lighting and ergonomic design.",
    brand: "HyperX",
    model: "HX-MC003B",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmouse-hyperxppulsefire-fps-pro.png?alt=media&token=8b0edce3-1eef-412e-be5f-bc701646b23f",
    score: 4.5,
    videoReview: "https://www.youtube.com/embed/sJAM6Pxa4PI",
    tags: ["Alta Precisão", "Sensor Pixart", "Ergonômico"],
    priceBase: 349.99,
    pricePromotional: 249.99,
    smallerPrice: 219.99,
    biggerPrice: 399.9,
    priceAverage: 299.99,
    specifications: {
      highlight: "Pixart 3389 Sensor",
      "Max DPI": 16000,
      Connectivity: "USB Cable",
      "Programmable Buttons": 6,
      Lighting: "RGB",
      "Response Time": "1ms",
      Structure: "ABS Plastic with Textured Sides",
      weight: "95 g",
    },
  },
  {
    id: 18,
    name: "HyperX Cloud II Gaming Headset",
    description:
      "The HyperX Cloud II is a headset designed for maximum comfort and sound quality. It has 53mm drivers and virtual 7.1 surround sound, ideal for gamers who seek complete immersion in games.",
    brand: "HyperX",
    model: "KHX-HSCP-RD",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fheadset-gamer-hyperx-cloud-II.png?alt=media&token=82dce4ef-75c7-4c75-9e1a-ccf20aac1af7",
    score: 4.8,
    videoReview: "https://www.youtube.com/embed/BT6NFjvRNu0",
    tags: ["Confortável", "Surround 7.1", "Microfone Removível"],
    priceBase: 899.99,
    pricePromotional: 699.99,
    smallerPrice: 649.99,
    biggerPrice: 949.99,
    priceAverage: 799.99,
    specifications: {
      highlight: "Virtual 7.1 Surround",
      Drivers: "53mm",
      Connectivity: "USB / 3.5mm Jack",
      Microphone: "Removable with noise cancellation",
      Compatibility: "PC, PS4, Xbox One",
      weight: "320 g",
    },
  },
  {
    id: 19,
    name: "Razer Kraken X Gaming Headset",
    description:
      "The Razer Kraken X is an ultralight headset with 7.1 surround sound and memory foam cushions for maximum comfort. Cardioid microphone and reinforced structure for durability.",
    brand: "Razer",
    model: "RZ04-02890100-R3U1",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fheadset-razer-kraken-x-lite.png?alt=media&token=d1219f2a-2199-4e17-9dca-5b7db5537f55",
    score: 4.6,
    videoReview: "https://www.youtube.com/embed/L3lW1P0rr_M",
    tags: ["Leve", "Surround 7.1", "Microfone Flexível"],
    priceBase: 299.99,
    pricePromotional: 229.99,
    smallerPrice: 199.99,
    biggerPrice: 349.99,
    priceAverage: 269.99,
    specifications: {
      highlight: "Virtual 7.1 Surround",
      Drivers: "40mm",
      Connectivity: "3.5mm Jack",
      Microphone: "Cardioid non-removable",
      Compatibility: "PC, PS4, Xbox One, Switch",
      weight: "250 g",
    },
  },

  {
    id: 20,
    name: 'Samsung Odyssey G7 27" Gaming Monitor',
    description:
      "The Samsung Odyssey G7 features a 240Hz refresh rate and 1ms response time. With a curved QHD panel and G-Sync technology, it's ideal for gamers looking for performance and immersion.",
    brand: "Samsung",
    model: "LC27G75TQSNXZA",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmonitor-gamer-samsung-led-27-odyssey-curvo.png?alt=media&token=98f062fb-4c3a-4e87-895d-61ecdd7f7609",
    score: 4.9,
    videoReview: "https://www.youtube.com/embed/-xrNbdySG-Y",
    tags: ["240Hz", "Curvo", "G-Sync"],
    priceBase: 3499.99,
    pricePromotional: 2999.99,
    smallerPrice: 2799.99,
    biggerPrice: 3999.99,
    priceAverage: 3299.99,
    specifications: {
      highlight: "Curved QHD Panel",
      Size: "27 inches",
      "Refresh Rate": "240Hz",
      "Response Time": "1ms",
      Technology: "QLED",
      Connectivity: "HDMI, DisplayPort, USB",
      weight: "6.5 kg",
    },
  },
  {
    id: 21,
    name: 'LG UltraGear 34" Gaming Monitor',
    description:
      'The LG UltraGear 34" is an ultra-wide monitor with WQHD resolution (3440x1440), 160Hz refresh rate, and G-Sync support. Ideal for those seeking a monitor for gaming and productivity.',
    brand: "LG",
    model: "34GN850-B",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmonitor-gamer-lg-ultragear-lg-34-curvo.png?alt=media&token=7f00d9ba-f2ef-416e-bf01-0b84962e099b",
    score: 4.7,
    videoReview: "https://www.youtube.com/embed/YUbQODIro2k",
    tags: ["Ultra-Wide", "144Hz", "G-Sync"],
    priceBase: 2999.99,
    pricePromotional: 2399.99,
    smallerPrice: 2199.99,
    biggerPrice: 3999.99,
    priceAverage: 2899.99,
    specifications: {
      highlight: "WQHD Panel",
      Size: "34 inches",
      "Refresh Rate": "160Hz",
      "Response Time": "1ms",
      Technology: "IPS",
      Connectivity: "HDMI, DisplayPort, USB",
      weight: "7.3 kg",
    },
  },
  {
    id: 22,
    name: "NVIDIA GeForce RTX 3060 Ventus 2X MSI Video Card",
    description:
      "The RTX 3060 Ventus 2X MSI is equipped with 12GB GDDR6, offering next-generation performance for 4K gaming and Ray Tracing. Supports DLSS and advanced NVIDIA technologies for maximum performance.",
    brand: "MSI",
    model: "RTX 3060 Ventus",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fplaca-de-video-msi-nvidia-geforce-rtx-3060-ventus-2x-12gb.png?alt=media&token=ee112ada-6ac9-4f1c-9766-586caae1713a",
    score: 4.9,
    videoReview: "https://www.youtube.com/embed/a_u2HPe2Cqg",
    tags: ["4K Gaming", "Ray Tracing", "DLSS", "NVidia", "GeForce"],
    priceBase: 2399.99,
    pricePromotional: 1999.99,
    smallerPrice: 1599.99,
    biggerPrice: 3899.99,
    priceAverage: 2199.99,
    specifications: {
      highlight: "12GB GDDR6",
      "CUDA Cores": 3584,
      Connectivity: "HDMI 2.1, DisplayPort 1.4a",
      TDP: "170 W",
      weight: "1.03 kg",
    },
  },
  {
    id: 23,
    name: "AMD Radeon RX 6800 XT Video Card",
    description:
      "The RX 6800 XT features 16GB GDDR6 and RDNA 2 architecture, delivering excellent performance in 1440p and 4K games. Includes support for Ray Tracing and Smart Access Memory technology for Ryzen CPUs.",
    brand: "ASRock",
    model: "90-GA28ZZ-00UANF",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Famd-radeon-6800-xt.png?alt=media&token=f2fdddc2-fc6b-4286-8452-10add1ff37f8",
    score: 4.7,
    videoReview: "https://www.youtube.com/embed/ddbpej8sM9s",
    tags: ["Ray Tracing", "16GB GDDR6", "Smart Access Memory"],
    priceBase: 6449.99,
    pricePromotional: 5799.99,
    smallerPrice: 5499.99,
    biggerPrice: 8199.99,
    priceAverage: 5999.99,
    specifications: {
      highlight: "16GB GDDR6",
      "Stream Processors": 4608,
      Connectivity: "HDMI 2.1, DisplayPort 1.4",
      TDP: "300W",
      weight: "2,52 kg",
    },
  },
  {
    id: 24,
    name: "ASUS ROG Strix Z590-E Motherboard",
    description:
      "The ROG Strix Z590-E is a premium motherboard for 11th generation Intel processors, with overclocking support, integrated Wi-Fi 6E, and ASUS Aura Sync RGB lighting.",
    brand: "ASUS",
    model: "ROG STRIX Z590-E GAMING WIFI",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fplaca-mae-asus-rog-strix-z590.png?alt=media&token=85f6951d-ff10-4a86-8000-089162c2f689",
    score: 4.8,
    videoReview: "https://www.youtube.com/embed/toHoH4j25yo",
    tags: ["Wi-Fi 6E", "Overclocking", "RGB"],
    priceBase: 2999.99,
    pricePromotional: 2799.99,
    smallerPrice: 2599.99,
    biggerPrice: 3299.99,
    priceAverage: 2899.99,
    specifications: {
      highlight: "Z590 Chipset",
      Socket: "LGA 1200",
      "Supported RAM": "DDR4 up to 5333MHz",
      weight: "1.2 kg",
    },
  },
  {
    id: 25,
    name: "MSI MAG B550 Tomahawk Motherboard",
    description:
      "The MAG B550 Tomahawk is a robust motherboard for AMD Ryzen CPUs, offering PCIe 4.0 support and optimized thermal design with extended heatsinks for greater stability.",
    brand: "MSI",
    model: "B550 TOMAHAWK",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fplaca-mae-msi-mag-b550.png?alt=media&token=d605f0ca-bac9-4fde-89c6-879909542a03",
    score: 4.7,
    videoReview: "https://www.youtube.com/embed/mv-HByOFJG0",
    tags: ["PCIe 4.0", "Dissipação Avançada", "Suporte Ryzen"],
    priceBase: 1399.99,
    pricePromotional: 999.99,
    smallerPrice: 899.99,
    biggerPrice: 1599.99,
    priceAverage: 1199.99,
    specifications: {
      highlight: "B550 Chipset",
      Socket: "AM4",
      "Supported RAM": "DDR4 up to 4866MHz",
      weight: "2.01 kg",
    },
  },
  {
    id: 26,
    name: "Corsair Vengeance RGB Pro 16GB (2x8GB) RAM",
    description:
      "The Corsair Vengeance RGB Pro kit offers high-level performance for gamers and content creators, with 16GB capacity, 3200MHz frequency, and dynamic RGB lighting.",
    brand: "Corsair",
    model: "CMW16GX4M2C3200C16",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmemoria-corsair-vengeance-rgb-pro-16gb-2x8gb-3200mhz.png?alt=media&token=7dd6698e-8da9-4b0d-9e80-84b716da0c1a",
    score: 4.8,
    videoReview: "https://www.youtube.com/embed/XRkJAV6-gFw",
    tags: ["Alto Desempenho", "RGB", "Dual-Channel"],
    priceBase: 649.99,
    pricePromotional: 299.99,
    smallerPrice: 299.99,
    biggerPrice: 749.99,
    priceAverage: 599.99,
    specifications: {
      highlight: "16GB (2x8GB)",
      Frequency: "3200MHz",
      Compatibility: "Intel and AMD",
      weight: "120 g",
    },
  },
  {
    id: 27,
    name: "Kingston Fury Beast 32GB (2x16GB) RAM",
    description:
      "The Kingston Fury Beast is designed for users who need extra capacity. With 32GB and a frequency of 3200MHz, it is ideal for advanced multitasking and heavy games, maintaining low latency.",
    brand: "Kingston",
    model: "KF436C18BBK2/32",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmemoria-kingston-fury-beast-rgb-32gb-2x16gb-3200mhz.png?alt=media&token=533ffeb2-499b-4e72-87fb-238282dd20da",
    score: 4.7,
    videoReview: "https://www.youtube.com/embed/MTvBo2pSBgQ",
    tags: ["Alta Capacidade", "3200MHz", "Heatsink"],
    priceBase: 999.99,
    pricePromotional: 699.99,
    smallerPrice: 549.99,
    biggerPrice: 1199.99,
    priceAverage: 799.99,
    specifications: {
      highlight: "32GB (2x16GB)",
      Frequency: "3200MHz",
      Compatibility: "Intel and AMD",
      weight: "150 g",
    },
  },
  {
    id: 28,
    name: "Sony PlayStation 5 Slim",
    description:
      "The PlayStation 5 Slim offers next-generation graphics with Ray Tracing support, fast loading times with its custom SSD, and exclusive games that define the platform.",
    brand: "Sony",
    model: "CFI-1015A",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fps5-slim.png?alt=media&token=ed2ca61f-61c6-46bf-bc75-b4155132ca97",
    score: 4.9,
    videoReview: "https://www.youtube.com/embed/bMFC-TM-t5E",
    tags: ["Nova Geração", "Ray Tracing", "Exclusivos"],
    priceBase: 3999.99,
    pricePromotional: 3499.99,
    smallerPrice: 2999.99,
    biggerPrice: 5999.99,
    priceAverage: 3899.99,
    specifications: {
      highlight: "Custom SSD",
      CPU: "AMD Ryzen Zen 2 8 core",
      Storage: "1TB SSD",
      weight: "4.05 kg",
    },
  },

  {
    id: 28,
    name: "Sony PlayStation 5 Slim",
    description:
      "The PlayStation 5 Slim offers next-generation graphics with Ray Tracing support, fast loading times with its custom SSD, and exclusive games that define the platform.",
    brand: "Sony",
    model: "CFI-1015A",
    img: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fps5-slim.png?alt=media&token=ed2ca61f-61c6-46bf-bc75-b4155132ca97",
    score: 4.9,
    videoReview: "https://www.youtube.com/embed/bMFC-TM-t5E",
    tags: ["Nova Geração", "Ray Tracing", "Exclusivos"],
    priceBase: 3999.99,
    pricePromotional: 3499.99,
    smallerPrice: 2999.99,
    biggerPrice: 5999.99,
    priceAverage: 3899.99,
    specifications: {
      highlight: "Custom SSD",
      CPU: "AMD Ryzen Zen 2 8 core",
      Storage: "1TB SSD",
      weight: "4.05 kg",
    },
  },
];

export default products;
