let count = 0; // init count to 0

function increaseCount() {
    count++; // increment count by 1
    displayCount(); // display the count
    checkCountValue(); // check count value and display messages on milestones
}

function checkCountValue() {
    if(count===10) {
        alert("Your Instagram post gained 10 followers! congrats!");
    } else if(count === 20) {
        alert("Your Insta post gained 20 followers! Keep it up!");
    }
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; //display the count in the HTML
}