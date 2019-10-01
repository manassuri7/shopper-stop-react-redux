import {ADD_POCKET_MONEY,REMOVE_POCKET_MONEY} from '../actions';
import {addToBag} from './helpers';

export default function pocketMoney(state=50,action) {
    switch (action.type){
        case REMOVE_POCKET_MONEY:
            console.log('POCKET MONEY REMOVED',action);
            let item=addToBag(action.id);
            let pocketMoney=state-item.cost;
            return pocketMoney;
        case ADD_POCKET_MONEY:
            console.log('POCKET MONEY ADDED',action);
            item=addToBag(action.id);
            pocketMoney=state+item.cost;
            return pocketMoney;
        default:
            return state;
    }
}