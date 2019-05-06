import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BusService {
  constructor( public http: HttpClient) { }
  getData(stpid) {
    return this.http.get(`http://api.alexdub.me/${stpid}`);
  }
}
