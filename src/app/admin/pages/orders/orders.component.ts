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

  askDelete(obj: any) {
    this.orderName = obj;
  }

  ConfirmDelete(btn: any) {
    this._pro.DeleteProduct(this.orderName).subscribe((result) => {
      if (result.success == true) {
        let n = this.allOrders.indexOf(this.orderName);
        this.allOrders.splice(n, 1);
        btn.click();
      }
    });
  }

  ngOnInit(): void {}
}
