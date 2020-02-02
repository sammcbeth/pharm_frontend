import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MarketDataService } from '../market_data.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  actions: any = [{ "actionData": {}, "marketData": {} }];
  selectedAction = null;
  marketData: any;


  constructor(private apiService: ApiService,
    private marketDataService: MarketDataService) {

  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.apiService.getActions().subscribe(
      data => {
        this.actions = data;
      },
      err => console.log(err)
    )


  }
  printAction(action) {
    console.log(action)
  }
  getMarketData(ticker, action) {
    this.marketDataService.getActions(ticker).subscribe(
      data => {
        action.marketData = {};
        action.marketData.open = data['Global Quote']['02. open']
        action.marketData.high = data['Global Quote']['03. high']
        action.marketData.low = data['Global Quote']['04. low']
        action.marketData.price = data['Global Quote']['05. price']
        action.marketData.volume = data['Global Quote']['06. volume']
        action.marketData.percent_change = data['Global Quote']['10. change percent']

      },
      err => {
        console.log(err)
      }
    )
  }

}
