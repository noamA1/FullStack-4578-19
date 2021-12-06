const ajaxReq = new XMLHttpRequest();

// #1: get all users

const allUsersButton = document.querySelector(".all-users__button");
const allUsersTableBodyElement = document.querySelector(
  ".all-users__table-table-body"
);
const progressBarElement = document.querySelector(".all-users__progress");
const usersTable = document.querySelector(".all-users__table");

const usersUrl = "https://jsonplaceholder.typicode.com/users";
let allUsersFromServer;

allUsersButton.addEventListener("click", () => {
  ajaxReq.onreadystatechange = () => {
    progressBarElement.style.width = `${ajaxReq.readyState * 25}%`;
    progressBarElement.innerText = `${ajaxReq.readyState * 25}%`;
    if (ajaxReq.readyState === 4 && ajaxReq.status === 200) {
      allUsersFromServer = JSON.parse(ajaxReq.responseText);
      displayAllUsers();
    }
  };

  ajaxReq.open("GET", "https://jsonplaceholder.typicode.com/users");
  ajaxReq.send();
});

const displayAllUsers = () => {
  let usersToTableStr = "";
  for (user of allUsersFromServer) {
    usersToTableStr += `<tr> 
    <td>
    ${user.id}
</td>
            <td>
                ${user.name}
            </td>
            <td>
                ${user.username}
            </td>
            <td>
                ${user.email}
            </td>
            <td>
                ${user.address.city}
            </td>
            <td>
                ${user.address.street}
            </td>
            <td>
                ${user.address.zipcode}
            </td>
            <td>
                ${user.company.name}
            </td>
        </tr>`;
  }

  allUsersTableBodyElement.innerHTML = usersToTableStr;
  usersTable.removeAttribute("hidden");
};

// #4: Get all pictures from the server

const allPicturesButtonElement = document.querySelector(
  ".all-pictures__button"
);
const allPicturesTableElement = document.querySelector(".all-pictures__table");
const allPicturesTableBodyElement = document.querySelector(
  ".all-pictures__table-table-body"
);
let allPicturesFromServer;
const MAX_PICTURES = 100;

allPicturesButtonElement.addEventListener("click", () => {
  ajaxReq.onreadystatechange = () => {
    if (ajaxReq.readyState === 4 && ajaxReq.status === 200) {
      allPicturesFromServer = JSON.parse(ajaxReq.responseText);
      displayAllPictures();
    }
  };

  ajaxReq.open("GET", "https://jsonplaceholder.typicode.com/photos");
  ajaxReq.send();
});

const displayAllPictures = () => {
  let picturesToTableStr = "";
  for (let i = 0; i < MAX_PICTURES; i++) {
    picturesToTableStr += `
    <tr> 
      <td>
        ${allPicturesFromServer[i].id}
      </td>
      <td>
        ${allPicturesFromServer[i].albumId}
      </td>
      <td>
          ${allPicturesFromServer[i].title}
      </td>
      <td>
          <img src = ${allPicturesFromServer[i].thumbnailUrl}>
      </td>       
    </tr>`;
  }

  allPicturesTableBodyElement.innerHTML = picturesToTableStr;
  allPicturesTableElement.removeAttribute("hidden");
};
