'use strict'

const faqArticles = document.getElementsByClassName("faq__article");

// console.log(faqArticles);

function clearActives() {

    for (const element of faqArticles) {
        element.classList.remove("active");
    }

}


function setActive (event) {
    const selArticle = event.currentTarget;
    let isActive = selArticle.classList.contains("active");
    clearActives();
    // console.log(isActive);
    if (isActive) {
        selArticle.classList.remove("active");
    } else {
        selArticle.classList.add("active");
    }

}

for (var a = 0; a < faqArticles.length; a++) {

    faqArticles[a].addEventListener("click", setActive, false);

}