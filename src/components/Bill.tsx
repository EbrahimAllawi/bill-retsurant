import React from 'react'
import { useSelector } from 'react-redux'
import RootState from "../store/store";
import RowBill from './RowBill'

function Bill(props: any) {
    const rootState = RootState.getState()
    const numberTable = useSelector((state: typeof rootState) => state.activeTable.numberTable)
    // console.log(props.refrance)
    return (
        <>
            <div ref={props.refrance} className="container-bill">
            <div className="name-table">Table number {numberTable}</div>
                <table className="a" id='printTable'>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <RowBill/>
                    </tbody>
                </table>
                <div className="total-bill">
                    <span>total</span>
                    <span>100000</span>
                </div>
            </div>
            
        </>
    )
}

// export default React.forwardRef(Bill)
export default Bill

function onlyNumberKey(event: any) {
    // Only ASCII character in that range allowed
    var ASCIICode = (event.which) ? event.which : event.keyCode
    if (ASCIICode > 31 && (ASCIICode < 46 || ASCIICode > 57)) {
        event.preventDefault()
        return false
    }
    return true;
}