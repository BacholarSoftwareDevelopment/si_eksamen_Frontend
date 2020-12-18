import './App.css';
import React, { Component } from "react";
// import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';

import Dropdown from "react-dropdown";

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


class App extends React.Component {
  
  
  
  state = {
    selectedOption: "None",
    dropDownOptions: ["Hotels", "Flights", "Tourist"],
    
    chatResponse:""
  }
  
 componentWillMount() {
this._onSelect = this._onSelect.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
 }



  _onSelect = (selectedOption) => {
    this.setState({ selectedOption }); 
  };

  GetService() {
    /*
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ service: 'Selected Service From Dropdown' })
    };
    fetch('https://FromOurKafka', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ chatResponse: data }));
        */
    
    this.setState({chatResponse: this.state.selectedOption })

    
}


handleSubmit = (event) => {
    if (event != null) {
      event.preventDefault();
    }
    this.GetService()
  }


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

   <Button onClick={this.handleSubmit} >
    get service
    </Button>
  </div>

 <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
       
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} >
          [service response]
          
          </Typography>
        
      </Container>
    </React.Fragment>


    </div>

    
    );
  }
}

export default App;
