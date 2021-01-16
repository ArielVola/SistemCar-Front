import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleClienteDialogComponent } from './detalle-cliente-dialog.component';

describe('DetalleClienteDialogComponent', () => {
  let component: DetalleClienteDialogComponent;
  let fixture: ComponentFixture<DetalleClienteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleClienteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleClienteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
