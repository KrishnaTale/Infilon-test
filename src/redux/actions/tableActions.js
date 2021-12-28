import { ActionTypes } from "../contants/actionTypes";

export const setTable = (table) => {
    return {
        type : ActionTypes.SET_TABLE,
        payload : table,
    };
};

export const editRecord = (row) => {
    return {
        type : ActionTypes.EDIT_RECORD,
        payload : row,
    };
};

export const deleteRecord = (row) => {
    return {
        type : ActionTypes.DELETE_RECORD,
        payload : row,
    };
};