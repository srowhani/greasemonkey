// ==UserScript==
// @name        Carleton Student Autologin
// @namespace   Carleton
// @icon        http://carletonnow.carleton.ca/ccms/wp-content/uploads/Ravens-logo.jpg
// @description Saves your data into localStorage, encodes it to a shifted cypher, and loads it on page load.
// @include     http*://www.carleton.ca/culearn/*
// @version     2014.4.25
// @grant       none
// ==/UserScript==
document.addEventListener("DOMContentLoaded",function(){'use strict';var b=localStorage;if(this.getElementsByClassName("reset-txt")[0].innerHTML+="<label for='autologin' style='font-size:120%;color:white'>Autologin?</label> <input id='autologin' onchange='localStorage.a=this.checked;location.reload();' type='checkbox'/>",this.getElementById("autologin").checked="true"===b.a?!0:!1,-1==this.cookie.indexOf("MoodleSession")){b.a||(b.a=!1);var c=function(a,b){return b?c(btoa(a),--b):a},d=function(a,b){return b?d(atob(a),--b):a},e=["user","pass"];b.n||(b.n=Math.floor(20*Math.random()+5));for(var f=0;2>f;f++)null!=b[c(e[f],2)]&&(login[e[f]].value=d(b[c(e[f],2)],b.n));return b.length-2&&"true"===b.a?(login.submit.click(),void 0):(login.addEventListener("submit",function(){for(var a=0;2>a;a++)b[c(e[a],2)]=c(login[e[a]].value,b.n)}),void 0)}});