const designButton = document.getElementsByClassName("nav-link")[1];
const plantsButton = document.getElementsByClassName("nav-link")[2];
const contactButton = document.getElementsByClassName("nav-link")[3];
const indoorPlantsButton = document.getElementById("promotion-link");
const portfolioLink = document.getElementsByTagName("a")[5];

designButton.onclick = () => {
  alert("Design page coming soon");
};

plantsButton.onclick = () => {
  alert("Plants page coming soon");
};

contactButton.onclick = () => {
  alert("Contact page coming soon");
};

indoorPlantsButton.onclick = () => {
  alert("Indoor plants are now sold out!");
};

portfolioLink.onclick = () => {
  alert("Portfolio page coming soon!");
};
