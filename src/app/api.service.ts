import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ApiService {
    server = 'https://pharm-stocks.herokuapp.com';

    actionsUrl = `${this.server}/api/main/`
    // http://localhost:8000/api/main/
    headers = new HttpHeaders({
        'Content-Type': 'application/json',
    })
    constructor(
        private httpClient: HttpClient
    ) { }
    getActions() {
        return this.httpClient.get(this.actionsUrl, { headers: this.headers })
    }



}