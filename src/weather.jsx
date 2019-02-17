import React from 'react'

const toQueryString = (obj, key) => {
  const parts = [];
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
    }
  }
  return parts.join('&');
}

export default class Weather extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      weather: null
    }

    this.k = '17970a208fb03e274efa4e9b1914e54a';

    this.pollWeather = this.pollWeather.bind(this)
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.pollWeather)
  }

  pollWeather(location) {
    let url = 'http://api.openweathermap.org/data/2.5/weather?'
    let params = {
      lat: location.coords.latitude,
      lon: location.coords.longitude
    }

    let query = toQueryString(params) + "&appid=" + this.k
    // console.log(query);

    url += query;

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      //ready state of DONE means this is complete
      if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(xmlhttp.responseText);
        // console.log(data);
        this.setState({ weather: data });
      }
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }

  render() {
    let content = <div></div>

    if (this.state.weather) {
      let weather = this.state.weather
      let description = weather.weather[0].description
      let temp = (weather.main.temp - 273.15) * 1.8 + 32;
      content = <div>
        <h2>City: {weather.name}</h2>
        <h2>Summary: {description}</h2>
        <h2>Temp: {temp.toFixed(1)} degrees</h2>
      </div>
    } else {
      content = <h2 className="loading">Loading...</h2>
    }

    return (
      <div className="weather-widget">
        <h1 className="weather-title">Weather</h1>
        <div className="weather-content">
          {content}
        </div>
      </div>
    )
  }
}