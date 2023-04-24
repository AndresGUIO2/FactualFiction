import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from 'src/app/models/book-model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent{
  public books: BookModel[];

  constructor(private booksService: BooksService, private router: Router) {
    this.booksService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  onAddBook(){
    this.router.navigate(['add-book']);
  }

  trackByFn(index: number, book: BookModel): number {
    return Number(book.id);
  }
}

