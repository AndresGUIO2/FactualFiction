import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../account/login/login.component';
import { RegisterComponent } from '../account/register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  // register() {
  //   const ModalRef = this.modalService.open(RegisterComponent, { size: 'lg', centered : true });
  // }

  // login() {
  //   const ModalRef = this.modalService.open(LoginComponent, { size: 'sm'});
  // }
}

