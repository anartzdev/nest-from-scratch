import { Injectable } from '@nestjs/common';
import { Book } from './book.entity';
import { BookDto } from './book.dto';
import { books } from './book.mock';

@Injectable()
export class BooksService {
  findAll(params: {order: string}): any {

    const { order } = params;

    // Specify books with property select order
    if (order && order != 'id') {
      return books.sort(function (a, b) {
        return a[order].localeCompare(b[order]);
      });
    }

    // all books with original order
    return books;
  }

  findItem(bookId: string): any {
    const findIndex = this.getSelectIndexBook(bookId);
    if (findIndex === -1 ) {
      console.warn('Not exist select book');
      return {};
    }
    return books[findIndex];
  }

  createBook(newBook: BookDto) {
    let book = new Book();

    book.id = books.length + 1;
    book.author = newBook.author;
    book.description = newBook.description;
    book.genre = newBook.genre;
    book.image_url = newBook.image_url;
    book.pages = String(newBook.pages);
    book.publisher = newBook.publisher;
    book.title = newBook.title;

    books.push(book);

    return book;
  }

  deleteBook(bookId: string) {
    // check if exist book in array
    const findIndex = this.getSelectIndexBook(bookId);;
    if (findIndex > -1) books.splice(findIndex, 1);
    // show all books (with remove book if exist)
    return books;
  }

  updateBook(bookId: string, newBook: BookDto) {
    // check if exist book in array
    const findIndex = this.getSelectIndexBook(bookId);
    if (findIndex > -1) {
      books[findIndex] = {
        id: parseInt(bookId),
        ...newBook
      };
    } else {
      console.warn('No exist select book and NOT update nothing');
    }
    return books;
  }

  private getSelectIndexBook (bookId: string) {
    return books.findIndex((item) => item.id === parseInt(bookId));
  }
}
