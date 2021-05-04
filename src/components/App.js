import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogList from "./HogList"

class App extends Component {
  constructor(){
    super()
    this.state={
      hogs: [],
      hiddenHogs: [],
    }
  }

  componentDidMount(){
    this.setState({
      hogs: hogs
    })
  }

  sortByWeight=()=>{
    let fatHogs = this.state.hogs.sort((hog1, hog2) => hog1.weight - hog2.weight).reverse()
    this.setState({
      hogs: fatHogs
    })
  }

  sortByName=()=>{
    let abcHogs = this.state.hogs.sort((hog1, hog2) => hog1.name.localeCompare(hog2.name))
    this.setState({
      hogs: abcHogs
    })
  }

  greaseHogs=()=>{
    let greasers = this.state.hogs.filter(hog=> hog.greased ===true)
    this.setState({
      hogs: greasers
    })
  }

  hideHog = hiddenHog =>{
    this.setState({
      hogs: this.state.hogs.filter(hog=> hog.name !== hiddenHog.name),
      hiddenHogs: [...this.state.hiddenHogs, hiddenHog]
    })
  }


 
  render() {
    return (
      <div className="App">
        <Nav sortByName={this.sortByName} sortByWeight={this.sortByWeight} greaseHogs={this.greaseHogs}/>
        <HelloWorld />
        <HogList hogs={this.state.hogs} hideHog={this.hideHog}/>
      </div>
    );
  }
}

export default App;
