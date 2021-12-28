import {ActionTypes} from "../contants/actionTypes";

const initialState = {
    rows : [
        {id : 1,
        email : "tale.krishna17@gmail.com",
        firstName : "Krishna",
        lastName : "Tale",
        },
    ],
};

export const tableReducer = (state = initialState, {type,payload}) => {
    switch(type){
        case ActionTypes.SET_TABLE:
            return state;
        default:
            return state;
    }
};