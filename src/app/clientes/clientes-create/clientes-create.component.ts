import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientesService } from '../../Services/clientes.service';
import { HttpResponse } from '@angular/common/http';
import { Iclientes } from '../../Models/clientes.model';

@Component({
  selector: 'app-clientes-create',
  templateUrl: './clientes-create.component.html',
  styleUrls: ['./clientes-create.component.css']
})
export class ClientesCreateComponent implements OnInit {

  guardado: boolean = false;
  error: boolean = false;

  public formGroup: FormGroup;
  
  constructor(private formBuilder: FormBuilder, protected clienteService: ClientesService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      nombre: [''],
      direccion: [''],
      cuil: [''],
      telefono: [''],
      email: [''],
      patente: [''],
      marca: [''],
      modelo: [''],
      color: [''],
      kilometraje: [''],
      detalles: ['']
    })
  }
  guardarCliente(info:any):void {
    this.clienteService.createCliente(info).subscribe((res: HttpResponse<Iclientes>)=> {
      if(res.status === 200) {
        this.guardado = true;
        this.error = false;
      }else {
        this.guardado = true;
        this.error = true;
      }
    })
  }

  reload():void {
    window.location.reload();
  }

  vIntentar():void {
    this.error = false;
    this.guardado = false;
  }

}
