import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  actions: any = [];
  selectedAction = null;


  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.apiService.getActions().subscribe(
      data => {
        this.actions = data
      },
      err => console.log(err)
    )

  }
  printActions() {
    console.log(this.actions)
  }

}
