let getDataFromStorage, userInfo, firstName;
let headingMain = document.getElementsByClassName("save__heading--main");
let headingSub = document.getElementsByClassName("save__heading--sub");

if (sessionStorage.getItem("customerInfo") !== null) {
  userInfo = JSON.parse(sessionStorage.getItem("customerInfo"));
}
headingMain[0].innerHTML = `Thank you ${userInfo.firstName}`;
headingSub[0].innerHTML = `Your message was sent successfully`;

setTimeout(() => {
  window.location.href = "index.html";
}, 3000);
