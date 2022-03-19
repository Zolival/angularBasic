import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditorTemplateComponent } from './product-editor-template.component';

describe('ProductEditorTemplateComponent', () => {
  let component: ProductEditorTemplateComponent;
  let fixture: ComponentFixture<ProductEditorTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditorTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditorTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
