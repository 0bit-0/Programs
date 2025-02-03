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
//###React program to swapping of two numbers
import {useState} from 'react';

function App() {

  var [first, setFirst]=useState('');
  var [second, setSecond]=useState('');
  var [sub,setSub]=useState(null);

  const save = (event) => {
    event.preventDefault();
   var result=first;
    first=second;
    second=result;
    setSub({first,second,result});
  };

  return (
    <div>
      <form onSubmit={save}>
        <div>
          <label>First:</label>
          <input type="number"
           value={first}
           onChange={(e) => setFirst(e.target.value)}
           />
        </div>
        
        <div>
          <label>Second:</label>
        <input type="number"
         value={second}
          onChange={(e) => setSecond(e.target.value)}
          />
        </div>
        
        <button type="submit">Save</button>
      </form>
      {sub &&(
        <div>
          <p>First: {sub.first}</p>
          <p>Second: {sub.second}</p>
        </div>
      )}
    </div>
  );
}

export default App;
	


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React program to swapping of two numbers into the input boxes

import React,{useState} from 'react';

function App(){

  var [num1,setNum1]= useState('');
  var [num2,setNum2]= useState('');
  var [submitteddata, setSubmitteddata]= useState(null);

  const save = (event) => {
    event.preventDefault();
    setNum1(num2);
    setNum2(num1);
    setSubmitteddata({num1,num2});
  }

  return(<div>
    <form onSubmit={save}>
      <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder='Enter First No.'/>
      <input type="text" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder='Enter Second No.'/>
      <button type="submit">Submit</button>
    </form>
  </div>)
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
//###React Program use of for of loop
function App() {

  var arr=[];
  var name='rahulSaini';

  //immediate function
  
  (function (){
	  
	  //for of loop picks the character by character value from any variable
    for(let i of name){
      arr.push(i);
    }

    })();

  return (
    <div>
      <ul style={{listStyle:'none'}}>
        {arr.map((item,index)=>{
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  );
}

export default App;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React program use of for in loop 

function App() {

  var arr=[];
  var obj={
    name:"bhupinder",
    age:22,
    city:"New York"
  };
  
  //for in loop helps to pick the values from an object
    for(let i in obj){
      arr.push(`${obj[i]}`);
    }

  return (
    <div>
      <ul style={{listStyle:'none'}}>
        {arr.map((item,index)=>{
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React program use of forEach loop 

//and also printing array's value directly into the tags

function App() {

  var a=[23,1,3,20,18,50];
  var b=[];

    a.forEach((item,index)=>{
      console.log(`${index} : ${item}`);
      b.push(<label style={{display:"block",marginBottom:"28px"}}>{item}</label>);
    });


  return (
    <div>
      <h1>{b}</h1>
      <h2>{a}</h2>
    </div>
  );
}

export default App;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//React program use of filter function 
function App() {

  var a=[23,1,3,20,18,50];

    var c = a.filter((item)=>
     item % 2 ==0);

  return (
    <div>
      <h2>{a}</h2>
      <h3>{c}</h3>
    </div>
  );
}

export default App;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//React program for simple class component
import {Component} from 'react';

class Student extends Component{
  render(){
    var {name,age,address}=this.props;
    return(
      <div>
        <h2>User Form</h2>
        <p>Name:{name}</p>
        <p>Age:{age}</p>
        <p>Address:{address}</p>
      </div>
    );
  }
}

export default function app(){
  return(
    <div>
      <Student name="Rahul" age="20" address="Delhi"/>
      <Student name="Cb" age="20" address="Hoshiarpur"/>
    </div>
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//another method of class component taking array of object

import React, { Component } from 'react';

class Student extends Component {
  render() {
    const { name, age, address } = this.props; // Destructuring props
    return (
      <div>
        <h2>User Form</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Address: {address}</p>
      </div>
    );
  }
}

export default function App() {
  const users = [
    { name: "rahul", age: 20, address: "hoshiarpur" },
    { name: "bhupinder", age: 22, address: "jalandhar" },
    { name: "karan", age: 21, address: "jalandhar" },
    { name: "harman", age: 22, address: "hoshiarpur" }
  ];

  return (
    <div>
      {users.map((item, index) => (
        <Student
          key={index}
          name={item.name}
          age={item.age}
          address={item.address}
        />
      ))}
    </div>
  );
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//React program example of constructor 


import React, { Component } from 'react';

class Student extends Component {

  constructor(props){
    super(props);
    this.state = { name:props.name, marks:props.marks,};
  }
  render() {
    return (
      <div>
        <p>Name {this.state.name}</p>
        <p>marks {this.state.marks}</p>
      </div>
    );
  }
}

export default function App() {
  return (
    <div>
      <Student name="cb" marks={85}/>
    </div>
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//React program example of useEffect with an API

import React, { useState, useEffect } from "react";


function UserList() {
  const [users, setUsers] = useState([]);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        //setLoading(false);
      })
      .catch((error) => console.error("Error fetching users", error));
  }, []);

 

  return (
    <div>
      <ul>
        {users.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}


function App() {
  return (
    <div>
      <h1>User List</h1>
      <UserList />
    </div>
  );
}

export default App;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React Program use of useEffect in dom manuplation (simple Example).

import React,{useEffect} from 'react';

export default function BgChanger(){

  useEffect(()=>{
    document.body.style.backgroundColor="lightblue";
    // return()=>{
    //   document.body.style.backgroundColor="";
    // };
  },[]);

  return(
    <div>
      <h1>Background Changer</h1>
    </div>
  );
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React Program use of useEffect in dom manuplation 
import React,{useEffect,useState} from 'react';

export default function BgChanger(){

  const [color,setColor]= useState("");

  useEffect(()=>{
    document.body.style.backgroundColor=color;
  },[color]);

  return(
    <div>
      <h1>Background Changer</h1>
      <input type="button"
      value={"red"}
       onClick={()=>setColor("red")}/>

      <input type="button"
      value={"green"}
       onClick={()=>setColor("lightgreen")}/>

      <input type="button"
      value={"yellow"}
       onClick={()=>setColor("yellow")}/>
    </div>
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React Program use spread operator (...) to make a dynamic input boxes

import React,{useState} from 'react';

export default function UserForm(){

  var [formdata, setFormdata]=useState({name:"",age:"",email:""});

  var changedata=(e)=>{
    var {name,value}=e.target 
    setFormdata({...formdata,[name]:value});
  }

  return(
    <div>
      <form>
        Name
        <input type="text" name="name" value={formdata.name} onChange={changedata}/>
        Age
        <input type="number" name="age" value={formdata.age} onChange={changedata}/>
        Email
        <input type="email" name="email" value={formdata.email} onChange={changedata}/>
      </form>

      <p>Name:{formdata.name}</p>
      <p>Age:{formdata.age}</p>
      <p>Email:{formdata.email}</p>
    </div>
  );
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React program use of react router simple example

import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";


function App(){
  return (<div>
 <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/about" element={<h1>About Page</h1>} />
      <Route path="/contact" element={<h1>Contact Page</h1>} />
    </Routes>
</Router>
  </div>
  
  ); 
}

export default App;



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React program use of react router (with Different Functions)

import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";

function Home(){
  return(
    <div>
      <h2>Home Page</h2>
      <p>Welcome to home page</p>
    </div>
  );
}

function About(){
  return(
    <div>
      <h2>About Page</h2>
      <p>Welcome to About page</p>
    </div>
  );
}

function Contact(){
  return(
    <div>
      <h2>Contact  Page</h2>
      <p>Welcome to Contact page</p>
    </div>
  );
}


export default function App(){
  return (<div>
 <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
</Router>
  </div>
  
  ); 
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React Program of dynamic routing with useParams

import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom';

function Home(){
  return(
    <div>
      <nav>
        <Link to="/Profile/chandan">Go to Chandan's Profile</Link>
        <Link to="/Profile/Rahul">Go to Rahul's Profile</Link>
        <Link to="/Profile/Vishal">Go to Vishal's Profile</Link>
      </nav>
    </div>
  );
}

function Profile(){
  const {name} = useParams();
  return(
    <div>
      <h1>Profile of {name}</h1>
    </div>
  );
}

function Notfound(){
  return(
    <div>
      <h1>Page Not Found</h1>
    </div>
    );
}

export default function App(){
  return(
    <div>
       <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Profile/:name" element={<Profile/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
       </Router>
    </div>
  );
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React Program use of useContext
//app.js file coding


import React, { useState } from "react";
import ThemeContext from "./Theme";
import Toolbar from "./Toolbar";

export default function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div>
      <h3>This is useContext</h3>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Theme
      </button>
      <ThemeContext.Provider value={theme}>
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  );
}


//toolbar.js file coding

import React from "react";
import ThemedButton from "./ThemedButton";

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

export default Toolbar;


//ThemedContext.js file Coding


import React, { useContext } from "react";
import ThemeContext from "./Theme";

function ThemedButton() {
  const theme = useContext(ThemeContext); // Corrected import and variable name
  return (
    <div>
      <button
        style={{
          backgroundColor: theme === "dark" ? "#333" : "#fff",
          color: theme === "dark" ? "#fff" : "#000", 
        }}
      >
        Theme Button
      </button>
    </div>
  );
}

export default ThemedButton;


//Theme.js file coding

import { createContext } from "react";

const ThemeContext = createContext();

export default ThemeContext;




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React Program of nested routing

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, Navigate } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <nav>
        <Link to="Home" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="Settings">Settings</Link>
      </nav>
      <h2>Dashboard</h2>
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Settings() {
  return (
    <div>
      <h2>Settings</h2>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h2>Index</h2>} />
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="Home" />} /> 
          <Route path="Home" element={<Home />} />
          <Route path="Settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React Program another example of useContext with Object in react

//app.js file coding


import React, { useState } from "react";
import UserContext from "./User";
import Profile from "./Profile";

export default function App() {
  const user={Name:"Bhupinder",Email:"bhupinder9@gmail.com", Age:21};

  return (
    <div>
      
      <UserContext.Provider value={user}>
        <h2>Welcome to User Profile</h2>
        <Profile />
      </UserContext.Provider>

    </div>
  );
}


//src --> user.js file coding


import { createContext } from "react";

const UserContext = createContext();

export default UserContext;


//src --> Profile.js file coding

import React, { useContext } from "react";
import UserContext from "./User";

function Profile(){
    const User = useContext(UserContext);

    return(<div>
        <p>Name:{User.Name}</p>
        <p>Email:{User.Email}</p>
        <p>Age:{User.Age}</p>
    </div>)
}

export default Profile;



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//###React Program to share data among different folders using props


App.js file coding


import React from 'react';
import Home from './Pages/Home/Home';

function App(){
  return(
    <div className="App">
      <Home />
    </div>
  )
}

export default App;


//src --> folder Components --> folder ReactAngle --> ReactAngle.js File

import React from "react";

import PropTypes from 'prop-types';

function Reactangle({length,breadth})  {const area = length*breadth;

return(
    <div>
        <p>{length}</p>
        <p>{breadth}</p>
        <p>{area}</p>
    </div>
);
}

// Reactangle.propTypes = {
//     length:PropTypes.number.isRequired,
//     breadth:PropTypes.number.isRequired, 
// };

export default Reactangle;

//src --> folder Pages --> folder Home --> Home.js file

import React from 'react';
import Reactangle from '../../Components/ReactAngle/ReactAngle';

function Home(){
    const length=10;
    const breadth=5;

    return(
        <div>
            <Reactangle length={length} breadth={breadth}/>
        </div>
    )
}

export default Home;



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
