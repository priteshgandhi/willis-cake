import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public jsonCake;
  constructor() { }

  ngOnInit(): void {
    this.jsonCake = [
      {
        "cakeName": "Name of Cake 1",
        "cakeAmount": 800,
        "cakeDiscount": 20,
        "cakeAmountBeforeDiscount": 1000,
        "totalReviews": 4200,
        "rating": 4.2,
        "cakeImageUrl": "../../assets/images/cake1.jpg"
      },
      {
        "cakeName": "Name of Cake 2",
        "cakeAmount": 800,
        "cakeDiscount": 20,
        "cakeAmountBeforeDiscount": 1000,
        "totalReviews": 4200,
        "rating": 4.2,
        "cakeImageUrl": "../../assets/images/cake2.jpg"
      },
      {
        "cakeName": "Name of Cake 3",
        "cakeAmount": 800,
        "cakeDiscount": 20,
        "cakeAmountBeforeDiscount": 1000,
        "totalReviews": 4200,
        "rating": 4.2,
        "cakeImageUrl": "../../assets/images/cake3.jpg"
      },
      {
        "cakeName": "Name of Cake 4",
        "cakeAmount": 800,
        "cakeDiscount": 20,
        "cakeAmountBeforeDiscount": 1000,
        "totalReviews": 4200,
        "rating": 4.2,
        "cakeImageUrl": "../../assets/images/cake4.jpg"
      },
      {
        "cakeName": "Name of Cake 5",
        "cakeAmount": 800,
        "cakeDiscount": 20,
        "cakeAmountBeforeDiscount": 1000,
        "totalReviews": 4200,
        "rating": 4.2,
        "cakeImageUrl": "../../assets/images/cake5.jpg"
      },
      {
        "cakeName": "Name of Cake 6",
        "cakeAmount": 800,
        "cakeDiscount": 20,
        "cakeAmountBeforeDiscount": 1000,
        "totalReviews": 4200,
        "rating": 4.2,
        "cakeImageUrl": "../../assets/images/cake6.jpg"
      },
      {
        "cakeName": "Name of Cake 7",
        "cakeAmount": 800,
        "cakeDiscount": 20,
        "cakeAmountBeforeDiscount": 1000,
        "totalReviews": 4200,
        "rating": 4.2,
        "cakeImageUrl": "../../assets/images/cake7.jpg"
      },
      {
        "cakeName": "Name of Cake 8",
        "cakeAmount": 800,
        "cakeDiscount": 20,
        "cakeAmountBeforeDiscount": 1000,
        "totalReviews": 4200,
        "rating": 4.2,
        "cakeImageUrl": "../../assets/images/cake8.jpg"
      },
      {
        "cakeName": "Name of Cake 9",
        "cakeAmount": 800,
        "cakeDiscount": 20,
        "cakeAmountBeforeDiscount": 1000,
        "totalReviews": 4200,
        "rating": 4.2,
        "cakeImageUrl": "../../assets/images/cake9.jpg"
      },
      {
        "cakeName": "Name of Cake 10",
        "cakeAmount": 800,
        "cakeDiscount": 20,
        "cakeAmountBeforeDiscount": 1000,
        "totalReviews": 4200,
        "rating": 4.2,
        "cakeImageUrl": "../../assets/images/cake10.jpg"
      },
      {
        "cakeName": "Name of Cake 11",
        "cakeAmount": 800,
        "cakeDiscount": 20,
        "cakeAmountBeforeDiscount": 1000,
        "totalReviews": 4200,
        "rating": 4.2,
        "cakeImageUrl": "../../assets/images/cake11.jpg"
      },
      {
        "cakeName": "Name of Cake 12",
        "cakeAmount": 800,
        "cakeDiscount": 20,
        "cakeAmountBeforeDiscount": 1000,
        "totalReviews": 4200,
        "rating": 4.2,
        "cakeImageUrl": "../../assets/images/cake12.jpg"
      },
      {
        "cakeName": "Name of Cake 13",
        "cakeAmount": 800,
        "cakeDiscount": 20,
        "cakeAmountBeforeDiscount": 1000,
        "totalReviews": 4200,
        "rating": 4.2,
        "cakeImageUrl": "../../assets/images/cake13.jpg"
      },
      {
        "cakeName": "Name of Cake 14",
        "cakeAmount": 800,
        "cakeDiscount": 20,
        "cakeAmountBeforeDiscount": 1000,
        "totalReviews": 4200,
        "rating": 4.2,
        "cakeImageUrl": "../../assets/images/cake14.jpg"
      },
      {
        "cakeName": "Name of Cake 15",
        "cakeAmount": 800,
        "cakeDiscount": 20,
        "cakeAmountBeforeDiscount": 1000,
        "totalReviews": 4200,
        "rating": 4.2,
        "cakeImageUrl": "../../assets/images/cake15.jpg"
      },
      {
        "cakeName": "Name of Cake 16",
        "cakeAmount": 800,
        "cakeDiscount": 20,
        "cakeAmountBeforeDiscount": 1000,
        "totalReviews": 4200,
        "rating": 4.2,
        "cakeImageUrl": "../../assets/images/cake16.jpg"
      },
      {
        "cakeName": "Name of Cake 17",
        "cakeAmount": 800,
        "cakeDiscount": 20,
        "cakeAmountBeforeDiscount": 1000,
        "totalReviews": 4200,
        "rating": 4.2,
        "cakeImageUrl": "../../assets/images/cake17.jpg"
      },
      {
        "cakeName": "Name of Cake 18",
        "cakeAmount": 800,
        "cakeDiscount": 20,
        "cakeAmountBeforeDiscount": 1000,
        "totalReviews": 4200,
        "rating": 4.2,
        "cakeImageUrl": "../../assets/images/cake18.jpg"
      },
      {
        "cakeName": "Name of Cake 19",
        "cakeAmount": 800,
        "cakeDiscount": 20,
        "cakeAmountBeforeDiscount": 1000,
        "totalReviews": 4200,
        "rating": 4.2,
        "cakeImageUrl": "../../assets/images/cake19.jpg"
      },
      {
        "cakeName": "Name of Cake 20",
        "cakeAmount": 800,
        "cakeDiscount": 20,
        "cakeAmountBeforeDiscount": 1000,
        "totalReviews": 4200,
        "rating": 4.2,
        "cakeImageUrl": "../../assets/images/cake20.jpg"
      },
      {
        "cakeName": "Name of Cake 21",
        "cakeAmount": 800,
        "cakeDiscount": 20,
        "cakeAmountBeforeDiscount": 1000,
        "totalReviews": 4200,
        "rating": 4.2,
        "cakeImageUrl": "../../assets/images/cake21.jpg"
      },
      {
        "cakeName": "Name of Cake 22",
        "cakeAmount": 800,
        "cakeDiscount": 20,
        "cakeAmountBeforeDiscount": 1000,
        "totalReviews": 4200,
        "rating": 4.2,
        "cakeImageUrl": "../../assets/images/cake22.jpg"
      }
    ]
  }

}
