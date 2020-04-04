import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  GetAllReports() {
   // return this.http.get('https://covid19-server.chrismichael.now.sh/api/v1/AllReports');
  return fetch('https://covid19-server.chrismichael.now.sh/api/v1/AllReports');
  }
}
