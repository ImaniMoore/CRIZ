function validateForm(e) {
  event.preventDefault();
  let x = document.forms["myForm"]["Fname"].value;
  let y = document.forms["myForm"]["Lname"].value;
  let z = document.forms["myForm"]["email"].value;
  let a = document.forms["myForm"]["phone"].value;
  if (x == "") {
    alert("First Name must be filled out");
    return false;
  } else if (y == "") {
    alert("Last Name must be filled out");
    return false;
  } else if (z == "") {
    alert("Email must be entered");
    return false;
  } else if (a == "") {
    alert("Phone number must be entered");
    return false;
  }

  alert("Submitted");
  return true;
}

let contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", validateForm);
