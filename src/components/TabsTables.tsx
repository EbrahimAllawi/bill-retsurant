import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { numberActiveTable } from '../store/activeTable';


export default function TabsTables() {
    // const [activT, setActiveT] = useState(1)
    const dispatch = useDispatch()
    
    useEffect(() => {
        // console.log(activT)
        dispatch(numberActiveTable(1))
    }, []);
    
    useEffect(() => {
        var tabs = document.getElementById('tabs')
        var valueScroll = 30
        document.getElementById('tab1')?.classList.add('activeTab')
        tabs?.addEventListener('wheel', (e)=> {
            if(e.deltaY > 0) {
                tabs!.scrollLeft += valueScroll
                return 
            }
            tabs!.scrollLeft -= valueScroll
            
        })
    }, []);
    
    const tabs = Array.from(Array(45)).map((item, i) => {
        return(
            <div key={i+1}>
                <div 
                id={'tab'+(i+1)} className={`tab`} 
                onClick={()=>{
                    activeTab(i+1)
                    // setActiveT(i+1)
                    dispatch(numberActiveTable(i+1))
                    }}>{i+1}
                </div>
            </div>
        )
    })
    
    return (
        <>
        <div id="tabs" className="tabs-container " >
            <div className="tabs" >
                {tabs}
            </div>
        </div>
        </>
    )
}

function activeTab(id: number) {
    const tabs = document.getElementsByClassName('tab').length
    for(var x = 0; x < tabs; x++) {
        document.getElementsByClassName('tab')[x].classList.remove('activeTab')
    }
    document.getElementById(`tab${id}`)?.classList.add('activeTab')
}


