let friendsList = [];


function addFriends() {
    // Retrieves the input and adds it to the friendsList
    let friend = document.getElementById("friend").value;

    // Checks if the input meets conditions
    if (friend == "") {
        alert("Please add a valid name.");
    } else {
        friendsList.push(friend);
    }

    cleanBox();
    displayFriends();
}

function cleanBox() {
    document.getElementById("friend").value = "";
}

function displayFriends() {
    let ul = document.getElementById('friendsList');
    ul.innerHTML = "";
    
    for (let i = 0; i < friendsList.length; i++) {
        let li = document.createElement('li');
        li.textContent = friendsList[i];
        ul.appendChild(li);
    }
}


function randomIndex(max) {
    return Math.floor(Math.random() * max);
}

function randomFriend() {
    let max = friendsList.length;
    // Condition if no friends in the array
    if (max === 0) {
        alert("Please add friends to sort.")
    } else {
        // Define random index in friends list
        let index = randomIndex(max);
        // Accesing ul where friend will be displayed
        let ul = document.getElementById('result');
        let li = document.createElement('li');
        li.textContent = friendsList[index];
        // Appending
        ul.appendChild(li);
    }

    newGameButton();
}


function initialConfig() {
    // New game button unactive
    document.getElementById('new-game-bt').disabled = true;
    // Deactivate sort and add buttons
    document.getElementById('sort').disabled = false;
    document.getElementById('add').disabled = false;
    // Clean friends list 
    friendsList = [];
    // Clean printed friend in ul
    cleanUnorderedLists('friendsList');
    cleanUnorderedLists('result');
}

function cleanUnorderedLists(listId) {
    let ul = document.getElementById(listId);
    ul.innerHTML = "";
}

function newGameButton() {
    // Activate new game button
    document.getElementById('new-game-bt').disabled = false;
    // Deactivate sort and add button
    document.getElementById('sort').disabled = true
    document.getElementById('add').disabled = true

}

initialConfig();