import { HttpResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Iproveedores } from 'src/app/Models/proveedores.model';
import { ProveedoresService } from '../../Services/proveedores.service';

@Component({
  selector: 'app-delete-proveedor-dialog',
  templateUrl: './delete-proveedor-dialog.component.html',
  styleUrls: ['./delete-proveedor-dialog.component.css']
})
export class DeleteProveedorDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,protected proveedoresService: ProveedoresService) { }

  ngOnInit(): void {
  }

  borrarProveedor(){ 
    this.proveedoresService.deleteProveedor(this.data.id).subscribe((res:HttpResponse<Iproveedores>)=> {
      this.reload();
    })
  }

  reload(){
    window.location.reload();
  }
}
