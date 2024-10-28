function Check() {
    Swal.fire({
        title: "Server Management?",
        text: "Sorry! The Website is undergoing Upgrade?",
        icon: "error"
      });
}
function BookNow() {
    Swal.fire({
        title: "Server Management?",
        text: "Sorry! Please Kindly Email us on this info@originguesthouse.com and We will get back within 2hours",
        icon: "error"
      });
}
 

function Subscribe(){
    const email = document.getElementById('email');
if(!email.value){
    Swal.fire({
        title: "Email Not Typed?",
        text: "Sorry! You didn't type anything. Please Enter A Valid Email Address",
        icon: "error"
      });
}
    if(email.value.length < 10){
        Swal.fire({
            title: "Email Not Valid?",
            text: "Sorry! Please Enter A Valid Email Address",
            icon: "error"
          });
    }

if(email.value.length > 10){
    Swal.fire({
        title: "Subscribed",
        text: "Your Email Has Been Added To our Database for Update",
        icon: "success"
      });
}
}

function SendMessage(){
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const FullName = document.getElementById('FullName');
if(!email.value){
    Swal.fire({
        title: "Email Not Typed?",
        text: "Sorry! You didn't type anything. Please Enter A Valid Email Address",
        icon: "error"
      });
}
    if(!message.value){
        Swal.fire({
            title: "Message Not Typed?",
            text: "Sorry! Type A Message You Want Us to Respond To",
            icon: "error"
          });
    }
    if(!FullName.value){
        Swal.fire({
            title: "Full Name Not Typed?",
            text: "Sorry! Please Enter Your Full Name",
            icon: "error"
          });
    }

if(FullName.value && message.value && email.value){
    Swal.fire({
        title: "Message Received",
        text: "Your Message Has Been Sent and A Response Will Be Sent To Your Email with 2hours",
        icon: "success"
      });
}
}

