import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesCreateComponent } from './clientes/clientes-create/clientes-create.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProveedorCreateComponent } from './proveedores/proveedor-create/proveedor-create.component';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { PresupuestosCreateComponent } from './presupuestos/presupuestos/presupuestos-create/presupuestos-create.component';
import { PresupuestoGeneradoComponent } from './presupuestos/presupuestos/presupuesto-generado/presupuesto-generado.component';

const routes: Routes = [
  {path:'', component: ClientesComponent},
  {path:'clientes', component: ClientesComponent},
  {path:'clientes/new', component: ClientesCreateComponent},
  {path:'proveedores', component: ProveedoresComponent},
  {path:'proveedores/new', component: ProveedorCreateComponent},
  {path:'presupuestos', component: PresupuestosComponent},
  {path:'presupuestos/new', component: PresupuestosCreateComponent},
  {path:'presupuestos/generado', component: PresupuestoGeneradoComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
