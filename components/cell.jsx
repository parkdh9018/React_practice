import React from 'react';
import Proptype from 'prop-types';
import { useSelector } from 'react-redux';

const Cell = ({rowIndex, colIndex}) => {

    const cellNum = useSelector(state => state.tableData[rowIndex][colIndex])

    const getColor = (num) => {
    
        switch(num){
            case 0:
                return {background : 'white'}
            case 1:
                return {background : 'red'}
            case 2:
                return {background : 'yellow'}
            case 3:
                return {background : 'blue'}                
        }
    }

    return (
        <td style={getColor(cellNum)}></td>
    )
}

Cell.propTypes = {
    rowIndex : Proptype.number.isRequired,
    colIndex : Proptype.number.isRequired,
}

export default Cell;