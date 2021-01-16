import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../app.constans';
import { Iclientes } from '../Models/clientes.model';

type EntityResponseType = HttpResponse<Iclientes>;
type EntityArrayResponseType = HttpResponse<Iclientes[]>;

@Injectable({ providedIn: 'root' })
export class ClientesService {

    public resourceUrl = SERVER_API_URL;

    constructor(protected http: HttpClient) {}

    findAllClientes(): Observable<EntityArrayResponseType> {
        return this.http.get<Iclientes[]>(this.resourceUrl+'/all', {
            observe: 'response'
        });
    }

    findClienteByFiltro(patente: string): Observable<EntityArrayResponseType> {
        return this.http.get<Iclientes[]>(this.resourceUrl+'/activos-filtro/'+patente,{
            observe:'response'
        });
    }

    createCliente(cliente: Iclientes): Observable<EntityResponseType> {
        return this.http.post<Iclientes>(this.resourceUrl+'/new',cliente, {
            observe:'response'
        });
    }

    deleteCliente(idCliente: number): Observable<EntityResponseType> {
        return this.http.delete<Iclientes>(this.resourceUrl+"/"+idCliente, {
            observe:'response'
        });
    }

    updateCliente(cliente: Iclientes): Observable<EntityResponseType> {
        return this.http.put<Iclientes>(this.resourceUrl+"/update",cliente, {
            observe: 'response'
        });
    }
}