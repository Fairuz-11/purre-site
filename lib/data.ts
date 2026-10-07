/* ============================================
   PUREE — Data Layer
   All static site data lives here.
   ============================================ */

/* --- Types / Interfaces --- */

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceWorkStep {
  number: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  /** Display number e.g. "01" */
  number: string;
  title: string;
  slug: string;
  /** Short one-liner for cards and listings */
  shortDescription: string;
  /** Longer body copy for detail page */
  description: string;
  /** Lucide icon name */
  icon: string;
  /** Scope-of-service items */
  features: string[];
  /** Hero image path for detail page */
  image: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  location: string;
  year: number;
  description: string;
  /** Path relative to /public/images/projects/ */
  coverImage: string;
  featured: boolean;
}

export interface FeaturedProject {
  id: string;
  title: string;
  slug: string;
  category: string;
  location: string;
  /** /images/projects/... */
  image: string;
  /** "large" = hero card, "small" = side card */
  size: "large" | "small";
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  founded: number;
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  socialMedia: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}

/* --- Navigation --- */

export const navigation: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "Layanan", href: "/layanan" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Kontak", href: "/kontak" },
];

export const ctaNavigation: NavItem = {
  label: "Konsultasi Proyek",
  href: "/kontak",
};

/* --- Services --- */

export const services: Service[] = [
  {
    id: "kontraktor-bangunan",
    number: "01",
    title: "Jasa Kontraktor Bangunan",
    slug: "kontraktor-bangunan",
    shortDescription:
      "Solusi pembangunan yang terencana dengan perhatian terhadap kualitas, fungsi, dan detail pengerjaan.",
    description:
      "PUREE membantu mewujudkan kebutuhan pembangunan melalui proses kerja yang terstruktur, mulai dari persiapan hingga tahap penyelesaian.",
    icon: "building-2",
    image: "/images/services/kontraktor-bangunan.jpg",
    features: [
      "Perencanaan pekerjaan",
      "Pelaksanaan konstruksi",
      "Pengawasan kualitas",
      "Koordinasi pengerjaan",
      "Penyelesaian dan finishing",
    ],
  },
  {
    id: "renovasi-bangunan",
    number: "02",
    title: "Jasa Renovasi Bangunan",
    slug: "renovasi-bangunan",
    shortDescription:
      "Memberikan wajah baru pada bangunan dengan mempertimbangkan fungsi, kebutuhan, dan karakter ruang.",
    description:
      "PUREE menangani kebutuhan renovasi dengan pendekatan yang mempertimbangkan kondisi bangunan, kebutuhan pengguna, serta tujuan desain.",
    icon: "hammer",
    image: "/images/services/renovasi-bangunan.jpg",
    features: [
      "Renovasi ruang",
      "Perubahan layout",
      "Perbaikan bangunan",
      "Upgrade finishing",
      "Optimalisasi fungsi ruang",
    ],
  },
  {
    id: "desain-arsitektur",
    number: "03",
    title: "Jasa Desain Arsitektur",
    slug: "desain-arsitektur",
    shortDescription:
      "Perencanaan arsitektur yang menggabungkan fungsi, estetika, dan karakter setiap kebutuhan proyek.",
    description:
      "PUREE membantu menerjemahkan kebutuhan dan ide menjadi konsep arsitektur yang terarah, fungsional, dan memiliki karakter.",
    icon: "drafting-compass",
    image: "/images/services/desain-arsitektur.jpg",
    features: [
      "Konsultasi konsep",
      "Site planning",
      "Konsep desain",
      "Pengembangan desain",
      "Dokumentasi desain",
    ],
  },
  {
    id: "desain-interior",
    number: "04",
    title: "Jasa Desain Interior",
    slug: "desain-interior",
    shortDescription:
      "Menciptakan ruang interior yang nyaman, fungsional, dan memiliki karakter visual yang kuat.",
    description:
      "PUREE menghadirkan pendekatan interior yang mempertimbangkan fungsi ruang, kebutuhan pengguna, material, dan suasana yang ingin dibangun.",
    icon: "sofa",
    image: "/images/services/desain-interior.jpg",
    features: [
      "Konsep interior",
      "Space planning",
      "Pemilihan material",
      "Furniture planning",
      "Detail interior",
    ],
  },
];

