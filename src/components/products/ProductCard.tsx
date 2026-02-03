import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/mock-data";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Link
            href={`/urunler/${product.slug}`}
            className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
        >
            <div className="relative h-48 w-full overflow-hidden bg-gray-50 flex items-center justify-center">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-apay-red text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                    {product.sku}
                </div>
            </div>

            <div className="p-5 flex-grow">
                <h3 className="text-lg font-bold text-industry-dark mb-2 group-hover:text-apay-red transition-colors">
                    {product.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {product.description}
                </p>

                <div className="flex items-center text-apay-red font-bold text-sm">
                    Detayları İncele <span className="ml-2 group-hover:ml-3 transition-all">&rarr;</span>
                </div>
            </div>

            <div className="h-1 w-0 bg-apay-red group-hover:w-full transition-all duration-300" />
        </Link>
    );
}
