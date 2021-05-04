import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {

  const sortByName = () =>{
    console.log('sorted')
    props.sortByName()
  }

  const sortByWeight=()=>{
    props.sortByWeight()
  }

  const greaseHogs=()=>{
    props.greaseHogs()
  }

  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <br />
      <button onClick={greaseHogs}>BRING ON THE GREASE</button>
      <button onClick={sortByWeight}>BRING ON THE POUNDS</button>
      <button onClick={sortByName}>BRING ON THE ABC'S</button>
    </div>
  );
};

export default Nav;
