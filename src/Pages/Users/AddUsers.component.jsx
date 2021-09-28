import React,{useEffect,useState} from 'react'
import "./style/AddUsers.component.css"

const AddUsers=({stateList})=> {
    const [username,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [dob,setDOB] = useState("")
    const [state,setState] = useState("")
    
console.log(stateList)
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const userData =localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")):[]
        const details={
            username,email,phone,dob,state
        }
        console.log(userData,localStorage.getItem("users"))
        userData.push(details)
        localStorage.setItem("users",JSON.stringify(userData))
        setUserName("")
        setDOB("")
        setEmail("")
        setPhone("")
        setState("Mn")
    }

    return (
        <div className="template-1">
            <form className="form-fields default-text">
                <div className="field">
                    <label className="text-grey" for="name">Username</label>
                    <input className="default-text text-font-15" type="text" id="name" onChange={(e)=>setUserName(e.target.value)} value={username}/>
                </div>
                <div className="field">
                    <label className="text-grey" for="email">Email</label>
                    <input className="default-text text-font-15" type="email" id="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                </div>
                <div className="field">
                    <label className="text-grey" for="phone">Phone</label>
                    <input className="default-text text-font-15" type="tel" id="phone" onChange={(e)=>setPhone(e.target.value)} value={phone}/>
                </div>
                <div className="field">
                    <label className="text-grey" for="date">DOB</label>
                    <input className="default-text text-font-15" type="date" id="date" onChange={(e)=>setDOB(e.target.value)} value={dob}/>
                </div>
                <div className="field">
                    <label className="text-grey" for="state">State</label>
                    <select className="default-text text-font-15" id="state" onChange={(e)=>setState(e.target.value)} value={state}>
                        {stateList && stateList.map(d=>{
                        return <option className="default-text" value={d.code}>{d.name}</option>
                        })}
                    </select>
                </div>
                <div className="field">
                    <label/>
                    <button className="default-text bg-color-1 text-white text-font-15" type="submit" onClick={(e)=>handleSubmit(e)}>Create User</button>
                </div>
            </form>
        </div>
    )
}

export default AddUsers
