const btn = document.querySelector("button");
const container = document.querySelector(".cards-container");
btn.addEventListener("click", () => {
  fetch(`https://randomuser.me/api?results=${Math.floor(Math.random() * 10)}`)
    .then((response) => response.json())
    .then((data) => {
      container.innerHTML = "";
      for (let i = 0; i < data.results.length; i++) {
        renderUserCard(data.results[i]);
      }
    });
});
// second version
function renderUserCard(user) {
  container.innerHTML += `
<div class="card" style="width: 18rem;" onclick="renderMoreDetails('${
    user.dob.age
  }', '${user.gender}', '${user.location.street.name}', '${
    user.location.street.number
  }', '${user.nat}', '${user.id.value}')">
<img class="card-img-top" src=${user.picture.large} alt="Card image cap">
<div class="card-body">
<h5 class="card-title">${user.name.first + " " + user.name.last}</h5>
<p class="card-text">${user.login.username}</p>
</div>
<ul class="list-group list-group-flush">  
<li class="list-group-item">${user.location.city}</li>
<li class="list-group-item">${user.phone}</li>
<li class="list-group-item">${user.email}</li>
</ul>
</div>`;

  // first version
  // const mainDiv = document.createElement("div");
  // mainDiv.setAttribute("class", "card");
  // mainDiv.style.width = "18rem";
  // container.appendChild(mainDiv);

  // const img = document.createElement("img");
  // img.setAttribute("class", "card-img-top");
  // img.setAttribute("src", user.picture.large);
  // img.setAttribute("alt", "card img cap");
  // mainDiv.appendChild(img);

  // const cardBody = document.createElement("div");
  // cardBody.setAttribute("class", "card-body");
  // mainDiv.appendChild(cardBody);

  // const cardTitle = document.createElement("h5");
  // cardTitle.setAttribute("class", "card-title");
  // cardTitle.textContent = user.name.first + " " + user.name.last;
  // cardBody.appendChild(cardTitle);

  // const username = document.createElement("p");
  // username.setAttribute("class", "card-text");
  // username.innerText = user.login.username;
  // cardBody.appendChild(username);

  // const list = document.createElement("ul");
  // list.setAttribute("class", "list-group list-group-flush");
  // mainDiv.appendChild(list);

  // const listItem1 = document.createElement("li");
  // listItem1.setAttribute("class", "list-group-item");
  // listItem1.textContent = user.location.city;
  // list.appendChild(listItem1);

  // const listItem2 = document.createElement("li");
  // listItem2.setAttribute("class", "list-group-item");
  // listItem2.textContent = user.phone;
  // list.appendChild(listItem2);

  // const listItem3 = document.createElement("li");
  // listItem3.setAttribute("class", "list-group-item");
  // listItem3.textContent = user.email;
  // list.appendChild(listItem3);
}

function renderMoreDetails(
  age,
  gender,
  streetName,
  streetNumber,
  nat,
  country,
  idValue
) {
   `
  <div class="detailsContainer">
      
    </div>
`;
  Swal.fire({
    title: "<strong>More <u>details</u></strong>",
    icon: "info",
    html:
    `<p class="details-container-p">Age: ${age}</p>
    <p class="details-container-p">Gender: ${gender}</p>
    <p class="details-container-p">Street name: ${streetName}</p>
    <p class="details-container-p">Street number: ${streetNumber}</p>
    <p class="details-container-p">Nationality: ${nat}</p>
    <p class="details-container-p">Country: ${country}</p>
    <p class="details-container-p">ID: ${idValue}</p>` ,
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: "Thumbs up, great!",
    cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: "Thumbs down",
  });
}
