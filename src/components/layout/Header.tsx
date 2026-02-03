"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const navigation = [
    { name: "Anasayfa", href: "/" },
    { name: "Ürünler", href: "/urunler" },
    { name: "Sektörler", href: "/sektorler" },
    { name: "Kataloglar", href: "/kataloglar" },
    { name: "İletişim", href: "/iletisim" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white border-b border-industry-light sticky top-0 z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                        <span className="sr-only">Apay Kayış</span>
                        <Logo className="h-14 w-auto" />
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Menüyü aç</span>
                        {mobileMenuOpen ? (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>

                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-industry-dark hover:text-apay-red transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link
                        href="/teklif-al"
                        className="rounded-md bg-apay-red px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-apay-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apay-red transition-all"
                    >
                        Teklif Al <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-industry-light">
                    <div className="space-y-1 px-4 pb-3 pt-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-semibold text-industry-dark hover:bg-industry-light hover:text-apay-red"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/teklif-al"
                            className="block rounded-md bg-apay-red px-3 py-2 text-base font-semibold text-white text-center mt-4"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Teklif Al
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
