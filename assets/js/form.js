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
