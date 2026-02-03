import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
    title: "İletişim | Apay Kayış",
    description: "Bize ulaşın. Endüstriyel kayış çözümleri için teknik destek ve teklif taleplerinizi bekliyoruz.",
};

export default function ContactPage() {
    return (
        <div className="bg-white">
            <section className="bg-industry-dark py-20 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl font-bold mb-4">İletişim</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Sorularınız, teknik destek talepleriniz veya teklif istekleriniz için yanınızdayız.
                    </p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-apay-red opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-industry-dark mb-8">İletişim Bilgilerimiz</h2>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-apay-red">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-industry-dark">Adres</p>
                                            <p className="text-sm text-gray-600">İkitelli O.S.B. Dolapdere San. Sit. 2. Ada No: 1, Başakşehir / İstanbul</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-apay-red">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-industry-dark">Telefon / WhatsApp</p>
                                            <p className="text-sm text-gray-600">+90 (212) XXX XX XX</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-apay-red">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-industry-dark">E-Posta</p>
                                            <p className="text-sm text-gray-600">info@apaykayis.com.tr</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-apay-red">
                                            <Clock size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-industry-dark">Çalışma Saatleri</p>
                                            <p className="text-sm text-gray-600">Hafta İçi: 09:00 - 18:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Component */}
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
