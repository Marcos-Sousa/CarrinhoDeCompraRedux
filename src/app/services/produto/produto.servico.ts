import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { ProductModel } from "src/app/modelos/product.model";
import { ApiUrl } from "src/app/utils/urlApi";


@Injectable({
    providedIn: 'root'
})

export class ProdutoServico{
    constructor(
        public http: HttpClient
    ){}

    listarProduto() : Observable<ProductModel[]>{
      return this.http.get<ProductModel[]>(ApiUrl.url);   
    }

    buscarPorId(id: number): Observable<ProductModel>{
        const url = `${ApiUrl.url}/${id}`
        return this.http.get<ProductModel>(url);
    }
}

