import Link from "next/link";
import Logo from "./Logo";

const navigation = {
    products: [
        { name: "Zaman Kayışları", href: "/urunler?kategori=zaman-kayislari" },
        { name: "Dişli Kayışlar", href: "/urunler?kategori=disli-kayislar" },
        { name: "V Kayışları", href: "/urunler?kategori=v-kayislari" },
        { name: "Özel Kaplamalı Kayışlar", href: "/urunler?kategori=ozel-kaplamali" },
    ],
    company: [
        { name: "Hakkımızda", href: "/hakkimizda" },
        { name: "Sektörler", href: "/sektorler" },
        { name: "İletişim", href: "/iletisim" },
    ],
    support: [
        { name: "Teknik Kataloglar", href: "/kataloglar" },
        { name: "SSS", href: "/sss" },
        { name: "Teklif İste", href: "/teklif-al" },
        { name: "Kariyer", href: "/kariyer" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-industry-dark text-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <div className="flex items-center">
                            <Logo className="h-12 w-auto" inverted />
                        </div>
                        <p className="text-sm leading-6 text-gray-300 max-w-xs">
                            Endüstriyel güç aktarma sistemlerinde güvenilir çözüm ortağınız. Yüksek kaliteli kayışlar ve mühendislik desteği.
                        </p>
                        <div className="flex gap-x-6">
                            {/* Social icons could go here */}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Ürünler</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.products.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Kurumsal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Destek</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.support.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs leading-5 text-gray-400">
                        &copy; {new Date().getFullYear()} Apay Kayış Sanayi ve Ticaret A.Ş. Tüm hakları saklıdır.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/gizlilik" className="text-xs text-gray-400 hover:text-white">Gizlilik Politikası</Link>
                        <Link href="/kvkk" className="text-xs text-gray-400 hover:text-white">KVKK</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
