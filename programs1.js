/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//React program useContext example with simple interest


//src --> app.js file coding

import React, { useState } from 'react';
import UserContext from './user';
import SimpleInterest from './Simpleinterest';

export default function App() {
  const [p, setP] = useState('');
  const [r, setR] = useState('');
  const [t, setT] = useState('');
  const [ob, setOb] = useState(null);

  const cal = (event) => {
    event.preventDefault();
    const principal = parseFloat(p) || 0;
    const rate = parseFloat(r) || 0;
    const time = parseFloat(t) || 0;
    const interest = (principal * rate * time) / 100;
    setOb({principal, rate, time, interest });
  };

  return (
    <div>
      <form onSubmit={cal}>
        <input
          type="number"
          value={p}
          onChange={(e) => setP(e.target.value)}
          placeholder="Principle Amount"
        />
        <input
          type="number"
          value={r}
          onChange={(e) => setR(e.target.value)}
          placeholder="Rate"
        />
        <input
          type="number"
          value={t}
          onChange={(e) => setT(e.target.value)}
          placeholder="Time"
        />
        <button type="submit">Submit</button>
      </form>

      <UserContext.Provider value={ob}>
        <SimpleInterest />
      </UserContext.Provider>
    </div>
  );
}

//src --> user.js file coding

import {createContext} from 'react';

const UserContext = createContext();

export default UserContext;



//scr --> Simpleinterest.js file coding

import React, { useContext } from 'react';
import UserContext from './user';

function SimpleInterest() {
  const ob = useContext(UserContext);

  
  if (!ob) {
    return (
      <div>
        <h1>Simple Interest</h1>
       
      </div>
    );
  }

  return (
    <div>
      <h1>Simple Interest</h1>
      <p>
        Details: Principle = {ob.principal}, Rate = {ob.rate}, Time = {ob.time}
      </p>
      <p>Simple Interest is: {ob.interest}</p>
    
    </div>
  );
}

export default SimpleInterest;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//React program Printing current date and time with useState

import React,{useState,useEffect} from 'react';

function Clock(){
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toLocaleDateString());

  return(
    <div>
      <h1>{time}</h1>
      <h2>{date}</h2>
    </div>
  )
}

export default function App(){
  return(
    <div>
      <h1><Clock/></h1>
    </div>
  )
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//React program Printing current time with useState and useEffect


import React,{useState,useEffect} from 'react';

function Clock(){
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  
  useEffect(() => {
    var ans = setInterval(() =>{ 
      setTime(new Date().toLocaleTimeString());
    },1000);
    return() => clearInterval(ans);
  },[]
  );

  return(
    <div>
      <h1>{time}</h1>
    </div>
  );
}

export default Clock;
