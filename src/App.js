import logo from './logo.svg';
import './App.css';
import calculateAge from "./calculateAge.js";
function App() {
  return (
    <center><div id = "ageCalculator" style = {{height:'400px',width:'400px',backgroundColor:'cyan',borderRadius:'5px',borderStyle:'solid',borderColor:'green'}}>
      <h1>Age Calculator</h1>
      <h3>Enter your data of Birth</h3>
      <input type = "date" id = "i1" style = {{height:'25px',width:'150px',marginBottom:'30px'}}></input>
      <br></br>
      <button onClick = {calculateAge} style = {{backgroundColor:'blue',height:'30px',width:'200px',textTransform:'uppercase',color:'black',fontSize:'20px'}}>Calculate Age</button>
      <p id = "i2"></p>
    </div></center>
  );
}

export default App;
