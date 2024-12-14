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
}
