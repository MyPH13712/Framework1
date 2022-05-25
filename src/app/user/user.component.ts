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
  onSubmitUser(newUser: any) {
    console.log(newUser);
    if (newUser.id === 0) {
      const userIds = this.users.map(user => user.id).sort((a, b) => (b - a))
      const newId = userIds[0]
      console.log(newId);

      return this.users.push({
        id: newId + 1,
        ...newUser
      })
    }
    return this.users.forEach((user, index) => {
      if (user.id === newUser) {
        this.users[index] = newUser;
      }
    })
  }
  onEditUser(userId: number) {
    const editUser = this.users.find(user => user.id === userId)
    if (editUser) {
      this.formValues = { ...editUser };
    }
  }
  onDelUser(userId: number) {
    if (userId) {
      this.users = this.users.filter(user => user.id !== userId)
    }
  }

}
