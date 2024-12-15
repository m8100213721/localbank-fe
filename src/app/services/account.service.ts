import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:8080/accounts';
  constructor(private http: HttpClient) { }
  getAccounts(): Observable<Account[]> { return this.http.get<Account[]>(this.apiUrl); }
  getAccount(accountId: string): Observable<Account> { return this.http.
    get<Account>(`${this.apiUrl}/${accountId}`); 
  }
  createAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.apiUrl, account);
  }
  updateAccount(account: Account): Observable<Account>{
    return this.http.put<Account>(`${this.apiUrl}/${account.id}`, account);
  }
}
