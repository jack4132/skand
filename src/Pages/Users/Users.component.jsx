import React,{useState,useEffect} from 'react'
import Card from '../../Components/Card/Card'
import Table from '../../Components/Table/Table.component'
import "./style/Users.component.css"

const Users=()=> {
    const [card,setCard] = useState("")
    const [user,setUser]=useState([])

    useEffect(()=>{
        const users =localStorage.getItem("users") && JSON.parse(localStorage.getItem("users"))
        setUser(users)
    },[])
    return (
        <div className="users-container template-1">
            <div className="view-section text-font-18 default-text text-grey">
                <p>Search</p>
                <input className="text-font-18 default-text text-grey" type="search" placeholder="search by username..."></input>
            </div>
            <div className="view-section text-font-18 default-text text-grey">
                <p>Card View</p>
                <div className="card">
                    {user && user.map((data,index)=>
                        <div onClick={()=>setCard(index)}>
                            <Card data={data} selected={card==index}/>
                        </div>
                    )}
                    {/* <Card selected={true} state="Nagaland"/>
                    <Card selected={false} state="Manipur"/> */}
                </div>
            </div>
            <div className="view-section default-text text-grey text-font-18">
                <p>List View</p>
                <Table data={user}/>
            </div>
        </div>
    )
}

export default Users
