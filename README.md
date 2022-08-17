# Landing Page Project

## Table of Contents

* Making dynamic navbar based on number of sections 
* After clicking in navbar links, will scroll to section that related to it
* Adding smooth scrolling.
* Add responsive design toi navbar 

## Description

* Making dynamic navbar links depends on how many sections exist in the page so we can get all sections by using `getElementsByTagName()` and pass to it "section" word after that, i added Li HTML element to unordered list of navbar also i added link tag to list item tag before that with id equal to className of section so when clicking on links,scrolling begin.
* By using `scroll()` function going to specific section by offset of section 
* Adding some properties in design or changing attributes of HTML elements like making head of each section have the same of color of navbar link.
* I used some built-in functions of JS like `add()` and `remove()` to making some operations of classList and also check if class exist or not by using `contains()` function.
* In adding responsive design to navbar, i wrote some CSS code for screen with max-size equal to 850 as a max value of width, also, i added some of code in JS to change color of navbar icon and change display value of an element.

To go deep of understanding, open `js/app.js` and start reading my code with comments in each block.
