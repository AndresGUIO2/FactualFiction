import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from 'src/app/models/book-model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent implements OnInit {
  @Input() book: BookModel;

  constructor(private router: Router, private bookService : BooksService) {}

  onSelected() {
    this.router.navigate(['/read/' + this.book.id])
  }

  ngOnInit(): void {
    console.log(this.book)
  }

  async onDeleteBook(){
    await this.bookService.deleteBook(this.book);
  }
}
