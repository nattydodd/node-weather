console.log("Client side Js running in the browser");

const weatherForm = document.querySelector("form");
const input = document.querySelector("input");
const messageOne = document.querySelector("#error-message");
const messageTwo = document.querySelector("#weather-message");

messageOne.textContent = "";
messageTwo.textContent = "";

weatherForm.addEventListener("submit", event => {
  event.preventDefault();
  const location = input.value;
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch(`http://localhost:3000/weather?address=${location}`).then(response => {
    response.json().then(data => {
      messageOne.textContent = "";
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
