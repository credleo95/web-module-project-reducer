export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"; 
export const SET_MEMORY = "SET_MEMORY";
export const ADD_MEMORY = "ADD_MEMORY";
export const MEMORY_RESET = "MEMORY_RESET";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload:operation});
}

export const clearValues = () => {
    return({type:CLEAR_DISPLAY})
}

export const setMemory = () => {
    return({type:SET_MEMORY})
}
export const memoryAdd = () => {
    return({type:ADD_MEMORY})
}

export const resetMemory = () => {
    return({type:MEMORY_RESET})
}
