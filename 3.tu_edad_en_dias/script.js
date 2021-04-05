// Function to calculate number of days since you were born.
function ageInDays() {
    var birthYear = prompt("What year were you born... Good friend?");
    var ageInDayss = (2019 - birthYear) * 365;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("You are " + ageInDayss + " days old.");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
}

// Function to reset the page.
function reset() {
    document.getElementById("ageInDays").remove();
}