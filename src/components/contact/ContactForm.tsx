"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
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
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT || "",
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

    return (
        <div className="lg:col-span-2 bg-gray-50 dark:bg-industry-gray p-8 rounded-2xl border border-gray-100 dark:border-white/10 transition-colors">
            {submitted ? (
                <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">✓</div>
                    <h2 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-4">Mesajınız İletildi</h2>
                    <p className="text-green-700 dark:text-green-300">En kısa sürede size geri dönüş yapacağız.</p>
                </div>
            ) : (
                <>
                    <h2 className="text-2xl font-bold text-industry-dark dark:text-white mb-8">Mesaj Gönderin</h2>
                    <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Hidden inputs for single-template consistency */}
                        <input type="hidden" name="form_type" value="İletişim Mesajı" />
                        <input type="hidden" name="product_name" value="N/A (Genel İletişim)" />

                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-2">Ad Soyad</label>
                            <input
                                name="user_name"
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-industry-dark text-industry-dark dark:text-white outline-none focus:ring-2 focus:ring-apay-red transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-2">E-Posta</label>
                            <input
                                name="user_email"
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-industry-dark text-industry-dark dark:text-white outline-none focus:ring-2 focus:ring-apay-red transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-2">Telefon</label>
                            <input
                                name="user_phone"
                                type="tel"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-industry-dark text-industry-dark dark:text-white outline-none focus:ring-2 focus:ring-apay-red transition-all"
                                placeholder="05XX XXX XX XX"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-2">Konu</label>
                            <input
                                name="subject"
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-industry-dark text-industry-dark dark:text-white outline-none focus:ring-2 focus:ring-apay-red transition-all"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-2">Mesajınız</label>
                            <textarea
                                name="message"
                                rows={5}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-industry-dark text-industry-dark dark:text-white outline-none focus:ring-2 focus:ring-apay-red transition-all"
                            ></textarea>
                        </div>

                        {error && (
                            <div className="md:col-span-2 text-red-500 text-sm font-bold">Bir hata oluştu, lütfen info@apaykayis.com.tr adresini deneyin.</div>
                        )}

                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`bg-apay-red text-white font-bold px-10 py-4 rounded-lg hover:bg-apay-red-dark transition-all shadow-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {loading ? 'Gönderiliyor...' : 'Gönder'}
                            </button>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
}
