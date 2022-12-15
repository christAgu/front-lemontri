import { HttpClient } from '@angular/common/http';
import { getPlatform, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Article } from '../acceuil/model/article';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  urlParams: any;
  ids: any;

  constructor(private http: HttpClient) {
    const queryString = window.location.search;
    this.urlParams = new URLSearchParams(queryString);
    // const ids = this.urlParams.get('ids');
    this.ids = this.urlParams.get('ids');
    console.log('okryyy');
    console.log(this.ids);
  }

  getAll() {
    if (this.ids) {
      return this.http.get<Article>(
        'https://lemontri.tismatek.com/api/consigne?ids=' + this.ids
      );
    } else {
      return this.http.get<Article>(
        'https://lemontri.tismatek.com/api/consigne'
      );
    }
  }

  getAllOld(): Observable<Article> {
    return this.http.get<Article>(
      `https://lemontri.tismatek.com/api/consigne?ids=6,7,8,9,10/`
    );
  }

  //onclick toggling both
}
