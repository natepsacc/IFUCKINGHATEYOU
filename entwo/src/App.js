import logo from './logo.png';
import './App.css';
import post from './post.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import StandardImageList from './imageList.js';
import { HashRouter, Route, Routes } from "react-router-dom";


function read()
{

     var txtFile = new XMLHttpRequest();
     txtFile.open("GET", "https://storageapi2.fleek.co/e7b18505-5349-459d-9fba-f427d40e6079-bucket/text/firstPageDesc.txt", true);
     txtFile.onreadystatechange = function()
     {
          if (txtFile.readyState === 4)
          {
               // Makes sure the document is ready to parse.
               if (txtFile.status === 200)
               {
                    // Makes sure it's found the file.
                    document.getElementById("desc").innerText = txtFile.responseText;
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
    <div class="bggg bg2"></div>
    <div class="bggg bg3"></div>
    <div class="bggg bg4"></div>

    <div class="bgg"></div>
    <div class="bgg bg2"></div>
    <div class="bgg bg3"></div>
    <div class="bgg bg4"></div>

    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div class="bgg bg4"></div>
</div>
);
}

function ENLogo(props) {
  return(
    <a href='/'>
    <img src={logo} className="ENlogo" alt="logo"/>
    </a>
);
}

function Landing(props) {

  read();

  return(

    <span>
    <RectangleSlide/>
  <div className="enEnter" id="enEnter">
      <div className="enEnter2" id="enEnter2">
<div className="enEnter" id="enEnter">
  <div className="enEnter2" id="enEnter2">
  <div className="enEnter" id="enEnter">
      <div className="enEnter2" id="enEnter2">
<div className="enEnter" id="enEnter">
  <div className="enEnter2" id="enEnter2">
  <ENLogo/>

      <p id="desc">

      </p>

      <div id="enEnterButton" className="enEnterButton">
       <a href="#/gallery"  >Enter The Digital Gallery</a>
      </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
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
