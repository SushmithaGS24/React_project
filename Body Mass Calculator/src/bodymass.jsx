import React, {useState} from 'react';


function Bodymass(){
    const [weight, setWeight] = useState();
const [height, setHeight] = useState();
const [bmi, setBmi] = useState();


function weightHandler( event ){
    setWeight(event.target.value);
}
function heightHandler( event ){
    setHeight(event.target.value);
}
function calculateHandler() {
   const heightinmetres = parseFloat(height)/100;
   setBmi(parseFloat(weight)/(heightinmetres * heightinmetres));
}

    return (
        <div>
            <h1>BMI Calculator</h1>
            <h3>Weight (kg) :</h3>
            <input onChange = {(e) => weightHandler(e)} type = "text"  value = {weight} placeholder = "Enter weight" />
            <h3>Height  (cm) :</h3>
            <input onChange = {(e) => heightHandler(e)} type = "text"  value = {height} placeholder = "Enter height" />
            <button onClick = {calculateHandler} >Calculate</button>
            <h3> Your BMI : {bmi}</h3>


        </div>
        
    );

}

export default Bodymass;
