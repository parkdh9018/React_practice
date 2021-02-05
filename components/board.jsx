import React from 'react';
import Cell from './Cell';

const keyString = (i, j) => i.toString()+'_'+j.toString();

const Home = () => {

    const tableData = [
        [1,1,2,1,1],
        [1,2,2,2,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
    ]

    return (
        <table>
            {Array(tableData.length).fill().map((v, i) => {
                return(
                    <tr key={i}>
                        {Array(tableData[0].length).fill().map((v, j) => 
                                <Cell rowIndex={i} colIndex={j} key={keyString(i,j)}/>
                        )}
                    </tr>

                )
            })}
        </table>
    )
}

export default Home;