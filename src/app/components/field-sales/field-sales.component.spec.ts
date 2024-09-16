import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldSalesComponent } from './field-sales.component';

describe('FieldSalesComponent', () => {
  let component: FieldSalesComponent;
  let fixture: ComponentFixture<FieldSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldSalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
