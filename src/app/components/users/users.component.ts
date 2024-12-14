import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' }];
  constructor() { }
  ngOnInit(): void { }
  addUser(): void {
    // Implement add user functionality 
  }
  editUser(user: User): void {
    // Implement edit user functionality 
  }
  deleteUser(id: number): void {
    // Implement delete user functionality 
  }
  viewUserAccounts(id: number): void {
    // Implement view user accounts functionality 
  }
}
