import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProveedoresService } from '../../Services/proveedores.service';
import { HttpResponse } from '@angular/common/http';
import { Iproveedores } from 'src/app/Models/proveedores.model';

@Component({
  selector: 'app-proveedor-create',
  templateUrl: './proveedor-create.component.html',
  styleUrls: ['./proveedor-create.component.css']
})
export class ProveedorCreateComponent implements OnInit {

  public formGroup: FormGroup;
  guardado?: boolean = false;
  error?: boolean = false;

  constructor(private formBuilder: FormBuilder, protected proveedoresService: ProveedoresService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      nombre: [''],
      direccion: [''],
      telefono: [''],
      email: [''],
      descripcion: ['']
    })
  }

  crearProveedor(proveedor: any) {
   this.proveedoresService.createProveedor(proveedor).subscribe((res: HttpResponse<Iproveedores>)=> {
    if(res.status === 200) {
      this.error = false;
      this.guardado = true;
    }else {
      this.error = true;
      this.guardado = true;
    }
    // this.reload();
   })
  }

  reload() {
    window.location.reload();
  }

  vIntentar():void {
    this.error = false;
    this.guardado = false;
  }
  
}
