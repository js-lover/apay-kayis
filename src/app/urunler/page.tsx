import { Suspense } from "react";
import ProductFilterableList from "@/components/products/ProductFilterableList";

export const metadata = {
    title: "Ürün Kategorileri | Apay Kayış",
    description: "Endüstriyel zaman kayışları, dişli kayışlar ve özel kaplama çözümlerinden oluşan geniş ürün yelpazemizi inceleyin.",
};

export default function ProductsPage() {
    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-6">
                <Suspense fallback={
                    <div className="flex items-center justify-center py-24">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-apay-red"></div>
                    </div>
                }>
                    <ProductFilterableList />
                </Suspense>
            </div>
        </div>
    );
}
