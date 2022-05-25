import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  users = [
    {
      id: 1,
      name: 'mydt',
      age: 20,
      email: 'mydt@gmail.com',
      sdt: 12345678
    },
    {
      id: 10,
      name: 'tuannda3',
      age: 30,
      email: 'tuannda@gmail.com',
      sdt: 19845648
    }
  ];
  formValues = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    sdt: 0

  }
  onCreateUser(newUser: any) {
    console.log(newUser);
  }
  onEditUser(userId: number) {
    const editUser = this.users.find(user => user.id === userId)
    if (editUser) {
      this.formValues = {...editUser};

    }
  }

}
