import { HttpResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Iclientes } from 'src/app/Models/clientes.model';
import { ClientesService } from '../../Services/clientes.service';

@Component({
  selector: 'app-delete-cliente-dialog',
  templateUrl: './delete-cliente-dialog.component.html',
  styleUrls: ['./delete-cliente-dialog.component.css']
})
export class DeleteClienteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, protected clientesService:ClientesService) { }

  ngOnInit(): void {
  }

  borrarCliente() {
    this.clientesService.deleteCliente(this.data.id).subscribe((res: HttpResponse<Iclientes>)=> {
      this.reload();
    })
  }

  reload(){
    window.location.reload();
  }
}
