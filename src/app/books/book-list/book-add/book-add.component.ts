import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookModel } from 'src/app/models/book-model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  newBook: BookModel;

  constructor(private bookService:BooksService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.newBook = form.value;
    this.bookService.addBook(this.newBook);
    console.log(this.newBook);
    this.router.navigate([''])
  }

}
