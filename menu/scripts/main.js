
let menu = document.getElementById("dishes");

// loads all the dishes upon the pages initial load

const loadAllDishes = () => {

    menu.innerHTML = "";
    let allDishesTitle = `
                        <legend class="dish-legend">All Dishes</legend>
                        `;

    menu.insertAdjacentHTML("afterbegin", allDishesTitle);
                        
    for (i = 0; i < dishes.length; i++) {

        let dish = dishes[i];
        let menuItem = 
            `
            <div class="dish-container">
                <img class="dish-image" src="${dish.imageURL}" />
                <div class="dish-info">
                    <div class="dish-header">
                        <h2 class="dish-title">${dish.title}</h2>
                        <p class="dish-price">$${dish.price}</p>
                    </div>
                    <p class="dish-description">${dish.description}</p>
                    <p class="dish-type">${dish.course} id# ${dish.id}</p>
                </div>
            </div>
            <hr>
            `;
    
        menu.insertAdjacentHTML('beforeend', menuItem);
    }
}


let allDishes = document.getElementById('all-dishes');
// displays all dishes

allDishes.addEventListener('click', function() {
    loadAllDishes();
});


let entrees = document.getElementById('entrees');

// displays only the entrees

entrees.addEventListener('click', function() {

    menu.innerHTML = "";

    let entreesTitle = 
            `
            <legend class="dish-legend">Entrees</legend>
            `;

    menu.insertAdjacentHTML("afterbegin", entreesTitle);
    
    
    let entree = "Entrees";

    for (i = 0; i < dishes.length; i++) {
        
        let dish = dishes[i];

            if (dish.course === entree) {

                let menuItem = 
                        `
                        <div class="dish-container">
                            <img class="dish-image" src="${dish.imageURL}" />
                            <div class="dish-info">
                                <div class="dish-header">
                                    <h2 class="dish-title">${dish.title}</h2>
                                    <p class="dish-price">$${dish.price}</p>
                                </div>
                                <p class="dish-description">${dish.description}</p>
                                <p class="dish-type">${dish.course} id# ${dish.id}</p>
                            </div>
                        </div>
                        <hr>
                        `;
        
            menu.insertAdjacentHTML('beforeend', menuItem);
        }
    }
});

let desserts = document.getElementById('desserts');

// displays only the desserts 

desserts.addEventListener('click', function() {

    menu.innerHTML = "";

    let dessertsTitle = 
            `
            <legend class="dish-legend">Desserts</legend>
            `;

    menu.insertAdjacentHTML("afterbegin", dessertsTitle);
    
    
    let dessert = "Desserts";

    for (i = 0; i < dishes.length; i++) {
        
        let dish = dishes[i];

            if (dish.course === dessert) {

                let menuItem = 
                        `
                        <div class="dish-container">
                            <img class="dish-image" src="${dish.imageURL}" />
                            <div class="dish-info">
                                <div class="dish-header">
                                    <h2 class="dish-title">${dish.title}</h2>
                                    <p class="dish-price">$${dish.price}</p>
                                </div>
                                <p class="dish-description">${dish.description}</p>
                                <p class="dish-type">${dish.course} id# ${dish.id}</p>
                            </div>
                        </div>
                        <hr>
                        `;
        
            menu.insertAdjacentHTML('beforeend', menuItem);
        }
    }
});

let starters = document.getElementById('starters');

// displays only starts

starters.addEventListener('click', function() {

    menu.innerHTML = "";

    let startersTitle = 
            `
            <legend class="dish-legend">Starters</legend>
            `;

    menu.insertAdjacentHTML("afterbegin", startersTitle);
    
    
    let starter = "Starters";

    for (i = 0; i < dishes.length; i++) {
        
        let dish = dishes[i];

            if (dish.course === starter) {

                let menuItem = 
                        `
                        <div class="dish-container">
                            <img class="dish-image" src="${dish.imageURL}" />
                            <div class="dish-info">
                                <div class="dish-header">
                                    <h2 class="dish-title">${dish.title}</h2>
                                    <p class="dish-price">$${dish.price}</p>
                                </div>
                                <p class="dish-description">${dish.description}</p>
                                <p class="dish-type">${dish.course} id# ${dish.id}</p>
                            </div>
                        </div>
                        <hr>
                        `;
        
            menu.insertAdjacentHTML('beforeend', menuItem);
        }
    }
});


















    window.onload = loadAllDishes();
