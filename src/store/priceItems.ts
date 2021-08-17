import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IInitialState {
    items: [object],

}
const initialState: IInitialState = {
    items: [{}]
}

const priceItem = createSlice({
    name: 'priceItem',
    initialState: [''],
    reducers: {
        loadItems: (state, action: PayloadAction<any>)=> {
            state[0] = action.payload
            console.log(action.payload)
        }
    }
})
export const {loadItems} = priceItem.actions 
export default priceItem.reducer