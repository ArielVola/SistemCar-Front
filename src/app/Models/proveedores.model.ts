export interface Iproveedores{
    id?:number ;
    nombre?: string;
    direccion?: string;
    telefono?: string;
    email?: string;
    descripcion?: string;
    }
    export class Proveedores implements Iproveedores {
        constructor(public id?: number, public nombre?: string, public direccion?: string,public telefono?: string, public email?: string, public descripcion?:string) {}
      }