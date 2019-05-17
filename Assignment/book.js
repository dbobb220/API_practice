let arrayOfUsers = [];
let addressBookDom = document.querySelector("#address_book")

// class user {
//     constructor(name, lastName, picture, email, nat, dob, address, ) {
//         this.name = name;
//         this.lastName = lastName;
//         this.picture = picture;
//         this.email = email;
//         this.nat = nat;
//         this.dob = dob;
//         this.address = address;
//     }
// }

window.onload = () => {getUsersOnload()}

const getUsersOnload = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => {
            // put results into an array
            arrayOfUsers = data.results;
            // sort users alphabetically by first name
            arrayOfUsers.sort((a, b) => a.name.first < b.name.first ? -1 : 1);
            // send array into function to add to DOM
            postUsers(arrayOfUsers);
        })
}

const postUsers = (array) => {
    // loop through each user
    array.forEach( (val, idx) => {
        // create div element
       holderCard = document.createElement('div')
       // add class for styling
       val.gender === 'female' ? holderCard.setAttribute('class', 'female book') : holderCard.setAttribute('class', 'male book');
       // add first/last name and image plus button w/ click function for specified index
       holderCard.innerHTML = 
       `<div class="name">${val.name.first} ${val.name.last}</div>
        <div>
            <img src="${val.picture.large}">
            <div class="info_card" id="user${idx}">
                ${val.email}<br>
                ${val.phone}<br>
                ${val.location.street}<br>
                ${val.location.city}, ${val.location.state}<br>
            </div>
        </div>
        <div>
            <button onclick="moreInfo(${idx})">See More Info</button>
        </div>
        `
        addressBookDom.appendChild(holderCard);
    });
}

const moreInfo = (id) => {
    let card = document.querySelector(`#user${id}`);
    card.setAttribute('class', 'show_card');
}

setAttribute('style', 'display:block;')
// TODO remove this as this is for the button logic
// const getUsers = () => {
//     fetch('https://randomuser.me/api/')
//       .then(res => res.json())
//       .then(data => {
//           let name = data.results["0"].name.first;
//           let picture = data.results["0"].picture.medium;
//           arrayOfUsers.push(new user(name, picture));
//           console.log(arrayOfUsers.sort((a, b) => a.name < b.name ? -1 : 1));
//           addUsersToDom(name, picture);
//       })
//   }

// TODO delete and opt for array method instead
// const addUsersToDom = (name, picture) => { 
//     namePlace = document.createElement('p');
//     namePlace.innerHTML = name;
//     img = document.createElement('img');
//     img.setAttribute("src", picture);
//     addressBookDom.appendChild(namePlace);
//     addressBookDom.appendChild(img);
// }
