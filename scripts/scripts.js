// Add the current selector to the on-demand menu item if in these directories

$(document).ready(function() {
    if (window.location.href.indexOf("category") > -1) {
		setTimeout(function(){
			let myFirstLink = document.getElementById('on-demand');
            myFirstLink.className += (" w--current");
            let myEighthLink = document.getElementById('nav-track');
			myEighthLink.className += (" w--current");
		  }, 100);
	} 
    if (window.location.href.indexOf("breakout-sessions") > -1) {
		setTimeout(function(){
			let mySecondLink = document.getElementById('on-demand');
			mySecondLink.className += (" w--current");
		  }, 100);
	} 	
	if (window.location.href.indexOf("tag") > -1) {
		setTimeout(function(){
			let myThirdLink = document.getElementById('on-demand');
            myThirdLink.className += (" w--current");
            let mySeventhLink = document.getElementById('nav-tag');
			mySeventhLink.className += (" w--current");
		  }, 100);
    }
    if (window.location.href.indexOf("all-breakout-sessions") > -1) {
		setTimeout(function(){
			let myFourthLink = document.getElementById('on-demand');
			myFourthLink.className += (" w--current");
		  }, 100);
    }
    if (window.location.href.indexOf("presenters") > -1) {
		setTimeout(function(){
			let myFifthLink = document.getElementById('on-demand');
            myFifthLink.className += (" w--current");
            let mySixthLink = document.getElementById('nav-presenter');
			mySixthLink.className += (" w--current");
		  }, 100);
    }
    
    else {
		// nothing to do here, intentionally left blank
	}
  });

// Pass co-workers name to success state for add co-workers page

$('#add_coworkers').click(function() {
    var cwaddfirst = $('#coworker1first').val();
    var cwaddlast = $('#coworker1last').val();
    $('#coworkname').html(cwaddfirst);
    $('#coworknamelast').html(cwaddlast);
});

// Reload the page on click to add another co-worker
$('#addcwagain').click(function() {
    location.reload();
});


// Script for password matching and validation on the regiatration pages

// check if password fields match on user input
// for both the password & repeat-password fields
// call the debounce function to run the input function after 500 milliseconds
$('#password, #password-confirm').on('input', debounce(() => {
    // if the value on the password field
    // equals the value of the repeat-password field
    if ($('#password').val() === $('#password-confirm').val()) {
        // click the .success field to initiate webflow interaction
        // that shows a successful match
        $('.confirm-click').click();
    } else { // if the values don't match
        // click the .fail field to initiate webflow interaction
        // that shows a failed match
        $('.not-confirmed-click').click();
    }
}, 500));


// on submit button click
$('#submit').click(() => {
    // if the passwords match
    if ($('#password').val() === $('#password-confirm').val()) {
        // submit form
        return true;
    } else { // if the passwords don't match
        // prevent form submit
        return false;
    }
});

// debounce function
// the function calls a provided callback function that then runs after a set time period
// the reason we use it here is to ensure the validate code runs after every 500 millisec
// compared to running on every character the user enters as it would have without the debounce func
function debounce(callback, wait) {
    let timeout;
    return (...args) => {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => callback.apply(context, args), wait);
    };
}