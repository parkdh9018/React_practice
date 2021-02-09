
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

const deep2Dcopy = (arr) => [...arr.map((v) => [...v])];

const drawblock = (stopBlock, moveBlock) => {

    const result = deep2Dcopy(stopBlock);
    const {pos, num} = moveBlock;
    const block  = Block[num];

    for (let i = 0; i<block.length; i++){
        for(let j = 0; j<block[0].length; j++){

            if(result[i+pos[0]][j+pos[1]] == 0){ 
                result[i+pos[0]][j+pos[1]] = block[i][j];
            } else { //블록 끼리 겹침
                return false;
            }
        }
    }
    return result;
    
}

const reducer = (state = initialState,action) => {

    let moveBlock;
    let draw;
    const { pos } = state.moveBlock;
    const empty_table = () => Array.from(Array(row), () => new Array(col).fill(0));

    switch(action.type) {

        case 'GAME_START':
            return {
                ...state,
                tableData: empty_table(),
                moveBlock:{},
                stopBlock: empty_table(),
                isGameStart:true,
            }

        case 'CREATE_BLOCK':
            moveBlock = {
                num : 0,
                rotate: 0,
                pos: [0,Math.floor(col/2)-1],
            };

            return { 
                ...state,
                moveBlock,
                tableData:drawblock(state.stopBlock, moveBlock),
            }
        case 'MOVE_DOWN_BLOCK':

            if (pos[0] >= row - Block[0].length) {
                console.log('end')
                return { 
                    ...state,
                    stopBlock:deep2Dcopy(state.tableData),
                }
            }
            moveBlock = {
                ...state.moveBlock,
                pos: [pos[0]+1,pos[1]],
            };

            draw = drawblock(state.stopBlock, moveBlock);

            if(draw) {
                return {
                    ...state,
                    moveBlock,
                    tableData: draw,
                }
            } else {
                return {
                    ...state,
                    moveBlock,
                    stopBlock: state.tableData
                }
            }


        case 'MOVE_LEFT':
            moveBlock = {
                ...state.moveBlock,
                pos: [pos[0],pos[1]-1],
            };

            draw = drawblock(state.stopBlock, moveBlock);

            if(draw) {
                return {
                    ...state,
                    moveBlock,
                    tableData: draw,
                }
            } else {
                console.log('left_false')
                return {
                    ...state,
                }
            }


        case 'MOVE_RIGHT':
            moveBlock = {
                ...state.moveBlock,
                pos: [pos[0],pos[1]+1],
            };

            draw = drawblock(state.stopBlock, moveBlock);

            if(draw) {
                return {
                    ...state,
                    moveBlock,
                    tableData: draw,
                }
            } else {
                console.log('right_false')
                return {
                    ...state,
                }
            }

        default:
            return state;
    }
} 

export default reducer;