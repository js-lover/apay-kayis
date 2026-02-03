export const metadata = {
    title: "Kariyer | Apay Kayış",
    description: "Apay Kayış ekibine katılın ve endüstriyel çözümler geliştirmemize yardımcı olun.",
};

export default function KariyerPage() {
    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-3xl font-bold text-industry-dark mb-6">Kariyer</h1>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    Geleceğin endüstriyel çözümlerini birlikte tasarlamak ister misiniz? Yetenekli ve tutkulu iş arkadaşları arıyoruz.
                </p>
                <div className="bg-industry-light p-10 rounded-2xl border border-dashed border-industry-gray">
                    <p className="text-industry-dark font-bold mb-4">Şu an açık pozisyon bulunmamaktadır.</p>
                    <p className="text-sm text-gray-500">Özgeçmişinizi info@apaykayis.com.tr adresine ileterek genel başvuruda bulunabilirsiniz.</p>
                </div>
            </div>
        </div>
    );
}
