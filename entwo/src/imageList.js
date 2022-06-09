import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import Box from '@mui/material/Box';
import imageListItemClasses from "@mui/material/ImageListItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
spacing: 2,
  breakpoints: {
    values: {
      mobile: 0,
      bigMobile: 350,
      tablet: 650,
      desktop: 1000
    }
  }
});

export default function StandardImageList(props) {


  let sort = itemData.filter((element) => {
      if (element.tag === props.tag) {
          return element;
      }
      if (element.tag2 === props.tag) {
          return element;
      }
      else{

      }
      if (props.tag === "all"){
        return itemData
      }
  });

var gridNum = props.gridColumns;
console.log(gridNum);
const imageClick = (props) => {

  console.log('Click!!!!');
  window.open(props, '_self');
}

      return (
      <ThemeProvider theme={theme}>

  <ImageList variant="masonry" cols={{
                    mobile: 2,
                    bigMobile: 3,
                    tablet: 4,
                    desktop: 4
                  }} gap={8}>
     {sort.map((item) => (
       <ImageListItem key={item.img} id="height" sx={{m:1, maxWidth:"50%"}}>
         <img

           id={item.img}
           src={`${item.img}`}
           srcSet={`${item.img}w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
           alt={item.title}
           onClick={() => imageClick(item.mSrc)}
           loading="lazy"
              />
              <ImageListItemBar sx={{
                fontFamily: 'Courier New',
                fontFamily: 'monospace',

                fontSize: {
                  mobile: '6pt',
                  bigMobile: '6pt',
                  tablet: '9pt',
                  desktop: '10pt'
                }
              }}
               title={item.title} />
       </ImageListItem>
     ))}

</ImageList>
</ThemeProvider>


      );
}

const itemData = [
  {
    img: 'https://f4.bcbits.com/img/a2212889666_5.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/album/infinite-castle',
    title: 'infinite-castle',
    tag: 'music',
  },
  {
    img: 'https://f4.bcbits.com/img/a0279092000_5.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/track/feel-me',
    title: 'Feel Me by Thomas Mazzetti',
    tag: 'music',
  },

  {
    img: 'https://f4.bcbits.com/img/a1335165522_5.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/album/xanderhill?from=embed',
    title: 'xanderhill',
    tag: 'music',
  },
  {
    img: 'https://i.imgur.com/a5o0zro.jpg',
    title: 'Nick at Brain Sweat Practice',
    tag: 'ppl',
  },
  {
    img: 'https://f4.bcbits.com/img/a3201002983_5.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/album/dead-at-the-4-20',
    title: 'dead-at-the-4-20',
    tag: 'music',
  },

  {
    img: 'https://f4.bcbits.com/img/a0286543651_5.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/album/songs-for-a-living-corpse',
    title: 'Songs For A Living Corpse by Wallace Ayers',
    tag: 'music',
  },

  {
    img: 'https://f4.bcbits.com/img/a0842035100_5.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/album/cyclopian-building',
    title: 'Cyclopian Building by Chevy Kalpin & Evan Kallas',
    tag: 'music',
  },


  {
    img: 'https://f4.bcbits.com/img/a4239659115_5.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/album/blood-agar-home',
    title: 'Blood Agar, Home by Trucking To Tokyo',
    tag: 'music',
  },
  {
    img: 'https://f4.bcbits.com/img/a0197541223_5.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/album/lich',
    title: 'LICH by GUTTER HAIR',
    tag: 'music',
  },
  {
    img: 'https://i.imgur.com/Gila5Ll.jpg',
    title: 'Mary and Chevy',
    tag: 'ppl',

  },

  {
    img: 'https://i.imgur.com/Ratasd3.jpg',
    title: 'Nick at Practice',
    tag: 'ppl',

  },

  {
    img: 'https://f4.bcbits.com/img/a0736948202_5.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/album/belac-live-at-the-greenhouse',
    title: '&#39;belac&#39; live at The Greenhouse by belac',
    tag: 'music',
  },
  {
    img: 'https://i.imgur.com/FPZnn0t.jpg',
    title: 'Nick at Brain Sweat Practice',
    tag: 'ppl',

  },




  {
    img: 'https://f4.bcbits.com/img/a3324576764_16.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/album/made-to-sink-into-the-ever-curving-mind',
    title: 'Made to Sink into, The Ever Curving Mind. by Mary MacGuire &amp; Chevy Kalpin',
    tag: 'music',
  },


  {
    img: 'https://f4.bcbits.com/img/a2466535854_16.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/album/porous-joyous-hubris',
    title: 'Porous Joyous Hubris by Chevy Kalpin',
    tag: 'music',
  },

  {
    img: 'https://f4.bcbits.com/img/a2576839787_16.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/track/governed-motif',
    title: 'Governed Motif by Floor Boy',
    tag: 'music',
  },



  {
    img: 'https://f4.bcbits.com/img/a2466535854_16.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/album/booster-pack',
    title: 'Booster Pack by Pocket Slop',
    tag: 'music',
  },

  {
    img: 'https://f4.bcbits.com/img/a0330761750_16.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/album/plainly-lacking-having',
    title: 'plainly lacking having by Chevy Kalpin',
    tag: 'music',
  },


  {
    img: 'https://f4.bcbits.com/img/a1377566243_16.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/album/crab',
    title: 'CRAB by Brain Sweat',
    tag: 'music',
  },

  {
    img: 'https://f4.bcbits.com/img/a3970676027_16.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/album/a-brick-fell-out-the-house',
    title: 'A Brick Fell Out The House by Over The Blue Hills',
    tag: 'music',
  },


  {
    img: 'https://f4.bcbits.com/img/a2839535828_16.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/album/you-follow-me-everywhere-i-go',
    title: 'You Follow Me Everywhere I Go by belac',
    tag: 'music',
  },

  {
    img: 'https://f4.bcbits.com/img/a1357466672_16.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/track/have-a-sloppy-lil-christmas',
    title: 'Have a Sloppy lil&#39; Christmas by Pocket Slop',
    tag: 'music',
  },


  {
    img: 'https://f4.bcbits.com/img/a1914821294_16.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/album/dead-horse-sled',
    title: 'Dead Horse Sled by GUTTER HAIR',
    tag: 'music',
  },
  {
    img: 'https://f4.bcbits.com/img/a2451389976_16.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/album/ashita-no-tengu-2',
    title: 'ashita no tengu by Trucking To Tokyo',
    tag: 'music',
  },

  {
    img: 'https://f4.bcbits.com/img/a4217347510_16.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/album/adultery-seawalls',
    title: 'Adultery/Seawalls by Floor Boy',
    tag: 'music',
  },
  {
    img: 'https://i.imgur.com/pnbVTTH.jpg',
    title: 'Docs at Brain Sweat practice',
    tag: 'product',

  },

  {
    img: 'https://f4.bcbits.com/img/a3073542734_16.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/album/how-did-you-end-up-on-your-head',
    title: 'How did you end up on your head? by Chevy Kalpin',
    tag: 'music',
  },

  {
    img: 'https://f4.bcbits.com/img/a3168672433_16.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/album/sewer-bald-2',
    title: 'SEWER BALD by GUTTER HAIR',
    tag: 'music',
  },

  {
    img: 'https://f4.bcbits.com/img/a4114596439_16.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/album/thank-you-carpet',
    title: 'thank you, carpet. by Chevy Kalpin',
    tag: 'music',
  },


  {
    img: 'https://f4.bcbits.com/img/a3782926223_16.jpg',
    mSrc: 'https://eatingnapkins.bandcamp.com/album/live-from-the-cube',
    title: 'live from the cube by GUTTER HAIR',
    tag: 'music',
  },

  {
    img: 'https://i.imgur.com/ga6th2f.jpg',
    title: 'Chevys Night',
    tag: 'ppl',

  },

  {
         img: 'https://i.imgur.com/iFhaZFG.jpg',
         title: 'WINNER',
         tag: 'ppl',

       },






];

const unused = [
  {
    img: 'https://i.imgur.com/zrYdXWS.jpg',
    title: 'Ian 2',
    tag: 'undisplay',

  },
];
