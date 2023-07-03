<?php
  //add all the values
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
   
    if(!empty($email) && !empty($message)){ //if email and message field is not empty
       if(filter_var($email, FILTER_VALIDATE_EMAIL)){
         $receiver = "zcheldercraftllc@gmail.com" /email receiver email address
         $subject = "From: $name <$email>"; //subject of the email. subject look like From: 
         //merging concating all user values inside body variable \n is used for new line
         $body = "Name: $name\nEmail: $email\nEmail: $message\nmessage: "
         $sender = "From: $email"; //sender email
         if(mail($receiver, $subject, $body, $sender )){
         echo "Your message has been sent";
       }else{
         echo "Sorry, failed to send your message!";
       }
      

        }else{
        echo "Enter valid email address!";
       }
    }else{
       echo "Email and password field is required!";
    }
?>