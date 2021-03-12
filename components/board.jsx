import React, { useCallback, useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';

import Cell from './Cell';
import Intro from './Intro';
import {row,  col} from '../reducers';

const keyString = (i, j) => i.toString()+'_'+j.toString();

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
            <div className="board" style={{width:40*col, height:40*row}}>
                <table tabIndex="0" onKeyDown={KeyboardAction}>
                    {Array(tableData.length).fill().map((v, i) => {
                        return(
                            <tr key={i}>
                                {Array(tableData[0].length).fill().map((v, j) => 
                                        <Cell cellNum={tableData[i][j]} key={keyString(i,j)}/>
                                )}
                            </tr>

                        )
                    })}
                </table>
                <Intro/>
            </div>
        
    )
}

export default Board;