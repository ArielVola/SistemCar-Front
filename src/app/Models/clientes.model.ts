export interface Iclientes{
    id?:number ;
    nombre?: string;
    direccion?: string;
    cuil?: string;
    telefono?: string;
    email?: string;
    patente?: string;
    marca?: string;
    modelo?: string;
    color?: string;
    kilometraje?: string;
    detalles?: string;
    }
    export class Clientes implements Iclientes {
        constructor(public id?: number, public nombre?: string, public direccion?: string,public cuil?: string,public telefono?: string, public email?: string, public patente?: string, public marca?: string,public modelo?: string, public color?: string, public kilometraje?: string, public detalles?: string) {}
      }