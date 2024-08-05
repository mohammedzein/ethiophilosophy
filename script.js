
// Toggle the navigation bar for responsive view
function toggleNavbar() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

// Toggle dropdown menu visibility
function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    } else {
        // Close any open dropdowns
        var openDropdowns = document.querySelectorAll('.dropdown-content.show');
        openDropdowns.forEach(function(dd) {
            dd.classList.remove('show');
        });
        dropdown.classList.add('show');
    }
}

// Close dropdowns when clicking outside of them
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(function(dd) {
            if (dd.classList.contains('show')) {
                dd.classList.remove('show');
            }
        });
    }
}
