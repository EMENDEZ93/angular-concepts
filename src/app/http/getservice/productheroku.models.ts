export interface CategoryHeroku {
    id: string;
    title: string;
}

export interface ProductHeroku {
    id: string;
    title: string;
    price: number;
    images: string[];
    description: string;
    category: CategoryHeroku;
}

// omit = omitir los campos
export interface ProductHerokuDto extends Omit<ProductHeroku, 'id' | 'category'> {
    categoryId: number;
}

// partial = todos los campos son opcionales
export interface UpdateProductHeroku extends Partial<ProductHeroku> {
}
