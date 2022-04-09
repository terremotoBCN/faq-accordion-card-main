"use strict";

// collection of articles
const faqArticles = document.getElementsByClassName("faq__article");

// add Event listener
for (let article of faqArticles) {
	// article.addEventListener("click", setActiveArticle, false);
	article.addEventListener("focus", setActiveArticle, false);
}

/* Clear & hidde all active articles */
function clearActiveArticles() {
	const elementsActives = document.getElementsByClassName(
		"faq__article--active"
	);

	for (let item of elementsActives) {
		item.classList.remove("faq__article--active");

		const itemText = item.getElementsByClassName("faq__article-answer");

		for (let item of itemText) {
			item.removeAttribute("style");
		}
	}
}

/*  Set active arcticle visible */
function setActiveArticle(event) {
	const selArticle = event.currentTarget;
	const isActive = selArticle.classList.contains("faq__article--active");

	clearActiveArticles();

	if (!isActive) {
		setActiveArticleElem(selArticle);
	}
}

/*  Set & show active article element styles */
function setActiveArticleElem(articleElem) {
	const articleAnswer = articleElem.getElementsByClassName(
		"faq__article-answer"
	);
	if (articleAnswer.length > 1)
		throw new Error("Only one answer per question, please");

	articleElem.classList.add("faq__article--active");
	articleAnswer[0].style.height = `${articleAnswer[0].scrollHeight}px`;
}
