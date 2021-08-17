import {createStore, combineReducers,applyMiddleware } from '@reduxjs/toolkit'
import {composeWithDevTools } from 'redux-devtools-extension';

// import slice from './slice'
import activeTable from './activeTable'
import items from './priceItems'
import infoTables from './infoTables'

function loadState() {
    const state = localStorage.getItem('state')
    if(state !== null) {
        return JSON.parse(state)
    }
    return {
        stata: 'empty'
    }
}

function saveState(state: any) {
    localStorage.setItem('state', JSON.stringify(state))
}

const allreducers = combineReducers({
    // slice
    activeTable,
    items,
    infoTables
})

const store = createStore(allreducers, loadState(), composeWithDevTools(applyMiddleware()))
store.subscribe(()=> {
    saveState(store.getState())
})
function name(params: typeof store) {
    
}
export default store