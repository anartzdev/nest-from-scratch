import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { BooksService } from './books.service';
import { Request } from 'express';
import { BookDto } from './book.dto';

@Controller('books')
export class BooksController {
    constructor(private bookservice: BooksService) {}

    @Get()
    findAll(@Req() request: Request): any {
        return this.bookservice.findAll(request.query as { order: string});
    }

    @Get('order/:order')
    findAllWithFilters(@Param() params: { order: string}): any {
        return this.bookservice.findAll(params);
    }

    @Get(':bookId')
    findItem(@Param('bookId') bookId: string): any {
        return this.bookservice.findItem(bookId)
    }

    @Post() 
    createBook(@Body() body: BookDto) { 
        const newBook: any = body; 
        return this.bookservice.createBook(newBook); 
    }

    @Delete(':bookId')
    deleteBook(@Param('bookId') bookId: string) {
        return this.bookservice.deleteBook(bookId);
    }

    @Put(':bookId')
    updateBook(@Param('bookId') bookId: string, @Body() body: BookDto) {
        const updateBookData: any = body;
        return this.bookservice.updateBook(bookId, updateBookData);
    }
}
