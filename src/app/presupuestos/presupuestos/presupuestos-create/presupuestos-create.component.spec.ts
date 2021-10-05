import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestosCreateComponent } from './presupuestos-create.component';

describe('PresupuestosCreateComponent', () => {
  let component: PresupuestosCreateComponent;
  let fixture: ComponentFixture<PresupuestosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresupuestosCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresupuestosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
