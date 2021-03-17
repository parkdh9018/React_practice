import React, { useCallback, useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';

import Intro from './Intro';
import Table from './Table';
import {ROW,  COL, TD_SIZE} from '../env';

const Board = () => {

    const dispatch = useDispatch();

    const KeyboardAction = useCallback((e) => {

        switch(e.keyCode) {
            case 37: //left
                dispatch({type:'MOVE_LEFT_OR_RIGHT', dir:'LEFT'})
                break;
    
            case 40: //down
                dispatch({type:'MOVE_DOWN'})
                break;
    
            case 39: //right
                dispatch({type:'MOVE_LEFT_OR_RIGHT', dir:'RIGHT'})
                break;
    
            case 32: //rotate
                dispatch({type:'MOVE_ROTATE'})
                break;
    
            default:
                break;
        }
    
    },[])

    const tableData = useSelector(state => state.tableData);
    const isGameStart = useSelector(state => state.isGameStart);
    const nextBlock = useSelector(state => state.nextBlock);
    const eraseRow = useSelector(state => state.eraseRow);

    let timer;
    

    useEffect(() => {

        if (isGameStart === true){
            timer = setInterval(() => {

                if(nextBlock === true) {
                    dispatch({type:'CREATE_BLOCK'})
                }else
                    dispatch({type:'MOVE_DOWN'})

            }, 500)
        }

        return () => {
            clearInterval(timer);
        }

    },[isGameStart,nextBlock])

    useEffect(() => {

        if(isGameStart === true && nextBlock === true){

            dispatch({type:'IS_NEED_ERASE'});

            if(eraseRow.size > 0) {
                dispatch({type:'ERASE_BLOCK'});
            }
        }

    },[nextBlock])


    return (
            <div className="board" style={{width:TD_SIZE*COL, height:TD_SIZE*ROW}} tabIndex="0" onKeyDown={KeyboardAction}>
                <Table tableData={tableData}/>
                <Intro/>
            </div>
        
    )
}

export default Board;