
let abtMeModal = document.getElementById("about-me-modal");
let awardsModal = document.getElementById("awards-modal");
let contactModal = document.getElementById("contact-modal");
let projectModal = document.getElementById("project-modal");

var closeBtns = document.getElementsByClassName("close-Btn");

let abtMeImage = document.getElementById("about-me-image");
let projectImage = document.getElementById("my-projects-image");
let awardsButton = document.getElementById("awards-image");
let contactButton = document.getElementById("contact-image");

var helpButton = document.getElementById("help-btn");
var helpModal = document.getElementById("help-modal");





var awardList = document.getElementsByClassName("award-item");
var awardDescriptionContainer = document.getElementsByClassName("item-description")[0];
var projectDescriptionContainer = document.getElementsByClassName("item-description")[1];
addAwardMouseListener();
awardMouseLeave();


var projectList = document.getElementsByClassName("project-item");
var imgHolders = document.getElementsByClassName("project-gif");

addProjectMouseListener();
projectMouseLeave();




var clickedModal = null;

abtMeImage.addEventListener("click", openAbtMeModal);
projectImage.addEventListener("click", openProjectModal)
awardsButton.addEventListener("click", openAwardsModal);
contactButton.addEventListener("click", openContactModal);
helpButton.addEventListener("click", openHelpModal);

window.addEventListener("click", clickedOutsideModal);


document.addEventListener("keydown", function(e){
    if(e.key =="Escape"){
        closeModal();
    }

});


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

function closeModal(){
    
    clickedModal.style.display = "none";
    enableClicks();
}


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

}


function disableClicks(){
    abtMeImage.style.pointerEvents = "none";
    projectImage.style.pointerEvents = "none";
    awardsButton.style.pointerEvents = "none";
    contactButton.style.pointerEvents = "none";
}

function enableClicks(){
    abtMeImage.style.pointerEvents = "auto";
    projectImage.style.pointerEvents = "auto";
    awardsButton.style.pointerEvents = "auto";
    contactButton.style.pointerEvents = "auto";
}

//event listeners for all close buttons
for (let i=0; i<closeBtns.length; i++){
    closeBtns[i].addEventListener("click", closeModal);
}


function addAwardMouseListener(){
    let awardDescriptions = ["Awarded to the top 10% of students in the Faculty of Science", "Awarded for completing a minimum of 20 volunteering hours within one semester" , "Awarded to an undergraduate international student who has displayed a high level of academic excellence", "Awarded to an international student for financial aid of academic success", "Awarded to second year students or beyond on the basis of scholarship standing", "Awarded to the top academic achieving international undergraduate students"];

    for(let i =0 ; i<awardList.length ; i++){
        awardList[i].addEventListener("mouseenter", () =>       
        awardDescriptionContainer.innerHTML = awardDescriptions[i]      
        );
    }
}

function awardMouseLeave(){
    
    for(let i =0 ; i<awardList.length ; i++){
        awardList[i].addEventListener("mouseleave", () =>       
            awardDescriptionContainer.innerHTML = "Hover for description"      
        );
    }
}


function addProjectMouseListener(){
    let projectDescriptions = ["This project that uses convolutional neural networks to detect the make & model of cars given their image", "A Flask application that uses automation allowing users/students to register for seminars/events.", "My portofolio website consisting of several components and animations, giving it a modern yet simplistic look", "A classic 2/4 player board game where players plan and thoughtfully build their kingdoms. Color accessability options provided", "A web-based application allowing users to effectively plan and manage their workout routines", "A not-for-profit educational channel where I help students understand Introductory Calculus"];
    for(let w =0 ; w<projectList.length ; w++){
        projectList[w].addEventListener("mouseenter", () =>       
            projectDescriptionContainer.innerHTML = projectDescriptions[w]     
        );
    }
}

function projectMouseLeave(){
    for(let i =0 ; i<projectList.length ; i++){
        projectList[i].addEventListener("mouseleave", () =>       
        projectDescriptionContainer.innerHTML = "Hover for description"      
        );
    }
}






