import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProveedorDialogComponent } from './delete-proveedor-dialog.component';

describe('DeleteProveedorDialogComponent', () => {
  let component: DeleteProveedorDialogComponent;
  let fixture: ComponentFixture<DeleteProveedorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProveedorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProveedorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
