import tortasList from '../../controllers/getTortasList'
import { TYPES } from './CarritoActions'

const productos = tortasList.getTortasList
const lista = [productos]
export const shoppingInitialState = {
  
  products: lista,
  cart: []
}

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART:{

    }
    case TYPES.REMOVE_ONE_FROM_CART:{
      
    }
    case TYPES.REMOVE_ALL_FROM_CART:{
      
    }
    case TYPES.CLEAR_CART:{
      
    }
    default:
      return state;
  }
}
