
// Home Page Menu

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.fooditem-nav a');

  // Initially, add the active class to the first link
  navLinks[0].classList.add('active-link');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1); // Get the target section's ID
      const targetSection = document.getElementById(targetId);

      // Remove active class from all links
      navLinks.forEach(function (navLink) {
        navLink.classList.remove('active-link');
      });

      // Add active class to the clicked link
      link.classList.add('active-link');

      // Scroll to the target section with an offset of 100px
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'auto', block: 'start', inline: 'nearest' });
        window.scrollBy(0, -30); // Adjust the offset as needed
      }
    });
  });
});


// Replace add with Cart Quantity
function replaceWithDiv() {
  var addButton = document.getElementById("addButton");
  var moreDiv = document.getElementById("moreDiv");

  addButton.style.display = "none"; // Hide the "Add" button
  moreDiv.style.display = "block"; // Show the div with "More" button
}



// Cart popup 
document.addEventListener('DOMContentLoaded', function() {
  const cartIcon = document.getElementById('cart-icon');
  const cartPopup = document.getElementById('cart-popup');
  const closePopupButton = document.getElementById('close-popup');

  cartIcon.addEventListener('click', () => {
      cartPopup.style.right = '0';
  });

  closePopupButton.addEventListener('click', () => {
      cartPopup.style.right = '-450px';
  });
});



// Cart popup Increment
$(document).ready(function() {
  $('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }

    $input.val(value);
  });

  $('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value < 100) {
        value = value + 1;
    } else {
        value = 100;
    }

    $input.val(value);
  });
});



// Cooking Instruction Popup

function openPopup() {
  var overlay = document.getElementById("cooking_overlay");
  var popup = document.getElementById("cookingpopup");

  overlay.style.display = "block";
  popup.style.display = "block";
}

function closePopup() {
  var overlay = document.getElementById("cooking_overlay");
  var popup = document.getElementById("cookingpopup");

  overlay.style.display = "none";
  popup.style.display = "none";
}


// Function to update the word count and limit
function updateWordCount() {
  var textarea = document.getElementById("cipopup");
  var wordCountSpan = document.getElementById("wordCount");
  var wordLimit = 100; // Set the word limit here

  var words = textarea.value.split(/\s+/);
  var wordCount = words.length;

  wordCountSpan.textContent = wordCount + "/" + wordLimit;

  if (wordCount > wordLimit) {
      // Disable the submit button if the word limit is exceeded
      document.getElementById("submitBtn").disabled = true;
  } else {
      // Enable the submit button if within the word limit
      document.getElementById("submitBtn").disabled = false;
  }
}

// Add an event listener to the textarea for input changes
document.getElementById("cipopup").addEventListener("input", updateWordCount);
