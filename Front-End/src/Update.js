import myedit from ".//img/edit img.png"
import mydel from ".//img/img2.png"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const Update=()=>{

    const[myData, setdata]= useState([]);
    const loadData=()=>{
        let url="http://127.0.0.1:8000/Employ/";
        axios.get(url).then((res)=>{
               setdata(res.data);
        });
}
useEffect(()=>{
 loadData();
}, []);

  const MyDelete=(myid)=>{
        let url=`http://127.0.0.1:8000/Employ/${myid}/`;
        axios.delete(url).then((res)=>{
            alert("Record Deleted !!")
            loadData();
        })  
  }

  const ans=myData.map((key)=>{
    return(
           <>
           <tr>
                  <td>{key.EmployID}</td>
                  <td>{key.EmployName}</td>
                  <td>{key.EmployAddress}</td>
                  <td>{key.EmploySalary}</td>
                  <td>
                    <Link to={"/Edit/"+key.id}>
                   <img src={myedit} width="20px" height="15px"/> 
                   </Link>
                   <a href="#" onClick={()=>{MyDelete(key.id)}}>
                    <img src={mydel} width="20px" height="15px"/>
                    </a> 
                  </td>
           </tr>
           </>
    );
})

    return(
        <>
        <center><h1>Update Data</h1></center>
        <table width="70%" align="center" border="1px">
              <tr>
                     <th>Employ ID</th>
                     <th>Employ Name</th>
                     <th>Employ Address</th>
                     <th>Employ Salary</th>
              </tr>
              {ans}
        </table>
        <br/>
        </>
    );
}

export default Update;