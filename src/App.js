import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Particles from './components/Particles'
import Categories from './components/Categories/Categories'

let IMAGE_URL = 'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg';

let categ_names = [];

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?yCXmhi7e2ARwUtzHHlvtcrgETnDgFwCK&size=1200:675',
    }
  }
  onInputChange = (event) => {
    // console.log(event.target.value);
    this.setState({input: event.target.value});
    // IMAGE_URL = event.taraget.value;
    // console.log(IMAGE_URL)
  }
  getNameAndPercent = (arr) => {
    console.log(arr);
    let res_str = [];
    let res_int = [];
    for (let i = 0; i < arr.length; i++) {
      categ_names.push(arr[i].name)
      res_str.push(arr[i].name)
      res_int.push(arr[i].value)
    }
    console.log(res_str);
    console.log(res_int);
    return res_str;
  }
  
  onButtonSubmit = () => {

    // I don't understand why these console.logs are undefined unless I do this destructuring process.
    // If I don't destructure then these console.log as undefined but the ones in the render console.log
    // properly
    
    this.setState({imageUrl: this.state.input});
    IMAGE_URL = this.imageUrl;
    const { imageUrl, input } = this.state;
    IMAGE_URL = input;
    // console.log("input is", input);
    // console.log("imageUrl is", imageUrl);
    // console.log("INPUT IS", input);
    // console.log("IMAGE URL IS", IMAGE_URL);

    // Regardless of my lack of understanding, it works with this code.
    // The image shows up updated based on the URL typed into the input bar
    // and the console properly outputs what the image is showing



    // this.setState({imageUrl: this.state.input});
    // IMAGE_URL = this.imageUrl;
    // console.log("INPUT IS", this.input);
    // console.log("IMAGE URL IS", IMAGE_URL);
          //////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, model details, and the URL
    // of the image we want as an input. Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////////////////

    const USER_ID = 'samixtures';
    // Your PAT (Personal Access Token) can be found in the portal under Authentification
    const PAT = 'f69d3700448f4e23b9af49398d30fe47';
    const APP_ID = 'my-first-application';
    // Change these to whatever model and image URL you want to use
    const MODEL_ID = 'general-image-recognition';
    const MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40';    

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id
    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
    .then(response => response.json())
    .then(result => categ_names = this.getNameAndPercent(result.outputs[0].data.concepts))
    .then(() => console.log(categ_names))
    .catch(error => console.log('error', error));

    // this.getNameAndPercent(categ_names)
    console.log("categ_names", categ_names);
    
  }
  
  
  render() {
    // For some reason imageUrl and input states are undefined regardless of what code I add anywhere
    // unless I add these few lines below
    const { imageUrl, input } = this.state;
    // console.log("input is", input);
    // console.log("imageUrl is", imageUrl);
    return (
      <div className="App">
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl = {IMAGE_URL} category_names = {categ_names}/>
        <Categories category_names = {categ_names}/>
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
