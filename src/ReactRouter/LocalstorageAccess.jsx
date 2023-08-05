import React from "react";
import { useState } from "react";

const LocalStorageAccess = () => {
    const [username,setUsername] = useState("");
    const [email,setemail] = useState("");
    const handleDataChange=(event)=>{
        setUsername(event.target.value);
    }
    const handleDataShow=()=>{
        document.getElementById("t1").value=username;
        document.getElementById("t2").value=email;

        localStorage.setItem("username",username);
        localStorage.setItem("email",email);

        sessionStorage.setItem("username",username);
        sessionStorage.setItem("email",email);
    }
    const handleDataFetch=()=>{
        const uName = localStorage.getItem("username");
        const uEmail = localStorage.getItem("email");
        setUsername(uName);
        setemail(uEmail);
        document.getElementById("t1").value=username;
        document.getElementById("t2").value=email;
    }
    const handleDataDelete=()=>{
        localStorage.removeItem("username")
        localStorage.removeItem("email")

        sessionStorage.removeItem("username")
        sessionStorage.removeItem("email")
    }
    return(
        <>
        <input type="text" placeholder="Enter Username" onChange={handleDataChange}/><br/>
        <input type="text" placeholder="Enter email" onChange={(e)=>setemail(e.target.value)}/><br/>
        <button onClick={handleDataShow}>Show Data</button>
        <button onClick={handleDataFetch}>data Fetch</button>
        <button onClick={handleDataDelete}>delete Data</button><br/><br/>
        <input type="text" readOnly id="t1"/><br/><br/>
        <input type="text" readOnly id="t2"/>
        </>
    )
}
export default LocalStorageAccess