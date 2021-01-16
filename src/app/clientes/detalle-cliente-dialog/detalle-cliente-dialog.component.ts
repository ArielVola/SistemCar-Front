import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-cliente-dialog',
  templateUrl: './detalle-cliente-dialog.component.html',
  styleUrls: ['./detalle-cliente-dialog.component.css']
})
export class DetalleClienteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

}
