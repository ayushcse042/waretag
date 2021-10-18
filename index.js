const button=document.querySelectorAll(".circle");
var vertical=document.querySelectorAll(".vertical");
var lineWrapper= document.querySelectorAll(".line-wrapper");
var content= document.querySelectorAll(".content");

function prodAns(i)
{
  vertical[i].classList.toggle("open");
  lineWrapper[i].classList.toggle("open");
  content[i].classList.toggle("open");
};
button[0].addEventListener("click", prodAns.bind(event,0));
button[1].addEventListener("click", prodAns.bind(event,1));
button[2].addEventListener("click", prodAns.bind(event,2));
button[3].addEventListener("click", prodAns.bind(event,3));
button[4].addEventListener("click", prodAns.bind(event,4));

// button[1].addEventListener("click", eventHandler(1));