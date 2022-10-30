import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import './App.css';
import EmployeeDetails from './EmployeeDetails';
import AddEmployee from "./AddEmployee";
import ViewEmployee from "./ViewEmployee";
import Home from "./Home";
function App() {
  
  return <>
  <BrowserRouter>
  <section id="header">
        <div>
            <ul id="navbar">
                <div id="empheading">
                <li><h6 id="heading"><i class="fa-solid fa-users"></i>&nbsp;EMPLOYEE DETAILS</h6></li>
                </div>
                <div id="empnav">
                <li><Link to="/" ><i class="fa-solid fa-house"></i>&nbsp;&nbsp;HOME</Link></li>
                <li><Link to="/employeedetails" ><i class="fa-sharp fa-solid fa-user"></i>
&nbsp;&nbsp;EMPLOYEE DETAILS</Link></li>
                <li><Link to="/addemployee"><i class="fa-solid fa-user-plus"></i>&nbsp;&nbsp;ADD EMPLOYEE</Link></li>       
                </div>       
            </ul>
        </div>
    </section>
    <div>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/employeedetails" element={<EmployeeDetails/>}/>
    <Route path="/viewemployee/:id" element={<ViewEmployee/>}/>
    <Route path="/addemployee/" element={<AddEmployee/>}/>
    <Route path="/addemployee/:id" element={<AddEmployee/>}/>
    
   </Routes>
   </div>
  </BrowserRouter>
 
  </>
}

export default App;
