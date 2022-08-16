import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from './components/Particles'



function App() {
  return (
    <div className="App">
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
      <Particles id="tsparticles" />
{/* {      <Navigation/>
      <Logo/>
      <ImageLinkForm/>
      <FaceRecognition/>} */}
    </div>
  );
}

export default App;
