
import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, doc, deleteDoc, orderBy, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { BookModel } from '../models/book-model';
import { ChapterModel } from '../models/chapter-model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private firestore: Firestore) {}

  addBook(book: BookModel) {
    const bookRef = collection(this.firestore, 'books');
    return addDoc(bookRef, book);
  }

getBooks(): Observable<BookModel[]> {
  const bookRef = collection(this.firestore, 'books');
  const queryRef = query(bookRef, orderBy('author', 'asc'));
  return collectionData(queryRef, { idField: 'id' }) as Observable<BookModel[]>;
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
