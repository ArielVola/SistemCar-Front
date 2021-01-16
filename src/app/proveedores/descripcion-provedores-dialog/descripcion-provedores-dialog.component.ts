import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-descripcion-provedores-dialog',
  templateUrl: './descripcion-provedores-dialog.component.html',
  styleUrls: ['./descripcion-provedores-dialog.component.css']
})
export class DescripcionProvedoresDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

}
