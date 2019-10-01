import {ADD_GROCERY,REMOVE_GROCERY} from '../actions';
import {addToBag} from './helpers';

export default function shoppingBag(state=[],action) {
    switch (action.type){
        case ADD_GROCERY:
            console.log('ADD GROCERY SHOPPING BAG',action);
            let shoppingBag=[...state,addToBag(action.id)];
            console.log('Shopping bag should be populated',shoppingBag);
            return shoppingBag;
        case REMOVE_GROCERY:
            console.log('ADD GROCERY',action);
            shoppingBag=state.filter((item)=>item.id!==action.id);
            return shoppingBag;
        default:
            return state;
    }
}