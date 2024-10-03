import { Controller, Get } from '@nestjs/common';
import { Product, products } from 'src/core';

@Controller('api/products')
export class ProductController {
  @Get()
  getProduct(): Product[] {
    return products.map((product) => ({
      ...product,
      specifications: { highlight: product.specifications.highlight },
    }));
  }
}
