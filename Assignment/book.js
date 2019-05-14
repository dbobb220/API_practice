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
            arrayOfUsers = data.results;
            postUsers(arrayOfUsers);
        })
}

postUsers = (array) => {
    array.sort((a, b) => a.name.first < b.name.first ? -1 : 1);
    array.forEach( (val, idx) => {
       holderCard = document.createElement('div')
       holderCard.innerHTML = 
       `<div>${val.name.first} ${val.name.last}</div>
        <div>
            <img src="${val.picture.medium}">
        </div>
        <div>
            <button onclick="moreInfo(${idx})">See More Info</button>
        </div>
        `
        addressBookDom.appendChild(holderCard);
    });
}



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
