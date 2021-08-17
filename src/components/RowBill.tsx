import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import rootState from "../store/store";
import { changePrice } from '../store/infoTables'

export default function RowBill() {
    const [remove, setremove] = useState(true);
    var RootState = rootState.getState()
    const dispatch = useDispatch()
    const numberTable = useSelector((state: typeof RootState) => state.activeTable.numberTable)
    const state = useSelector((state: typeof RootState) => state.infoTables[numberTable].itemsBill)
    console.log(state)
    // console.clear()
    var customSort = ['drink', 'water', 'salat', 'salat with', 'BQ']
    var sorted = Object.values(state).sort((a:any, b:any)=> {
        console.log(a[0].itemBill, b[0])
        return customSort.indexOf(a[0].itemBill) - customSort.indexOf(b[0].itemBill)
    })



    const a = sorted.map((item:any, i)=> {
        var nameItem = item[0].itemBill
        var priceItem = item[1].priceItem
        try {
            return (
                <>
                <tr>
                    <td
                    // onBlur={()=> }
                    onKeyDown={(e)=> clickKey(e, {indexrow:i, indexcolumn:0} )} 
                    contentEditable="true" 
                    id={`itemBill${0}${i}`}>{nameItem}</td>

                    <td 
                    onKeyDown={(e)=> clickKey(e, {indexrow:i, indexcolumn:1})} 
                    contentEditable="true" 
                    id={`itemBill${1}${i}`}>{priceItem}</td>

                    <td 
                    onKeyDown={(e)=> clickKey(e, {indexrow:i, indexcolumn:2})} 
                    id={`itemBill${2}${i}`} 
                    contentEditable="true">{0}</td>

                    <td 
                    onKeyDown={(e)=> clickKey(e, {indexrow:i, indexcolumn:3})} 
                    id={`itemBill${3}${i}`} 
                    contentEditable="true">{0*priceItem}</td>
                </tr>
                {/* <div>{item.itemBill}</div> */}
                </>
                
            )
            
        } catch (error) {
            return(
                <div>2</div>
            )
        }
    })
    return (
        <>
        {a}
        {/* <button onClick={()=> dispatch(changePrice(state[1][1].priceItem))}>test</button> */}
        <textarea onBlur={()=> console.log(1)} onClick={(e)=> test(e)}>test</textarea>
        </>
    )

    function test(e:any) {
    }
}



function clickKey(e: any, i: IIndexcolumn) {
    var number = e.key
    var regex = /[0-9]/
    if(e.key == 'Enter') {
        e.preventDefault()
        // alert('1')
        clickEnter(i, e)
        return ''
    }
    if(e.key == '.') {
        return ''
    }
    if(e.key == 'Backspace') {
        return ''
    }
    if(e.key == 'Delete') {
        return ''
    }
    clickArrows(e, i)
    if(i.indexcolumn == 0) {
        return ''
    }
    if(!number.match(regex)) {
        e.preventDefault()
    }

}

interface IIndexcolumn {
    indexcolumn: number
    indexrow: number
}

function checkIndexColumn(i: IIndexcolumn, e: any) {
    var nc = 0
    var nr = 0
    var operator = '+'
    var operators = (op:string, a: number, b: number)=> {
        if(op == '+') {
            return a + b
        }
        if(op == '-') {
            return a - b
        }
    }
    
    if(e.key == 'Enter') nr = 1

    if(e.key == 'ArrowDown') nr = 1 

    if(e.key == 'ArrowUp') {
        nr = 1
        operator = '-' 
    }

    if(e.key == 'ArrowRight') {
        nc = 1
        operator = '+' 
    }
    
    if(e.key == 'ArrowLeft') {
        nc = 1
        operator = '-' 
    }
    
    if(i.indexcolumn == 0) {
        document.getElementById(`itemBill${operators(operator,i.indexcolumn, nc)}${operators(operator,i.indexrow, nr)}`)!.focus()
    }
    if(i.indexcolumn == 1) {
        document.getElementById(`itemBill${operators(operator,i.indexcolumn, nc)}${operators(operator,i.indexrow, nr)}`)!.focus()
    }
    if(i.indexcolumn == 2) {
        document.getElementById(`itemBill${operators(operator,i.indexcolumn, nc)}${operators(operator,i.indexrow, nr)}`)!.focus()
    }
    if(i.indexcolumn == 3) {
        document.getElementById(`itemBill${operators(operator,i.indexcolumn, nc)}${operators(operator,i.indexrow, nr)}`)!.focus()
    }
}

function claculatTotalItem(i: IIndexcolumn) {
    var price = document.getElementById(`itemBill${1}${i.indexrow}`)?.innerHTML
    var quantity = document.getElementById(`itemBill${2}${i.indexrow}`)?.innerHTML
    var totalItem = document.getElementById(`itemBill${3}${i.indexrow}`)
    totalItem!.innerHTML = (Number(price)  * Number(quantity)).toString()
}

function clickEnter(i: IIndexcolumn, e: any) {
    try {
        checkIndexColumn(i,e)
        claculatTotalItem(i)

    
    } catch (error) {        
        return ''
    }

}

function clickArrows(e:any, i:IIndexcolumn) {
    // console.log(e.key)
    try {
        if(e.key === 'ArrowUp') {
            checkIndexColumn(i, e)
            claculatTotalItem(i)
        }
        if(e.key === 'ArrowDown') {
            checkIndexColumn(i, e)
            claculatTotalItem(i)
        }
        if(e.key === 'ArrowRight') {
            checkIndexColumn(i, e)
            claculatTotalItem(i)
        }
        if(e.key === 'ArrowLeft') {
            checkIndexColumn(i, e)
            claculatTotalItem(i)
        }
        
    } catch (error) {
        return 
    }
}