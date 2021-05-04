import React from "react";
import HogCard from "./HogCard";

const HogList = (props) => {
  return (
    <div className="ui grid container">
      {props.hogs.map(hog=>{
        return <HogCard hog={hog} key={hog.name} hideHog={props.hideHog}/>
      })}
    </div>
  );
};

export default HogList;
