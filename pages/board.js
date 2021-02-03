import React from 'react';
import styled from 'styled-components';

import Cell from './Cell';

const Table = styled.div`
    table {
        border-collapse: collapse;
    }
    td {
        border: 1px solid black;
        width: 40px;
        height: 40px;
        text-align: center;
    }
`;

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
        <Table>
            {Array(tableData.length).fill().map((v, i) => {
                return(
                    <tr key={i}>
                        {Array(tableData[0].length).fill().map((v, j) => 
                                <Cell rowIndex={i} colIndex={j} key={keyString(i,j)}/>
                        )}
                    </tr>

                )
            })}
        </Table>
    )
}

export default Home;