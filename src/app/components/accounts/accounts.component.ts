import { Component } from '@angular/core';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  standalone: false,
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent {
  /*accounts: Account[] = [
    { id: 1, accountNumber: 'ACC123', balance: 1000, user: { id: 1, name: 'John Doe', email: 'john@example.com', username:'test' } }, 
    { id: 2, accountNumber: 'ACC124', balance: 2000, user: { id: 2, name: 'Jane Doe', email: 'jane@example.com', username:'test 2'} }]; 
  */
  account: Account = { accountNumber: '', balance: 0, user: { name: '', email: '', username: '' } };
  isEditMode = false;

  constructor(private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router) {}
  ngOnInit(): void { 
    const id = this.route.snapshot.paramMap.get('id'); 
    if (id) { 
      this.isEditMode = true; 
      this.accountService.getAccount(id).subscribe((data) => { 
        this.account = data; 
      }); }
  }
  onClose(): void { 
    this.router.navigate(['/accounts']);
  }

  onSubmit(): void { 
    if(this.isEditMode){
      this.accountService.updateAccount(this.account).subscribe(()=> {
        this.router.navigate(['/accounts']);
      });
    }else{
      this.accountService.createAccount(this.account).subscribe(() => { 
        this.router.navigate(['/accounts']); 
      });
    } 
  }
}