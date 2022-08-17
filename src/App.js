import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from './components/Particles'


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value)
  }
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange}/>
        <Particles id="tsparticles" />
  {/* {      <Navigation/>
        <Logo/>
        <ImageLinkForm/>
        <FaceRecognition/>} */}
      </div>
    );
  }
}

export default App;
