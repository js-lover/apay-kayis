import { Factory, Truck, ShoppingCart, Cog, Zap, Package } from "lucide-react";

export const metadata = {
    title: "Sektörler | Apay Kayış",
    description: "Apay Kayış ürünlerinin kullanıldığı endüstriyel sektörler. Gıda, Tekstil, Otomotiv ve daha fazlası.",
};

const sectors = [
    { name: "Gıda ve İçecek", icon: <Package />, desc: "Hijyenik ve yüksek performanslı gıda taşıma sistemleri." },
    { name: "Tekstil ve Deri", icon: <Zap />, desc: "Hassas ve yüksek devirli makine kayışları." },
    { name: "Otomotiv", icon: <Factory />, desc: "Ağır hizmet tipi güç aktarma bileşenleri." },
    { name: "Lojistik ve Depolama", icon: <Truck />, desc: "Konveyör sistemleri ve otomatik depo çözümleri." },
    { name: "Sarma ve Ambalaj", icon: <ShoppingCart />, desc: "Hızlı hatlar için özel kaplamalı çekici kayışlar." },
    { name: "Genel İmalat", icon: <Cog />, desc: "Mühendislik temelli endüstriyel makine çözümleri." },
];

export default function SectorsPage() {
    return (
        <div className="bg-white">
            <section className="bg-industry-dark py-20 text-white relative">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl font-bold mb-4">Hizmet Verdiğimiz Sektörler</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Her sektörün kendine has ihtiyaçlarına yönelik mühendislik çözümleri sunuyoruz.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {sectors.map((sector, i) => (
                            <div key={i} className="group p-10 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all hover:shadow-xl">
                                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center text-apay-red mb-8 group-hover:bg-apay-red group-hover:text-white transition-all">
                                    {sector.icon}
                                </div>
                                <h2 className="text-xl font-bold text-industry-dark mb-4">{sector.name}</h2>
                                <p className="text-gray-600 leading-relaxed">{sector.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
