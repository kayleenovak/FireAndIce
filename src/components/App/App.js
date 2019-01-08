import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchHouses } from '../../thunks/fetchHouses.js'
import CardContainer from '../../containers/CardContainer/CardContainer.js'

export class App extends Component {

  componentDidMount() {
    this.props.fetchHouses()
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          <CardContainer />
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchHouses: () => dispatch(fetchHouses())
})

export default connect(null, mapDispatchToProps)(App)  

