import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Iclientes } from '../Models/clientes.model';
import { ClientesService } from '../Services/clientes.service';
import { DeleteClienteDialogComponent } from './delete-cliente-dialog/delete-cliente-dialog.component';
import { DetalleClienteDialogComponent } from './detalle-cliente-dialog/detalle-cliente-dialog.component';
import { DetalleAutoClienteComponent } from './detalle-auto-cliente/detalle-auto-cliente.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit  {
  
  clientes?: Iclientes[];

  clienteSeleccionado?: Iclientes;

  editar?: boolean = false;

  search: string;

  public formGroup: FormGroup;

  // , 'marca', 'modelo', 'color', 'kilometraje',
  displayedColumns: string[] = ['nombre', 'direccion', 'cuil', 'telefono', 'email', 'patente','detallesAuto' ,'detalles','edit','espacio','delete'];
  

  constructor(protected clientesService: ClientesService, public dialog: MatDialog, private formBuilder: FormBuilder) {
    this.search = '';
   }

  ngOnInit() {
    this.traerClientes();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      nombre: [this.clienteSeleccionado.nombre],
      direccion: [this.clienteSeleccionado.direccion],
      cuil: [this.clienteSeleccionado.cuil],
      telefono: [this.clienteSeleccionado.telefono],
      email: [this.clienteSeleccionado.email],
      patente: [this.clienteSeleccionado.patente],
      marca: [this.clienteSeleccionado.marca],
      modelo: [this.clienteSeleccionado.modelo],
      color: [this.clienteSeleccionado.color],
      kilometraje: [this.clienteSeleccionado.kilometraje],
      detalles: [this.clienteSeleccionado.detalles]
    })
  }

  traerClientes():void {
    this.clientesService.findAllClientes().subscribe((res: HttpResponse<Iclientes[]>)=>{
      this.clientes = res.body;
    })
  }

  busquedaPorPatente() {
    if(this.search.length !== 0) {
      this.clientesService.findClienteByFiltro(this.search).subscribe((res: HttpResponse<Iclientes[]>)=>{
        this.clientes = res.body || [];
      })
    } else {
      this.clientesService.findAllClientes().subscribe((res:HttpResponse<Iclientes[]>)=>{
        this.clientes = res.body || [];
      })
    }
  }

  habilitarEdicion(cliente: Iclientes) {
  
    if(cliente) {
      this.clienteSeleccionado = cliente;
      if(this.clienteSeleccionado != undefined) {
         this.buildForm();
         this.editar = true;
      }
    }
  }


  editarCliente(cliente: any) {
    cliente.id = this.clienteSeleccionado.id;
    console.log(cliente);
    this.clientesService.updateCliente(cliente).subscribe((res: HttpResponse<Iclientes>)=> {
    this.reload();
   }) 
  }

    reload() {
      window.location.reload();
    }

    openDialog(cliente: any) {
      
      this.dialog.open(DeleteClienteDialogComponent, {data:{nombre: cliente.nombre, id:cliente.id}});
    }

    openDetalles(cliente:any) {
      this.dialog.open(DetalleClienteDialogComponent, {data:{nombre: cliente.nombre,detalles:cliente.detalles}});
    }

    openDetallesAuto(auto:any) {
      this.dialog.open(DetalleAutoClienteComponent,
        {data:{patente: auto.patente,marca: auto.marca,modelo:auto.modelo, color: auto.color, kilometraje: auto.kilometraje}}
      );
    }

    handlePage(e: PageEvent) {
      this.page_size = e.pageSize;
      this.page_number = e.pageIndex + 1;
    }

  page_size: number = 10
  page_number: number = 1    
  pageSizeOptions = [5,10,20]
}
