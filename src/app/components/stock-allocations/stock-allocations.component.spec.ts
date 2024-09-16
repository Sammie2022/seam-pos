import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAllocationsComponent } from './stock-allocations.component';

describe('StockAllocationsComponent', () => {
  let component: StockAllocationsComponent;
  let fixture: ComponentFixture<StockAllocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockAllocationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockAllocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
