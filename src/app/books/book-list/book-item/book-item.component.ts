import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from 'src/app/models/book-model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent implements OnInit {

  @Input() book: BookModel;

  constructor(private router: Router) {}

  onSelected() {
    this.router.navigate(['/read'])
  }

  ngOnInit(): void {}
}
