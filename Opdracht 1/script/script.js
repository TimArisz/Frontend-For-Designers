/*var heart = document.querySelector('.heart');
var heart1 = document.querySelector('.heart:nth-of-type(1)');
var heart2 = document.querySelector('.heart:nth-of-type(2)');
*/

var heart = document.getElementById('heart');
var heart1 = document.getElementById('heart1');
var heart2 = document.getElementById('heart2');

var hiddenheart = document.getElementById('heart-center');
var hiddenheart1 = document.getElementById('heart-center1');
var hiddenheart2 = document.getElementById('heart-center2');

var listcount = document.getElementById("number");




heart.addEventListener("click",function(){
    hiddenheart.classList.toggle('heart-animation');
    document.getElementById("number").textContent="3";
    heart.classList.toggle('heart-full');

  }
);

heart1.addEventListener("click",function(){

    hiddenheart1.classList.toggle('heart-animation');
    document.getElementById("number").textContent="4";

    heart1.classList.toggle('heart-full');

  }
);

heart2.addEventListener("click",function(){
    hiddenheart2.classList.toggle('heart-animation');
    document.getElementById("number").textContent="5";
    heart2.classList.toggle('heart-full');

  }
);







/*

heart.addEventListener("click",function(){
    document.querySelector(".footer").classList.remove("animated");
    document.querySelector(".footer").classList.remove("bounce");
    hiddenheart.classList.toggle('heart-animation');
    document.getElementById("number").textContent="3";
    document.querySelector(".footer").classList.add("animated");
    document.querySelector(".footer").classList.add("bounce");
    heart.classList.toggle('heart-full');

  }
);

heart1.addEventListener("click",function(){
    document.querySelector(".footer").classList.remove("animated");
    document.querySelector(".footer").classList.remove("bounce");
    hiddenheart1.classList.toggle('heart-animation');
    document.getElementById("number").textContent="4";
    document.querySelector(".footer").classList.add("animated");
    document.querySelector(".footer").classList.add("bounce");
    heart1.classList.toggle('heart-full');

  }
);

heart2.addEventListener("click",function(){
  document.querySelector(".footer").classList.remove("animated");
  document.querySelector(".footer").classList.remove("bounce");
    hiddenheart2.classList.toggle('heart-animation');
    document.getElementById("number").textContent="5";
    document.querySelector(".footer").classList.add("animated");
    document.querySelector(".footer").classList.add("bounce");
    heart2.classList.toggle('heart-full');

  }
);



var divs = document.querySelectorAll('.heart' );

console.log(divs);


for (var div of divs) {

  div.addEventListener("click",function(){
      hiddenheart.classList.toggle('heart-animation');
      document.getElementById("number").textContent="3";
      div.classList.toggle('heart-full');
      console.log('jammer joh');

    }
  );

}
*/
