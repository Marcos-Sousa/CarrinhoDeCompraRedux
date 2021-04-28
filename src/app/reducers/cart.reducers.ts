import { ActionModel } from "../modelos/action.model";
import { CartModel } from "../modelos/cart.model";
import { ProductModel } from "../modelos/product.model";
import { ActionTypes } from "./cart-action";


const cart: CartModel = new CartModel();

export function cartReducer(state = cart, action: ActionModel): CartModel {
    switch (action.type) {
        case ActionTypes.Add:
            {
                state = {
                    products: [...state.products, action.payload],
                    total: 0
                }
                state.total = calculeteTotal(state.products);
                return state;
            };
        case ActionTypes.Remover:
            {
                state = {
                    products: [...state.products.filter(p => p.id !== action.payload.id)],
                    total: 0
                }
                state.total = calculeteTotal(state.products);
                return state;
            };
        case ActionTypes.Limpar:
            {
                return {
                    ...state,
                    products: [],
                    total: 0
                };
            }
        default:
            return state;
    }
}

function calculeteTotal(products: ProductModel[]): number {
    let total: number = 0;
    products.forEach((product) => {
        total += product.preco;
    });
    return total;
}
