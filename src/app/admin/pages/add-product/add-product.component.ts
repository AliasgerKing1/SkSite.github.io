import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  ProductForm: FormGroup;
  CheckForm = false;
  constructor(
    private _pro: ProductService,
    private _fb: FormBuilder,
    private _router: Router
  ) {
    this.ProductForm = this._fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [null, [Validators.required]],
      compprice: [null, [Validators.required]],
      costprice: [null, [Validators.required]],
      startpoint: [null, [Validators.required]],
      type: ['', [Validators.required]],
      vendor: ['', [Validators.required]],
      collections: ['', [Validators.required]],
      tags: ['', [Validators.required]],
    });
  }

  save() {
    if (this.ProductForm.invalid) {
      this.CheckForm = true;
      return;
    }
    this._pro.AddProduct(this.ProductForm.value).subscribe((result) => {
      this._router.navigate(['/admin/dashboard']);
    });
  }
  ngOnInit(): void {}
}
