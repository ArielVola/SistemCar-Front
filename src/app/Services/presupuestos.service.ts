import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SERVER_API_URL_PRESUPUESTOS } from "../app.constans";
import { IPresupuestos } from "../Models/presupuestos.model";


type EntityResponseType = HttpResponse<IPresupuestos>;
type EntityArrayResponseType = HttpResponse<IPresupuestos[]>;

@Injectable({ providedIn: 'root' })
export class PresupuestosService {
    
    public resourceUrl = SERVER_API_URL_PRESUPUESTOS;

    constructor(protected http: HttpClient) {}

    createPresupuesto(presupuesto: IPresupuestos): Observable<EntityResponseType> {
        return this.http.post<IPresupuestos>(this.resourceUrl + "/new", presupuesto,{
            observe:'response'
        });
    }

}