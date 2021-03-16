import React from 'react';

import Cell from './Cell';
import {row} from '../reducers';


const keyString = (i, j) => i.toString()+'_'+j.toString();


const Table = ({tableData}) => {

    const isMain = tableData.length === row ? true : false; 
    
    return (
        <table>
            <tbody>
            {Array(tableData.length).fill().map((v, i) => {
                return(
                    <tr key={i}>
                        {Array(tableData[0].length).fill().map((v, j) => 
                                <Cell cellNum={tableData[i][j]} key={keyString(i,j)} isMain={isMain}/>
                        )}
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default Table;