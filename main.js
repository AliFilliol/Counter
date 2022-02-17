/*clock*/
setInterval(function getTime() {
    const dateNow = new Date();

    document.querySelector(".clock").innerHTML = 
    `${dateNow.getHours().toString().padStart(2, "0")}:${dateNow.getMinutes().toString().padStart(2, "0")}:${dateNow.getSeconds().toString().padStart(2, "0")}`;
    },1000
);


 /*date*/
setInterval(function() {
  const dateNow = new Date();

  const months = ["Januar","Februar","März","April","Mai","Juni"
  ,"July","August","September","Oktober","November","Dezember"];


  document.getElementById("date").innerHTML =
  `${dateNow.getDate().toString().padStart(2, "0")} ${months[dateNow.getMonth()]} ${dateNow.getFullYear()}`;
  },1000
);

/* contdown*/
let dateTarget = new Date("2022-02-16T16:59:00");

setInterval(function() {
  const dateNow = new Date().getTime();

  const distance  = dateTarget - dateNow;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2,"0");
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2,"0");
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2,"0");
  const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2,"0");

  document.querySelector(".timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance = 0) {
    clearInterval(x); /*????*/
    document.querySelector(".timer").innerHTML = "EXPIRED";
  }
}, 1000);

document.querySelector(".date-button").addEventListener("click", function (){
  dateTarget = new Date(document.querySelector(".date-input").value);
});
