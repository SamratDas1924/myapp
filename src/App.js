import React, {Component} from 'react'
import './App.css'
import Navbar from './components/Navbar.js'
import Header from './components/Header.js'


class App extends Component {
  render() {
    return (
      <>
      <Navbar logo = "Safalya"></Navbar>
      <Header brand = "Academy"></Header>
      </>
    )
  }
}


export default App
