function marginfooter() {
    var main = document.getElementById('coursespagelist').getBoundingClientRect();
    var footer = document.getElementById('footer');
    newhead = main.height.toString();
    footer.style.marginTop = newhead + "px";
  }
  
  window.addEventListener('resize', function(event) {
    marginfooter()
  }, true);
  

  //this is so that there is a margin at the beginn