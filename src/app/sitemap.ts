import { MetadataRoute } from 'next';
import { PRODUCTS } from '@/lib/mock-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://apaykayis.com.tr';

    const productPages = PRODUCTS.map((product) => ({
        url: `${baseUrl}/urunler/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const routes = ['', '/urunler', '/iletisim', '/sektorler', '/kataloglar'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.6,
    }));

    return [...routes, ...productPages];
}
