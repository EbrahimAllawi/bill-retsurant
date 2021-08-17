import React from 'react'
import { useDispatch } from 'react-redux'


// import {
//     FaAlignJustify
// } from 'react-icons/fa'

// import dataItem from '../database/prices.json'
import { loadItems } from '../store/priceItems'
import '../scss/navbar.scss'



export default function Navbar() {
    const dispatch = useDispatch()
    function onChange(event:any) {
        try {
            var reader = new FileReader();
            reader.onload = onReaderLoad;
            reader.readAsText(event.target.files[0]);
            
        } catch (error) {
            return ''
        }
    }
    
    function onReaderLoad(event:any){
        try {
            var obj = JSON.parse(event.target.result);
            console.log(obj)
            dispatch(loadItems(obj))
            
        } catch (error) {
            console.log(error)
        }
    
    }

    // dispatch(loadItems())
    return (
        <>
            <nav className="navbar">
                <div className="contentNav">
                    <span>Restaurant bill</span>
                    <div className="btns-Bar">
                        <div className="custom-file">
                            <span className="btn-bar">upload price</span>
                            <input type="file" accept=".json" onChange={(e)=>onChange(e)} />
                        </div>
                        <div className="btns-tables">
                            <span className="table btn-bar" >Tables</span>
                            <span className="table btn-bar" >Tablesx</span>
                            <span className="table btn-bar" >Tablesxx</span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
