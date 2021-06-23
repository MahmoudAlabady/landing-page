/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 * 
 */

const sections = document.querySelectorAll('.segment');
const navList = document.querySelector('#navbar__list');
const mainPart = document.querySelector('main');
let count = 5;


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
function makeNavBar() {
    for (let i = 0; i < sections.length; i++) {
        let liElement = document.createElement('li'); //create menu items
        liElement.setAttribute('class', 'Section');
        let links = document.createElement('a'); //create the links for menu items
        links.setAttribute('class', 'navLink');
        content = sections[i].getAttribute('data-nav');
        path = sections[i].getAttribute('id');
        links.setAttribute('href', `#${path}`);
        links.innerText = `${content}`;
        navList.appendChild(liElement);
        liElement.appendChild(links);

    }
}

function targetArea(area) {
    let boundry = area.getBoundingClientRect();
    return (
        boundry.top >= 0 && 
        boundry.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
    );
}

function makeActive() {
    for (let j = 0; j < sections.length; j++) {
        if (targetArea(sections[j])) {
            if (!sections[j].classList.contains('your-active-class')) {
                sections[j].classList.add('your-active-class');
            }
        } else {
            sections[j].classList.remove('your-active-class');
        }
    }



}
document.addEventListener('scroll', makeActive);


function addSurprise() {

    let newSection = document.createElement('section');
    newSection.setAttribute('id', `section${count}`);
    newSection.setAttribute('data-nav', `Section ${count}`);
    newSection.setAttribute('class', 'segment');
    newSection.innerText = "Thanks for this great course";
    mainPart.appendChild(newSection);
    count++;
}
makeNavBar();
setTimeout(function () {
    alert("I wich my project is fine");
}, 3000);
/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active