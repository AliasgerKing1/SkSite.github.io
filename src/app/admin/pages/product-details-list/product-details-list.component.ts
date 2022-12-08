import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-details-list',
  templateUrl: './product-details-list.component.html',
  styleUrls: ['./product-details-list.component.scss']
})
export class ProductDetailsListComponent implements OnInit {
  allProduct:any = [];
  constructor(private _pro : ProductService) {
    this._pro.GetProduct().subscribe(result=> {
      this.allProduct = result;
    })
   }

  ngOnInit(): void {
  }

}
