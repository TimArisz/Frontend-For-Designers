
var setup = document.querySelector('p');
var punchline = document.querySelector('.punchline');
var type = document.querySelector('.type');
var myButton;
var mijnfavorieten = document.querySelector('h3');
var f = 0;

console.log('hij werkt hoor');

function showJokes(jsonObj) {
  //var showJokes = jsonObj['Jokes'];
  console.log('showJokes', jsonObj);
//heroes = array (Jokes)
  for (var i = 0; i < jsonObj.length; i++) {
    var mySection = document.createElement('section');
    var myType = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myButton = document.createElement('button');
    var myFavorite = document.createElement('button');
    var punchlineID = "p" + i;


    //appendChild schrijft de paragrafen die hierboven gecreert zijn naar de section
    mySection.appendChild(myType);
    mySection.appendChild(myPara1);
    mySection.appendChild(myPara2);
    mySection.appendChild(myButton);
    mySection.appendChild(myFavorite);

    myType.textContent = jsonObj[i].type;
    myPara1.textContent = jsonObj[i].setup;
    myPara2.textContent = jsonObj[i].punchline;
    myButton.textContent = "Clue";
    myFavorite.textContent = "Favorite";

    //myPara2.classList.add("nummer wat ze zijn);
    myPara2.setAttribute("id", punchlineID);
    myPara2.setAttribute("class","laatzien ");
    myFavorite.setAttribute("class","Favorite");
    myButton.setAttribute("class","Clue");


    myButton.addEventListener ("click", function() {
      console.log('click');
      document.querySelector('p:nth-child(3)').classList.add("animated", "tada");
      document.querySelector('p:nth-child(3)').classList.toggle("laatzien");

    });



    // schrijft de section daadwerkelijk in de HTML
    document.body.appendChild(mySection);
    //console.log(myPara1);



  }
}



// stopt de data van de url in een variabele
var requestURL = 'https://raw.githubusercontent.com/15Dkatz/official_joke_api/master/jokes/index.json';

//To create a request, we need to create a new request object instance from the XMLHttpRequest constructor, using the new keyword. Add the following below your last line:
var request = new XMLHttpRequest();

//Now we need to open a new request using the open() method. Add the following line:
request.open('GET', requestURL);

//Next, add the following two lines — here we are setting the responseType to JSON, so that XHR knows that the server will be returning JSON, and that this should be converted behind the scenes into a JavaScript object. Then we send the request with the send() method:
request.responseType = 'json';

//The last bit of this section involves waiting for the response to return from the server, then dealing with it
request.onload = function() {
  var Jokes = request.response;
  //contentProppen(Jokes);
  showJokes(Jokes);
  console.log(Jokes[0]);




  var knopje = document.querySelectorAll('.Favorite');

knopje[0].addEventListener ("click", function() { mijnfavorieten.textContent =
"My favorites (" + f++ + ")"; });

knopje[1].addEventListener ("click", function() { mijnfavorieten.textContent =
"My favorites (" + f++ + ")"; });

knopje[2].addEventListener ("click", function() { mijnfavorieten.textContent =
"My favorites (" + f++ + ")"; });

knopje[3].addEventListener ("click", function() { mijnfavorieten.textContent =
"My favorites (" + f++ + ")"; });

knopje[4].addEventListener ("click", function() { mijnfavorieten.textContent =
"My favorites (" + f++ + ")"; });

knopje[5].addEventListener ("click", function() { mijnfavorieten.textContent =
"My favorites (" + f++ + ")"; });

knopje[6].addEventListener ("click", function() { mijnfavorieten.textContent =
"My favorites (" + f++ + ")"; });

knopje[7].addEventListener ("click", function() { mijnfavorieten.textContent =
"My favorites (" + f++ + ")"; });

knopje[8].addEventListener ("click", function() { mijnfavorieten.textContent =
"My favorites (" + f++ + ")"; });

knopje[9].addEventListener ("click", function() { mijnfavorieten.textContent =
"My favorites (" + f++ + ")"; });

}








request.send();








/*  knopje.addEventListener ("click", function() {
    console.log('fuckk');
    f++;
  });
*/
