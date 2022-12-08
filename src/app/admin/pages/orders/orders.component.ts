import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  allOrders: any = [];
  orderName: any;
  constructor(private _pro: ProductService) {
    this._pro.GetProduct().subscribe((result) => {
      console.log(result);
      // this.allOrders = result;
    });
  }

  ngOnInit(): void {}
}
