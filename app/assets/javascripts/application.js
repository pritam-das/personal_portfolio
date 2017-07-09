// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require rails-ujs
//= require turbolinks
//= require bootstrap.js
//= require freelancer
//= require freelancer.min.js
//= require jqBootstrapValidation.js

$(document).ready(function(){
  console.log("JS2");

  //fade in
  $("body").delay(500).fadeIn(2000);

  //profile pic hover hinge
  $("#profile-pic").hover(function(){
    $(this).addClass("animated bounceOutUp");
    console.log("name click executed");
    setTimeout(function(){
    $("#profile-pic").removeClass("animated bounceOutUp");

    }, 2000);
  })

  //name bounceIn hover
  $(".name").hover(function(){
    $(this).addClass("animated bounceIn");
    console.log("name click executed");
    setTimeout(function(){
    $(".name").removeClass("animated bounceIn");

    }, 2000);
  })

  //skills rubberBand hover
  $(".hovering").hover(function(){
    $(this).addClass("animated rubberBand");
    console.log("hover");
    setTimeout(function(){
    $(".hovering").removeClass("animated rubberBand");

    }, 1000);
  });


});
