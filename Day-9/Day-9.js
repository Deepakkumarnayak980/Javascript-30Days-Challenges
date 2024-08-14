// ========= Activity-1 ========== //
// --------> task-1 <------------

const title =document.getElementById("title");
title.innerHTML = "day-9 task"

// --------> task-2 <------------

const bgColors = document.querySelector(".navbar");
bgColors.style.backgroundColor = "aqua";
//bgColors.style.color="red"

// ========= Activity-2 ========== //
// --------> task-3 <------------

const pare =document.createElement("p")
pare.innerHTML = "these are total 10 tasks for day-9";
document.body.appendChild(pare);

// --------> task-4 <------------
const li = document.createElement("li");
li.innerHTML = "Help";
document.querySelector(".navbar").appendChild(li);
li.style.color = "red";


// ============ Activity 3: Removing Elements ============ //

// --> task - 5 <--

const removedElement =document.querySelector("#removedElement")
removedElement.remove();

// --> task - 6 <--

const navbar=document.querySelector('.navbar');
navbar.removeChild(navbar.lastChild)


// ============ Activity 4:Modifying Attributes and Classes ============ //

// --> task - 7 <--

const jsImage =document.querySelector(".jsImage")
jsImage.setAttribute('src', './pizza.png');


// --> task - 8 <--

const hide = document.querySelector(".hide");
hide.addEventListener("click", function () {
    jsImage.classList.toggle("toggleImage");
})

// ============ Activity 5: Event Handling ============ //

// --> task - 9 <--

const btn =document.querySelector(".btn");
const change =document.querySelector('.change');
btn.addEventListener('click', function () {
    change.innerHTML = "this is changed texts after, clicking the button.";
});

//// --> task - 10 <--

const hoverMe = document.querySelector(".hoverMe");
hoverMe.addEventListener("mouseover", function () {
    hoverMe.style.borderColor = "blue";
})
hoverMe.addEventListener("mouseout", function () {
    hoverMe.style.borderColor = "red";
})