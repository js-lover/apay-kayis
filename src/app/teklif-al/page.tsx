import QuoteForm from "@/components/products/QuoteForm";

export const metadata = {
    title: "Teklif Al | Apay Kayış",
    description: "Endüstriyel ürünlerimiz için hızlı teklif talebinde bulunun.",
};

export default function QuotePage() {
    return (
        <div className="bg-white">
            <section className="bg-industry-dark py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold mb-4">Hızlı Teklif İste</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">Projeleriniz için en uygun fiyat ve teknik detayları uzman ekibimizden alın.</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-50">
                        <div className="bg-apay-red py-4 px-8 text-white text-sm font-bold">
                            Genel Teklif Formu
                        </div>
                        <div className="p-8">
                            <QuoteForm productTitle="Genel Teklif Talebi" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
