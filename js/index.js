var dinner_meals = ["Mince Curry", "Chicken parma", "Wraps", "Thai Curry", "Bolognese", "Meatballs", "Sausages", "Shepherds pie", "Pie"]

// let random_meal = (dinner_meals) => {
//     return dinner_meals[Math.floor(Math.random()*dinner_meals.length)];
// }

// console.log(random_meal(dinner_meals))

//functions to choose meal
//Choose an entity
let chooseBtn = document.querySelector("#chooseBtn");
let section = document.querySelector("#mealSelection")
let repeatDays = document.querySelector("#repeatDays")

// function
function choose_meal() {
    console.log("clicked button")
    // value taken from user
    const n = repeatDays.value;
    //Initial empty array
    let random = [];
    //Null check
    if (n == 0) {
        console.log(null)
    }
    do {
        // Generating random number
        let meal = dinner_meals[Math.floor(Math.random()*dinner_meals.length)];
        console.log(meal)
      
        // Pushing into the array only 
        // if the array does not contain it
        if (!random.includes(meal)) {
            random.push(meal);
        }
      
    } while (random.length < n);

    // let meal = dinner_meals[Math.floor(Math.random()*dinner_meals.length)];
    // console.log(meal)
    // let li = document.createElement("li");
    // li.innerHTML = meal;
    // section.querySelector("ul").appendChild(li);
    for(let i = 0; i < random.length; i++) {
        console.log(random[i])
        let li = document.createElement("li");
        li.innerHTML = random[i];
        section.querySelector("ul").appendChild(li);
};
};

//call the event
chooseBtn.addEventListener("click", choose_meal);

//functions to display all meals in list
//choose entity
let showList = document.querySelector("#displayList");
let mealsList = document.querySelector("#mealsList");

//function
function display_list() {
    console.log("clicked link");
    alphabetical_List = dinner_meals.sort();
    for(let i = 0; i < alphabetical_List.length; i++) {
        console.log(alphabetical_List[i])
        let li = document.createElement("li");
        li.innerHTML = alphabetical_List[i];
        mealsList.querySelector("ul").appendChild(li);
    }
}

//call the event
showList.addEventListener("click", display_list);