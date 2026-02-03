export const metadata = {
    title: "Gizlilik Politikası | Apay Kayış",
    description: "Apay Kayış gizlilik politikası ve veri güvenliği hakkında bilgi edinin.",
};

export default function PrivacyPage() {
    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-3xl font-bold text-industry-dark mb-10">Gizlilik Politikası</h1>
                <div className="prose prose-sm text-gray-600 space-y-6">
                    <p>Son güncelleme: 25 Ocak 2026</p>
                    <p>Apay Kayış olarak, web sitemizi ziyaret eden kullanıcılarımızın gizliliğini korumak en öncelikli hedeflerimizden biridir. Bu politika, hangi verileri topladığımızı ve bunları nasıl kullandığımızı açıklar.</p>
                    <h2 className="text-xl font-bold text-industry-dark mt-8">Veri Toplama</h2>
                    <p>İletişim formları veya teklif formları aracılığıyla paylaştığınız ad, soyad, e-posta ve telefon gibi bilgiler sadece sizinle iletişime geçmek ve taleplerinizi yanıtlamak amacıyla kullanılır.</p>
                    <h2 className="text-xl font-bold text-industry-dark mt-8">Çerezler</h2>
                    <p>Web sitemiz, kullanıcı deneyimini iyileştirmek için temel çerezler kullanmaktadır. Bu çerezler kişisel veri depolamaz.</p>
                </div>
            </div>
        </div>
    );
}
