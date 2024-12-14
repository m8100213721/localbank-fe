import { Component } from '@angular/core';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-transactions',
  standalone: false,
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {
  transactions: Transaction[] = [ 
    { id: 1, accountNumber: 'ACC123', amount: 500, date: '2024-12-08', status: 'Completed' },
    { id: 2, accountNumber: 'ACC124', amount: 1500, date: '2024-12-09', status: 'Pending' } ];
  
  constructor() { }

}