export default {
    name: 'category',
    title: 'Kategori',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Kategori Adı',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
        },
        {
            name: 'parent',
            title: 'Üst Kategori',
            type: 'reference',
            to: [{ type: 'category' }],
        },
        {
            name: 'description',
            title: 'Açıklama',
            type: 'text',
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
