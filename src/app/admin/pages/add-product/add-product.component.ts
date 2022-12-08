import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  ProductForm: FormGroup;
  CheckForm = false;
  id: any;
  constructor(
    private _pro: ProductService,
    private _fb: FormBuilder,
    private _router: Router,
    private _active_route: ActivatedRoute
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
      _id: null,
      __v: null,
    });

    this.id = this._active_route.snapshot.paramMap.get('id');
    if (this.id) {
      this._pro.GetProductById(this.id).subscribe((result) => {
        this.ProductForm.setValue(result);
      });
    }
  }

  save() {
    if (this.ProductForm.invalid) {
      this.CheckForm = true;
      return;
    }

    if (this.id) {
      this._pro
        .UpdateProduct(this.id, this.ProductForm.value)
        .subscribe((result) => {
          this._router.navigate(['/admin/product/list']);
        });
    } else {
      this._pro.AddProduct(this.ProductForm.value).subscribe((result) => {
        this._router.navigate(['/admin/product/list']);
      });
    }
  }
  ngOnInit(): void {}
}
