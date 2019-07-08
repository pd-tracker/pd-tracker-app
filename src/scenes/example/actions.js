import {ACTION} from '@/utilities/actionTypes';

export const actionCreator = (val) => {
    return {
        type: ACTION,
        list: [val],
        val
    }
}
