import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { ProductFormTemplateComponent } from './page/product-form-template/product-form-template.component';
import { ProductEditorTemplateComponent } from './page/product-editor-template/product-editor-template.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductFormTemplateComponent,
    ProductEditorTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
