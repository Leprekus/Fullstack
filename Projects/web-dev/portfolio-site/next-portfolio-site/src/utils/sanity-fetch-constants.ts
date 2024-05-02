export const BLOG_POST = `{
    _updatedAt,
    slug,
    author -> {
        name,
        image,
        bio,
    },
    _createdAt,
    _type,
    _id,
    title,
    categories[] -> {
        title,
        slug,
    },
    mainImage
    }`