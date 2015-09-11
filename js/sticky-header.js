(function() {
  "use strict";

  // Accepts two string parameters -
  // element id of the target element and the class name that is added and removed
  function headerSize(elementID, className){
    // Get the current scroll position
    var scroll = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if(scroll >= 300){
      removeClass(elementID, className);
    }
    if (scroll < 300){
      addClass(elementID, className);
    }
  }
  
  // Using jquery to accomplish this
  // function headerSize(){
  //   var scroll = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  //   if(scroll >= 50){
  //     $("#headerContainer").removeClass('expanded');
  //   }
  //   if (scroll < 50){
  //     $("#headerContainer").addClass('expanded');
  //   }
  // }

  // Adds a class to the element
  function addClass(elementID, className){
    var element = document.getElementById(elementID),
        classNames = document.getElementById(elementID).className;
    if (classNames.indexOf(className) == -1){
      return element.className = element.className + ' ' + className;
    }
  }

  // Removes the class and the preceding whitespace from the element
  function removeClass(elementID, className){
    var element = document.getElementById(elementID),
        classNames = document.getElementById(elementID).className;
    if (classNames.indexOf(className) !== -1){
      className = " " + className;
      return element.className = element.className.replace(className, '');
    }
  }

  // Initialization
  function init() {
    window.addEventListener('scroll', function() {
        headerSize('headerContainer', 'expanded');
    }, false);
  }

  init();

})();


// function addScrollListener(){
//   var timer = null;
//   window.addEventListener('scroll', function() {
//       if(timer !== null) {
//           clearTimeout(timer);        
//       }
//       timer = setTimeout(function() {
//             headerSize('headerContainer', 'expanded');
//       }, 150); 
//   }, false);
// }
