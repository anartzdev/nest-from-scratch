import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
    list() {
        return `All books`;
    }

    item(id: string) {
        return `Select book: ${id}`
    }
}
