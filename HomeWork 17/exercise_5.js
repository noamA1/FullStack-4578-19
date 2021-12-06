// #5: get all users from https://reqres.in/api/users

const allUsersFromReqresButton = document.querySelector(".all-users__button");
const allUsersFromReqresTableBodyElement = document.querySelector(
  ".all-users__table-table-body"
);

const allUsersFromReqresTableElement =
  document.querySelector(".all-users__table");

const usersUrl = "https://reqres.in/api/users";
let allUsersFromReqres, response;

allUsersFromReqresButton.addEventListener("click", () => {
  const ajax = new XMLHttpRequest();
  ajax.onreadystatechange = () => {
    if (ajax.readyState === 4 && ajax.status === 200) {
      response = JSON.parse(ajax.responseText);
      allUsersFromReqres = response.data;
      displayAllUsers();
    }
    console.log(allUsersFromReqres);
  };
  ajax.open("GET", usersUrl);
  ajax.send();
});

const displayAllUsers = () => {
  let usersToTableStr = "";
  for (user of allUsersFromReqres) {
    usersToTableStr += `<tr> 
    <td>
    ${user.id}
</td>
            <td>
                ${user.first_name}
            </td>
            <td>
                ${user.last_name}
            </td>
            <td>
                ${user.email}
            </td>
            <td>
            <img src = ${user.avatar}>
            </td>
    
        </tr>`;
  }

  allUsersFromReqresTableBodyElement.innerHTML = usersToTableStr;
  allUsersFromReqresTableElement.removeAttribute("hidden");
};
