import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, doc, deleteDoc } from '@angular/fire/firestore';
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

  deleteBook(book: BookModel){
    const bookDocRef = doc(this.firestore, 'books/' + book.id);
    return deleteDoc(bookDocRef);
  }

  getChapters(bookId): Observable<ChapterModel[]>{
    const chapterRef = collection(this.firestore, 'books/'+ bookId+'/chapters')
    return collectionData(chapterRef, { idField: 'id' }) as Observable<ChapterModel[]>
  }
}
