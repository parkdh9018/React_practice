import React from 'react';
import Proptype from 'prop-types';

const Cell = ({cellNum, isMain}) => {

    const getColor = (num) => {
    
        switch(num){
            case 0:
                return isMain? { background: 'white' } : { border: '0', background : 'white'} 
            case 1:
                return {background : 'red'}
            case 2:
                return {background : '#5F9EA0'} //CadetBlue
            case 3:
                return {background : 'blue'}
            case 4:
                return {background : '#006400'} //DarkGreen 
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