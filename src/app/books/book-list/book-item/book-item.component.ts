import { Component, Input, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { Subscription } from 'rxjs';
import { BookModel } from 'src/app/models/book-model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookItemComponent implements OnDestroy {
  @Input() book: BookModel;
  private subscription: Subscription;

  constructor(private router: Router, private bookService : BooksService) {}

  onSelected() {
    this.router.navigate(['/read/' + this.book.id])
  }

  onDeleteBook(){
    //this.subscription = this.bookService.deleteBook(this.book).subscribe(() => {});
    console.log("Book deleted successfully");
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

