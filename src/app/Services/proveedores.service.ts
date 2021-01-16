import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_API_URL_PROVEEDORES } from '../app.constans';
import { Iproveedores } from '../Models/proveedores.model';
import { Observable } from 'rxjs';

type EntityResponseType = HttpResponse<Iproveedores>;
type EntityArrayResponseType = HttpResponse<Iproveedores[]>;

@Injectable({ providedIn: 'root' })
export class ProveedoresService {

    public resourceUrl = SERVER_API_URL_PROVEEDORES;

    constructor(protected http: HttpClient) {}

    findAllProveedores(): Observable<EntityArrayResponseType> {
        return this.http.get<Iproveedores[]>(this.resourceUrl+'/all', {
            observe: 'response'
        });
    }

    findProveedoresByFiltro(nombre:string) {
        return this.http.get<Iproveedores[]>(this.resourceUrl+'/activos-filtro/'+nombre,{
            observe:'response'
        });
    }

    createProveedor(proveedor: Iproveedores): Observable<EntityResponseType> {
        return this.http.post<Iproveedores>(this.resourceUrl + "/new", proveedor,{
            observe:'response'
        });
    }

    deleteProveedor(idProveedor: number): Observable<EntityResponseType> {
        return this.http.delete<Iproveedores>(this.resourceUrl + "/" + idProveedor, {
            observe:'response'
        });
    }

    updateProveedor(proveedor: Iproveedores): Observable<EntityResponseType> {
        return this.http.put<Iproveedores>(this.resourceUrl+"/update",proveedor, {
            observe:'response'
        });
    }

}