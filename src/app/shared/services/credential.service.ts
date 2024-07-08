import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Login } from '../models/login.model';
import { map, Observable, tap } from 'rxjs';
import { AccessToken } from '../interfaces/access-token.interface';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  constructor(private readonly apiService: ApiService) { }

  private saveAccessToken(token: string): void {
    localStorage.setItem(environment.accessTokenKey, token);
  }

  public isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }

  public getAccessToken(): string | null {
    return localStorage.getItem(environment.accessTokenKey);
  }

  public logout(): void {
    localStorage.removeItem(environment.accessTokenKey);
  }

  public login(login: Login): Observable<void> {
    return this.apiService.post<{ accessToken: string }>('auth', {
      'email': login.UserName,
      'password': login.Password
    }).pipe(
      tap((response: AccessToken) => {
        this.saveAccessToken(response.accessToken);
      }),
      map(() => void 0)
    );
  }
}