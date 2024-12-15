import { Component } from '@angular/core';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-account-list',
  standalone: false,
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.scss'
})
export class AccountListComponent {
  accounts: Account[] = []; 
  constructor(private accountService: AccountService) { }
  ngOnInit(): void { 
    this.accountService.getAccounts().subscribe((data) => { 
      this.accounts = data; 
    }); 
  }
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
