import { Product, Prisma } from '.prisma/client';
export declare class ProductEntity implements Product {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    price: Prisma.Decimal;
    sku: string;
    published: boolean;
    constructor(partial: Partial<ProductEntity>);
}
