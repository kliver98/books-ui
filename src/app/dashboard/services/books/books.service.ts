import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBook } from '../../interfaces/IBook';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../../util/constant';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(BASE_URL+'/books');
  }
}
