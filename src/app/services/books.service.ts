import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { BookModel } from '../models/book-model';

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
}
