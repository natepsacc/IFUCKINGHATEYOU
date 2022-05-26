import logo from './logo.png';



function post() {
  document.getElementById("desc").innerHTML = "Loading...";
  const urlForestjpg = "https://storageapi2.fleek.co/e7b18505-5349-459d-9fba-f427d40e6079-bucket/posts_eatingNapkins/forest041222/forest.jpg";
  const urlForesttxt = "https://storageapi2.fleek.co/e7b18505-5349-459d-9fba-f427d40e6079-bucket/posts_eatingNapkins/forest041222/forest.txt";
       var forestTXT = new XMLHttpRequest();
       forestTXT.open("GET", urlForesttxt, true);


       forestTXT.onreadystatechange = function()
       {
            if (forestTXT.readyState === 4)
            {
                 // Makes sure the document is ready to parse.
                 if (forestTXT.status === 200)
                 {
                      // Makes sure it's found the file.
                      document.getElementById("desc").innerHTML = forestTXT.responseText;
                 }
            }
       }
       forestTXT.send(null)

  }



export default post;
