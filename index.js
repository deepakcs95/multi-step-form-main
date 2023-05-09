const pageSelect = document.querySelectorAll(".select-page");

//pages
firstPage = document.querySelector(".form-div");
secondPage = document.querySelector(".plans-div");
thirdPage = document.querySelector(".add-ons");
fourthPage = document.querySelector(".fourth-page");
finalPage = document.querySelector(".final-page");
title = document.querySelector("#heading");
descr = document.querySelector("#description");
nextButton = document.querySelector("#submit");
prevButton = document.querySelector("#goback");

//page constants

firstTitle = "Personal info";
firstPara = "Please provide your name, email address, and phone number.";

secndTitle = "Select Your Plan";
secndPara = "You have the option of monthly or yearly billing.";

thirdTitle = "Pick add-ons";
thirdPara = "Add-ons help enhance your gaming experience.";

fourthTitle = "Fininshing Up";
fourthPara = "Double-check everything looks OK before confirming";

const pages = ["1", "2", "3", "4"];

var currentPage = 1;

pageSelect.forEach((page) => {
  page.addEventListener("click", () => {
    hideAllpages();

    showPage(page.innerText);

    // firstPage.setAttribute("style", "display: none;");
    // secondPage.setAttribute("style", "display: grid;");
    // thirdPage.setAttribute("style", "display: block;");
    // fourthPage.setAttribute("style", "display: block;");
    // finalPage.setAttribute("style", "display: flex;");
  });
});

nextButton.addEventListener("click", () => {
  currentPage = ++currentPage;

  if (currentPage == 4) {
    nextButton.innerText = "Submit";
  } else if (currentPage === 5) {
    showPage("5");
    return;
  } else nextButton.innerText = "Next";
  console.log(currentPage);
  hideAllpages();

  showPage(currentPage.toString());
});

prevButton.addEventListener("click", (e) => {
  event.preventDefault();
  if (currentPage === 5) {
    nextButton.innerText = "Submit";
    return;
  } else nextButton.innerText = "Next";

  console.log(currentPage);
  if (currentPage <= 1) {
    currentPage = 1;
    return;
  } else currentPage = --currentPage;
  hideAllpages();

  showPage(currentPage.toString());
});

function showPage(params) {
  title.setAttribute("style", "display: block;");
  descr.setAttribute("style", "display: block;");
  nextButton.setAttribute("style", "display: block;");
  prevButton.setAttribute("style", "display: block;");
  switch (params) {
    case "1":
      console.log(params);
      firstPageAttribute();
      break;
    case "2":
      secondPageAttribute();
      break;
    case "3":
      thirdPageAttribute();
      break;
    case "4":
      fourthPageAttribute();
      //   fifthPageAttribute();

      break;
    case "5":
      fifthPageAttribute();
      break;

    default:
      break;
  }
  currentPage = params;
}

function firstPageAttribute() {
  firstPage.setAttribute("style", "display: block;");
  title.innerText = firstTitle;
  descr.innerText = firstPara;
  // prevButton.();
}
function secondPageAttribute() {
  secondPage.setAttribute("style", "display: grid;");
  title.innerText = secndTitle;
  descr.innerText = secndPara;
}

function thirdPageAttribute() {
  thirdPage.setAttribute("style", "display: block;");
  title.innerText = thirdTitle;
  descr.innerText = thirdPara;
}
function fourthPageAttribute() {
  fourthPage.setAttribute("style", "display: block;");
  title.innerText = fourthTitle;
  descr.innerText = fourthPara;
}

function fifthPageAttribute() {
  hideAllpages();
  title.setAttribute("style", "display: none;");
  descr.setAttribute("style", "display: none;");

  finalPage.setAttribute("style", "display: flex;");
  nextButton.setAttribute("style", "display: none;");
  prevButton.setAttribute("style", "display: none;");
}

function hideAllpages() {
  firstPage.setAttribute("style", "display: none;");
  secondPage.setAttribute("style", "display: none;");
  thirdPage.setAttribute("style", "display: none;");
  fourthPage.setAttribute("style", "display: none;");
  finalPage.setAttribute("style", "display: none;");
}

function setTitle(title, para) {
  title.innerText = title;
  descr.innerText = para;
}
