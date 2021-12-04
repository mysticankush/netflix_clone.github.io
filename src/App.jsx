import React from "react";
import ReactDOM from "react-dom";
import Card from './Cards';
import Sdata from './Sdata';
const heading_style={
    padding:'30px 0px',
  textAlign:'center',
  fontFamily:'"Raleway",sans-serif',
  textTransform:'uppercase',
  fontSize:'30px',
  letterSpacing:'2px',
  fontWeight:'500',
  color:'#868686',
  backgroundColor:'#fff',
  fontSize:'1.5rem',
  marginBottom:'30px',
}
const App = () => (
    <>
        <h1 style={heading_style}>List of top 5 Netflix Series in 2020</h1>
        {/* Or make a className heading_style(commented in index.css) */}
        {Sdata.map((val)=>{
            return (
            <Card i={val.imgsrc}
                  t={val.title}
                  l={val.link}
                  s={val.sname}
        />
    );
        })};
    </>
);
export default App;