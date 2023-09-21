const searchFormE = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

searchFormE.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchText = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  fetch(`http://localhost:3000/weather?address=${searchText}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = data.error;
        } else {
          messageOne.textContent = data.forecast;
          messageTwo.textContent = data.locationName;
        }
      });
    }
  );
});
