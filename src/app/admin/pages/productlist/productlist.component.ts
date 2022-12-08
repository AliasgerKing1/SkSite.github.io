import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})
export class ProductlistComponent implements OnInit {
  allProduct: any = [];
  productName: any;
  NewDate = Date.now();
  constructor(private _pro: ProductService) {
    this._pro.GetProduct().subscribe((result) => {
      this.allProduct = result;
    });
  }

  askDelete(obj: any) {
    this.productName = obj;
  }

  ConfirmDelete(btn: any) {
    this._pro.DeleteProduct(this.productName._id).subscribe((result) => {
      if (result.success == true) {
        let n = this.allProduct.indexOf(this.productName);
        this.allProduct.splice(n, 1);
        btn.click();
      }
    });
  }

  ngOnInit(): void {
    timer(0, 1000).subscribe(()=> {
      this.NewDate = Date.now();
    })
  }
}
