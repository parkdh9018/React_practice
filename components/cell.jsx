import React from 'react';
import Proptype from 'prop-types';

const Cell = ({cellNum}) => {

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
    cellNum : Proptype.number.isRequired,
}

export default React.memo(Cell);