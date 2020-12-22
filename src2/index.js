import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./emojipedia.js";
import emojipedia from "./emojipedia.js";

 
 let entry =(
  <div className="term">
  {emojipedia.map((element,index)=>{
    return <div>
    <dt>
    <span className="emoji" role="img">{element.icon}</span>
    <span>{element.name}</span>
    </dt>
    <dd>
    <span>{element.meaning}</span>
    </dd>
    </div>
  })}
  </div>   
 )
 let App = (<div><dl className ="dictionary">
 <h1>Our First Application</h1>
 {entry}
 </dl>
 </div>)

 
ReactDOM.render(
 App,document.getElementById("root")
)
