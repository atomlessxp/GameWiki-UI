import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GameService {
  apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getAllGames(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/');
  }

  findGameById(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/' + id);
  }
}
