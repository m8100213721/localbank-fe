import { Component } from '@angular/core';

@Component({
  selector: 'app-accounts',
  imports: [],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent {
  accounts: Account[] = [
    { id: 1, accountNumber: 'ACC123', balance: 1000, user: 'John Doe' }, 
    { id: 2, accountNumber: 'ACC124', balance: 2000, user: 'Jane Doe' }]; 
  constructor() { } 
  ngOnInit(): void { }

  addAccount(): void { 
    // Implement add account functionality 
  } 
  editAccount(account: Account): void { 
    // Implement edit account functionality 
  } 
  deleteAccount(id: number): void { 
    // Implement delete account functionality 
  } 
  viewTransactions(id: number): void { 
    // Implement view transactions functionality 
  }
}

interface Account { id: number; accountNumber: string; balance: number; user: string; }
