import React from 'react';
import { useSelector } from 'react-redux';
import Table from './Table';
import Block from '../reducers/Block'

const NextBlock = () => {

    const BlockList = useSelector(state => state.BlockList);


    return (
        <div className="nextBlock">
            <h3>next block</h3>
            <div className="blockBox">
                {BlockList.map((v,i) => <Table tableData={Block[v][0]} key={i}/>)}
            </div>
        </div>
    )
}

export default NextBlock;