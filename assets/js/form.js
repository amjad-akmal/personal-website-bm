const scriptURL =
  "https://script.google.com/macros/s/AKfycbzPDbLEWkJsWNPX64epYyBsf8SyzmlpAbQf5ehHlxXQEvFyiqRJaE6Z62QzWTfTgkW1/exec";
const form = document.forms["gform"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert("message sent!thank you!");
      window.location.reload();
    })
    .catch((error) => alert("something went wrong!"));
});

const nameEl = document.getElementById("name");
const regName = /^[a-zA-Z ]+$/;

nameEl.addEventListener("focusout", (e) => {
  if (!regName.test(e.target.value)) {
    e.target.setCustomValidity("please enter a valid name");
  } else {
    e.target.setCustomValidity("");
  }
});

nameEl.oninput = (e) => {
  e.target.setCustomValidity("");
};

// const messageEl = document.getElementById("message");

// messageEl.addEventListener("focusout", (e) => {
//   if (e.target.value.length < 16) {
//     e.target.setCustomValidity("message requires atleast 16 characters");
//   }
// });
