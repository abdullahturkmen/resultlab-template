<?php

$_POST = json_decode(file_get_contents("php://input"),true);

//print_r($_POST);



$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];



require("class.phpmailer.php");
$mail = new PHPMailer(); // create a new object
$mail->IsSMTP(); // enable SMTP
$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for GMail
$mail->Host = "mail.resultlabai.com";
$mail->Port = 465; // 465 or 587
$mail->IsHTML(true);
$mail->SetLanguage("tr", "phpmailer/language");
$mail->CharSet  ="utf-8";

$mail->Username = "mail@yoursite.com"; // Mail adresi
$mail->Password = "yourMailPassword"; // Parola
$mail->SetFrom('mail@yoursite.com', "ResultLabAI"); // Mail adresi

$mail->AddAddress('example@gmail.com'); // Gönderilecek kişi

$mail->Subject = "Sideden Gönderildi";
$mail->Body = "denemee mailidir";

if(!$mail->Send()){
                echo "error";
} else {
                echo "success";
}


?>