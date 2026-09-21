enterTerminal = document.getElementById("enterTerminal");
enterTerminalButton = document.getElementById("enterTerminalButton");

introVid = document.getElementById("introVid");
seqDis = document.getElementById("sequenceDisplay");
text = document.getElementById("bootUpText");

home = document.getElementById("homePage");
journalEntries = document.getElementById("journalEntries");
server = document.getElementById("serverPage");
database = document.getElementById("databasePage");

errorPopup = document.getElementById("errorPopup");
errorButton = document.getElementById("errorButton");

ffVid01 = document.getElementById("ff01");
ffVid02 = document.getElementById("ff02");

returnHomeOVL = document.getElementById("returnHomeOVL");
returnHomeButton = document.getElementById("returnHomeButton");



function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Boot-Up Text Typing "Animation"
async function typeText(word){
    text.innerHTML += "<br>";
    for (let i = 0; i < word.length; i++){
        text.innerHTML += word[i];
        await wait(50);
    }
}

// Display's current screen 
function showScreen(screen){
    enterTerminal.style.display = "none";
    introVid.style.display = "none";
    loginPage.style.display = "none";
    seqDis.style.display = "none";
    home.style.display = "none";
    server.style.display = "none";
    database.style.display = "none";
    ffVid01.style.display = "none";
    ffVid02.style.display = "none";
    journalEntries.style.display = "none";

    screen.style.display = "block";

    if (screen === server || screen === database || screen === journalEntries){
        showReturnButton();
    } else {
        hideReturnButton();
    }
}

//Reveals 'Return Home' Button
function showReturnButton(){
    returnHomeOVL.style.display = "block";
}

function hideReturnButton(){
    returnHomeOVL.style.display = "none";
}

// Intro Terminal Bootup Sequence
async function runBootSequence() {
    await typeText("> INITIALIZING...");
    await wait(1750); //2500

    await typeText("> CONNECTING TO SERVERS...");
    await wait(2000); //3000

    await typeText("> NETWORK SECURED...");
    await wait(2000); //4000

    await typeText("> WELCOME TO AMCIL CORPORATION!");
    await wait(1750); //20000

    showScreen(loginPage);
}

// Display Error Message after Invalid Input
async function runErrorMessage(message) {
    errorButton.textContent = message;
    errorPopup.style.display = "block";
    await wait(2000);
    errorPopup.style.display = "none";
}

showScreen(enterTerminal);

enterTerminalButton.onclick = function(){
    showScreen(introVid);
    introVid.play();
    introVid.addEventListener("ended", function(){
        showScreen(seqDis);
        runBootSequence();
    })
}

let employee;

document.getElementById("userInput").onclick = function(){ 
    employee = document.getElementById("myID").value;
    if (employee == 852206){
        showScreen(home);
    } else {
        myID.value = "";
        runErrorMessage("Invalid Employee ID. Try Again");
    }
}

let accessCode;

document.getElementById("securityButton").onclick = function(){
    accessCode = document.getElementById("securityCode").value;
    if (accessCode == 8151986){
        securityCode.value = "";
        showScreen(database);
    } else {
        securityCode.value = "";
        runErrorMessage("Valid Access Code Required.");
    }
}

document.getElementById("hiddenButton").onclick = function(){
    // Opens Security Access Page "Server"
    showScreen(server);
}

document.getElementById("hiddenButton2").onclick = function(){
    // Dawson's Video
    showScreen(ffVid02);
    ffVid02.play();
    ffVid02.addEventListener("ended", function(){
        showScreen(database);
    })
}

document.getElementById("hiddenButton3").onclick = function(){
    // Lab Video
    showScreen(ffVid01);
    ffVid01.play();
    ffVid01.addEventListener("ended", function(){
        showScreen(database);
    })
}

document.getElementById("hiddenButton4").onclick = function(){
    // Journal Entries
    showScreen(journalEntries);
}

returnHomeButton.onclick = function(){
    showScreen(home);
}
