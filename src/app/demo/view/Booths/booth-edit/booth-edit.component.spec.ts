import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoothEditComponent } from './booth-edit.component';

describe('BoothEditComponent', () => {
  let component: BoothEditComponent;
  let fixture: ComponentFixture<BoothEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoothEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoothEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
