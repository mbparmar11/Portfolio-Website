let body = document.body;

//for the preloader
var preloader = document.getElementById("preloader");
window.addEventListener("load", ()=>
    preloader.style.display = "none"
)

//All the modals
let abtMeModal = document.getElementById("about-me-modal");
let awardsModal = document.getElementById("awards-modal");
let contactModal = document.getElementById("contact-modal");
let projectModal = document.getElementById("project-modal");
let helpModal = document.getElementById("help-modal");


//For the smaller resolution
let welcomeModal = document.getElementById("welcome-modal");

//All the buttons
let continueButton = document.getElementById("resolution-confirmation");
var closeBtns = document.getElementsByClassName("close-Btn");
let abtMeImage = document.getElementById("about-me-image");
let projectImage = document.getElementById("my-projects-image");
let awardsButton = document.getElementById("awards-image");
let contactButton = document.getElementById("contact-image");
var helpButton = document.getElementById("help-btn");


var lowResolution = false;
var highResolution = false;

//get the initial/original resolution 
window.onload = getCurrentResolution;

function getCurrentResolution(){
    if (window.innerWidth>1100){
        highResolution = true;
        lowResolution = false;
    }
    else{
        highResolution = false;
        lowResolution = true;
    }
}

//show the welcome modal only once when the resolution changes
window.onresize = calculateWidth;
function calculateWidth(){
    if ((window.innerWidth > 1100) && (highResolution==false)){
        welcomeModal.style.display="block";
        getCurrentResolution();
    }
    
    else if ((window.innerWidth < 1100) && (lowResolution==false)){
        welcomeModal.style.display="block";
        getCurrentResolution();
    }
}


var awardList = document.getElementsByClassName("award-item");
var awardDescriptionContainer = document.getElementsByClassName("item-description")[1];
var projectButtons = document.getElementsByClassName('button');
var projectItems = document.getElementsByClassName('project-item');

addProjectButtonListeners();
initialProjectSetup();

//registering event listeners for award bullets - for their description
addAwardMouseListener();
awardMouseLeave();


//the currently clicked modal, will always be the welcome modal initially
var clickedModal = welcomeModal;

//click events for all the clickable elements
abtMeImage.addEventListener("click", openAbtMeModal);
projectImage.addEventListener("click", openProjectModal)
awardsButton.addEventListener("click", openAwardsModal);
contactButton.addEventListener("click", openContactModal);
helpButton.addEventListener("click", openHelpModal);
continueButton.addEventListener("click", continueAtSmallResolution);

//click event for when clicked outside the modal
window.addEventListener("click", clickedOutsideModal);


//when the modal is open, pressing the escape key will close it
document.addEventListener("keydown", function(e){
    if(e.key =="Escape"){
        closeModal();
    }
});


//close the welcome modal on low res
function continueAtSmallResolution(){
    welcomeModal.style.display = "none";
}

//Functions for opening the differnet models and making other components unclickable while the modal is open
function openAbtMeModal(){
    clickedModal = abtMeModal;
    abtMeModal.style.display = "block";
    disableClicks();

}
function openProjectModal(){
    clickedModal = projectModal;
    projectModal.style.display = "block";
    disableClicks();

}
function openHelpModal(){
    clickedModal = helpModal;
    helpModal.style.display = "block";
    disableClicks();

}


function openAwardsModal(){
    clickedModal = awardsModal;
    awardsModal.style.display = "block";
    disableClicks();

}
function openContactModal(){
    clickedModal = contactModal;
    contactModal.style.display = "block";
    disableClicks();

}

//when the modal is closed, clicks for all other clickable components are enabled
function closeModal(){
    clickedModal.style.display = "none";
    enableClicks();
}

//closes the modal if clicked outside it
function clickedOutsideModal(e){
    if (e.target == abtMeModal){
        abtMeModal.style.display = "none";
        enableClicks();
    }
    else if (e.target == awardsModal){
        awardsModal.style.display = "none";
        enableClicks();
    }
    else if (e.target == contactModal){
        contactModal.style.display = "none";
        enableClicks();
    }
    else if (e.target == projectModal){
        projectModal.style.display = "none";
        enableClicks();
    }
    else if (e.target == helpModal){
        helpModal.style.display = "none";
        enableClicks();
    }
    else if (e.target == welcomeModal){
        welcomeModal.style.display = "none";
        enableClicks();
    }

}

//prevnts all other elements to be clicked, used when a modal is open
function disableClicks(){
    abtMeImage.style.pointerEvents = "none";
    projectImage.style.pointerEvents = "none";
    awardsButton.style.pointerEvents = "none";
    contactButton.style.pointerEvents = "none";
    helpButton.style.pointerEvents = "none";
}

//re-enables the elements to be clicked
function enableClicks(){
    abtMeImage.style.pointerEvents = "auto";
    projectImage.style.pointerEvents = "auto";
    awardsButton.style.pointerEvents = "auto";
    contactButton.style.pointerEvents = "auto";
    helpButton.style.pointerEvents = "auto";
}

//event listeners for all close buttons
for (let i=0; i<closeBtns.length; i++){
    closeBtns[i].addEventListener("click", closeModal);
}

//mouse listeners for the hover function that displays the award descriptions
function addAwardMouseListener(){
    let awardDescriptions =["Awarded to the top academic performing student in the department of Computer Science for the year","Awarded to the top 10% of students in the Faculty of Science", "Awarded for completing a minimum of 20 volunteering hours within one semester" , "Awarded to an undergraduate international student who has displayed a high level of academic excellence", "Awarded to an international student for financial aid of academic success", "Awarded to second year students or beyond on the basis of scholarship standing", "Awarded to the top academic achieving international undergraduate students"];

    for(let i =0 ; i<awardList.length ; i++){
        awardList[i].addEventListener("mouseenter", () =>       
        awardDescriptionContainer.innerHTML = awardDescriptions[i]      
        );
    }
}

//display default text when hovered out of an award item
function awardMouseLeave(){
    
    for(let i =0 ; i<awardList.length ; i++){
        awardList[i].addEventListener("mouseleave", () =>       
            awardDescriptionContainer.innerHTML = "Hover for description"      
        );
    }
}


//adds event listeners for the projects, project details will show up when clicked
function addProjectButtonListeners(){
    for(let i =0 ; i<projectButtons.length ; i++){
        projectButtons[i].addEventListener("click", ()=>
            showProject(i));
    }
}

//only displays the currently chosen project and highlights its corresponding button
function showProject(i){
    for (let j=0 ; j<projectItems.length ; j++){
        projectItems[j].style.display = "none";
        projectButtons[j].style.backgroundColor = "black";
        projectButtons[j].style.color = "#00e3ff";
    }
    projectItems[i].style.display = "block";
    makeSelected(projectButtons[i]);
}


//initial project setup for the first project
function initialProjectSetup(){
    projectItems[0].style.display = "block";
    makeSelected(projectButtons[0]);
}

//makes the butttons for the currently selected project have a different colour
function makeSelected(button){
    button.style.backgroundColor = "#d59217";
    button.style.color = "white";
}

