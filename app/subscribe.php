<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $subscriptionEmail = filter_var($_POST['subscriptionEmail'], FILTER_SANITIZE_EMAIL);

    if (filter_var($subscriptionEmail, FILTER_VALIDATE_EMAIL)) {
        $to = "sikavinraj@gmail.com";
        $subject = "New Subscription";
        $message = "Email $subscriptionEmail was subscribed for the mailer.";
        $headers = "From: no-reply@texvalley-eta.vercel.app";

        if (mail($to, $subject, $message, $headers)) {
            echo "Subscription successful. An email has been sent to the admin.";
        } else {
            echo "There was an error sending the email.";
        }
    } else {
        echo "Invalid email format.";
    }
} else {
    echo "Invalid request method.";
}
?>
