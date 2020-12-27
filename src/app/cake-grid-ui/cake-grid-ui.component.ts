import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cake-grid-ui',
  templateUrl: './cake-grid-ui.component.html',
  styleUrls: ['./cake-grid-ui.component.scss']
})
export class CakeGridUiComponent implements OnInit {

  @Input() cakeData;

  constructor() { }

  ngOnInit(): void {
    console.log("cakeData: ",this.cakeData);
  }

}
