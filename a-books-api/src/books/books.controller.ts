import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {

    constructor(private booksService: BooksService) { }
    @Get('')
    list() {
        return this.booksService.list()
    }

    @Get(':bookId')
    item(@Param('bookId') bookId: string) {
        return this.booksService.item(bookId);
    }
}
