import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { Roles } from '../decorators/roles.decorator';
import { UserType } from '../user/enum/user-type.enum';
import { CreateProductDTO } from './dtos/create-product.dto';
import { ReturnPriceDeliveryDto } from './dtos/return-price-delivery.dto';
import { ProductEntity } from './entities/product.entity';
import { UpdateProductDTO } from './dtos/update-product.dto';
import { ReturnProduct } from './dtos/return-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Roles(UserType.Admin, UserType.Root, UserType.User)
  @Get()
  async findAll(): Promise<ReturnProduct[]> {
    return (await this.productService.findAll([], true)).map(
      (product) => new ReturnProduct(product),
    );
  }

  @Roles(UserType.Admin, UserType.Root, UserType.User)
  @Get('/:productId')
  async findProductById(@Param('productId') productId): Promise<ReturnProduct> {
    return new ReturnProduct(
      await this.productService.findProductById(productId, true),
    );
  }

  @Roles(UserType.Admin, UserType.Root)
  @UsePipes(ValidationPipe)
  @Post()
  async createProduct(
    @Body() createProduct: CreateProductDTO,
  ): Promise<ProductEntity> {
    return this.productService.createProduct(createProduct);
  }

  @Roles(UserType.Admin, UserType.Root)
  @Delete('/:productId')
  async deleteProduct(
    @Param('productId') productId: number,
  ): Promise<DeleteResult> {
    return this.productService.deleteProduct(productId);
  }

  @Roles(UserType.Admin, UserType.Root)
  @UsePipes(ValidationPipe)
  @Put('/:productId')
  async updateProduct(
    @Body() updateProduct: UpdateProductDTO,
    @Param('productId') productId: number,
  ): Promise<ProductEntity> {
    return this.productService.updateProduct(updateProduct, productId);
  }

  @Get('/:idProduct/delivery/:cep')
  async findPriceDelivery(
    @Param('idProduct') idProduct: number,
    @Param('cep') cep: string,
  ): Promise<ReturnPriceDeliveryDto> {
    return this.productService.findPriceDelivery(cep, idProduct);
  }
}
