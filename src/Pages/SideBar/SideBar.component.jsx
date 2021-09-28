import React,{useState,useRef,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import "./style/SideBar.component.css"

const SideBar=()=> {
    const [menu,setMenu] = useState("weather")
    const ref = useRef(null)
    useEffect(()=>{
        ref && ref.current.click()
    },[ref])
    return (
        <div className="sider-container template-2">
            <div className="sider-content">
                <div className="img-div">
                    <img src="imgs/main.png" width="200" height="100"/>
                </div>
                <div>
                    <NavLink to='/weather' style={{textDecoration: 'none' }}>
                        <div className={`menu ${menu=='weather' && "selected"}`} onClick={()=>setMenu('weather')} ref={ref}>
                            <img src="imgs/weather.svg"/>
                            <p className="default-text">Weather</p>
                        </div>
                    </NavLink>
                    <NavLink to='/country' style={{textDecoration: 'none' }}>
                        <div className={`menu ${menu=='country' && "selected"}`} onClick={()=>setMenu('country')}>
                            <img src="imgs/weather.svg"/>
                            <p className="default-text">Country</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default SideBar
