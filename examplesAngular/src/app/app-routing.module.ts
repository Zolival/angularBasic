import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductEditorTemplateComponent } from './page/product-editor-template/product-editor-template.component';
import { ProductFormTemplateComponent } from './page/product-form-template/product-form-template.component';

const routes: Routes = [
  {
    path: '',
    component: ProductFormTemplateComponent
  },
  {
    path: 'products',
    component: ProductFormTemplateComponent
  },
  {
    path: 'product-editor/:id',
    component: ProductEditorTemplateComponent
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
