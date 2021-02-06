
import Block from './Block'

const initialState = {
    tableData:[],
    moveBlock:{
        num : 0,    //블록번호
        rotate: 0, //회전정도
        pos: [0,0], //좌상단의 좌표  
    },
    stopBlock:[],
    isGameStart: false,
};

const row = 12;
const col = 8;


const drawblock = (tableData,moveBlock) => {


    return tableData;
    
}

const reducer = (state = initialState,action) => {

    switch(action.type) {

        case 'FETCH_STATE':
            return { ...state}

        case 'CREATE_BLOCK':

            return { 
                ...state,
                moveBlock: {
                    num : 1,
                    rotate: 0,
                    pos: [0,Math.floor(col/2)-2],
                },
                tableData: drawblock(state.tableData, state.moveBlock)
            }
        case 'MOVE':
            return {
                ...state,
                moveBlock: movingBlock(state.moveBlock),
            }
        case 'GAME_START':
            return {
                ...state,
                tableData: Array.from(Array(row), () => new Array(col).fill(0)),
                moveBlock:[],
                stopBlock:[],
                isGameStart:true,
            }

        default:
            return state;
    }
} 

export default reducer;