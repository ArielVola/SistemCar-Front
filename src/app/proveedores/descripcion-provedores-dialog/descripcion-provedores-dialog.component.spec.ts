import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionProvedoresDialogComponent } from './descripcion-provedores-dialog.component';

describe('DescripcionProvedoresDialogComponent', () => {
  let component: DescripcionProvedoresDialogComponent;
  let fixture: ComponentFixture<DescripcionProvedoresDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionProvedoresDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionProvedoresDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
