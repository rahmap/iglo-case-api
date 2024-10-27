import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@Controller('/product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get('/')
    index(@Res() response: any): Object {
        try {
            return response.status(200).json({
                status: true,
                message: 'Get All Products Successfully',
                data: this.productService.findAll()
            })
        } catch (error){
            return response.status(500).json({
                status: false,
                message: 'Unable to Get All Products',
                data: error
            });
        }
    }

    @Post('create')
    create(@Res() response: any, @Body() body: CreateProductDto): Object {
        try {
            return response.status(200).json({
                status: true,
                message: 'Create Product Successfully',
                data: body
            })
        } catch (error){
            return response.status(500).json({
                status: false,
                message: 'Unable to Create Product',
                data: error
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
