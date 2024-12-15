import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
    const authToken = 'YOUR_AUTH_TOKEN'; 
    const authReq = req.clone({ 
      headers: req.headers.set('Authorization', `Bearer ${authToken}`) 
    }); 
    return next.handle(authReq); 
  }
}
