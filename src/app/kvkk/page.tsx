export const metadata = {
    title: "KVKK Aydınlatma Metni | Apay Kayış",
    description: "6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca aydınlatma metni.",
};

export default function KvkkPage() {
    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-3xl font-bold text-industry-dark mb-10">KVKK Aydınlatma Metni</h1>
                <div className="prose prose-sm text-gray-600 space-y-6">
                    <p>Apay Kayış Sanayi ve Ticaret A.Ş. olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz.</p>
                    <h2 className="text-xl font-bold text-industry-dark mt-8">Veri Sorumlusu</h2>
                    <p>Kişisel verileriniz, veri sorumlusu sıfatıyla Apay Kayış tarafından işlenmektedir.</p>
                    <h2 className="text-xl font-bold text-industry-dark mt-8">Haklarınız</h2>
                    <p>Kanun uyarınca, verilerinizin işlenip işlenmediğini öğrenme, işlenme amacını sorma ve düzeltilmesini talep etme haklarına sahipsiniz.</p>
                </div>
            </div>
        </div>
    );
}
