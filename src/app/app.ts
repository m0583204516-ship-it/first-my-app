import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { USERS } from './fake_users';
import {Tasks} from './tasks/tasks'
import { ContactsUs } from './contacts-us/contacts-us';
import { NewUser } from './user/new-user/new-user';

@Component({
  selector: 'app-root',
  imports: [Header,User,Tasks,ContactsUs,NewUser],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users=USERS
  selectUser?: any
  contantUs = false;
  newUser = false;
  
  onUserSelected(idUser: string){
    const User = this.users.find(user=> user.id === idUser);
    if(User)
    this.selectUser = User;
    console.log(this.selectUser);
  }
  onUserAdded(newUser:any) {
    const id = Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
    const fullName = `${newUser.name.firstName} ${newUser.name.lastName}`.trim();
    const user = {
    id:id,
    name: fullName,
    avatar: 'image (14).png'
    };
    this.users.push(user)
  }
}
