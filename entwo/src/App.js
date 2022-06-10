import logo from './logo.png';
import './App.css';
import post from './post.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import StandardImageList from './imageList.js';
import { HashRouter, Route, Routes } from "react-router-dom";
import Box from '@mui/material/Box';

function read()
{

     var txtFile = new XMLHttpRequest();
     txtFile.open("GET", "https://storageapi.fleek.co/e7b18505-5349-459d-9fba-f427d40e6079-bucket/text/frstpdesc2.txt", true);
     txtFile.onreadystatechange = function()
     {
          if (txtFile.readyState === 4)
          {
               // Makes sure the document is ready to parse.
               if (txtFile.status === 200)
               {
                    // Makes sure it's found the file.
                    document.getElementById("desc").innerHTML = txtFile.responseText;
               }
          }
     }
     txtFile.send(null)
}


function rmbut(){

  var div = document.getElementById('enEnterButton');
  var enEnter = document.getElementById('enEnter');
  var desc = document.getElementById("desc");
  desc.style.width = "35vw";
  enEnter.style.width = "95%";
  enEnter.style.marginTop = "1vh";
  enEnter.style.height = "95vh";

  post();

}

function RectangleSlide(props) {
  return(<div>
    <div class="bggg"></div>
    <div class="bggg bg3"></div>

    <div class="bgg bg2"></div>
    <div class="bgg bg3"></div>
    <div class="bgg bg4"></div>

    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bgg bg4"></div>
</div>
);
}

function ENLogo(props) {
  return(
    <a id="enlogoA" href='#/'>
    <img src={logo} className="ENlogo" alt="logo" sx={{

        }}/>
    </a>
);
}

function Landing(props) {

  read();

  return(

    <span>
    <RectangleSlide/>

  <Box
  sx={{maxWidth:{
          mobile: '100vw',
          bigMobile: '100vw',
          tablet: '30vw',
          desktop: '40vw'},
        maxHeight:{
          mobile: '100vh',
          bigMobile: '100vh',
          tablet: '25%',
          desktop: ''},
          border: '10px dashed #f000e8',
          borderTopRightRadius: '30%',
          borderTopLeftRadius: '30%',
          paddingTop:'15vh',
          paddingLeft:'2vw',
          paddingRight:'2vw',

          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '5vh'

}} >
  <ENLogo/>

      <p id="desc">

      </p>
      <Box
      sx={{maxWidth:{
              mobile: '60vw',
              bigMobile: '60vw',
              tablet: '20vw',
              desktop: '20vw'},
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
       <a href="#/gallery"  >
       <img
           src="https://i.imgur.com/uN4NXM9.png" className="entDigital" alt="enter the digital realm of eating napkins"/>
       </a>
      </Box>
  </Box>

  </span>
);


}
function borders(props){

}


function GalleryLayout(props){
    console.log("BR Hello world");
    return(
      <div>
      <ENLogo/>
      <RectangleSlide/>

  <div class="interiorGal">

<StandardImageList />

  </div>
  </div>


  );


}






function App() {

  document.getElementById("desc");

  return (
    <span>

		<Routes>
       <Route path='/gallery' element={<GalleryLayout /> } />
       <Route  path='/' element={<Landing/> } />


    </Routes>
</span>

  );

}

export default App;
