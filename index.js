var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var selectedCount = 0; // Counter for selected images

// Function to toggle image selection
function toggleImageSelection(button, imageUrl) {
    if (button.style.backgroundImage) {
        // If already selected, deselect
        button.style.backgroundImage = '';
        button.classList.remove('button-with-image');
        selectedCount--;
    } else {
        // If not selected, select
        if (selectedCount < 11) {
            button.style.backgroundImage = `url(${imageUrl})`;
            button.classList.add('button-with-image');
            selectedCount++;
        } else {
            alert('You can only select 11 images.');
        }
    }
}

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

        // Toggle image selection on button click
        var buttonIndex = Array.from(document.querySelectorAll(".drum")).indexOf(this);
        toggleImageSelection(this, imageUrls[buttonIndex]);
    });
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "b":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log(key);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

// JavaScript code in script.js

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.b.drum'); // Select all buttons with classes 'b' and 'drum'

    // Example image URLs (replace with your actual image URLs)
    const imageUrls = [
        'images/gill.jpg',
        'images/bhuvi.jpg',
        'images/saurav.jpg',
        'images/sanju.jpg',
        'images/Rohit.jpg',
        'images/akshay.jpg',
        'images/axar.jpg',
        'images/bumrah.jpg',
        'images/kevin.jpg',
        'images/virat.jpg',
        'images/jadu.jpg',
        'images/yuzi.jpg',
        'images/surya.jpg',
        'images/allen.jpg',
        'images/hardik.jpg',
        'images/pant.jpg',
        'images/shami.jpg',
        'images/msd.jpg',
        'images/kuldeep.jpg'
    ];

    // Event listeners for each button
    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            toggleImageSelection(button, imageUrls[index]);
        });
    });
});

