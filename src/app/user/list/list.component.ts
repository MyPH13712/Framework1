import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() users: any
  @Output() handleEdit: EventEmitter<number>
  @Output() handleDel: EventEmitter<number>
  constructor() {
    this.handleEdit = new EventEmitter();
    this.handleDel = new EventEmitter();
  }

  ngOnInit(): void {
  }
  onEdit(userId: number) {
    this.handleEdit.emit(userId)
  }
  onDel(userId: number){
    this.handleDel.emit(userId)
  }
}
