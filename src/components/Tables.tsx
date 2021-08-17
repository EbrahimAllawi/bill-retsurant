import React, {useState, useEffect} from 'react';
import '../scss/allTables.scss'
import Bill from './Bill';
import Items from './Items';
import TabsTables from './TabsTables';

// import dataItem from '../database/prices.json'


interface IProps {
    test: string
}
function Tables(props: any) {
    
    
    return (
        <div className="container-tables">

            <div className="input-display">
                <Items />
                <Bill refrance={props.refranceB}/>
            </div>
            <TabsTables/>
        </div>
    );
}
// export default React.forwardRef(Tables)
export default Tables;



