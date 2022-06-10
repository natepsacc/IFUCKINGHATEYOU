import logo from './logo.png';
import './App.css';
import post from './post.js';
import {React, Text, StyleSheet} from 'react';
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
    <a id="enlogoA" href='#/gallery'>
    <img src={logo} className='ENlogo' alt="logo" sx={{

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
          mobile: '95vw',
          bigMobile: '95vw',
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
  <ENLogo />

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


function GalleryLayout(props){

    console.log("BR Hello world");

    return(
      <div>
      <ENLogo />
      <RectangleSlide/>

  <div class="interiorGal">

<StandardImageList tag={props.tag}/>
<Box
sx={{maxWidth:{
        mobile: '75vw',
        bigMobile: '75vw',
        tablet: '30vw',
        desktop: '30vw'},
        marginLeft: 'auto',
        marginRight: 'auto',
        zIndex: '5',
        backgroundColor: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '3vh',
        fontFamily: 'Courier New',
      }}>





<p id="postDesc">{props.text}</p>

</Box>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

  </div>

  </div>


  );


}

function SpotifyPage(props){

  return(
    <div>
    <ENLogo />
    <RectangleSlide/>

<div class="interiorGal">

</div>
</div>
);
}





function App() {

  document.getElementById("desc");
  const GLayoutFoot = "Eating Napkins X Schidt.co 2022";
 const A042422TXT = "From the Brain Sweat recording session on Apr 24th. Working on recording the album the Metaphysical Cowboy with recording engineer Ben Slater. Photographed: Chevy Kalpin, Nick McDill, Ben Slater, and Caleb Phillips. - Mary M";
 const A042922TXT = "Photos were taken at the greenhouse on Apr.29th during the noise show and before at the band practice space. The lineup included Tom Mazetti on solo sousaphone. Oxygen thief on bass and electronics and Forrest Friends out of Seattle. - Mary M";
 const CharlieFestTXT = "Taken during CharlieFest which was a birthday celebration for Charlie. Brain Sweat, Yegarma, Super Ultra, and Nyandi played sets in the woods using a generator for power. - Mary M"
 const A021022TXT ='';
  return (
    <span>

		<Routes>
       <Route path='/gallery' element={<GalleryLayout text={GLayoutFoot}/> } />
       <Route  path='/' element={<Landing/> } />
       <Route  path='/042422' element={<GalleryLayout tag="042422" text={A042422TXT}/> } />
       <Route  path='/042922' element={<GalleryLayout tag="042922" text={A042922TXT}/> } />
       <Route  path='/CharlieFest' element={<GalleryLayout tag="CharlieFest" text={CharlieFestTXT}/> } />
       <Route  path='/021022' element={<GalleryLayout tag="021022" text={A021022TXT}/> } />



    </Routes>
</span>

  );

}

export default App;
