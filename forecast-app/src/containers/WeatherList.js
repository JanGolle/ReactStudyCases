import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const {lon, lat} = cityData.city.coord;

    return (
        <tr key={cityData.city.id}>
          <td><GoogleMap lat={lat} lon={lon}/></td>
          <td>
            <Chart data={temps} color="red" units="K"/>
          </td>
          <td>
            <Chart data={pressure} color="green" units="hPa"/>
          </td>
          <td>
            <Chart data={humidity} color="blue" units="%"/>
          </td>
        </tr>
    );
  }

  render() {
    return (
        <table className="table table-hover">
          <thead>
          <tr>
            <th>City</th>
            <th>Temperature (k)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
          </thead>
          <tbody>
          {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
