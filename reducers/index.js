
const initialState = {
    tableData:[],
    moveBlock:[],
    stopBlock:[]
};

const reducer = (state = initialState,action) => {

    switch(action.type) {

        case 'BLOCK_CREATE':
            return { ...state}

        default:
            return state;
    }
} 

export default reducer;