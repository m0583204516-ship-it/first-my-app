import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { USERS } from './fake_users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  users=USERS
  selectUser = this.users[0]
  onUserSelected(idUser: string){
    const User = this.users.find(user=> user.id === idUser);
    if(User)
    this.selectUser = User;
    console.log(this.selectUser);
  }

}
