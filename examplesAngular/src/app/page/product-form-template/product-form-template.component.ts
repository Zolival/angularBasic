import { filter, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './../../service/product.service';
import { Product } from './../../model/product';

@Component({
  selector: 'app-product-form-template',
  templateUrl: './product-form-template.component.html',
  styleUrls: ['./product-form-template.component.scss']
})
export class ProductFormTemplateComponent implements OnInit {

  productList$: Observable<Product[]> = this.productService.getAll();

  constructor(
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void { }

  onDelete(product: Product) {
    this.productService.delete(product).subscribe(() => {
      // this.productList$ = this.productService.getAll();
      this.productList$ = this.productList$.pipe(
        filter((prl, i) => prl[i].id !== product.id)
      );

      /* this.productList$ = this.productList$.pipe(
        map((pl) => pl.filter((p) => p.id !== product.id))
      ); */
    });
  }
}
