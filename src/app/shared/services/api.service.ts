import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { }

  public get<T>(path: string,): Observable<T> {
    return this.http.get<T>(`${environment.baseUrl}${path}`);
  }

  public post<T>(path: string, body: Object): Observable<T> {
    return this.http.post<T>(`${environment.baseUrl}${path}`, body);
  }

  public put<T>(path: string, body: Object): Observable<T> {
    return this.http.put<T>(`${environment.baseUrl}${path}`, body);
  }

  public patch<T>(path: string, body: Object): Observable<T> {
    return this.http.patch<T>(`${environment.baseUrl}${path}`, body);
  }

  public delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(`${environment.baseUrl}${path}`);
  }
}