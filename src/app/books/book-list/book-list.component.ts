import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookModel } from 'src/app/models/book-model';
import { ChapterModel } from 'src/app/models/chapter-model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books: BookModel[]=[new BookModel('','','','','','','')];
  public chapters: ChapterModel[] = [new ChapterModel("","")];

  constructor(
    private booksService: BooksService
  ) {
  }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(books =>{
      this.books = books;
    })
  }
  bookSelected(book :BookModel){
  }

}
