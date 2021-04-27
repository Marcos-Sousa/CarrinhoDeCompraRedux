import { ActionModel } from "../modelos/action.model";
import { CartModel } from "../modelos/cart.model";
import { ProductModel } from "../modelos/product.model";
import { ActionTypes } from "./cart-action";
 
  let cart: any;

export function cartReducer(state  = cart, action: ActionModel):CartModel {

    switch (action.type) {
        case ActionTypes.Add:
            {
                console.log('item', action.payload)

                state.products.push(action.payload);
                console.log('item', state.products)

                state.total  = calculeteTotal(state.products)
                return state;
            };
        case ActionTypes.Remover:
            {
                const index = state.products.indexOf(action.payload);
                state.products.slice(index, 1);
                state.total = calculeteTotal(state.products)
                return state;
            };
        case ActionTypes.Limpar:
            {
                state = new CartModel();
                state.total = calculeteTotal(state.products);
                return state;
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
