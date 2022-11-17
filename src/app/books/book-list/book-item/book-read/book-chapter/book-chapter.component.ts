import { HttpClient } from '@angular/common/http';
import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { ChapterModel } from 'src/app/models/chapter-model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-chapter',
  templateUrl: './book-chapter.component.html',
  styleUrls: ['./book-chapter.component.css'],
})
export class BookChapterComponent implements OnInit {
  @Input() chapter: ChapterModel;
  actualChapter: number;
  textChapter: string;

  constructor(private booksService: BooksService, private _http: HttpClient) {
  }
  
  ngOnInit(): void {
     this._http
       .get(this.chapter.chapterUrl, { responseType: 'text' })
       .subscribe((res) => {
         this.textChapter = res;
       });
  }
}
