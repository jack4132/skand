import React,{useEffect, useState} from 'react'
import { Action } from '../../Redux/Action'
import { useDispatch } from 'react-redux'

const Country=()=> {
    const dispatch = useDispatch()
    const [country,setCountry] = useState("")
    useEffect(()=>{
        dispatch(Action.getCityData(country))
    },[country])

    return (
        <div className="template-1">
            <div className="state-content text-font-15">
                <p className="default-text">Select Country</p>
                <select onChange={(e)=>setCountry(e.target.value)}>
                       <option value="Au">Australia</option>
                       <option value="Us">USA</option>
                       <option value="In">India</option>
                </select>
            </div>
        </div>
    )
}

export default Country;
