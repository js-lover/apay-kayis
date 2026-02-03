import Image from "next/image";

export const metadata = {
    title: "Hakkımızda | Apay Kayış",
    description: "Apay Kayış'ın hikayesi, vizyonu ve endüstriyel liderliği hakkında daha fazla bilgi edinin.",
};

export default function AboutPage() {
    return (
        <div className="bg-white">
            <section className="relative bg-industry-dark py-32 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/industrial_conveyor_belts_hero.png"
                        alt="Endüstriyel Arka Plan"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Hakkımızda</h1>
                    <div className="w-20 h-1.5 bg-apay-red mx-auto mb-6" />
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg italic">
                        "Çeyrek asırlık tecrübeyle endüstrinin her adımında güven ve güç sağlıyoruz."
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl font-bold text-industry-dark mb-8 border-l-8 border-apay-red pl-6">
                                20 Yıldır Endüstrinin Kalbindeyiz
                            </h2>
                            <div className="prose prose-lg text-gray-600 space-y-6">
                                <p>
                                    Apay Kayış, 2000'li yılların başından bu yana endüstriyel güç aktarma sistemleri ve konveyör bileşenleri konusunda uzmanlaşmış, Türkiye'nin önde gelen mühendislik firmalarından biridir.
                                </p>
                                <p>
                                    Geniş ürün yelpazemiz, teknik bilgi birikimimiz ve müşteri odaklı yaklaşımımızla, tekstilden otomotiğe, gıdadan ambalaja kadar birçok farklı sektöre değer katıyoruz. Amacımız sadece ürün satmak değil, müşterilerimizin üretim süreçlerini en verimli hale getirecek teknik çözümleri sunmaktır.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100">
                            <Image
                                src="/gear_belts.png"
                                alt="Apay Kayış Endüstriyel Çözümler"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-6xl mx-auto">
                        <div className="p-10 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 text-apay-red group-hover:bg-apay-red group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-xl text-industry-dark mb-3">Kalite Standartları</h3>
                            <p className="text-gray-600 leading-relaxed">
                                ISO 9001 ve Avrupa standartlarında üretim süreçleri ile ödünsüz kalite takibi sağlıyoruz.
                            </p>
                        </div>

                        <div className="p-10 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 text-apay-red group-hover:bg-apay-red group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-xl text-industry-dark mb-3">Teknik Destek</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Uzman mühendis kadromuzla projeleriniz için en verimli güç aktarma tasarımlarını geliştiriyoruz.
                            </p>
                        </div>

                        <div className="p-10 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all group">
                            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 text-apay-red group-hover:bg-apay-red group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-xl text-industry-dark mb-3">Hızlı Stok</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Türkiye geneline yayılan lojistik ağımızla ihtiyaçlarınıza anında ve güvenilir çözümler üretiyoruz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
