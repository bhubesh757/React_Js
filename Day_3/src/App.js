import React from 'react';
import logo from './logo.svg';
import './App.css';
// import FunctionalComp from "./FunctionalComp";
// import {ClassComp,ClassComp1} from "./ClassComp";
// import Hello from "./components/Hello";
// import Greet from './components/Greet';
import Welcome from "./components/Welcome"
import Message from "./components/Message";
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import UserGreet from './components/UserGreet';
import NameList from './components/NameList';
// import EventBind from './components/EventBind';
// import ParentComp from './components/ParentComp';
// import Counter from "./components/Counter"


function App() {
  return (
    <div>
       {/* <h1> Hello I am </h1>
    <h2> i am learning react js</h2> */}
    {/* <Hello/> */}
    {/* passing a name  */}
    {/* <Greet name = "rock" heroName = "don" > 
    <p> this is childern propreties</p>
    </Greet>
    <Greet name = " divya" heroName = " banger">
      <button>Action</button>
    </Greet>
    <Greet name = " harry" heroName = " potter"/> */}
    {/* <Welcome name = "rock" heroName = "don" ></Welcome>
    <Welcome name = " divya" heroName = " banger"></Welcome>
    <Welcome name = " harry" heroName = " potter"></Welcome> */}
    {/* <Message></Message> */}
    {/* <Counter></Counter> */}
    {/* <FunctionClick/>
    <ClassClick></ClassClick> */}
    {/* <EventBind></EventBind> */}
    {/* <ParentComp></ParentComp> */}
    {/* <UserGreet></UserGreet> */}
    <NameList></NameList>
     </div>
   
  );
}

export default App;
