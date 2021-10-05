import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAutoClienteComponent } from './detalle-auto-cliente.component';

describe('DetalleAutoClienteComponent', () => {
  let component: DetalleAutoClienteComponent;
  let fixture: ComponentFixture<DetalleAutoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAutoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAutoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
