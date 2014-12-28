$(function() {
  $('ul.left-menu li > ul').hide();
  $('ul.left-menu li').click(function(e){
    e.stopPropagation();
    $(this).children('ul').slideToggle();
  });
  $('ul.left-menu a').click(function(e){
    // e.stopPropagation();
  });
});

// var el = document.querySelector("ul.left-menu li > ul");
// var elcomplete = document.querySelector("ul.left-menu li");

// console.log("code is run");
// console.log(el);
// console.log(elcomplete);


// elcomplete.addEventListener("click", function(e){
// 	console.log("Event is triggered");
	
// 	if (el.style.display == "none") {
// 		console.log("display= hidden");
// 		el.style.display = "initial";
// 	} else {
// 		console.log("display= something else");
// 		el.style.display = "none";
// 	}
// 	// e.stopPropagation();
// });