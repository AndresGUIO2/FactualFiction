import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
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

  getBooks(): Observable<BookModel[]>{
    const bookRef = collection(this.firestore, 'books')
    return collectionData(bookRef, { idField: 'id' }) as Observable<BookModel[]>
  }

  getChapters(): Observable<ChapterModel[]>{
    const chapterRef = collection(this.firestore, 'books/i8okB14059ZyJbC3nQEW/chapters')
    return collectionData(chapterRef, { idField: 'id' }) as Observable<ChapterModel[]>

  }

}
