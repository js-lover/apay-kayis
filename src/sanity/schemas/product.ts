export default {
    name: 'product',
    title: 'Ürün',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Ürün Adı',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
        },
        {
            name: 'sku',
            title: 'SKU / Model Kodu',
            type: 'string',
        },
        {
            name: 'category',
            title: 'Kategori',
            type: 'reference',
            to: [{ type: 'category' }],
        },
        {
            name: 'mainImage',
            title: 'Ana Görsel',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'gallery',
            title: 'Görsel Galerisi',
            type: 'array',
            of: [{ type: 'image' }],
        },
        {
            name: 'description',
            title: 'Açıklama',
            type: 'text',
        },
        {
            name: 'specifications',
            title: 'Teknik Özellikler',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', title: 'Özellik Adı', type: 'string' },
                        { name: 'value', title: 'Değer', type: 'string' },
                    ],
                },
            ],
        },
        {
            name: 'pdfCatalog',
            title: 'PDF Katalog',
            type: 'file',
        },
        {
            name: 'metaTitle',
            title: 'SEO Başlığı',
            type: 'string',
        },
        {
            name: 'metaDescription',
            title: 'SEO Açıklaması',
            type: 'text',
        },
    ],
};
