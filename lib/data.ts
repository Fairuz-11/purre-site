/* ============================================
   PUREE — Data Layer
   All static site data lives here.
   ============================================ */

/* --- Types / Interfaces --- */

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  /** Lucide icon name, e.g. "building-2" */
  icon: string;
  features: string[];
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
    title: "Jasa Kontraktor Bangunan",
    slug: "kontraktor-bangunan",
    description:
      "Pembangunan gedung, hunian, dan fasilitas komersial dengan standar konstruksi tinggi dan material berkualitas.",
    icon: "building-2",
    features: [
      "Perencanaan struktur",
      "Pengawasan lapangan",
      "Manajemen proyek",
      "Garansi konstruksi",
    ],
  },
  {
    id: "renovasi-bangunan",
    title: "Jasa Renovasi Bangunan",
    slug: "renovasi-bangunan",
    description:
      "Transformasi ruang eksisting menjadi lebih fungsional, estetis, dan bernilai tinggi sesuai kebutuhan Anda.",
    icon: "hammer",
    features: [
      "Analisa kondisi eksisting",
      "Desain renovasi",
      "Eksekusi renovasi",
      "Finishing premium",
    ],
  },
  {
    id: "desain-arsitektur",
    title: "Jasa Desain Arsitektur",
    slug: "desain-arsitektur",
    description:
      "Perancangan arsitektur yang menggabungkan fungsi optimal, estetika kontemporer, dan efisiensi biaya.",
    icon: "drafting-compass",
    features: [
      "Konsep desain",
      "Gambar kerja lengkap",
      "IMB & perizinan",
      "Visualisasi 3D",
    ],
  },
  {
    id: "desain-interior",
    title: "Jasa Desain Interior",
    slug: "desain-interior",
    description:
      "Perancangan interior yang mencerminkan karakter penghuni dengan pemilihan material dan furnitur yang tepat.",
    icon: "sofa",
    features: [
      "Konsep interior",
      "Pemilihan material",
      "Tata cahaya",
      "Furnitur custom",
    ],
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

/* --- Footer service links --- */

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
