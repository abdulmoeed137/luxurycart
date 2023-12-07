import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionMainComponent } from './transaction-main.component';

describe('TransactionComponent', () => {
  let component: TransactionMainComponent;
  let fixture: ComponentFixture<TransactionMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
