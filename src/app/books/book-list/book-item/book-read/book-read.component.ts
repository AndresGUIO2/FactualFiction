import { Component, OnInit } from '@angular/core';
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
  selectedChapter: ChapterModel;
  currentPage = 1;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.bookId = this.route.snapshot.params['id'];
    this.loadChapters();
  }

  loadChapters() {
    this.booksService.getChapters(this.bookId).subscribe((response) => {
      this.chapters = response;
      this.selectedChapter = this.chapters[0];
    });
  }

  selectChapter(chapter: ChapterModel) {
    this.selectedChapter = chapter;
    this.currentPage = this.chapters.indexOf(chapter) + 1;
  }

  scrollToTop() {
    document.documentElement.scrollTop = 0;
  }
}