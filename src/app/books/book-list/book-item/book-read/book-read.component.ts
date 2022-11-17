import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterModel } from 'src/app/models/chapter-model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.css'],
})
export class BookReadComponent implements OnInit {
  bookId: string;
  chapters: ChapterModel[];

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) {}

  ngOnInit() {
    this.bookId = this.route.snapshot.params['id'];
    this.loadChapters();
    console.log(this.chapters);
  }

  loadChapters() {
    this.booksService
      .getChapters(this.bookId)
      .subscribe((response) => {
        this.chapters = response;
      });
  }
}
