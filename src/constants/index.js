// index.js
export const servicesData = [
  {
    title: "Yapay Zeka Odaklı Geliştirme",
    description:
      "Yapay zekayı sadece bir araç olarak değil, düşünsel bir ortak olarak görüyorum. Projelerimde, kullanıcı ile yapay zeka arasında 'ara yüz değil, ara zihin' kurmayı hedeflerim.",
    items: [
      {
        title: "AI Mimarileri",
        description: "(Prompt Chaining, Function-Calling, Agent Mimarileri)",
      },
      {
        title: "Verimli Prompt Mühendisliği",
        description: "(Kişiselleştirilmiş ve optimize edilmiş promptlar)",
      },
      {
        title: "Entegrasyon",
        description: "(LangChain, Google Generative AI)",
      },
    ],
  },
  {
    title: "Modern Web Teknolojileri",
    description:
      "Hızlı, ölçeklenebilir ve estetik web uygulamaları geliştiriyorum. Kodun sadece çalışması değil, aynı zamanda temiz ve anlaşılır olması gerektiğine inanıyorum.",
    items: [
      {
        title: "Frontend Geliştirme",
        description: "(Next.js, TypeScript, React, TailwindCSS)",
      },
      {
        title: "UI/UX Tasarımı",
        description: "(Figma, Radix UI, Shadcn/UI)",
      },
      {
        title: "Performans Optimizasyonu",
        description: "(Verimli Render, Lighthouse 90+)",
      },
    ],
  },
  {
    title: "Sistem Mimarisi ve Güvenlik",
    description:
      "Her proje, bir problemi çözmekten öte, o problemin altında yatan sistemi anlamakla başlar. Güvenli ve sağlam sistemler kurarak, dijital dünyada değer yaratırım.",
    items: [
      {
        title: "Veri Güvenliği",
        description: "(Şifreleme, Kimlik Doğrulama, Güvenli API)",
      },
      {
        title: "Backend Mimarisi",
        description: "(Supabase, Netlify Functions, Sunucusuz Çözümler)",
      },
      {
        title: "Veritabanı Yönetimi",
        description: "(SQL/NoSQL, Veri Modelleme)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "SkalGPT",
    description:
      "SkalGPT, Sezai Karakoç Anadolu Lisesi’nde geliştirilen ve okul içi bilgi akışını kolaylaştırmayı amaçlayan bir yapay zekâ asistanıdır. Öğrencilerin ve öğretmenlerin etkinlikler, duyurular, sınav tarihleri ve kulüp çalışmaları gibi bilgilere hızlıca erişmesini sağlar. Bu proje sayesinde Sezai Karakoç Anadolu Lisesi, Türkiye’de yapay zekâ destekli ilk lise olma unvanını taşır. Teknolojiyi yalnızca tüketmeyen, onu üreten bir vizyonun ürünü olan SkalGPT, okul yaşamını daha erişilebilir ve verimli hale getirir.",
    href: "https://skalgpt-webui.onrender.com",
    image: "/assets/projects/skalgpt.webp",
    bgImage: "/assets/projects/skalgpt.webp",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "Supabase" },
      { id: 5, name: "LangChain" },
    ],
  },
  {
    id: 2,
    name: "BioCryptor",
    description:
      "Biocryptor, Langflow altyapısıyla düşük kod (low-code) ortamında geliştirilen, yapay zekâ destekli bir genetik şifreleme algoritmasıdır. Sezai Karakoç Anadolu Lisesi’nde geliştirilen bu yenilikçi proje, verileri DNA dizilimlerinden esinlenen bir modelle şifreleyerek farklı ve güçlü bir güvenlik katmanı oluşturur. Kullanıcının açık anahtarı ve sistem zamanı gibi dinamik verileri işleyerek, XOR ve base64 teknikleriyle birleşen özel bir kodlama yapısı sunar. Biocryptor, Türkiye’de lise düzeyinde yapay zekâ algoritmaları ile geliştirilmiş ilk genetik veri şifreleme projelerinden biri olma özelliğini taşır.",
    href: "https://biocryptor.netlify.app",
    image: "/assets/projects/biocryptor.webp",
    bgImage: "/assets/projects/biocryptor.webp",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Netlify Functions" },
      { id: 4, name: "Langflow AI" },
      { id: 5, name: "Shadcn/UI" },
    ],
  },
];
export const socials = [
  { name: "GitHub", href: "https://github.com/Woffluon" },
];
