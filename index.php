<?php

  $error = "";
  $successMessage = "";

  if ($_POST) {

    if (!$_POST["name"]) {

      $error .= "A name is required.<br>";
    }

    if (!$_POST["number"]) {
      $error .= "A number in this field is required.<br>";
    }

    if (!$_POST["address"]) {
      $error .= "An address in this field is required.<br>";
    }


    if (!$_POST["byear"]) {
      $error .= "An address in this field is required.<br>";
    }


    if (!$_POST["bday"]) {
      $error .= "An address in this field is required.<br>";
    }


    if (!$_POST["bmonth"]) {
      $error .= "An address in this field is required.<br>";
    }


    if (!$_POST["instagram"]) {
      $error .= "An address in this field is required.<br>";
    }

      $emailTo = "beeerod@live.com";
      $name = $_POST['name'];
      $address = $_POST['address'];
      $bday = $_POST['bday'];
      $bmonth = $_POST['bmonth'];
      $byear = $_POST['byear'];
      $instagram = $_POST['instagram'];
      $headers = "From: ".$_POST['name'];
      $subject = "Someone new has signed up!";
      $email = "brandon@live.com";
      $favorite = $_POST['favorite'];
      $reason = $_POST['reason'];
      $content = "Name: ".$_POST['name'] . "\n";
      $content      .= "Address: ".$_POST['address'] . "\n";
      $content       .= "Instagram: ".$_POST['instagram'];


      if (mail($emailTo, $subject, $content, $headers)) {
        $successMessage = "Message was sent";
      } else {
        $error = "This thing did not work family.";
      }
  }

?>

<!DOCTYPE HTML>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1,
  shrink-to-fit=no">
  <meta http-equiv="x-ua-compatible" content="ie=edge">

  <link rel="stylesheet" type=text/css href="style/stylephp.css">

  <link rel="stylesheet" type=text/css href="style/grid.css">

  <link rel="stylesheet" type=text/css href="style/animate.css">

  <link rel="stylesheet" type=text/css href="style/queries1.css">



  <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,900" rel="stylesheet">

  <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">

  <title>Join The Club</title>

</head>


<body>

<!----
        <div class="header">
                <div class="col span-1-of-5">
                <div class="search-bar-div">
                  <input type="text" name="search" class="searchbar-class" placeholder="Search" />
                </div>
                </div>
                  <div class="col span-2-of-5 responsive-heading-item">
                  <a href="/"><h3 class="club-heading">CLUB</h3></a>
                </div>
                <div class="col span-2-of-5 responsive-heading-item">
                  <a href="/"><h3 class="explore-heading">EXPLORE</h3></a>
                </div>
                  <div class="col span-1-of-4">
                  </div>
                  <div class="clearfix"></div>
                  <div class="header-line"></div>
              </div>


              ----->


              


        <div class="club-top">
            <p class="club-head">Welcome to The Plant Club</p>
        </div>

            <div id="error"><? echo $error.$successMessage; ?></div>

            <h2><?echo $error; ?></h2>

            <!-- Begin Mailchimp Signup Form -->
<div id="mc_embed_signup" class="embed-signup club-sign-up">
<form action=https://plantspot.us19.list-manage.com/subscribe/post?u=c3ab137b74fbbe9bf8c8caacc&amp;id=770b3e4f2a method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">

    <div class="mc-field-group sign-up-fields">
            <img src="resources/img/name-icon.png" class="sign-up-icons" />
        <div class="input-div">
            <input type="text" value="" name="FNAME" class="required input-name" id="mce-FNAME" placeholder="Full Name" />
        </div>
    </div>

    <div class="mc-field-group sign-up-fields">
            <img src="resources/img/email-icon.png" class="sign-up-icons" />
        <div class="input-div">
            <input type="email" value="" name="EMAIL" class="required email input-phone-number" id="mce-EMAIL" placeholder="Email Address">
        </div>
    </div>

    <div class="mc-field-group sign-up-fields">
            <img src="resources/img/address-icon.png" class="sign-up-icons" />
        <div class="input-div">
            <input type="text" value="" name="DADDRESS" class="required input-address" id="mce-DADDRESS" placeholder="Delivery Address">
        </div>
    </div>

    <div class="mc-field-group">
            <img src="resources/img/insta-icon.png" class="select-icons" />
        <div class="input-div">
            <input type="text" name="IUSERNAME" class="input-instagram" value="" id="mce-IUSERNAME" placeholder="Instagram Username">
        </div>
        <img src="resources/img/insta-icon.png" class="info-icons" />
        <div class="info-hover">Instagram Username is optional. This is so we can follow and interact with club members.”</div>
    </div>

