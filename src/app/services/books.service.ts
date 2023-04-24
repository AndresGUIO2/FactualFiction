
import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, doc, deleteDoc, orderBy, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { BookModel } from '../models/book-model';
import { ChapterModel } from '../models/chapter-model';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class BooksService {
  private booksCache$: Observable<BookModel[]>;

  constructor(private firestore: Firestore) {
    this.initBooksCache();
  }

  private initBooksCache(): void {
    const bookRef = collection(this.firestore, 'books');
    const queryRef = query(bookRef, orderBy('index', 'asc'));
    this.booksCache$ = collectionData(queryRef, { idField: 'id' }).pipe(
      shareReplay(1)
    ) as Observable<BookModel[]>;
  }

  addBook(book: BookModel) {
    const bookRef = collection(this.firestore, 'books');
    return addDoc(bookRef, book);
  }

  getBooks(): Observable<BookModel[]> {
    return this.booksCache$;
  }

  deleteBook(book: BookModel){
    const bookDocRef = doc(this.firestore, 'books/' + book.id);
    return deleteDoc(bookDocRef);
  }

  getChapters(bookId: string): Observable<ChapterModel[]> {
    const chapterRef = query(collection(this.firestore, 'books', bookId, 'chapters'), orderBy('index', 'asc'));
    return collectionData(chapterRef, { idField: 'id' }) as Observable<ChapterModel[]>;
  }
}
