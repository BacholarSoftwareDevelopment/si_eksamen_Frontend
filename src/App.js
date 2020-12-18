import './App.css';
import React, { Component } from "react";
// import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';

import Dropdown from "react-dropdown";

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';




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
<div style ={{left:500}}>

  <Dropdown
   value={this.state.selectedOption}
   onChange={this._onSelect}
   options={this.state.dropDownOptions}
 />
</div>


  <div style ={{top:500}}>

   <Button
                        onClick={this.handleSubmit}
                       
                      >
                        get service
                      </Button>
  </div>

 <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
       
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} >
 [output goes here]
          </Typography>
        
      </Container>
    </React.Fragment>


    </div>

    
    );
  }
}

export default App;
