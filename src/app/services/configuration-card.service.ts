import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationCardService {
  // tslint:disable-next-line: variable-name
  private _jsonURL = '/api/data';
  constructor(private http: HttpClient) {}

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}
