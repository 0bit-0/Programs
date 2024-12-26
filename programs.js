//###React Prorgram to display variable value in div 

import { useState } from 'react';

function App(){
	var name = 'CB';
	
	return(
		<div>{name}</div>
	
	);
}
export default App;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React program to display input's value on screen
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [marks, setMarks] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const save = (event) => {
    event.preventDefault();
    setSubmittedData({ name, marks });
  };

  return (
    <div>
      <form onSubmit={save}>
        <div>
          <div>
            <label>Name</label>
            <input 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              type="text" 
              required 
            />
          </div>
          <div>
            <label>Marks</label>
            <input 
              value={marks} 
              onChange={(e) => setMarks(e.target.value)} 
              type="number" 
              required 
            />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {submittedData && (
        <div>
          <p>Name is {submittedData.name}</p>
          <p>Marks is {submittedData.marks}</p>
        </div>
      )}
    </div>
  );
}

export default App;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//### Another Way React program to display input's value on screen
import { useState } from 'react';

function App() {
  // State variables for the two input boxes
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  // Handlers to update the state when input values change
  const handleInput1Change = (event) => {
    setInput1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2(event.target.value);
  };

  return (
    <div>
      <form>
        {/* First Input Box */}
        <div>
          <label>Enter First Value:</label>
          <input
            type="text"
            value={input1}
            onChange={handleInput1Change}
            placeholder="Type something..."
          />
        </div>

        {/* Second Input Box */}
        <div>
          <label>Enter Second Value:</label>
          <input
            type="text"
            value={input2}
            onChange={handleInput2Change}
            placeholder="Type something..."
          />
        </div>
      </form>

      {/* Display the values dynamically */}
      <div>
        {input1 && <p>First Input Value: {input1}</p>}
        {input2 && <p>Second Input Value: {input2}</p>}
      </div>
    </div>
  );
}

export default App;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React Program to calculate area of circle


import { useState } from 'react';

function App() {
  const [radius, setRadius] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const save = (event) => {
    event.preventDefault();
    var result = 3.14*radius *radius;
    setSubmittedData({ radius, result });
  };

  return (
    <div>
      <form onSubmit={save}>
        <div>
          <div>
            <label>Enter Radius</label>
            <input 
              value={radius} 
              onChange={(e) => setRadius(e.target.value)} 
              type="number" 
              required 
            />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {submittedData && (
        <div>
          <p>Radius is: {submittedData.radius}</p>
          <p>Area Of Circle Is: {submittedData.result}</p>
        </div>
      )}
    </div>
  );
}

export default App;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React Program to calculate area of square

import { useState } from 'react';

function App() {
  const [side, setSide] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const save = (event) => {
    event.preventDefault();
    var result = side*side;
    setSubmittedData({ side, result });
  };

  return (
    <div>
      <form onSubmit={save}>
        <div>
          <div>
            <label>Enter Side</label>
            <input 
              value={side} 
              onChange={(e) => setSide(e.target.value)} 
              type="number" 
              required 
            />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {submittedData && (
        <div>
          <p>Side is: {submittedData.side}</p>
          <p>Area Of Square Is: {submittedData.result}</p>
        </div>
      )}
    </div>
  );
}

export default App;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React program to calculate simple interest


import { useState } from 'react';

function App() {
  const [principle, setPrinciple] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const save = (event) => {
    event.preventDefault();
    var result = principle*rate*time/100;
    setSubmittedData({ result });
  };

  return (
    <div>
      <form onSubmit={save}>
        <div>
          <div>
            <label>Enter Principle</label>
            <input 
              value={principle} 
              onChange={(e) => setPrinciple(e.target.value)} 
              type="number" 
              required 
            />
          </div>

          <div>
            <label>Enter Rate</label>
            <input 
              value={rate} 
              onChange={(e) => setRate(e.target.value)} 
              type="number" 
              required 
            />
          </div>

          <div>
            <label>Enter Time</label>
            <input 
              value={time} 
              onChange={(e) => setTime(e.target.value)} 
              type="number" 
              required 
            />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {submittedData && (
        <div>
          <p>Answer is: {submittedData.result}</p>
        </div>
      )}
    </div>
  );
}

export default App;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###Reacr program to calculate area of triangle

import { useState } from 'react';

function App() {
  const [breadth, setBreadth] = useState('');
  const [height, setHeight] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const save = (event) => {
    event.preventDefault();
    var result = 1/2*breadth*height;
    setSubmittedData({ result });
  };

  return (
    <div>
      <form onSubmit={save}>
        <div>
          <div>
            <label>Enter Breadth</label>
            <input 
              value={breadth} 
              onChange={(e) => setBreadth(e.target.value)} 
              type="number" 
              required 
            />
          </div>

          <div>
            <label>Enter Height</label>
            <input 
              value={height} 
              onChange={(e) => setHeight(e.target.value)} 
              type="number" 
              required 
            />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {submittedData && (
        <div>
          <p>Area of Triangle is: {submittedData.result}</p>
        </div>
      )}
    </div>
  );
}

export default App;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React program in which clicking on button it will increment the value of count

import {useState} from 'react';

function App(){
  var [count, setCount] = useState(0);

  var increment =()=>{
    setCount(count+1);
  };

  return(
    <div>
      <h2>Clicking Count {count}</h2>
      
      <button onClick={increment}>Click Me</button>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React program to show array values on screen using .map function

import {useState} from 'react';

function App(){
  var arr=['bhupinder','rahul','nitish','karan','harman'];

  return(
    <div>
      <ul style={{listStyle:'none'}}>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
          ))}
      </ul>

    </div>
  );
}

