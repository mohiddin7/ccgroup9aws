js: 
function toggleVisibility(section) {
    var element = document.getElementById(section);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function redirectToURL(url) {
    window.location.href = url;
}
