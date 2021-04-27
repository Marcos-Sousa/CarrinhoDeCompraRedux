import { ActionModel } from "src/app/modelos/action.model"
import { ProductModel } from "../modelos/product.model"

export enum ActionTypes {
    Add = "ADD",
    Remover = "REMOVER",
    Limpar  = "LIMPAR"
}

export const Add = (product: any) => {
    return <ActionModel>{type: ActionTypes.Add, payload: product}
}

export const Remover = (product: any) => {
    return <ActionModel>{type: ActionTypes.Remover, payload: product}
}

export const Limpar = () => {
    return <ActionModel>{type: ActionTypes.Limpar, payload: null}
}