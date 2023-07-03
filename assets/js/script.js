const form = document.querySelector("form"),
statusTxt = form.querySelector(".actions special span");



form.onsubmit = (e)=>{
e.preventDefault(); //preventing form from submitting
statusTxt.style.color = "green";
status.Txt.style.display = "block";

let xhr = new XMLHttpRequest(); //creating new xml object
xhr.open("POST", "message.php", true); //sending post request to message.php file
xhr.onload = ()=>{ //once ajax loaded
  if(xhr.readyState == 4 && xhr.status == 200){ //if ajax response status is 200 & ready status is 4 means there is not any error
    let response = xhr.response; //storing ajax response in a response variable
      if(response.indexOf("Email and password field required!") != -1 || response.indexOf("Enter valid email address!") || response.indexOf("Sorry, failed to send your message!") )
    statusTxt.style.color = "red";
  }else{
    form.reset();
    setTimeout(()=>{
    status.Txt.style.display = "none";
    }, 3000);
  }
  statusTxt.innerText = response;
 }
 let formData = new FormData(); //creating new FormData obj. This obj is used to send form data

 xhr.send(formData); //sending form data
}