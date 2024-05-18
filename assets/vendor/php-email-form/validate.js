// Popup Form Validation
function validateForm() {
  var name = document.getElementById("Full_Name").value;
  var email = document.getElementById("Email_Id").value;
  var phone = document.getElementById("Mobile_Number").value;
  var message = document.getElementById("Message").value;

  // Simple validation example
  if (
    name.trim() === "" ||
    email.trim() === "" ||
    phone.trim() === "" ||
    message.trim() === ""
  ) {
    alert("Please fill in all fields");
    return false;
  }

  // Email format validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Phone number format validation (allow only digits)
  var phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid 10-digit phone number");
    return false;
  }

  // Additional custom validation for the message field (minimum length of 10 characters)
  if (message.length < 10) {
    alert("Please enter a message with at least 10 characters");
    return false;
  }

  // Additional custom validation for the name field (avoid special characters)
  var nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(name)) {
    alert("Please enter a valid name without special characters");
    return false;
  }

  // Additional custom validation for the message content (avoiding restricted words)
  var restrictedWords = ["spam", "hack", "forbidden"];
  for (var i = 0; i < restrictedWords.length; i++) {
    if (message.toLowerCase().indexOf(restrictedWords[i]) !== -1) {
      alert("Please avoid using restricted words in your message");
      return false;
    }
  }

  // If all validations pass, return true to submit the form
  return true;
}

// Contact Form Validation
function validateContactForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Simple validation example
  if (
    name.trim() === "" ||
    email.trim() === "" ||
    subject.trim() === "" ||
    message.trim() === ""
  ) {
    alert("Please fill in all fields");
    return false;
  }

  // Email format validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Subject length validation
  if (subject.length < 5 || subject.length > 50) {
    alert("Please enter a subject between 5 and 50 characters");
    return false;
  }

  // Message length validation
  if (message.length < 10 || message.length > 500) {
    alert("Please enter a message between 10 and 500 characters");
    return false;
  }

  // Additional custom validation if needed

  return true; // Submit the form if validation passes
}

// Function to open the popup and hide the enquire button
function openPopup(popupId) {
  var popup = document.getElementById(popupId);
  var enquireButton = document.getElementById("customOpenEnquirePopup");
  popup.style.display = "block";
  enquireButton.style.display = "none"; // Hide the enquire button
}

// Function to close the popup and show the enquire button
function closePopup(popupId) {
  var popup = document.getElementById(popupId);
  var enquireButton = document.getElementById("customOpenEnquirePopup");
  popup.style.display = "none";
  enquireButton.style.display = "block"; // Show the enquire button
}

// Event listener for closing the popup when the close button is clicked
document
  .getElementById("customCloseEnquire")
  .addEventListener("click", function () {
    closePopup("customEnquirePopup");
  });

// Event listener for opening the popup when the "Enquire Now" button is clicked
document
  .getElementById("customOpenEnquirePopup")
  .addEventListener("click", function () {
    openPopup("customEnquirePopup");
  });

function validateEnquiryForm() {
  var name = document.getElementById("customFullNameEnquire").value.trim();
  var email = document.getElementById("customEmailIdEnquire").value.trim();
  var phone = document.getElementById("customMobileNumberEnquire").value.trim();
  var project = document
    .getElementById("customProjectNameEnquire")
    .value.trim();
  var message = document.getElementById("customMessageEnquire").value.trim();

  // Check if name is empty
  if (name === "") {
    alert("Please enter your name.");
    return false;
  }

  // Check if email is empty or not in correct format
  if (email === "") {
    alert("Please enter your email address.");
    return false;
  } else if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Check if phone number is empty or not in correct format
  if (phone === "") {
    alert("Please enter your phone number.");
    return false;
  } else if (!isValidPhone(phone)) {
    alert("Please enter a valid phone number.");
    return false;
  }

  // Check if project is selected
  if (project === "") {
    alert("Please select a project.");
    return false;
  }

  // Check if message is empty
  if (message === "") {
    alert("Please enter your message.");
    return false;
  }

  return true; // All validations passed
}

// Function to validate email format
function isValidEmail(email) {
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}

// Function to validate phone number format
function isValidPhone(phone) {
  var phoneRegex = /^\d{10}$/; // Assuming 10 digit phone number
  return phoneRegex.test(phone);
}

// Function to get the minimum date in the correct format for datetime-local input
function getMinimumDate() {
  var now = new Date();
  now.setDate(now.getDate() + 1); // Set minimum date to tomorrow
  var year = now.getFullYear();
  var month = (now.getMonth() + 1).toString().padStart(2, "0");
  var day = now.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Set the min attribute of the datetime-local input to the current datetime
document.getElementById("visitDate").setAttribute("min", getMinimumDate());

// Site visit form validation
function validateSiteVisitForm() {
  var name = document.getElementById("inputName").value;
  var mobile = document.getElementById("inputMobile").value;
  var message = document.getElementById("textMessage").value;

  // Check if name, mobile, and message are not empty
  if (name.trim() === "" || mobile.trim() === "" || message.trim() === "") {
    alert("Please fill in all fields.");
    return false;
  }

  // Check if name contains only letters and spaces
  var namePattern = /^[a-zA-Z\s]+$/;
  if (!namePattern.test(name)) {
    alert("Name should contain only letters and spaces.");
    return false;
  }

  // Check if mobile number is numeric and contains 10 digits
  if (isNaN(mobile) || mobile.length !== 10) {
    alert("Please enter a valid 10-digit mobile number.");
    return false;
  }

  // Check if message is not too short
  if (message.length < 10) {
    alert("Please enter a message with at least 10 characters.");
    return false;
  }

  return true; // Form is valid
}

// Close calendar after selecting date and time
document.getElementById("visitDate").addEventListener("change", function () {
  this.blur(); // Blur the input field to close the calendar
});

// Function to open the brochure download popup for validation
function openBrochurePopup() {
  document.getElementById("brochure-popup").style.display = "block";
}

// Function to close the brochure download popup
function closeBrochurePopup() {
  document.getElementById("brochure-popup").style.display = "none";
}

// Form validation function for brochure download
function validateBrochureForm() {
  var name = document.getElementById("brochure-name").value;
  var email = document.getElementById("brochure-email").value;
  var phone = document.getElementById("brochure-phone").value;

  // Check if name, email, and phone are not empty
  if (name.trim() === "" || email.trim() === "" || phone.trim() === "") {
    alert("Please fill in all fields.");
    return false;
  }

  // Validate email format using a regular expression
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Validate phone number format
  var phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  // Add additional validation rules if needed

  return true; // Form is valid
}

// Function to submit the brochure download form
function submitBrochureForm() {
  var isValid = validateBrochureForm();
  if (isValid) {
    // Submit the form
    document.getElementById("BrochureDownloadForm").submit();

    // Close the popup
    closeBrochurePopup();
  }
}
