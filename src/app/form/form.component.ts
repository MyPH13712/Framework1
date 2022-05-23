import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  inputValues = {
    id: '',
    name: '',
    age: 0,
    email: '',
    sdt: 0
  }

  users = [
    {
      id: 1,
      name: 'mydt',
      age: 20,
      email: 'mydt@gmail.com',
      sdt: 12345678
    }

  ];

  onRemove(id: number) {
    this.users = this.users.filter(item => item.id! === id);
  }
  onSubmit(userForm: NgForm) {
    // console.log(formData);
    const newUsersIds = this.users.map(user => user.id).sort((a: number, b: number) => b - a);
    const maxId = newUsersIds[0]
    if (userForm.value.id === 0) {
      this.users.push({
        ...userForm.value,
        id: maxId + 1
      });
    } else {
      this.inputValues = ({
        ...userForm.value,
        id: this.inputValues.id
      })
    }
    userForm.resetForm({
      id: 0,
      name: '',
      age: 0,
      email: '',
      sdt: 0
    })
  }
  onEdit(user: any, id: number) {
    this.inputValues = user.find((item: any) => item.id === id)
  }

}
