import { ACTION } from '~/utilities/actionTypes';
import { combineReducers } from 'redux';

const val = (state = 0, action) => {
    switch (action.type){
        case ACTION:
            return action.val
        default:
            return state;
    }
}

const list = (state = [], action) => {
    switch (action.type){
        case ACTION:
            return [
                ...state,
                ...action.list
            ];
        default:
            return state;
    }
}

export default combineReducers({
    val,
    list
});
