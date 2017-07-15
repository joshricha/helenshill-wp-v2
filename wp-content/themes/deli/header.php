<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package storefront
 */

?>

  <!doctype html>

  <html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

    <title>Helen's Hill</title>
    <meta name="description" content="The HTML5 Herald">
    <meta name="author" content="Joshua Richardson">

    <!--
    /**
     * @license
     * MyFonts Webfont Build ID 3168133, 2016-02-09T00:59:22-0500
     *
     * The fonts listed in this notice are subject to the End User License
     * Agreement(s) entered into by the website owner. All other parties are
     * explicitly restricted from using the Licensed Webfonts(s).
     *
     * You may obtain a valid license at the URLs below.
     *
     * Webfont: BrandonGrotesqueWeb-Bold by HVD Fonts
     * URL: http://www.myfonts.com/fonts/hvdfonts/brandon-grotesque/bold/
     *
     * Webfont: BrandonGrotesqueWeb-Regular by HVD Fonts
     * URL: http://www.myfonts.com/fonts/hvdfonts/brandon-grotesque/regular/
     *
     *
     * License: http://www.myfonts.com/viewlicense?type=web&buildid=3168133
     * Licensed pageviews: 10,000
     * Webfonts copyright: Copyright (c) 2015 by Hannes von Doehren. All rights reserved.
     *
     * © 2016 MyFonts Inc
    */

    -->
    <link rel="stylesheet" type="text/css" href="<?php bloginfo(stylesheet_directory); ?>/assets/css/MyFontsWebfontsKit.css">

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="<?php bloginfo(stylesheet_directory); ?>/assets/css/style.css">

    <!--[if lt IE 9]>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->

    <?php wp_head(); ?>
  </head>

  <body>

    <header>
      <div class="logo">
        <img class="full-logo" src="<?php bloginfo(stylesheet_directory); ?>/assets/img/logo.png" alt="Helen's Hill logo">
      <img class="responisve-logo" src="<?php bloginfo(stylesheet_directory); ?>/assets/img/logo-short.png" alt="Helen's Hill logo">
      </div><!-- logo -->
      <div class="menu-collapsed">
         <div class="bar-bg">
           <div class="bar">
             <p class="menu-text">MENU</p>
           </div><!-- menu collapsed -->
         </div><!-- bar bg -->
         <nav>
            <ul>
              <li><img class="logo-menu" src="<?php bloginfo(stylesheet_directory); ?>/assets/img/shield.png" alt="Logo"></li>
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Clients</a></li>
               <li><p class="seperator">-</p></li>
               <li><a href="#">Contact Us</a></li>
            </ul>
         </nav>
      </div><!-- meny collapsed -->
    </header>
