import React, {useEffect, useRef } from 'react'
import { HashRouter, Link, Route, Switch } from 'react-router-dom'

// import rootState from './store/store'
// import { useSelector, useDispatch } from 'react-redux'

// import dataItem from './database/prices.json'

import Navbar from './components/Navbar'
import Tables from './components/Tables';
import './scss/app.scss'
import ReactToPrint from 'react-to-print';
// import { loadItems } from './store/priceItems'



function App(props:any) {
    // var RootState = rootState.getState()
    // const counter = useSelector((state: typeof RootState) => state.slice.value)
    var x:any = [{}]
    x.splice(0,1, {bill: 1})
    console.log(x)
    const componentRef = useRef(null);

    document.body.addEventListener('keypress', (e)=> {
        // console.log(e.key) 
    })

    useEffect(() => {
        document.body.addEventListener('mouseleave', ()=> {
            // console.log('11')
            // localStorage.clear()
        })
        // dispatch(loadItems('123;123'))
    }, [])
    return (
        <HashRouter>
            <div className="container" >
                <Navbar/>
                <Tables refranceB={componentRef} />

            <ReactToPrint
                trigger={() => {
                return <button>Print this out!</button>;
                }}
                content={() => componentRef.current}
            />
            

            </div>
        </HashRouter>
    )
}

export default App
