import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesCreateComponent } from './clientes/clientes-create/clientes-create.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProveedorCreateComponent } from './proveedores/proveedor-create/proveedor-create.component';

const routes: Routes = [
  {path:'', component: ClientesComponent},
  {path:'clientes', component: ClientesComponent},
  {path:'clientes/new', component: ClientesCreateComponent},
  {path:'proveedores', component: ProveedoresComponent},
  {path:'proveedores/new', component: ProveedorCreateComponent},
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
