import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class MarketDataService {
    key = '1JMED69QFPGGDK9Y'

    headers = new HttpHeaders({
        'Content-Type': 'application/json',
    })
    constructor(
        private httpClient: HttpClient
    ) { }
    getActions(ticker) {

        let url = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + ticker + '&apikey=' + this.key
        return this.httpClient.get(url, { headers: this.headers })
    }
}