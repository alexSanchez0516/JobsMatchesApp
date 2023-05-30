import { Injectable, inject } from '@angular/core';
import { CategoryResponse, Dictionary, OffertsResponse, ProvincesResponse } from './interfaces/generics.Interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private http = inject(HttpClient);
  private url = environment.endpoint;
  constructor() { }


  public getCategorys(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(`${this.url}categorys`);
  }

  public getOfferts(params: string) : Observable<OffertsResponse> {
    let url = `${this.url}offerts`;
    url += `${params}`;
    console.log(url);
    return this.http.get<OffertsResponse>(url);
  }

  public getProvinces() : Observable<ProvincesResponse> {
    return this.http.get<ProvincesResponse>(`${this.url}provinces`);
  }

  public getAnyDictionary(dictionary: string) : Observable<Dictionary> {
    return this.http.get<Dictionary>(`${this.url}get-dictionary/${dictionary}`);
  }
}
