export interface Category {
    title: string;
    slug: string;
    description?: string;
    parent?: string;
}

export interface Product {
    title: string;
    slug: string;
    sku: string;
    category: string;
    image: string;
    description: string;
    specifications: { label: string; value: string }[];
    pdfUrl?: string;
}

export const CATEGORIES: Category[] = [
    { title: "Zaman Kayışları", slug: "zaman-kayislari", description: "Hassas senkronizasyon ve konumlama gerektiren yüksek performanslı sistemler için." },
    { title: "Dişli Kayışlar", slug: "disli-kayislar", description: "Yüksek tork aktarımı ve ağır hizmet tipi endüstriyel çözümler." },
    { title: "V-Kayışları", slug: "v-kayislari", description: "Klasik, dar ve tırtıllı tip güç aktarma kayışları." },
    { title: "Özel Kaplamalı Kayışlar", slug: "ozel-kaplamali", description: "Linatex, PVC ve Sünger kaplamalı taşıma ve çekme çözümleri." },
];

export const PRODUCTS: Product[] = [
    {
        title: "T10 Çelik Kordlu Zaman Kayışı",
        slug: "t10-celik-kordlu-zaman-kayisi",
        sku: "ZP-T10-STEEL",
        category: "zaman-kayislari",
        image: "/apay-kayis/timing_belts.png",
        description: "Yüksek gerilme direnci ve minimum uzama için çelik kord takviyeli poliüretan zaman kayışı. Hassas doğrusal hareketler için idealdir.",
        specifications: [
            { label: "Hatve (Pitch)", value: "10 mm" },
            { label: "Profil", value: "T10 (Trapez)" },
            { label: "Malzeme", value: "Poliüretan / Çelik Kord" },
            { label: "Sertlik", value: "92 Shore A" },
            { label: "Sıcaklık Aralığı", value: "-30°C / +80°C" },
        ],
        pdfUrl: "/apay-kayis/kataloglar",
    },
    {
        title: "8M Dişli Kayış (HTD)",
        slug: "8m-disli-kayis-htd",
        sku: "HTD-8M-RUBBER",
        category: "disli-kayislar",
        image: "/apay-kayis/gear_belts.png",
        description: "Yüksek verimlilik sağlayan kavisli diş yapısına sahip HTD serisi kauçuk güç aktarma kayışı. Ağır sanayi makinelerinde sessiz ve verimli çalışma sağlar.",
        specifications: [
            { label: "Hatve (Pitch)", value: "8 mm" },
            { label: "Diş Profili", value: "HTD (Kavisli)" },
            { label: "Malzeme", value: "Neopren / Cam Elyaf" },
            { label: "Verimlilik", value: "%98" },
            { label: "Maks. Hız", value: "50 m/s" },
        ],
        pdfUrl: "/apay-kayis/kataloglar",
    },
    {
        title: "Dar Kesitli V-Kayışı (SPA/SPB)",
        slug: "dar-kesitli-v-kayisi",
        sku: "V-BELT-SPB",
        category: "v-kayislari",
        image: "/apay-kayis/v_belts.png",
        description: "Klasik V-kayışlarına kıyasla daha yüksek güç iletim kapasitesi sunan, dar kesitli endüstriyel V-kayışı. Yer tasarrufu sağlayan kompakt tasarımlar için uygundur.",
        specifications: [
            { label: "Profil", value: "SPB (Dar Kesit)" },
            { label: "Standart", value: "DIN 7753" },
            { label: "Malzeme", value: "Kauçuk / Polyester Kord" },
            { label: "Özellik", value: "Antistatik, Yağa Dayanıklı" },
            { label: "Sıcaklık Aralığı", value: "-30°C / +80°C" },
        ],
        pdfUrl: "/apay-kayis/kataloglar",
    },
    {
        title: "Linatex Kaplamalı Zaman Kayışı",
        slug: "linatex-kaplamali-kayis",
        sku: "COAT-LIN-40",
        category: "ozel-kaplamali",
        image: "/apay-kayis/coated_belts.png",
        description: "Zaman kayışları üzerine uygulanan 40 Shore A sertliğinde kırmızı Linatex kaplama. Yüksek sürtünme ve aşınma direnci ile cam ve paketleme sektöründe çekici kayış olarak kullanılır.",
        specifications: [
            { label: "Kaplama Tipi", value: "Linatex (Doğal Kauçuk)" },
            { label: "Sertlik", value: "40 Shore A" },
            { label: "Kalınlık", value: "2 mm - 10 mm" },
            { label: "Uygulama Alanı", value: "Cam, Seramik, Paketleme" },
        ],
        pdfUrl: "/apay-kayis/kataloglar",
    },
];
