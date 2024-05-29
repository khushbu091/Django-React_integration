import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Mainbody from "./Mainbody";
import Insert from "./Insert";
import Display from "./Display";
import Update from "./Update";
import Edit from "./Edit";


const App=()=>
{
  return(
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Mainbody />} />
      <Route path="Home" element={<Mainbody />} />
      <Route path="Insert" element={<Insert />} />
      <Route path="Display" element={<Display/>}/>
      <Route path="Update" element={<Update/>}/>
      <Route path="Edit/:myid" element={<Edit/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
    </>
  );
 }
  export default App;