/* --- Generic service work steps (shared across all service detail pages) --- */

export const serviceWorkSteps: ServiceWorkStep[] = [
  {
    number: "01",
    title: "Consultation",
    description: "Memahami kebutuhan dan tujuan proyek.",
  },
  {
    number: "02",
    title: "Planning",
    description: "Menyusun konsep dan rencana pengerjaan.",
  },
  {
    number: "03",
    title: "Execution",
    description: "Melaksanakan pekerjaan sesuai rencana.",
  },
  {
    number: "04",
    title: "Completion",
    description: "Melakukan final checking dan penyelesaian.",
  },
];

/* --- Projects (placeholder data) --- */

export const projects: Project[] = [
  {
    id: "project-001",
    title: "Kantor Pusat PT Nusantara",
    slug: "kantor-pusat-pt-nusantara",
    category: "Konstruksi Komersial",
    location: "Jakarta Selatan",
    year: 2024,
    description:
      "Pembangunan gedung kantor 5 lantai dengan konsep modern industrial.",
    coverImage: "/images/projects/placeholder-1.jpg",
    featured: true,
  },
  {
    id: "project-002",
    title: "Villa Amanah Bali",
    slug: "villa-amanah-bali",
    category: "Konstruksi Residensial",
    location: "Seminyak, Bali",
    year: 2024,
    description:
      "Villa premium dengan arsitektur tropis kontemporer dan material lokal pilihan.",
    coverImage: "/images/projects/placeholder-2.jpg",
    featured: true,
  },
  {
    id: "project-003",
    title: "Renovasi Ruko Grand Galaxy",
    slug: "renovasi-ruko-grand-galaxy",
    category: "Renovasi",
    location: "Bekasi",
    year: 2023,
    description:
      "Renovasi total ruko 3 lantai menjadi showroom modern dengan fasad baru.",
    coverImage: "/images/projects/placeholder-3.jpg",
    featured: false,
  },
  {
    id: "project-004",
    title: "Interior Apartemen Sudirman",
    slug: "interior-apartemen-sudirman",
    category: "Desain Interior",
    location: "Jakarta Pusat",
    year: 2023,
    description:
      "Desain interior unit apartemen 2 kamar dengan konsep minimalis modern.",
    coverImage: "/images/projects/placeholder-4.jpg",
    featured: true,
  },
];

/* --- Company Info --- */

export const companyInfo: CompanyInfo = {
  name: "PUREE",
  tagline: "Building with Purpose.",
  description:
    "Solusi konstruksi, renovasi, arsitektur, dan interior untuk membangun ruang yang berkualitas.",
  founded: 2015,
  address: "Malang, Jawa Timur, Indonesia",
  phone: "+62 812-0000-0000",
  email: "info@puree.co.id",
  whatsapp: "+62 812 0000 0000",
  socialMedia: {
    instagram: "https://instagram.com/puree.id",
    facebook: "https://facebook.com/puree.id",
    linkedin: "https://linkedin.com/company/puree-id",
  },
};

/* --- Homepage service preview (shorter copy for cards) --- */

export interface ServicePreview {
  id: string;
  number: string;
  title: string;
  slug: string;
  description: string;
}

export const servicesPreviews: ServicePreview[] = services.map((s, i) => ({
  id: s.id,
  number: s.number,
  title: s.title,
  slug: s.slug,
  description: s.shortDescription,
}));

/* --- Featured projects for homepage --- */

export const featuredProjects: FeaturedProject[] = [
  {
    id: "fp-01",
    title: "Modern Residence",
    slug: "modern-residence",
    category: "Residensial",
    location: "Malang",
    image: "/images/projects/project-01.jpg",
    size: "large",
  },
  {
    id: "fp-02",
    title: "Commercial Space",
    slug: "commercial-space",
    category: "Komersial",
    location: "Malang",
    image: "/images/projects/project-02.jpg",
    size: "small",
  },
  {
    id: "fp-03",
    title: "Contemporary Interior",
    slug: "contemporary-interior",
    category: "Interior",
    location: "Malang",
    image: "/images/projects/project-03.jpg",
    size: "small",
  },
];

