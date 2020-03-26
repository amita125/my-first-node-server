document
  .getElementById("submitForm")
  .addEventListener("click", function(event) {
    event.preventDefault();
    displayAsync();
  });

function showImage() {
  document.getElementById("form").style.display = "none";
  document.querySelector(".img-section").style.display = "block";
  let search = document.getElementById("img").value;
  let imgSearch =
    "https://source.unsplash.com/featured/160x90/?" + "{" + search + "}";
  fetch(imgSearch).then(response => {
    let item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `<img class="beach-image" src="${response.url}" alt="beach image"/>`;
    document.body.appendChild(item);
  });
}

function timer() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(showImage());
    }, 10000);
  });
}

async function displayAsync() {
  await timer();
  await timer();
  //   await showImage2();
}
