
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


const drawblock = (tableData, moveBlock) => {

    let result = [...tableData];
    const {pos, num} = moveBlock;
    const block  = Block[num];

    for (let i = 0; i<block.length; i++){
        for(let j = 0; j<block[0].length; j++){
            result[i+pos[0]][j+pos[1]] = block[i][j]; 
        }
    }

    return result;
    
}

const reducer = (state = initialState,action) => {

    let moveBlock;
    const { pos } = state.moveBlock;
    const empty_table = Array.from(Array(row), () => new Array(col).fill(0));

    switch(action.type) {
        case 'CREATE_BLOCK':
            moveBlock = {
                num : 0,
                rotate: 0,
                pos: [0,Math.floor(col/2)-1],
            };
            return { 
                ...state,
                moveBlock,
                tableData: drawblock(empty_table, moveBlock)
            }
        case 'MOVE_DOWN_BLOCK':
            moveBlock = {
                ...state.moveBlock,
                pos: [pos[0]+1,pos[1]],
            };
            return {
                ...state,
                moveBlock,
                tableData: drawblock(empty_table, moveBlock)
            }
        case 'MOVE_LEFT':
            moveBlock = {
                ...state.moveBlock,
                pos: [pos[0],pos[1]-1],
            };
            return {
                ...state,
                moveBlock,
                tableData: drawblock(empty_table, moveBlock)
            }
        case 'MOVE_RIGHT':
            moveBlock = {
                ...state.moveBlock,
                pos: [pos[0],pos[1]+1],
            };
            return {
                ...state,
                moveBlock,
                tableData: drawblock(empty_table, moveBlock)
            }
        case 'GAME_START':
            return {
                ...state,
                tableData: empty_table,
                moveBlock:[],
                stopBlock:[],
                isGameStart:true,
            }

        default:
            return state;
    }
} 

export default reducer;