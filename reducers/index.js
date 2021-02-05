
const initialState = {
    tableData:[],
    moveBlock:[],
    stopBlock:[],
    isGameStart: false,
};

const reducer = (state = initialState,action) => {

    switch(action.type) {

        case 'FETCH_STATE':
            return { ...state}

        case 'CREATE_BLOCK':
            return { ...state}
        case 'MOVE':
            return {
                ...state,
                moveBlock: [1,2],
            }
        case 'GAME_START':
            return {
                ...state,
                tableData:[
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                    ],
                isGameStart:true,
            }

        default:
            return state;
    }
} 

export default reducer;