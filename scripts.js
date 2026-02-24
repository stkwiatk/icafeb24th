/*
    ********** PART 1 **********
*/
// For this section, use JS to select the element here by its ID and add to the innerHTML a span with a class of "tan" and text inside that span that says "This is new tan text"
document.getElementById("firstPara").innerHTML += '<span class="tan">This is new tan text</span>';
/*
    ********** PART 2 **********
*/
// For this section, select all of these images and change their width from its current setting to 250 pixels
let images = document.getElementsByTagName("img");
console.log(images);
for (let img of images) {
    img.width = "250";
}

/*
    ********** PART 3 **********
*/
// For the elements below, there are two class names. You will need to select the groups of elements separately, and for the elements with the class "med-blue", add inline styles to change the text color to #3C5E73. For the elements with the class "light-blue" change the text color to #7C9EA6. You can access the inline styles for an element with the dot operator (.) and the attribute name "style" followed by another dot and the style you want to set (in this case, element.style.color).
let ltBlueSpans = document.getElementsByClassName("light-blue");
let medBlueSpans = document.getElementsByClassName("med-blue");

for (let span of ltBlueSpans) {
    span.style.color = "#7C9EA6";
}

for (let span of medBlueSpans) {
    span.style.color = "#3C5E73";
}

/*
    ********** PART 4 **********
*/
// Let's select some SVG icons by a CSS selector and change the stroke color on these. For fun, let's create an array of the colors used in our document (find these in the root of the CSS document), and as we iterate through our icons, let's change each one to one of the colors in that array of colors from the document.
let colors = ["#283040", "#3C5E73", "#7C9EA6", "#D9BCA3", "#F2DCC9"];

let svgs = document.querySelectorAll("#svgs svg");

for (let i = 0; i < colors.length; i++) {
    svgs[i].style.stroke = colors[i];
}

/*
    ********** PART 5 **********
*/
// In this section, select the first of the spans with the class "bold" and change the text color to the light blue color from our CSS (#7C9EA6)

document.querySelector(".bold").style.color = "#7C9EA6";

/*
    ********** PART 6 **********
*/
// For the first list item below, replace the text with some that says "this is new list item text." For the third list item below, add your name to the existing text, but wrap it in some strong tags.

// returns a collection/array of all of the list items in the list with the class of content_list
let listItems = document.querySelectorAll(".content_list li");

// access just the first list item and replace the current text with "This is new list item text"
listItems[0].innerHTML = "This is new list item text";

// access the third list item and add your name in strong tags to the text that is already there (include a space so it displays correctly)
listItems[2].innerHTML += " <strong>Sammie Kwiatkowski</strong>";

/*
    ********** PART 7 **********
*/
// If you inspect the HTML or view the file, you can see that there is a link below that has the hidden attribute on it. Use JavaScript to remove that attribute so that you can see that element display on the page.
// access the link inside of the section with an ID of remove and remove the hidden attribute so it is visible on the page
document.querySelector("#remove a").removeAttribute("hidden");
