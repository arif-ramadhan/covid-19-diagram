import React, { Component } from 'react';
import { Chart, Cards, CountryPicker } from './components'
import style from './App.module.css';
import { fetchData } from './api';
import logo from './images/image.png';

class App extends Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountyChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country });
    console.log(data);
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={style.container}>
        <img src={logo} alt='COVID-19' className={style.image} />
        <Cards data={data} />
        <CountryPicker handleCountyChange={this.handleCountyChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
