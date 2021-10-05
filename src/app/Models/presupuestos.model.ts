export interface IPresupuestos {
    id: number,
    titular: string,
    vehiculo: string,
    patente: string,
    kilometraje: string,
    descripcion: string
}

export class Presupuestos implements IPresupuestos {
    constructor(public id: number, public titular: string, public vehiculo: string, public patente: string, public kilometraje: string,
        public descripcion: string){}
} 