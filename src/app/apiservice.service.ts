import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

constructor(private http: HttpClient) { }
readonly apiUrl = 'https://localhost:7086/api/Flight/';
readonly apiUrlCities = 'https://localhost:7086/api/IATA';
// Journeys
getJourneyList(Origin: string, Destination: string, Coin: string): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl+Origin+"/"+Destination+"/"+Coin);
}

// Journeys
getCitiesList(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrlCities);
}


}

