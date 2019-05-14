let arrayOfUsers = [];
let addressBookDom = document.querySelector("#address_book")

class user {
    constructor(name, picture) {
        this.name = name;
        this.pictuer = picture;
    }
}

const getUsers = () => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => {
          let name = data.results["0"].name.first;
          let picture = data.results["0"].picture.medium;
          arrayOfUsers.push(new user(name, picture));
          console.log(arrayOfUsers)
          addUsersToDom(name, picture)
      })
  }

const addUsersToDom = (name, picture) => {
    img = document.createElement('img');
    img.setAttribute("src", picture);
    addressBookDom.appendChild(img);
}

const consoleUsers = () => {
console.log(arrayOfUsers)
}