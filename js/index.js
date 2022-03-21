var dinner_meals = ["Mince Curry", "Chicken parma", "Wraps", "Thai Curry", "Bolognese", "Meatballs", "Sausages", "Shepherds pie", "Pie"]

// let random_meal = (dinner_meals) => {
//     return dinner_meals[Math.floor(Math.random()*dinner_meals.length)];
// }

// console.log(random_meal(dinner_meals))

//Choose an entity
let chooseBtn = document.querySelector("#chooseBtn");
let section = document.querySelector("#mealSelection")

// function
function show_meal() {
    console.log("clicked button")
    let meal = dinner_meals[Math.floor(Math.random()*dinner_meals.length)];
    console.log(meal)
    let li = document.createElement("li");
    li.innerHTML = meal;
    section.querySelector("ul").appendChild(li);
}

//call the event
chooseBtn.addEventListener("click", show_meal)