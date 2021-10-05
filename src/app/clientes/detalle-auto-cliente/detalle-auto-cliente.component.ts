import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-auto-cliente',
  templateUrl: './detalle-auto-cliente.component.html',
  styleUrls: ['./detalle-auto-cliente.component.css']
})
export class DetalleAutoClienteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

}
