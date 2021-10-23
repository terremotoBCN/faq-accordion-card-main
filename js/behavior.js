'use strict'

const faqArticles = document.getElementsByClassName("faq__article");


for (var a = 0; a < faqArticles.length; a++) {

    faqArticles[a].addEventListener("click", setActive, false);

}


async function clearActives() {
    const elementsActives = document.getElementsByClassName("active");

    for (let item of elementsActives) {

        item.classList.remove("active");
        // console.log(`remove active options from ${item.id} element`);

        const itemText = item.getElementsByTagName("p");
        // console.log(`elementos encontrados ${itemText.length}`);
        for (let item of itemText) {
            item.removeAttribute("style");

        }

    }


}


function setActive(event) {
    const selArticle = event.currentTarget;

    const textArticle = selArticle.getElementsByClassName("faq__article-text");
    // const textArticle2 = event.currentTarget.getElementsByClassName("faq__article-text");

    const isActive = selArticle.classList.contains("active");

    clearActives();

    if (!isActive) {
        selArticle.classList.add("active");
        textArticle[0].style.height = `${textArticle[0].scrollHeight}px`;
    }
}