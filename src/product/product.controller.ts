import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@Controller('/product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get('/')
    async index(@Res() response: any, @Param() param: object) {
        try {
            const products = await this.productService.findAll(param);
            return response.status(200).json({
                status: true,
                message: 'Get All Products Successfully',
                data: products
            })
        } catch (error){
            return response.status(500).json({
                status: false,
                message: 'Unable to Get All Products',
                data: error.message
            });
        }
    }

    @Post('create')
    async create(@Res() response: any, @Body() body: CreateProductDto) {
        try {
            const product = await this.productService.create(body);
            return response.status(200).json({
                status: true,
                message: 'Create Product Successfully',
                data: product
            })
        } catch (error){
            return response.status(500).json({
                status: false,
                message: 'Unable to Create Product',
                data: error.message
            });
        }
    }

    @Put('update/:id')
    update(@Param('id') id: BigInt, @Res() response: any, @Body() body: UpdateProductDto): Object {
        try {
            return response.status(200).json({
                status: true,
                message: 'Update Product Successfully',
                data: body
            })
        } catch (error){
            return response.status(500).json({
                status: false,
                message: 'Unable to Update Product',
                data: error
            });
        }
    }

    @Delete('destroy/:id')
    delete(@Param('id') id: BigInt, @Res() response: any): Object {
        try {
            return response.status(200).json({
                status: true,
                message: 'Delete Product Successfully',
                data: []
            })
        } catch (error){
            return response.status(500).json({
                status: false,
                message: 'Unable to Delete Product',
                data: error
            });
        }
    }
}
