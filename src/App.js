import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Particles from './components/Particles'
import myImage from './insert_image.png'

let IMAGE_URL;

let categ_names = [];
let categ_perc = [];

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?yCXmhi7e2ARwUtzHHlvtcrgETnDgFwCK&size=1200:675',
      imageBytes: '',
    }
  }


  loadFile = (event) => {
    let file = event.target.files[0];
    console.log("file is", file);
    function blobToDataURL(blob, callback) {
        var fileReader = new FileReader();
        fileReader.onload = function(e) {callback(e.target.result);}
        fileReader.readAsDataURL(blob);
      }
    blobToDataURL(event.target.files[0], (dataurl) => {
        console.log(dataurl);
        this.setState({imageBytes: dataurl}, () => {
          console.log("image bytes", this.state.imageBytes);
        });
    });
  }

  passBytes = (data) => {
    this.loadFile(data);
  }

  onInputChange = (event) => {
    // console.log(event.target.value);
    this.setState({input: event.target.value});
    // IMAGE_URL = event.taraget.value;
    // console.log(IMAGE_URL)
  }
  getNames = (arr) => {
    // console.log(arr);
    let res_str = [];
    let res_int = [];
    for (let i = 0; i < arr.length; i++) {
      categ_names.push(arr[i].name)
      res_str.push(arr[i].name)
      res_int.push(arr[i].value)
    }
    // console.log(res_str);
    // console.log(res_int);
    return res_str;
  }

  getPerc = (arr) => {
    // console.log(arr);
    let res_str = [];
    let res_int = [];
    for (let i = 0; i < arr.length; i++) {
      categ_perc.push(arr[i].value)
      res_str.push(arr[i].name)
      res_int.push((arr[i].value * 100).toFixed(2))
    }
    // console.log(res_str);
    // console.log(res_int);
    return res_int;
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
    .then(result => categ_names = this.getNames(result.outputs[0].data.concepts))
    .then(() => this.forceUpdate()) // LET'S GOO. This Forces the rerender
    .catch(error => console.log('error', error));
    
    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
    .then(response => response.json())
    .then(result => categ_perc = this.getPerc(result.outputs[0].data.concepts))
    .then(() => this.forceUpdate()) // LET'S GOO. This Forces the rerender
    .catch(error => console.log('error', error));
    //    .then(result => categ_perc = this.getPerc(result.outputs[0].data.concepts))
  }
  
  
  render() {
    // For some reason imageUrl and input states are undefined regardless of what code I add anywhere
    // unless I add these few lines below
    const { imageUrl, input } = this.state;
    if (categ_names.length > 0) {
      // console.log("category names is", categ_names);
    }
    // console.log("input is", input);
    // console.log("imageUrl is", imageUrl);
    return (
      <div className="App">
        <Navigation/>
        <Logo/>
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
        sendBytes = {this.passBytes}
        />
        <FaceRecognition imageUrl = {IMAGE_URL} category_names = {categ_names} category_percents = {categ_perc}/>
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
