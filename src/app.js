import "./style.css";
import image from "./img/rest-img.jpg";
const content = document.querySelector("#content");
//setting home conten t
const restName = document.createElement("h1");
restName.textContent = "Kamakhya Grand";
content.appendChild(restName);
const description = document.createElement("div");
description.classList.add("description");
const imgDiv = document.createElement("div");
imgDiv.classList.add("rest-photo");
const restPhoto = document.createElement("img");
restPhoto.src = image;
imgDiv.appendChild(restPhoto);
description.appendChild(imgDiv);
const para1 = document.createElement("p");
para1.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel earum aliquam soluta non saepe voluptas ex, ut odio amet vero maiores? Blanditiis, laboriosam nihil vero fugiat exercitationem dicta eligendi adipisci quasi eaque amet nobis quaerat, provident nemo, a repellendus. Nesciunt, ad officiis necessitatibus nobis ratione distinctio eaque voluptate inventore provident.";
const para2 = document.createElement("p");
para2.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel earum aliquam soluta non saepe voluptas ex, ut odio amet vero maiores? Blanditiis, laboriosam nihil vero fugiat exercitationem dicta eligendi adipisci quasi eaque amet nobis quaerat, provident nemo, a repellendus. Nesciunt, ad officiis necessitatibus nobis ratione distinctio eaque voluptate inventore provident.";
description.appendChild(para1);
description.appendChild(para2);
content.appendChild(description);
//tabs
const tabs = document.querySelectorAll("[data-target]");
const contents = document.querySelectorAll("[data-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const target = document.querySelector(
      `[data-content=${e.target.dataset.target}]`
    );
    contents.forEach((content) => content.classList.remove("active"));
    target.classList.add("active");
  });
});
