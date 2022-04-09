# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

![FAQ accordion component](./screenshots/01%20Screenshot%202022-04-05%20-%20Frontend%20Mentor%20FAQ%20Accordion%20Card.png)

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

---

## Overview

### The challenge

Users should be able to:

-   ✔️ View the optimal layout for the component depending on their device's screen size
-   ✔️ See hover states for all interactive elements on the page
-   ✔️ Hide/Show the answer to a question when the question is clicked

#### ➕ Dynamic element animation

In plus, I add a [small animation in the box illustration](https://terremotobcn.github.io/faq-accordion-card-main/) to add more dynamism.

### Screenshot

#### 📱 Mobile

<img width="280" src="./screenshots/02 Screenshot 2022-04-05 - Frontend Mentor FAQ Accordion Card.png"/>

#### 💻 Desktop

![Screenshot](./screenshots/03%20Screenshot%202022-04-05%20-%20Frontend%20Mentor%20FAQ%20Accordion%20Card.png)

### Links

-   Solution URL: [GitHub Repository](https://github.com/terremotoBCN/faq-accordion-card-main)
-   Live Site URL: [GitHub Pages](https://terremotobcn.github.io/faq-accordion-card-main/)

---

## My process

### Built with

-   Mobile-first workflow
-   Semantic HTML5 markup
-   CSS3 custom properties
-   Flexbox Layouts
-   Powered by Sass/SCSS
-   BEMIT Arquitecture
    -   ITCSS
    -   BEM

### What I learned

<!-- Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge. -->

#### Breaking Change: CSS Variable Syntax

I use Sass variables in conjunction with CSS variables to work with the best of both worlds.

To provide maximum compatibility with plain CSS, more recent versions of Sass require [_SassScript expressions_](https://sass-lang.com/documentation/syntax/structure#expressions) in _custom property values_ to be written within [interpolation](https://sass-lang.com/documentation/interpolation). Interpolation will also work for older Sass versions, and so is recommended for all stylesheets.

Read more about [Breaking Change: CSS Variable Syntax](https://sass-lang.com/documentation/breaking-changes/css-vars)

```css
/* SCSS Variables*/
@use "sass:meta";

/* Font-family */
$font-family: "Kumbh Sans", sans-serif;

/*	Colors	*/
$dark-blue: hsl(238, 29%, 16%);
$soft-red: hsl(14, 88%, 65%);
$soft-violet: hsl(273, 75%, 66%);
$soft-blue: hsl(240, 73%, 65%);

/* CSS Custom properties */
:root {
	/* Font-family */
	--font-family: #{$font-family};

	/* Colors */
	--dark-blue: #{$dark-blue};
	--soft-red: #{$soft-red};
	--soft-violet: #{$soft-violet};
	--soft-blue: #{$soft-blue};
}
```

#### JS - Elemet.scrollHeight

With this attribute, [`Elemet.scrollHeight`](https://developer.mozilla.org/es/docs/Web/API/Element/scrollHeight) we achieve the animation to expand and collapse the FAQ answers.

```js
// ./js/behaviour.js
53. articleAnswer[0].style.height = `${articleAnswer[0].scrollHeight}px`;
```

#### HTML - FAQ element component _(WIP)_

This is the skeleton for creating a component for the new FAQ articles:

```html
<article id="article__01" class="faq__article" tabindex="1" accesskey="1">
	<h2 class="faq__article-title">How many team members can I invite?</h2>
	<div class="faq__article-answer">
		<p>
			You can invite up to 2 additional users on the Free plan. There is
			no limit on team members for the Premium plan.
		</p>
	</div>
</article>
```

---

### Continued development

The next step is to convert this FAQ accordion into a web component with the help of [LIT](https://lit.dev), a simple library for building fast, lightweight web components.

### Useful resources

-   [Sass](https://sass-lang.com/documentation) - A stylesheet language that’s
    compiled to CSS

<!-- -   [minireset.css](https://jgthms.com/minireset.css/) - A tiny modern CSS reset -->

-   [ITCSS](https://speakerdeck.com/dafed/managing-css-projects-with-itcss?slide=5) -
    Managing CSS Projects with ITCSS

-   [BEM](http://getbem.com/) - Block Element Modifier is a methodology that
    helps you to create reusable components and code sharing in front-end
    development.

-   [LIT element](https://lit.dev/) - Simple & Fast Web Components.

-   [Responsive Accordion](https://youtu.be/-ZblPRBjJJw) - Video to inspire a Responsive Accordion Ui Design Using HTML CSS & JavaScript. - _THX 2 [ Bedimcode ](https://www.youtube.com/watch?v=-ZblPRBjJJw)_

---

## Author

-   Frontend Mentor -
    [@terremotoBCN](https://www.frontendmentor.io/profile/terremotoBCN)
-   Github - [@terremotoBCN](https://github.com/terremotoBCN)
-   Twitter - [@terremotoBCN](https://www.twitter.com/terremotoBCN)
-   WordPress - [@terremotobcn](https://terremotobcn.wordpress.com/)
-   Tumblr - [@terremotobcn](https://terremotobcn.tumblr.com/)

## Acknowledgments

Many thanks to [Frontend Mentor](https://www.frontendmentor.io) and its
fantastic community that allows us to grow and improve as Frontend developers.
