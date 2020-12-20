import './App.css';
import React, { Component } from "react";
// import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';



import Dropdown from "react-dropdown";

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';

class App extends Component {

  state = {
    cityOptions: ["city1", "city2", "city3"],
    topicOptions: ["hotel", "airport", "tourism"],

   
    
    chatResponse:"",



    userMessage:"",
    name:"",
    id:"",
    selectedCity: "City",
    selectedTopic:"Topic",
    hotelMessage:"",
    
    airportMserMessage:"",
    
    touristMessage:""



  }
  
 componentDidMount() {
this._onSelect = this._onSelect.bind(this);
this.handleUserSubmit = this.handleUserSubmit.bind(this);
 
// this.GetService();
}

  _onSelect = (selectedOption) => {
    this.setState({ selectedOption }); 
    this.setState({chatResponse: this.state.selectedOption })
  };

  SomeGet() {
    fetch('http://localhost:9001/kafka/message/1/tourism',{
       method:'GET',
    headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        mode:'no-cors',
    }).then((response) => response.json())
      .then((data) => {
        this.setState({
          chatResponse: data[0].name,
        });
      });
        
    console.log(this.state.chatResponse);
  }

postUser(){
fetch('localhost:9003/kafka/message', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
  },mode:'cors',
  body: JSON.stringify({
    id: this.state.id,
    topic: this.state.selectedTopic,
    name: this.state.name,
    city: this.state.city,
    message: this.state.userMessage
  })
})
}


handleUserSubmit = () => {
   this.postUser()

    //this.GetService()
  }

 

   onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };



  
  render() {
    return(
    <div className="App">


 <Grid container spacing={3}>
       
        <Grid item xs>
         <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
       
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} >
          [User]
         
          </Typography>
        
      </Container>
    </React.Fragment>
     
<p className="control">
        <TextField
          label="Name"
          id="name"
          value={this.state.name}
          onChange={this.onInputChange}
          variant='outlined'
          />
      </p>

<p className="control">
        <TextField
          label="id"
          id="id"
          value={this.state.id}
          onChange={this.onInputChange}
          variant='outlined'
          />
      </p>

        <Dropdown
          value={this.state.selectedCity}
          onChange={this._onSelect}
          options={this.state.cityOptions}
        />

       <Dropdown
          value={this.state.selectedTopic}
          onChange={this._onSelect}
          options={this.state.topicOptions}
        />


      <p className="control">
        <TextField
          label="Write a message"
          multiline
          rowsMax={4}
          id="userMessage"
          value={this.state.userMessage}
          onChange={this.onInputChange}
          variant='outlined'
          />
      </p>
                 

     
        <Button onClick={this.handleUserSubmit} >
    Send Messsage
    </Button>

        </Grid>
      
     
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
     <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
       
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} >
          [Hotel Employee]
          
          </Typography>
        
      </Container>
    </React.Fragment>

    
        <p className="control">
          <TextField
            label="Write a message"
            multiline
            rowsMax={4}
            id="userMessage"
            placeholder="Aa"
            value={this.state.hotelMessage}
            onChange={this.onInputChange}
            variant="outlined"
          />
        </p>

  <Button onClick={this.handleSubmit} >
    Send Messsage
    </Button>

        </Grid>
        <Grid item xs={6}>
          <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
       
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} >
          [Airport Employee]
          
          </Typography>
        
      </Container>

      <p className="control">
        <TextField
          label="Write a message"
          multiline
          rowsMax={4}
          id="userMessage"
          placeholder="Aa"
          value={this.state.touristMessage}
          onChange={this.onInputChange}
          variant="outlined"
        />
      </p>
    </React.Fragment>

     <Button onClick={this.handleSubmit} >
    Send Messsage
    </Button>

        </Grid>
        <Grid item xs>
           <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
       
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} >
          [Tourist Employee]   

          </Typography>
      </Container>
    </React.Fragment>

    
      <p className="control">
        <TextField
            label="Write a message"
            multiline
            rowsMax={4}
            id="userMessage"              
            value={this.state.touristMessage}
            onChange={this.onInputChange}
            variant="outlined"
          />
      </p>

      <Button onClick={this.handleSubmit} >
    Send Messsage
    </Button>
        </Grid>
      </Grid>
  
    </div>

    
    );
  }
}

export default App;
