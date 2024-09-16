import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivingsComponent } from './receivings.component';

describe('ReceivingsComponent', () => {
  let component: ReceivingsComponent;
  let fixture: ComponentFixture<ReceivingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceivingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
