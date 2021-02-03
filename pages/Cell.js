import React from 'react';
import Proptype from 'prop-types';

const Cell = ({rowIndex, colIndex}) => {

    const tableData = [
        [1,1,2,1,1],
        [1,2,2,2,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
    ]

    const getColor = (num) => {
    
        switch(num){
            case 1:
                return {background : 'white'}
            case 2:
                return {background : 'red'}
        }
    }

    return (
        <td style={getColor(tableData[rowIndex][colIndex])}></td>
    )
}

Cell.propTypes = {
    rowIndex : Proptype.number.isRequired,
    colIndex : Proptype.number.isRequired,
}

export default Cell;