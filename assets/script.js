$(function () {
  var today = dayjs();
  var descriptionEl = $(".description");
  currentTime = today.format("H");
  currentTimeNum = Math.floor(currentTime);
  $("#currentDay").text(today.format("dddd, MMMM D, YYYY"));
    
  function getTime(){
    descriptionEl.each(function(){
      console.log($(".description").data("time"));
      if (currentTimeNum === $(this).data("time")) {
        $(this).addClass("present");
      }
      else if (currentTimeNum < $(this).data("time")) {
        $(this).addClass("future");
    }
    else {
      $(this).addClass("past");
    }  
  });
}

var buttonEl = $(".btn");

$(buttonEl).on("click", function () {
  descriptionEl.each(function(i){
    var valueEl = $(this).parent().find(descriptionEl).val();
    console.log(valueEl);
    var time = $(this).parent().attr('id');
    console.log(time);
    console.log(descriptionEl[i]);
    localStorage.setItem(time, JSON.stringify(valueEl));
    var storedNineEl = (localStorage.getItem(time));
    console.log( JSON.parse(storedNineEl));
    $(descriptionEl).text(JSON.parse(storedNineEl));
  });
});

getTime();
});



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//   var buttonEl = document.querySelector(".btn-9");
//   var textNineEl = $("#textNine");
//   // var textTenEl = $("#textTen");

//   // function init() {
  //   //   if (storedNineEl !== null) {
    //   //     textNineEl = storedNineEl;
    //   //     renderToDo();
    //   //   }}
    
    //   // function renderToDo() {
      
  
//     console.log(JSON.parse(storedNineEl));
//     $(textNineEl).text(JSON.parse(storedNineEl));
  
//   $(buttonEl).on("click", function (event) {
//     event.preventDefault();
// // var todoItem = textNineEl.val
//     localStorage.setItem("NineEl", JSON.stringify(textNineEl.val().trim()));
//     // renderToDo();

//     $(textNineEl).on("click", function (event){
//       event.preventDefault();
//       localStorage.clear();
//     })
//   });



//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.