export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React program to add new item to array using spread operator(...)

import {useState} from 'react';

function App(){
  var [arr,setArr] = useState(['cb','bhks','kb','nb','rs']);
  const [newitem, setNewitem] = useState('');

  var additem =()=>{
    setArr([...arr,newitem]);
  };

  return(
    <div>
      <input type="text"
       value={newitem}
       onChange={(e)=>setNewitem(e.target.value)}
       placeholder='Type Here'/>
      
      <button onClick={additem}>Add</button>

      <ul style={{listStyle:'none'}}>
        {arr.map((i, index) => (
          <li key={index}>{i}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React program to display array of object's values into a table using .map() method

function App() {

  var arr=[{name:'rahul',rollno:21002052},
    {name:'bhupinder',rollno:21002004},
    {name:'nitish',rollno:21002009},
    {name:'karan',rollno:21002024},
    {name:'harman',rollno:21002031}
  ];

  return (
    <div>
      <form>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>RollNo</th>
              </tr>
            </thead>

            <tbody>
              {arr.map((item, index) => (
                <tr key={index}>
                <td>{item.name}</td>
                <td>{item.rollno}</td>
                </tr>
                ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}

export default App;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React program to print even numbers from an array

function App(){
  var arr=[23,24,2,7,8,45,99,13,12];

  return(
    <div>
      <h2>Array</h2>
      <ul style={{ listStyle: 'none' }}>
        {arr.map((item, index) => {
          if (item % 2 === 0) {
            return <li key={index}>{item}</li>;
          }
           })}
      </ul>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React program to print prime numbers fron an array


function App(){
  var arr=[23,24,2,7,8,45,99,13,12];

  function prime(num){
    for(let i=2; i<=num/2; i++){
      if(num % i === 0){
        return false;
    }
  }
  return true;
}
  return(
    <div>
      <h2>Array</h2>
      <ul style={{ listStyle: 'none' }}>
        {arr.map((item, index) => {
          if (prime(item)) {
            return <li key={index}>{item}</li>;
          }
       
                  })}
      </ul>
    </div>
  );
}

export default App;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React program Traffic Light Selector using select option tag

import { useState } from 'react';

function App() {
  const [var1, setVar1] = useState('');
  const [result, setResult] = useState('');

  const check = (event) => {
    const value = event.target.value; // Fetch the value selected in the dropdown
    setVar1(value); // Update 'var1' state with the selected value

    // Set 'result' based on the selected value
    if (value === 'Red') {
      setResult('Stop');
    } else if (value === 'Yellow') {
      setResult('Wait');
    } else if (value === 'Green') {
      setResult('Go');
    } else {
      setResult(''); // Clear 'result' for any other value
    }
  };

  return (
    <div>
      <form>
        <div>
          <div>
            <label>Select Any Value:</label>
            <select value={var1} onChange={check}>
              <option value="" selected disabled>
                Select Colour
              </option>
              <option value="Red">Red</option>
              <option value="Yellow">Yellow</option>
              <option value="Green">Green</option>
            </select>
          </div>
        </div>
      </form>
      {result && (
        <div>
          <p>You Can : {result}</p>
        </div>
      )}
    </div>
  );
}

export default App;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React program using if else and return

import { useState } from 'react';

function App() {
  const [age, setAge] = useState('');

  function  Check({age}) {

    if(age<18 && age>=13){
      return(<div>You Are a Teenager</div>)
    }
    else if(age>=18){
      return(<div>Your Are a Adult</div>)
    }
    else{
      return('');
    }
  };

  return (
    <div>
      <form>
        <div>
          <div>
            <label>Enter Your Age:</label>
            <input
              type="number"
              onChange={(e)=>setAge(e.target.value)}
              value={age}
              placeholder='Enter Age'
            />
          </div>
        </div>
      </form>
      {age && <Check age= {Number(age)}/>}
    </div>
  );
}

export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###Example of props in react

function App() {

  function Welcome(d){
    return (<div>
      hellow,{d.name},{d.marks}</div>);
  }
  return (
    <div>
      <h1>< Welcome name='cb' marks={90}/></h1>
    </div>
  );
}

export default App;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React Program use of for loop 

function App() {

  var arr=[];
  
  //immediate function
  (function (){

    for(let i=1; i<=10; i++){
      arr.push(i);
    }
  })();

  return (
    <div>
      <ul style={{listStyle:'none'}}>
        {arr.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React Program use of while loop
function App() {

  var arr=[];

  //immediate function
  (function (){
    let i=1;
    while(i<=10){
        arr.push(i);
        i++;
      }
    })();

  return (
    <div>
      <ul style={{listStyle:'none'}}>
        {arr.map((item,index)=>{
          if(item % 2 == 0){
          return <li key={index}>{item}</li>
          }
        })}
      </ul>
    </div>
  );
}

export default App;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React Program use of do while loop

function App() {

  var arr=[];
  var sum=0;
  //immediate function
  (function (){
    let i=1;
    do{
      arr.push(i);
      sum=sum+i;
      i++;
    }
    while(i<=10);

    })();

  return (
    <div>
      <ul style={{listStyle:'none'}}>
        {arr.map((item,index)=>{
          if(item % 2 == 0){
          return <li key={index}>{item}</li>
          }
        })}
      </ul>
      <p>Sum of numbers is {sum}</p>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###Js Program to print prime numbrs from an array

function isPrime(num) {
  if (num <= 1) return false; // 0, 1, and negative numbers are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
}

function printPrimesFromArray(arr) {
  arr.forEach(num => {
      if (isPrime(num)) {
          console.log(num);
      }
  });
}

// Example usage:
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15];
printPrimesFromArray(numbers);
