document.addEventListener('DOMContentLoaded', function() {
    // Toggle mobile menu for small screens
    const menuToggle = document.querySelector('.menu-toggle');
    const navListLarge = document.querySelector('#list-large');
    const navListMedium = document.querySelector('#list-medium');
    const navListSmall = document.querySelector('#list-small');
    const navListExtraSmall = document.querySelector('#list-extra-small');

    // Toggle the visibility of the nav lists based on the toggle button click
    menuToggle.addEventListener('click', function() {
        navListMedium.classList.toggle('show'); // Toggle only for medium nav
        navListSmall.classList.toggle('show'); // Toggle only for small nav
        navListExtraSmall.classList.toggle('show'); // Toggle only for extra small nav
    });

    // Toggle dropdown on button click for small screens
    const dropdownButtons = document.querySelectorAll('.dropbtn');
    
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the event from bubbling up
            const dropdownContent = this.nextElementSibling; // Get the corresponding dropdown content
            dropdownContent.classList.toggle('show'); // Toggle dropdown visibility
        });
    });

    // Close dropdown if clicking outside
    window.addEventListener('click', function() {
        dropdownButtons.forEach(button => {
            const dropdownContent = button.nextElementSibling; // Get the dropdown content
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show'); // Close dropdown
            }
        });
    });
});

// Add scale animation on hover for nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = "scale(1.1)";
        link.style.transition = "transform 0.3s ease";
    });
 
    link.addEventListener('mouseout', () => {
        link.style.transform = "scale(1)";
    });
});

// Adjust dropdown position based on viewport to prevent overflow
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseenter', function () {
        const dropdownContent = this.querySelector('.dropdown-content');
        const rect = dropdownContent.getBoundingClientRect();
        const viewportWidth = window.innerWidth; // Get the width of the viewport

        // Check if the dropdown overflows to the right
        if (rect.right > viewportWidth) {
            dropdownContent.style.left = 'auto';
            dropdownContent.style.right = '0'; // Align dropdown to the right if it overflows
        } else {
            dropdownContent.style.left = '0'; // Default align to the left if no overflow
            dropdownContent.style.right = 'auto'; // Reset right positioning
        }

        // Check if the dropdown overflows to the bottom
        const viewportHeight = window.innerHeight;
        if (rect.bottom > viewportHeight) {
            dropdownContent.style.top = `-${rect.height}px`; // Move dropdown up if it overflows at the bottom
        } else {
            dropdownContent.style.top = ''; // Reset top positioning
        }

        dropdownContent.classList.add('show'); // Show the dropdown
    });

    dropdown.addEventListener('mouseleave', function () {
        const dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.classList.remove('show'); // Hide the dropdown
    });
});