<div class="mc-field-group">
        <img src="resources/img/star-icon.png" class="select-icons" />
    <div class="input-div">
        <input type="text" value="" name="FAVORITEH" class="input-favorite-plant" id="mce-FAVORITEH" placeholder="Favorite Houseplant">
    </div>
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_52a04c44735d69b6ffdf13b6c_09155d2d5d" tabindex="-1" value="">
    </div>
    <div class="sign-up-btn">
        <div class="clear mail-submit">
        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button-mail">
        </div>
    </div>
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FNAME';ftypes[1]='text';fnames[0]='EMAIL';ftypes[0]='email';fnames[2]='DADDRESS';ftypes[2]='text';fnames[4]='IUSERNAME';ftypes[4]='phone';fnames[5]='JREASON';ftypes[5]='dropdown';fnames[6]='FAVORITEH';ftypes[6]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->

  </div>

        

        <div class="club-info desktop-ci">
            <div class="free-plants">
                <div class="free-plants-left fp2">
                    <div class="free-plants-heading">
                        <p>Free Plants</p>
                    </div>
                    <div class="free-plants-info js--wp-1">
                         <p>Yes seriously, we’re giving away houseplants.<br />
                            Every month we chose 3 lucky plant people at random<br />
                            and send a special houseplant right to their doorstep.</p>
                    </div>
                </div>
                <div class="free-plants-img-sec">
                    <img src="resources/img/art2.png" class="free-plants-img" />
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="first-look">
                <div class="first-look-img-sec">
                    <img src="resources/img/art3.png" class="first-look-img" />
                </div>
                <div class="first-look-right">
                    <div class="first-look-heading">
                        <p>First Look</p>
                    </div>
                    <div class="first-look-info js--wp-2">
                         <p>Be first in line for special announcements,<br />
                            random giveaways, and more plant fun.</p>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="plant-help">
                <div class="free-plants-left">
                    <div class="free-plants-heading">
                        <p>Plant Help</p>
                    </div>
                    <div class="free-plants-info js--wp-3">
                         <p>Get unlimited access to help from our<br />
                            plant experts. Send us a direct message <br />
                            and we'll help keep you and your plants happy.</p>
                    </div>
                </div>
                <div class="free-plants-img-sec">
                    <img src="resources/img/art1.png" class="free-plants-img" />
                </div>
            </div>
            <div class="clearfix"></div>
        </div>

        <div class="clearfix"></div>

        <div class="club-info mobile-ci">
                <div class="free-plants">
                    <div class="free-plants-left fp2">
                        <div class="free-plants-heading">
                            <p>Free Plants</p>
                        </div>
                        <div class="free-plants-info js--wp-1">
                             <p>Yes seriously, we’re giving away houseplants.
                                Every month we chose 3 lucky plant people at random
                                and send a special houseplant right to their doorstep.</p>
                        </div>
                    </div>
                    <div class="free-plants-img-sec">
                        <img src="resources/img/art2.png" class="free-plants-img" />
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="first-look">
                    <div class="first-look-right">
                        <div class="first-look-heading">
                            <p>First Look</p>
                        </div>
                        <div class="first-look-info js--wp-2">
                             <p>Be first in line for special announcements,
                                random giveaways, and more plant fun.</p>
                        </div>
                    </div>
                    <div class="first-look-img-sec">
                            <img src="resources/img/art3.png" class="first-look-img" />
                        </div>
                </div>
                <div class="clearfix"></div>
                <div class="plant-help">
                    <div class="free-plants-left">
                        <div class="free-plants-heading">
                            <p>Plant Help</p>
                        </div>
                        <div class="free-plants-info js--wp-3">
                             <p>Get unlimited access to help from our
                                plant experts. Send us a direct message 
                                and we'll help keep you and your plants happy.</p>
                        </div>
                    </div>
                    <div class="free-plants-img-sec">
                        <img src="resources/img/art1.png" class="free-plants-img" />
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>

        <div class="clearfix"></div>

    <div>
        <div class="footer">
            <div class="footer-line"></div>
            <div class="social-media-icons">
                <img src="resources/img/insta-icon.png" class="footer-icons" />
            </div>
            <div class="footer-bottom">
                <div class="col span-1-of-3">
                    <a href="http://plantspot.co/privacy-policy.html" target="_blank"><p class="privacy-policy">Privacy Policy</p></a>
                </div>
                <div class="col span-1-of-3">
                    <p class="footer-join">Join The club</p>
                </div>
                <div class="col span-1-of-3 aa">
                    <p class="footer-rights">All rights reserved, 2018</p>
                </div>
            </div>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

    <script src="resources/js/script.js"></script>

    <script src="resources/js/jquery.waypoints.min.js"></script>


</body>


</html>