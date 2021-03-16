import React from 'react';
import Table from './Table';

const NextBlock = () => {

    const block =     [
        [
            [0,1,0],
            [1,1,1]
        ],
        [
            [2,2],
            [2,2],
        ],
        [
            [3,0],
            [3,3],
            [0,3],
        ],
        [
            [4,4,4,4]
        ],
        [
            [0,1,0],
            [1,1,1]
        ],
    ];

    return (
        <div className="nextBlock">
            <h3>next block</h3>
            <div className="blockBox">
                {block.map((v,i) => <Table tableData={v} key={i+1}/>)}
            </div>
        </div>
    )
}

export default NextBlock;