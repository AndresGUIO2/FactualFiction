
import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/models/book-model';
import { ChapterModel } from 'src/app/models/chapter-model';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.css']
})
export class BookReadComponent implements OnInit {

  chapters: ChapterModel[];
  book: BookModel;

  constructor() { }

  ngOnInit(): void {
  }

  onRead(book:BookModel){
  }

}
