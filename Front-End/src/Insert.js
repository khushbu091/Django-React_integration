import { useState } from "react";
import axios from "axios";


const Insert=()=>
{
       const[input, setInput]=useState({});

       const handleInput=(e)=>{
              let name=e.target.name;
              let value=e.target.value;

              setInput(values=>({...values, [name]:value}));

       }

       const handleSumit=()=>{
              let api=`http://127.0.0.1:8000/Employ/`;
              axios.post(api, input).then((res)=>{
                     alert("Data save !!")
                     
              })

              setInput({
                     
                     EmployID: "",
                     EmployName: "",
                     EmployAddress: "",
                     EmploySalary: ""
              })
       }


       

       return(
        <>

      <div className="insert-container">
        <h1>Insert Record</h1>
        <h4> Employ ID</h4><input type="text" name="EmployID" value={input.EmployID} onChange={handleInput}/>
        <br/>
        <h4> Employ Name</h4> <input type="text" name="EmployName" value={input.EmployName} onChange={handleInput}/>
        <br/>
        <h4> Employ Address</h4> <input type="text" name="EmployAddress" value={input.EmployAddress} onChange={handleInput}/>
        <br/>
        <h4> Employ Salary</h4> <input type="text" name="EmploySalary" value={input.EmploySalary} onChange={handleInput}/>
        <br/>
        <br/>
        <button className="btn" onClick={handleSumit}>Data save</button>
        <br/>
       </div>
       <br/>
       
         </>
       );
}

export default Insert;