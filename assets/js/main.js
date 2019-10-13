/* Copyright 2019 Tusman Akhter */
var clickEvent = "ontouchstart" in window ? "touchend" : "click";
var moonsvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'
var sunsvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
var sunrisesvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunrise"><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline></svg>'
var sunsetsvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunset"><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline></svg>'

function checkToggle(id, className, storageName, onSvg, offSvg) {
  if (localStorage.getItem(storageName) == "true") {
    document.getElementById("body").classList.toggle(className);
    document.getElementById(id).innerHTML = onSvg;
  } else {
    document.getElementById(id).innerHTML = offSvg;
  }
}

function toggleClass(id, className, storageName, onSvg, offSvg) {
  document.getElementById("body").classList.toggle(className);
  var newStorageValue = "";
  if (localStorage.getItem(storageName) == "true") {
    newStorageValue = "false";
    document.getElementById(id).innerHTML = offSvg;
  } else {
    newStorageValue = "true";
    document.getElementById(id).innerHTML = onSvg;
  }
  localStorage.setItem(storageName, newStorageValue);
}

function addToggleControl(id, className, storageName, onSvg, offSvg) {
  checkToggle(id, className, storageName, onSvg, offSvg);
  var element = document.getElementById(id);
  element.addEventListener(
    clickEvent, 
    function() {
      toggleClass(id, className, storageName, onSvg, offSvg);
    }
  );
}

addToggleControl("toggledark", "dark", "darkmode", sunsvg, moonsvg);
addToggleControl("togglecontrast", "morecontrast", "morecontrast", sunsetsvg, sunrisesvg);
