import { FileText, Download } from "lucide-react";

export const metadata = {
    title: "Kataloglar | Apay Kayış",
    description: "Endüstriyel zaman kayışları ve dişli kayışlar için teknik kataloglarımızı indirin.",
};

const catalogs = [
    { name: "Genel Ürün Kataloğu 2024", size: "12.4 MB", type: "PDF" },
    { name: "Zaman Kayışı Teknik Veri Kitabı", size: "8.1 MB", type: "PDF" },
    { name: "V-Kayış Ölçüm ve Seçim Tablosu", size: "4.5 MB", type: "PDF" },
    { name: "Özel Kaplamalı Kayış Sistemleri", size: "15.2 MB", type: "PDF" },
];

export default function CatalogsPage() {
    return (
        <div className="bg-white">
            <section className="bg-industry-dark py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold mb-4">Teknik Kataloglar</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">Tüm ürünlerimizin detaylı teknik verilerine buradan ulaşabilirsiniz.</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid gap-6">
                        {catalogs.map((catalog, i) => (
                            <div key={i} className="flex items-center justify-between p-6 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all">
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
                                        <FileText size={28} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-industry-dark">{catalog.name}</h3>
                                        <p className="text-xs text-gray-400 mt-1">{catalog.type} • {catalog.size}</p>
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 bg-apay-red text-white font-bold px-6 py-3 rounded-lg hover:bg-apay-red-dark transition-all shadow-sm">
                                    <Download size={18} /> İndir
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
