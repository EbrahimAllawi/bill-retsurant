import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { 
    ImCheckboxUnchecked,
    ImCheckboxChecked
} from "react-icons/im";

import rootState from "../store/store";
import { addInfoTable, removeInfoTable } from '../store/infoTables';

interface IUnDicheckall {
    UnDicheckall: Function
}

class UnCheckAll implements IUnDicheckall {
    private lCheck:number
    constructor(lCheck:number) {
        this.lCheck = lCheck
    }
    UnDicheckall() {
        for(var x = 0; x < this.lCheck; x++) { 
            console.log(getCheckBox(x).checked)
            if(getCheckBox(x).checked) {
                // getCheckBox(x).click()
                getCheckBox(x).checked = false
            }
        }
    }

}

class DiCheckAll implements IUnDicheckall {
    private lCheck:number
    constructor(lCheck:number) {
        this.lCheck = lCheck
    }
    UnDicheckall() {
        for(var x = 0; x < this.lCheck; x++) { 
            console.log(getCheckBox(x).checked)
            if(getCheckBox(x).checked) {
                getCheckBox(x).click()
                // getCheckBox(x).checked = false
            }
        }
    }

}

export default function Items(props: any) {
    var RootState = rootState.getState()
    var dispatch = useDispatch()

    var items = useSelector((state: typeof RootState) => state.items)
    var numberTable = useSelector((state: typeof RootState) => state.activeTable.numberTable)
    const itemsBill = useSelector((state: typeof RootState) => state.infoTables[numberTable].itemsBill)

    const unCheck = new UnCheckAll(Object.values(items[0]).length)
    const diCheckAll = new DiCheckAll(Object.values(items[0]).length)
    useEffect(() => {
        
        // console.clear()
        var aa:any = Object.values(items[0])
        var customSort = ['water', 'drink', 'salat', 'salat with']

        var sorted = aa.sort((a:any, b:any)=> {
            return customSort.indexOf(a.category) - customSort.indexOf(b.category)

        })

        console.log(sorted)
            
    }, [items]);

    useEffect(() => {
        
        unCheck.UnDicheckall()
        for(var x = 0; x < itemsBill.length; x++) {
            var index = Object.values(items[0]).findIndex((i: any)=> {
                return i.category == itemsBill[x][0].itemBill
            })
            console.log('index', index)
            getCheckBox(index).checked = true
            // getCheckBox(index).click()
        }

    }, [numberTable])
    var _items = Object.values(items[0]).map((item:any, i)=> {        

        return(
            <>
            <div className="item">
                <input onChange={()=> addRemoveItem(i, numberTable, item.category, item.price)} type="checkbox" value={item.price} id={`checkbox${i}`} /> 
                <label id={`label${i}`} className="name-item" htmlFor={`checkbox${i}`}>{item.category}</label>
            </div>
            </>
        )
    })
    function addRemoveItem(i: number, numberTable: number, nameItem: string, priceItem: any) {
        // alert(getCheckBox(i).value)
        if(getCheckBox(i).checked) {
            dispatch(addInfoTable({numberTable, nameItem, priceItem}))
            return ''
        }
        console.log(`removed ${numberTable}`)
        var index = itemsBill.findIndex(function(item: any) {
            return item[0].itemBill == nameItem
        })
        dispatch(removeInfoTable({numberTable, index}))
        // console.log(0)

    }
    return (
        <>
            <div className="container-items">
                <div className="set-check-all">
                    <div className="set check-all" onClick={()=> {diCheckAll.UnDicheckall()}}><ImCheckboxUnchecked/></div>
                    <div className="set uncheck-all" onClick={()=> {checkall(Object.values(items[0]).length)}}><ImCheckboxChecked/></div>
                </div>
                <div className="items">
                    {_items}
                </div>
            </div>
            <button onClick={()=> localStorage.clear()}>clear</button>
        </>
    )
}

function getCheckBox(index: number) {
    var checkbox = document.getElementById(`checkbox${index}`) as HTMLInputElement
    return checkbox
}

function checkall(lCheck:number) {
    for(var x = 0; x < lCheck; x++) { 
        // getCheckBox(x).checked = true
        if(!getCheckBox(x).checked) {
            getCheckBox(x).click()
            // getCheckBox(x).click()
        }
    }
}
function uncheckall(lCheck:number) {
    for(var x = 0; x < lCheck; x++) { 
        console.log(getCheckBox(x).checked)
        if(getCheckBox(x).checked) {
            // getCheckBox(x).click()
            getCheckBox(x).checked = false
        }
    }
}

