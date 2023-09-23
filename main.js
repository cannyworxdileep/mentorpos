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



function replaceWithDiv() {
  var addButton = document.getElementById("addButton");
  var moreDiv = document.getElementById("moreDiv");

  addButton.style.display = "none"; // Hide the "Add" button
  moreDiv.style.display = "block"; // Show the div with "More" button
}


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
