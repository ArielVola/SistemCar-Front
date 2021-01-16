import { Component, OnInit } from '@angular/core';
import { Iproveedores } from '../Models/proveedores.model';
import { ProveedoresService } from '../Services/proveedores.service';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProveedorDialogComponent } from './delete-proveedor-dialog/delete-proveedor-dialog.component';
import { DescripcionProvedoresDialogComponent } from './descripcion-provedores-dialog/descripcion-provedores-dialog.component';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores?: Iproveedores[];

  editar?: boolean = false;

  proveedorSeleccionado?: Iproveedores;

  public formGroup: FormGroup;
  
  displayedColumns: string[] = ['nombre', 'direccion', 'telefono', 'email', 'descripcion','edit','espacio','delete'];

  constructor(protected proveedoresService: ProveedoresService, private formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.traerProveedores();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      nombre: [this.proveedorSeleccionado.nombre],
      direccion: [this.proveedorSeleccionado.direccion],
      telefono: [this.proveedorSeleccionado.telefono],
      email: [this.proveedorSeleccionado.email],
      descripcion: [this.proveedorSeleccionado.descripcion]
    })
  }

  traerProveedores() {
    this.proveedoresService.findAllProveedores().subscribe((res: HttpResponse<Iproveedores[]>)=>{ 
      this.proveedores = res.body;
    })
  }

  editarProveedor(proveedor: Iproveedores) {
    this.proveedorSeleccionado = proveedor;

    if(this.proveedorSeleccionado != undefined) {
      this.buildForm();
      this.editar = true;
    }
  }

  actualizarProveedor(proveedor: any) {
    proveedor.id = this.proveedorSeleccionado.id;
    if(proveedor.id != undefined){ 
      this.proveedoresService.updateProveedor(proveedor).subscribe((res: HttpResponse<Iproveedores>)=> {
        this.reload();
      })
    }
  }

  reload() {
    window.location.reload();
  }

  openDialog(proveedor: any) {
    this.dialog.open(DeleteProveedorDialogComponent, {data:{nombre:proveedor.nombre,id:proveedor.id}});
  }

  openDescripcion(proveedor: any) {
    this.dialog.open(DescripcionProvedoresDialogComponent, {data:{nombre:proveedor.nombre, descripcion:proveedor.descripcion}})
  }
}
