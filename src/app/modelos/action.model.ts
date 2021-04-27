import { Action } from "@ngrx/store";
import { ProductModel } from "./product.model";

export class ActionModel implements Action{
    type: string = '';
    payload?: any = new ProductModel();
}