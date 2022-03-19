import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-editor-template',
  templateUrl: './product-editor-template.component.html',
  styleUrls: ['./product-editor-template.component.scss']
})
export class ProductEditorTemplateComponent implements OnInit {

  productDefault$ = of(new Product());
  product$: Observable<Product> = this.ar.params.pipe(
    switchMap((params) => {
      return params['id'] === '0'
        ? this.productDefault$
        : this.productService.get(params['id']);
    })
  );

  constructor(
    private ar: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void { }

  onSubmit(product: Product): void {
    if (product.id !== 0) {
      this.productService.update(product).subscribe((data) => {
        this.router.navigate(['/products']);
      });
    } else {
      this.productService.create(product).subscribe((data) => {
        this.router.navigate(['/products']);
      });
    }
  }

}
