import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IPresupuestos, Presupuestos } from 'src/app/Models/presupuestos.model';
import { PresupuestosService } from 'src/app/Services/presupuestos.service';

@Component({
  selector: 'app-presupuestos-create',
  templateUrl: './presupuestos-create.component.html',
  styleUrls: ['./presupuestos-create.component.css']
})
export class PresupuestosCreateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private presupuestosService: PresupuestosService, private router: Router) { }

  public formGroup: FormGroup;
  guardado: boolean = false;
  error: boolean = false;

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      titular: [''],
      vehiculo: [''],
      patente: [''],
      kilometraje: [''],
      descripcion: ['']
    })
  }


  crearPresupuesto(data:any) {
    this.router.navigateByUrl('/presupuestos/generado', data )
/*     this.presupuestosService.createPresupuesto(data).subscribe((res: HttpResponse<IPresupuestos>)=> {
      if(res.status === 200) {
        this.guardado = true;
        this.error = false;
        //
      }else {
        this.guardado = true;
        this.error = true;
      }
    }) */
  }

}
