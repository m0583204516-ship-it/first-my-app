import { Component, Input, Output, EventEmitter } from '@angular/core';
import { USERS } from '../fake_users';
import { UserObj } from './user.model';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})

export class User {
  selectedUser = USERS[0];
  @Input({required:true}) isSelected!: boolean;
  @Input() userobj!: UserObj;
  @Output() userSelected = new EventEmitter<string>();

  onClick(){
    this.userSelected.emit(this.userobj.id)
  }

  get userImgPath(){
    return 'assets/users/' + this.userobj.avatar;
  }
}
