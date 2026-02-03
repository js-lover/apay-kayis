import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import QuoteForm from "@/components/products/QuoteForm";

export async function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = PRODUCTS.find((p) => p.slug === slug);
    if (!product) return {};

    return {
        title: `${product.title} | Apay Kayış`,
        description: product.description,
    };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = PRODUCTS.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="bg-white">
            {/* Breadcrumb */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto px-6 py-4">
                    <nav className="flex text-xs font-medium text-gray-500 gap-2 items-center">
                        <Link href="/" className="hover:text-apay-red">Anasayfa</Link>
                        <span>/</span>
                        <Link href="/urunler" className="hover:text-apay-red">Ürünler</Link>
                        <span>/</span>
                        <span className="text-industry-dark lowercase">{product.title}</span>
                    </nav>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Image Gallery */}
                    <div className="space-y-6 lg:sticky lg:top-24">
                        <div className="relative aspect-[4/3] max-h-[500px] rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 shadow-sm flex items-center justify-center">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-contain p-4"
                                priority
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="relative aspect-square max-h-24 rounded-lg border border-gray-200 bg-gray-50 overflow-hidden opacity-60 hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center">
                                    <Image src={product.image} alt="thumbnail" fill className="object-contain p-2" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col">
                        <div className="mb-4">
                            <span className="text-apay-red font-bold text-sm uppercase tracking-widest">{product.sku}</span>
                            <h1 className="text-3xl md:text-4xl font-bold text-industry-dark mt-2 mb-6">{product.title}</h1>
                            <div className="w-16 h-1 bg-apay-red mb-8" />
                            <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                                {product.description}
                            </p>
                        </div>

                        {/* Technical Specs Table */}
                        <div className="mb-12">
                            <h2 className="text-xl font-bold text-industry-dark mb-6 flex items-center gap-2">
                                <span className="w-6 h-6 bg-industry-dark text-white rounded flex items-center justify-center text-xs">i</span>
                                Teknik Özellikler
                            </h2>
                            <div className="technical-table-container">
                                <table className="technical-table">
                                    <tbody>
                                        {product.specifications.map((spec, i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                                <td className="font-bold text-industry-dark w-1/3 border-r border-gray-100">{spec.label}</td>
                                                <td className="text-gray-600">{spec.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <a
                                href={product.pdfUrl}
                                className="flex items-center justify-center gap-2 bg-industry-dark hover:bg-industry-gray text-white px-6 py-4 rounded-lg font-bold transition-all flex-1"
                            >
                                <span>📄</span> Teknik Katalog (PDF)
                            </a>
                            <Link
                                href="#teklif-formu"
                                className="flex items-center justify-center bg-safety-yellow hover:bg-yellow-500 text-industry-dark px-10 py-4 rounded-lg font-bold transition-all shadow-md flex-1 text-center"
                            >
                                Teknik Çizim İste
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Lead Form Section */}
                <div id="teklif-formu" className="mt-24 py-16 border-t border-gray-100">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-industry-dark mb-4">Hızlı Teklif ve Bilgi Formu</h2>
                            <p className="text-gray-500">Mühendislerimiz talebinizi inceleyip 24 saat içerisinde size dönüş sağlayacaktır.</p>
                        </div>
                        <QuoteForm productTitle={product.title} />
                    </div>
                </div>

                {/* Related Products Placeholder */}
                <div className="mt-24">
                    <h2 className="text-2xl font-bold text-industry-dark mb-8">Benzer Çözümler</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {PRODUCTS.filter(p => p.slug !== product.slug).map(p => (
                            <div key={p.slug} className="opacity-80 scale-95 hover:opacity-100 hover:scale-100 transition-all">
                                {/* Reusing ProductCard if possible or minimalist version */}
                                <div className="p-4 border border-gray-100 rounded-lg">
                                    <h3 className="font-bold text-sm truncate">{p.title}</h3>
                                    <Link href={`/urunler/${p.slug}`} className="text-apay-red text-xs font-bold mt-2 inline-block">Görüntüle &rarr;</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
