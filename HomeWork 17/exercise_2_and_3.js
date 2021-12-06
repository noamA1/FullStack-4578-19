// Global functions
const displayUser = (element, userObj) => {
  element.innerHTML = `<div class="card">
      <div class="card-body">
        <h5 class="card-title">User #${userObj.id}</h5>
        <p class="card-text">
          <ul class="list-group">
          <li class="list-group-item list-group-item-light"><strong> Full Name: </strong>${userObj.name}</li>
          <li class="list-group-item list-group-item-light"><strong> User Name: </strong>${userObj.username}</li>
          <li class="list-group-item list-group-item-light"><strong> Email: </strong>${userObj.email}</li>
          <li class="list-group-item list-group-item-light"><strong> City: </strong>${userObj.address.city} </li>
          <li class="list-group-item list-group-item-light"><strong> Street: </strong>${userObj.address.street}</li>
          <li class="list-group-item list-group-item-light"><strong> Zip Code: </strong>${userObj.address.zipcode}</li>
          <li class="list-group-item list-group-item-light"><strong> Company: </strong>${userObj.company.name}</li>
          </ul>
        </p>
  
      </div>
    </div>`;
};

// #2: get user by ID

const userIdInput = document.querySelector("#userIdInput");
const userIdButton = document.querySelector(".getUserButton");
const userDetailsElement = document.querySelector(".userCard");

let id, userFromServer;
const url = "https://jsonplaceholder.typicode.com/users";

userIdButton.addEventListener("click", () => {
  id = Number(userIdInput.value);
  const ajaxReqForUser = new XMLHttpRequest();

  ajaxReqForUser.onreadystatechange = () => {
    try {
      if (ajaxReqForUser.readyState === 4 && ajaxReqForUser.status === 200) {
        userFromServer = JSON.parse(ajaxReqForUser.responseText);
        displayUser(userDetailsElement, userFromServer);
      } else if (
        ajaxReqForUser.readyState === 4 &&
        ajaxReqForUser.status === 404
      ) {
        throw new Error("Can not find this user");
      }
    } catch (error) {
      console.log(error);
      alert(`${error}, try again, the number must be between 1 to 10!`);
    }
  };

  ajaxReqForUser.open("GET", `${url}/${id}`);
  ajaxReqForUser.send();
});

// #3: select user
const selectionContainer = document.querySelector(".selectUserContainer");
const userListSelectionElement = document.querySelector("#selectUserFromList");
const selectedUserButton = document.querySelector(".getSelectedUserButton");
const selectedUserDetailsElement = document.querySelector(".selectedUserCard");

let allUsersFromServer, selectedId, selectedUser;
const ajaxReq = new XMLHttpRequest();

window.onload = () => {
  ajaxReq.onreadystatechange = async () => {
    if (ajaxReq.readyState === 4 && ajaxReq.status === 200) {
      allUsersFromServer = JSON.parse(ajaxReq.responseText);
      await initializationSelectElement();
    }
  };

  ajaxReq.open("GET", url);
  ajaxReq.send();
};

const initializationSelectElement = () => {
  userListSelectionElement.innerHTML = `
      <option value = "none" disabled selected> Choose one user.. </option>
      <option value = ${allUsersFromServer[0].id}> ${allUsersFromServer[0].name} </option>
      <option value = ${allUsersFromServer[1].id}> ${allUsersFromServer[1].name} </option>
      <option value = ${allUsersFromServer[2].id}> ${allUsersFromServer[2].name} </option>
      <option value = ${allUsersFromServer[3].id}> ${allUsersFromServer[3].name} </option>
      <option value = ${allUsersFromServer[4].id}> ${allUsersFromServer[4].name} </option>
      <option value = ${allUsersFromServer[5].id}> ${allUsersFromServer[5].name} </option>
      <option value = ${allUsersFromServer[6].id}> ${allUsersFromServer[6].name} </option>
      <option value = ${allUsersFromServer[7].id}> ${allUsersFromServer[7].name} </option>
      <option value = ${allUsersFromServer[8].id}> ${allUsersFromServer[8].name} </option>
      <option value = ${allUsersFromServer[9].id}> ${allUsersFromServer[9].name} </option>`;
};

userListSelectionElement.addEventListener("change", () => {
  selectedId = Number(
    userListSelectionElement.options[userListSelectionElement.selectedIndex]
      .value
  );

  ajaxReq.onreadystatechange = () => {
    if (ajaxReq.readyState === 4 && ajaxReq.status === 200) {
      selectedUser = JSON.parse(ajaxReq.responseText);
      displayUser(selectedUserDetailsElement, selectedUser);
    }
  };
  ajaxReq.open("GET", `${url}/${selectedId}`);
  ajaxReq.send();
});
