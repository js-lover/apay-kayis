import { PRODUCTS, CATEGORIES } from "@/lib/mock-data";
import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";

export const metadata = {
    title: "Ürün Kategorileri | Apay Kayış",
    description: "Endüstriyel zaman kayışları, dişli kayışlar ve özel kaplama çözümlerinden oluşan geniş ürün yelpazemizi inceleyin.",
};

export default async function ProductsPage({
    searchParams,
}: {
    searchParams: Promise<{ kategori?: string }>;
}) {
    const { kategori: activeCategory } = await searchParams;

    const filteredProducts = activeCategory
        ? PRODUCTS.filter(p => p.category === activeCategory)
        : PRODUCTS;

    const currentCategoryInfo = activeCategory
        ? CATEGORIES.find(c => c.slug === activeCategory)
        : null;

    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-6">
                <div className="mb-12 border-b border-gray-100 pb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-industry-dark mb-4">
                        {currentCategoryInfo ? currentCategoryInfo.title : "Ürün Kataloğu"}
                    </h1>
                    <p className="text-gray-600 max-w-3xl">
                        {currentCategoryInfo
                            ? currentCategoryInfo.description
                            : "Apay Kayış bünyesinde bulunan tüm endüstriyel çözümleri buradan inceleyebilir, ihtiyacınıza uygun teknik özelliklere sahip ürünleri filtreleyebilirsiniz."}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Filters */}
                    <aside className="lg:w-64 flex-shrink-0">
                        <div className="sticky top-24">
                            <h2 className="font-bold text-lg mb-6 border-l-4 border-apay-red pl-4">Kategoriler</h2>
                            <ul className="space-y-4">
                                <li>
                                    <Link
                                        href="/urunler"
                                        className={`text-sm transition-all ${!activeCategory ? "text-apay-red font-bold" : "text-gray-600 hover:text-apay-red"}`}
                                    >
                                        Tüm Ürünler
                                    </Link>
                                </li>
                                {CATEGORIES.map((cat) => (
                                    <li key={cat.slug}>
                                        <Link
                                            href={`/urunler?kategori=${cat.slug}`}
                                            className={`text-sm transition-all ${activeCategory === cat.slug ? "text-apay-red font-bold" : "text-gray-600 hover:text-apay-red"}`}
                                        >
                                            {cat.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 p-6 bg-industry-dark rounded-xl text-white">
                                <h3 className="font-bold mb-4 text-safety-yellow">Teknik Destek</h3>
                                <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                                    İhtiyacınız olan ölçü standart dışı mı? Özel kaplama veya ekleme mi gerekiyor?
                                </p>
                                <Link
                                    href="/iletisim"
                                    className="block w-full bg-apay-red py-3 rounded font-bold text-sm hover:bg-apay-red-dark transition-all text-center"
                                >
                                    Mühendise Danış
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-grow">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.slug} product={product} />
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-24 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                                <p className="text-gray-500">Bu kategoride henüz ürün bulunmamaktadır.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
