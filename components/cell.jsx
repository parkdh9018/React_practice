import React from 'react';
import Proptype from 'prop-types';
import { useSelector } from 'react-redux';

const Cell = ({rowIndex, colIndex}) => {

    const cellNum = useSelector(state => state.tableData[rowIndex][colIndex])

    const getColor = (num) => {
    
        switch(num){
            case 1:
                return {background : 'white'}
            case 2:
                return {background : 'red'}
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