export interface Billboard {
    id: string;
    storeId: string;
    label: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Category {
    id: string;
    storeId: string;
    billboardId: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    billboard: Billboard;
}

export interface Product {
    id: string;
    storeId: string;
    categoryId: string;
    price: runtime.Decimal;
    name: string;
    isFeatured: boolean;
    isArchived: boolean;
    sizeId: string;
    colorId: string;
    createdAt: Date;
    updatedAt: Date;
    category: Category;
    size: Size;
    color: Color;
    images: Image[]
}

export interface Image {
    id: string;
    url: string;
}

export interface Size {
    id: string;
    name: string;
    value: string;
}
export interface Color {
    id: string;
    name: string;
    value: string;
}