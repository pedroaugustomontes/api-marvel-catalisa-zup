import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharactersApiService {
  PUBLIC_KEY = '183618b4377fa079a086cc81a2182fda';
  HASH = '9377cebee3a0bd9de8c564ef55ad574b';
  TIME_STAMP = '1602101033';
  URL_API = `https://gateway.marvel.com/v1/public/characters?orderBy=-modified&limit=100&ts=${this.TIME_STAMP}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  // ?orderBy=modified&limit=100&
  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<any> {
    return this.http
      .get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results));
  }
}
