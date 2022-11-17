import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore'
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { BookReadComponent } from './books/book-list/book-item/book-read/book-read.component';
import { BookChapterComponent } from './books/book-list/book-item/book-read/book-chapter/book-chapter.component';
import { BookAddComponent } from './books/book-list/book-add/book-add.component';
import { FormsModule } from '@angular/forms';

const appRoutes : Routes =[
  { path:'', component: BookListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'read/:id', component: BookReadComponent },
  { path: 'add-book', component: BookAddComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookListComponent,
    BookItemComponent,
    LoginComponent,
    RegisterComponent,
    BookReadComponent,
    BookChapterComponent,
    BookAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
