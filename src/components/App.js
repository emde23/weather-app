import React, { Component } from 'react';
// import './App.css';
import Search from './Search';
import Result from './Result';
import 'bootstrap/dist/css/bootstrap.min.css';



const APIKey = "353cf88e856c17bb2f1c599ec269643c"

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    feels: "",
    icon: "",
    description: "",
    err: "false",
  }
  
  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    }
    )
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.value === 0) return
    if (prevState.value !== this.state.value) {
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

      fetch(API)
        .then(response => {
          if(response.ok) {
            return response
          }
          throw Error("Nie udało się")
        })
        .then(response => response.json())
        .then(data => {
          const time = new Date().toLocaleString()
          this.setState({
          err: false,
          date: time,
          city: this.state.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          feels: data.main.feels_like,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          icon: data.weather[0].icon,
          description: data.weather[0].description,
          })
        })
        .catch(err => {this.setState({
          err: true,
          city: this.state.value,
          })
        })
    }
    
  }
  
  render() {
    return (
      <div>
        <Search value={this.state.value} 
        change={this.handleInputChange}
        />
        <Result weather={this.state}/>
        <footer className="container-sm position-absolute bottom-0 start-50 translate-middle-x bg-dark rounded"> 
            <p className="m-1 text-end text-white">Created by Marcin Dyjach</p>
        </footer>
        </div>
      
    );
  }
}

export default App;
