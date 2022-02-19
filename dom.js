// ---------add border-----------

document.getElementById('add-border').addEventListener('click', function() {
   const container = document.getElementById('friend-container');
   container.style.border = '3px solid black';
});


//  add background----
function addBackground(){
const friends = document.getElementsByClassName('friend');
for(const friend of friends){
friend.style.background = 'lightgreen';
}
};

// add friend=------------------------

document.getElementById('add-friend').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h3 class="friend-name">New friend</h3>
    <p>Nostrum, ab quidem?</p>  `;
    container.appendChild(friendDiv);

});