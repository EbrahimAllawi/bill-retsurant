import { createSlice, PayloadAction } from '@reduxjs/toolkit'
var a = []

interface IInfoTable {
    numberTable:number
    nameItem: string
    priceItem: number
}

interface IRemoveInfoTable {
    numberTable:number
    index:number
}


const initialState = Array.from(Array(135)).fill({itemsBill:[]})
const infoTables = createSlice({
    name: 'infoTables',
    initialState,
    reducers: {
        addInfoTable:(state, action: PayloadAction<IInfoTable>)=> {
            var numberTable = action.payload.numberTable
            
            state[numberTable].itemsBill.push(
                [{itemBill: action.payload.nameItem},
                {priceItem: action.payload.priceItem},
                ]
                
            )
            // console.log(state[numberTable]) 
        },
        removeInfoTable:(state, action: PayloadAction<IRemoveInfoTable>)=> {
            
            var numberTable = action.payload.numberTable 
            var index = action.payload.index
            console.log(index)
            state[numberTable].itemsBill.splice(index,1)
        },
        changePrice(state, action: PayloadAction<any>) {
            // state[1].itemsBill[0][1].priceitem = action.payload
            // console.log(action.payload)
            // console.log(state[1].itemsBill[0][1].priceitem) 
            // // state[1].itemsBill.push([{itemBill: 'a'},
            // //     {priceItem: 11},
            // //     ])
        }
        
    }
});

export const {
    addInfoTable,
    removeInfoTable,
    changePrice
} = infoTables.actions
export default infoTables.reducer