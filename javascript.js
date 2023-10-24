$(document).ready(function() {
    $("#toggle").click(function() {
      var elem = $("#toggle").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        $("#toggle").text("Read Less");
        $("#text").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        $("#toggle").text("Read More");
        $("#text").slideUp();
      }
    });
});

$(document).ready(function() {
    $("#toggle1").click(function() {
        var elem = $("#toggle1").text();
        if (elem == "Read More") {
            $("#toggle1").text("Read Less");
            $("#text1").slideDown();
        } else {
            $("#toggle1").text("Read More");
            $("#text1").slideUp();
        }
    });
});

$(document).ready(function() {
    $("#toggle2").click(function() {
        var elem = $("#toggle2").text();
        if (elem == "Read More") {
            $("#toggle2").text("Read Less");
            $("#text2").slideDown();
        } else {
            $("#toggle2").text("Read More");
            $("#text2").slideUp();
        }
    });
});

$(document).ready(function() {
    $("#toggle3").click(function() {
        var elem = $("#toggle3").text();
        if (elem == "Read More") {
            $("#toggle3").text("Read Less");
            $("#text3").slideDown();
        } else {
            $("#toggle3").text("Read More");
            $("#text3").slideUp();
        }
    });
});



//MANUAL slideshow

let slideIndex = 0;
const topMovies = [
  { image_url: "slideimages/hammerheadconserve.png" },
  { image_url: "slideimages/sharkteamreef.png" },
  { image_url: "slideimages/researchhead.png"},
  { image_url: "slideimages/scienctists.png"},
  // Add more image URLs as needed
];

function nextSlide() {
  if (slideIndex < topMovies.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  document.getElementById("manual-slide-image").src = topMovies[slideIndex].image_url;
}

function previousSlide() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = topMovies.length - 1;
  }
  document.getElementById("manual-slide-image").src = topMovies[slideIndex].image_url;
}


//EMAIL.JS FUNCTION

// Get a reference to the button element with the id 'button'
const btn = document.getElementById('button');

// Add an event listener to the form with the id 'form' for the 'submit' event
document.getElementById('form').addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Set the text of the button to 'Sending...' to indicate that the form is being processed
  btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_voc9qmo';

  // Use the emailjs library to send the form data
  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      // When the email is successfully sent, set the text of the button back to 'Send Email'
      btn.value = 'Send Email';

      // Show an alert to indicate that the email was sent successfully
      alert('Sent!');

      // Clear all form fields
      clearFormFields();
    }, (err) => {
      // If there is an error sending the email, set the text of the button back to 'Send Email'
      btn.value = 'Send Email';

      // Show an alert with the error message in JSON format
      alert(JSON.stringify(err));
    });
});

// Function to clear all form fields after successful submission
function clearFormFields() {
  const form = document.getElementById('form');
  const elements = form.elements;

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].type !== 'submit') {
      elements[i].value = '';
    }
  }
}