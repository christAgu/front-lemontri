import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Article } from '../acceuil/model/article';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Article> {
    return this.http.get<Article>(
      `https://lemontri.tismatek.com/api/consigne?ids=6,7,8,9,10/`
    );
  }

  //onclick toggling both
}
