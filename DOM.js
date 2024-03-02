function upDate(element) {
    var previewPic = element.src;
    var altText = element.alt;

    console.log("Mouse over event triggered");
    console.log("Alt: " + altText);
    console.log("Source: " + previewPic);

    document.getElementById('image').innerHTML = altText;
    document.getElementById('image').style.backgroundImage = "url('" + previewPic + "')";
}

function undo() {
    console.log("Mouse out event triggered");

    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    document.getElementById('image').style.backgroundImage = "url('')";
}

var thumbnail = document.getElementById('previewPic');
thumbnail.addEventListener('mouseover', function() {
    upDate(thumbnail);
});

thumbnail.addEventListener('mouseout', function() {
    undo();
});

// Get all image elements
var images = document.querySelectorAll('.idol-image');

// Loop through each image and add event listeners
images.forEach(function(image) {
    image.addEventListener('focus', function(event) {
        // Implement functionality for focus event
        // For example, enlarge the image or display some information
        console.log('Image focused');
    });

    image.addEventListener('blur', function(event) {
        // Implement functionality for blur event
        // For example, shrink the image or hide the information
        console.log('Image blurred');
    });
});

window.addEventListener('load', function() {
    // Implement functionality for the onload event
    // For example, load additional content or initialize the page
    console.log('Page loaded');
});

<div class="idol-card">
    <img className="idol-image" src="image.jpg" alt="JAV Idol" tabIndex="0" />
    <div class="idol-name">Idol Name</div>
</div>
