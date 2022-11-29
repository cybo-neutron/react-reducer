type stateType = {
    first_name: string,
    last_name: string,
    age: number,
    gender: string,
    tags: string[],
    count:number
}


export const INITIAL_STATE:stateType = {
    first_name: "",
    last_name: "",
    age: 0,
    gender: "male",
    tags:[],
    count:0
}

export enum actionType {
    CHANGE_INPUT,ADD_TAG,REMOVE_TAG,INCREASE_COUNT,DECREASE_COUNT
}

export const formReducer = (state:stateType, action)=> {
    switch (action.type) {
        case actionType.CHANGE_INPUT:
            return {
                ...state,
                [action.payload.name] : action.payload.value,
            }
        case actionType.ADD_TAG:
            return {
                ...state,
                tags: [...state.tags, ...action.payload]
            };
        case actionType.REMOVE_TAG:
            return {
                ...state,
                tags: state.tags.filter(tag => tag !== action.payload)
            };
        case actionType.INCREASE_COUNT:
            return {
                ...state,
                count: state.count + 1,
            };
        case actionType.DECREASE_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}