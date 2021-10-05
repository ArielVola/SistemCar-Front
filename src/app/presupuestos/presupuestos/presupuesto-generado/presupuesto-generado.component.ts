import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-presupuesto-generado',
  templateUrl: './presupuesto-generado.component.html',
  styleUrls: ['./presupuesto-generado.component.css']
})
export class PresupuestoGeneradoComponent implements OnInit {


  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation().extras;
   }

  ngOnInit(): void {

  }

}
