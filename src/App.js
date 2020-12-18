import './App.css';
import React, { Component } from "react";


import Dropdown from "react-dropdown";



class App extends Component {



state = {
  selectedOption: "None",
  dropDownOptions: ["Hotels", "Flights", "Tourist"]
}


  _onSelect = (selectedOption) => {
    this.setState({ selectedOption });
   
  };


  render() {
    return(
    <div className="App">

  <Dropdown
   value={this.state.selectedOption}
   onChange={this._onSelect}
   options={this.state.dropDownOptions}
 />

   <button
                        onClick={this.handleSubmit}
                        className="button is-success"
                      >
                        Hent Data
                      </button>

    </div>
    );
  }
}

export default App;
