import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { CredentialService } from './credential.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  private buildHeader(): HttpHeaders {
    const token = localStorage.getItem(environment.accessTokenKey);
    return new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': `Bearer ${token}` });
  }

  public get<T>(path: string): Observable<T> {
    const headers = this.buildHeader();
    return this.http.get<T>(`${environment.baseUrl}${path}`, { headers });
  }

  public post<T>(path: string, body: Object): Observable<T> {
    const headers = this.buildHeader();
    return this.http.post<T>(`${environment.baseUrl}${path}`, body, { headers });
  }

  public put<T>(path: string, body: Object): Observable<T> {
    const headers = this.buildHeader();
    return this.http.put<T>(`${environment.baseUrl}${path}`, body, { headers });
  }

  public patch<T>(path: string, body: Object): Observable<T> {
    const headers = this.buildHeader();
    return this.http.patch<T>(`${environment.baseUrl}${path}`, body, { headers });
  }

  public delete<T>(path: string): Observable<T> {
    const headers = this.buildHeader();
    return this.http.delete<T>(`${environment.baseUrl}${path}`, { headers });
  }
}