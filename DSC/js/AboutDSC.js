// initiates the jquery library
$(document).ready(function(){
  // hides the paragraph to be displayed via Javascript
  $('.desc').hide();

  //stores the total number of indicated classes(in this case , hidden paragraph titles) in the variable 'numberOfDesc'
  var numberOfDesc = $('.task-desc-title').length; 

  //initiates the 'while loop' inidicated below
  var i = 0;
  
  //start while loop
  while(i <= numberOfDesc) {
      function tasks(i) {
          $('.task-desc-title').eq(i).click(function () {
              //this closes any paragraph that might be open. can be seen as default behaviour.
              $('.desc').slideUp();
              
              // opens paragraph (if it's closed) with equivalent index to clicked '.task-desc-title'
              if($('.desc').eq(i).is(':hidden')){
                  $('.desc').eq(i).slideDown("slow");
              } else {
                  // hides paragraph if its visible
                  $('.desc').eq(i).slideUp();
              }        
          });
      }  
      tasks(i);
      i++;  //repeats the task till last declared index
  }
});