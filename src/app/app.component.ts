import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'mod6hw2';
  public login = '';
  public pass = '';
  public mail = '';

  public loginValid = true;

  public isAdded = true;
  public userArr: any = [];



  public editStatus = false;
  public editIndex!: number;

  constructor() { }


  addUser() {


    let user = {
      login: this.login,
      pass: this.pass,
      mail: this.mail
    };
    this.userArr.push(user);
    this.clear();
  }

  clear() {
    this.login = ''
    this.pass = ''
    this.mail = ''
  };

  edit(index: number): void {
    let user = this.userArr[index];
    this.login = user.login;
    this.pass = user.pass;
    this.mail = user.mail;
    this.editIndex = index;
    this.editStatus = true;
  }

  editUser() {
    let user = this.userArr[this.editIndex];
    user.login = this.login
    user.pass = this.pass
    user.mail = this.mail
    this.clear();
    this.editStatus = false;
  };

  del(index: number): void {
    this.userArr.splice(index, 1);
  };


}
