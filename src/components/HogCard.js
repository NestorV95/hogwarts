import React, { Component } from "react";

class HogCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
  }

  toggleDisplay =()=>{
      let newDisplay = !this.state.display
      this.setState({
          display: newDisplay
      })
  }

  hideHog = e =>{
      e.preventDefault()
      let hog = this.props.hog
      this.props.hideHog(hog)
  }
  

  render() {
    let { name, specialty, greased, weight } = this.props.hog;
    let {display} = this.state
    let formatName = name.toLowerCase().replace(/ /g,'_')

    let pigImage = require(`../hog-imgs/${formatName}.jpg`) 
    return (
    <div className={`pigTile ${display? 'maxPigTile' :'minPigTile'}`}>
        <div onClick={this.toggleDisplay}>
            <img src={pigImage} alt={name} style={{width: '50%', height: '50%'}}/>
            <h3>{name}</h3>
        </div>
        {display? 
            <div>
                <p>Highest Medal Achieved: {this.props.hog["highest medal achieved"]}</p>
                <p>{specialty}</p>
                <p> {greased? 'Greasy' : 'Dry AF'}</p> 
                <p>{weight} lbs</p>
            </div>
            : null
        }
        < br/>
        <button onClick={this.hideHog}>Hide Hog</button> 
    </div>
      
    );
  }
}

export default HogCard;
