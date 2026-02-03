"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function QuoteForm({ productTitle }: { productTitle: string }) {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(false);

        if (!formRef.current) return;

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_QUOTE || "",
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
            )
            .then(
                () => {
                    setSubmitted(true);
                    setLoading(false);
                },
                (err) => {
                    console.error("EmailJS Error:", err);
                    setError(true);
                    setLoading(false);
                }
            );
    };

    if (submitted) {
        return (
            <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    ✓
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Talebiniz Alındı</h3>
                <p className="text-green-700 text-sm">
                    Teknik ekibimiz en kısa sürede sizinle iletişime geçecektir.
                </p>
            </div>
        );
    }

    return (
        <div id="teklif-formu" className="bg-gray-50 dark:bg-industry-gray border border-gray-200 dark:border-white/10 p-8 rounded-xl transition-colors">
            <h3 className="text-xl font-bold text-industry-dark dark:text-white mb-2">Teklif İste</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-8 italic">
                * {productTitle} için teknik detaylar ve fiyat bilgisi.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {/* Hidden inputs for single-template consistency */}
                <input type="hidden" name="form_type" value="Teklif Talebi" />
                <input type="hidden" name="subject" value={`Ürün Teklif Talebi: ${productTitle}`} />
                <input type="hidden" name="product_name" value={productTitle} />

                <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">Ad Soyad</label>
                    <input
                        name="user_name"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-white/20 bg-white dark:bg-industry-dark text-industry-dark dark:text-white focus:ring-2 focus:ring-apay-red focus:border-transparent outline-none transition-all text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500"
                        placeholder="Örn: Ahmet Yılmaz"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">E-Posta</label>
                        <input
                            name="user_email"
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-white/20 bg-white dark:bg-industry-dark text-industry-dark dark:text-white focus:ring-2 focus:ring-apay-red focus:border-transparent outline-none transition-all text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500"
                            placeholder="ahmet@sirket.com"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">Telefon</label>
                        <input
                            name="user_phone"
                            type="tel"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-white/20 bg-white dark:bg-industry-dark text-industry-dark dark:text-white focus:ring-2 focus:ring-apay-red focus:border-transparent outline-none transition-all text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500"
                            placeholder="05XX XXX XX XX"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">Notunuz (Ölçü, Adet vb.)</label>
                    <textarea
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-white/20 bg-white dark:bg-industry-dark text-industry-dark dark:text-white focus:ring-2 focus:ring-apay-red focus:border-transparent outline-none transition-all text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500"
                        placeholder="İhtiyacınız olan ölçü ve miktarı belirtiniz..."
                    ></textarea>
                </div>

                {error && (
                    <p className="text-red-500 text-xs font-bold">Bir hata oluştu, lütfen daha sonra tekrar deneyin.</p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-apay-red hover:bg-apay-red-dark text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {loading ? 'Gönderiliyor...' : 'Hızlı Teklif Al'}
                </button>
            </form>
        </div>
    );
}
