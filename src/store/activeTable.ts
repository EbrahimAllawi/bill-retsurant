import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
    numberTable: number,

}
const initialState: IInitialState = {
    numberTable:0
}
// activeTableState
const activeTable = createSlice({
    name: 'activeTable',
    initialState,
    reducers: {
        numberActiveTable: (state, action: PayloadAction<number>) => {
            state.numberTable = action.payload
        }
    }
})

export const { numberActiveTable } = activeTable.actions
export default activeTable.reducer