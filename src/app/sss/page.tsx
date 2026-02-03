export const metadata = {
    title: "Sıkça Sorulan Sorular | Apay Kayış",
    description: "Endüstriyel kayışlar hakkında teknik ve ticari soruların cevapları.",
};

const faqs = [
    { q: "Kayış ölçüsünü nasıl doğru belirlerim?", a: "Hatve (pitch), diş sayısı ve genişlik bilgilerini kumpas yardımıyla ölçerek veya kayış üzerindeki kodu okuyarak belirleyebilirsiniz." },
    { q: "Teslimat süreniz nedir?", a: "Stoklu ürünlerde aynı gün kargo, özel üretim kayışlarda ise genellikle 3-5 iş günü içinde teslimat sağlıyoruz." },
    { q: "Yerinde teknik destek veriyor musunuz?", a: "Evet, mühendis ekibimiz İstanbul ve çevresinde yerinde inceleme yaparak en uygun teknik çözümü önermektedir." },
];

export default function SssPage() {
    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-6 max-w-3xl">
                <h1 className="text-3xl font-bold text-industry-dark mb-12 text-center">Sıkça Sorulan Sorular</h1>
                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={i} className="p-6 border border-gray-100 rounded-xl bg-gray-50">
                            <h3 className="font-bold text-industry-dark mb-3 text-lg">Q: {faq.q}</h3>
                            <p className="text-gray-600">A: {faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