export interface FooterServiceItem {
  label: string;
  href: string;
}

export const footerServices: FooterServiceItem[] = [
  { label: "Jasa Kontraktor Bangunan", href: "/layanan/kontraktor-bangunan" },
  { label: "Jasa Renovasi Bangunan",   href: "/layanan/renovasi-bangunan"   },
  { label: "Jasa Desain Arsitektur",   href: "/layanan/desain-arsitektur"   },
  { label: "Jasa Desain Interior",     href: "/layanan/desain-interior"     },
];

/* --- Footer legal links --- */

export interface FooterLegalItem {
  label: string;
  href: string;
}

export const footerLegal: FooterLegalItem[] = [
  { label: "Privacy Policy",    href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

/* --- About page data --- */

export const companyVision =
  "Menjadi partner terpercaya dalam menghadirkan solusi konstruksi dan desain yang berkualitas, fungsional, dan memiliki nilai jangka panjang.";

export const companyMission: string[] = [
  "Mengutamakan kualitas dalam setiap proses pekerjaan.",
  "Menghadirkan solusi yang sesuai dengan kebutuhan dan karakter setiap proyek.",
  "Menjalankan proses kerja yang profesional, terstruktur, dan transparan.",
  "Membangun hubungan jangka panjang melalui komunikasi dan kepercayaan.",
];

export interface CoreValue {
  number: string;
  title: string;
  description: string;
}

export const coreValues: CoreValue[] = [
  {
    number: "01",
    title: "Quality",
    description:
      "Memberikan perhatian terhadap kualitas dari proses hingga hasil akhir.",
  },
  {
    number: "02",
    title: "Integrity",
    description:
      "Menjalankan pekerjaan dengan tanggung jawab, keterbukaan, dan kejujuran.",
  },
  {
    number: "03",
    title: "Precision",
    description:
      "Memperhatikan detail untuk menghasilkan pekerjaan yang terukur dan konsisten.",
  },
  {
    number: "04",
    title: "Collaboration",
    description:
      "Membangun komunikasi dan kolaborasi yang baik dengan klien dan seluruh pihak yang terlibat.",
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description: "Memahami kebutuhan, tujuan, dan karakter proyek.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Menyusun konsep, perencanaan, dan strategi pengerjaan.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Melaksanakan pekerjaan dengan perhatian terhadap kualitas dan detail.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Menyelesaikan proyek dengan komunikasi dan evaluasi yang terarah.",
  },
];

/* ============================================
   Portfolio — full project data
   Used by /portofolio and /portofolio/[slug]
   ============================================ */

export type PortfolioCategory =
  | "Residential"
  | "Commercial"
  | "Interior"
  | "Renovation";

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  category: PortfolioCategory;
  location: string;
  year: string;
  /** Short caption used in grid cards */
  shortDescription: string;
  /** Longer copy for detail page overview */
  description: string;
  /** Primary image — grid card + hero */
  image: string;
  /** Gallery images (including primary) */
  gallery: string[];
  /** Service titles involved */
  services: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "pp-01",
    slug: "modern-residence",
    title: "Modern Residence",
    category: "Residential",
    location: "Malang",
    year: "2026",
    shortDescription:
      "Hunian modern dengan pendekatan arsitektur yang bersih dan fungsional.",
    description:
      "Project ini merepresentasikan pendekatan desain dan pembangunan yang menempatkan kebutuhan pengguna, fungsi ruang, serta kualitas detail sebagai bagian penting dari proses.",
    image: "/images/projects/project-01.jpg",
    gallery: [
      "/images/projects/project-01.jpg",
      "/images/projects/project-01-02.jpg",
      "/images/projects/project-01-03.jpg",
    ],
    services: ["Jasa Kontraktor Bangunan", "Jasa Desain Arsitektur"],
  },
  {
    id: "pp-02",
    slug: "contemporary-house",
    title: "Contemporary House",
    category: "Residential",
    location: "Malang",
    year: "2025",
    shortDescription:
      "Rumah tinggal dengan karakter kontemporer dan material pilihan.",
    description:
      "Project ini merepresentasikan pendekatan desain dan pembangunan yang menempatkan kebutuhan pengguna, fungsi ruang, serta kualitas detail sebagai bagian penting dari proses.",
    image: "/images/projects/project-02.jpg",
    gallery: [
      "/images/projects/project-02.jpg",
      "/images/projects/project-02-02.jpg",
      "/images/projects/project-02-03.jpg",
    ],
    services: ["Jasa Kontraktor Bangunan", "Jasa Desain Arsitektur"],
  },
  {
    id: "pp-03",
    slug: "commercial-space",
    title: "Commercial Space",
    category: "Commercial",
    location: "Malang",
    year: "2025",
    shortDescription:
      "Ruang komersial yang dirancang untuk mendukung produktivitas dan citra brand.",
    description:
      "Project ini merepresentasikan pendekatan desain dan pembangunan yang menempatkan kebutuhan pengguna, fungsi ruang, serta kualitas detail sebagai bagian penting dari proses.",
    image: "/images/projects/project-03.jpg",
    gallery: [
      "/images/projects/project-03.jpg",
      "/images/projects/project-03-02.jpg",
      "/images/projects/project-03-03.jpg",
    ],
    services: ["Jasa Kontraktor Bangunan", "Jasa Desain Interior"],
  },
  {
    id: "pp-04",
    slug: "modern-office",
    title: "Modern Office",
    category: "Commercial",
    location: "Malang",
    year: "2024",
    shortDescription:
      "Kantor modern dengan tata ruang yang efisien dan suasana kerja yang mendukung.",
    description:
      "Project ini merepresentasikan pendekatan desain dan pembangunan yang menempatkan kebutuhan pengguna, fungsi ruang, serta kualitas detail sebagai bagian penting dari proses.",
    image: "/images/projects/project-04.jpg",
    gallery: [
      "/images/projects/project-04.jpg",
      "/images/projects/project-04-02.jpg",
      "/images/projects/project-04-03.jpg",
    ],
    services: ["Jasa Desain Arsitektur", "Jasa Desain Interior"],
  },
  {
    id: "pp-05",
    slug: "minimalist-interior",
    title: "Minimalist Interior",
    category: "Interior",
    location: "Malang",
    year: "2024",
    shortDescription:
      "Interior minimalis yang mengutamakan kenyamanan, fungsi, dan detail material.",
    description:
      "Project ini merepresentasikan pendekatan desain dan pembangunan yang menempatkan kebutuhan pengguna, fungsi ruang, serta kualitas detail sebagai bagian penting dari proses.",
    image: "/images/projects/project-05.jpg",
    gallery: [
      "/images/projects/project-05.jpg",
      "/images/projects/project-05-02.jpg",
      "/images/projects/project-05-03.jpg",
    ],
    services: ["Jasa Desain Interior"],
  },
  {
    id: "pp-06",
    slug: "renovation-project",
    title: "Renovation Project",
    category: "Renovation",
    location: "Malang",
    year: "2023",
    shortDescription:
      "Renovasi bangunan yang memperbarui fungsi dan tampilan dengan pendekatan yang terstruktur.",
    description:
      "Project ini merepresentasikan pendekatan desain dan pembangunan yang menempatkan kebutuhan pengguna, fungsi ruang, serta kualitas detail sebagai bagian penting dari proses.",
    image: "/images/projects/project-06.jpg",
    gallery: [
      "/images/projects/project-06.jpg",
      "/images/projects/project-06-02.jpg",
      "/images/projects/project-06-03.jpg",
    ],
    services: ["Jasa Renovasi Bangunan", "Jasa Desain Interior"],
  },
];

export const portfolioCategories: Array<{
  value: PortfolioCategory | "All";
  label: string;
}> = [
  { value: "All", label: "All" },
  { value: "Residential", label: "Residential" },
  { value: "Commercial", label: "Commercial" },
  { value: "Interior", label: "Interior" },
  { value: "Renovation", label: "Renovation" },
];
