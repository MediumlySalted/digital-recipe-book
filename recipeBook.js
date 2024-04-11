
let recipes = [
    {
        "name": "Basic Potion of Invisibility",
        "ingredients": [
            'Heart of a Horned lizard/ 1',
            'Rag Weed Roots (cleaned) / 4',
            'Purified Holy water / 2 cups',
            'Salt / 1oz',
            'Crows Feather / 1',
        ],
        "instructions": [
            'In a cauldron, bring the holy water to a ripping boil in cauldron, but be cautious this will release some lost souls.',
            'Drop in one crows feather and stir vigorously.',
            'Mash together the clean rag weed roots and salt to make a paste, then add it to the cauldron.',
            'Add in a whole lizard heart to the concoction, no need to stir just put a lid on.',
            'Let simmer and reduce to half',
            'Finally wait for it to cool, then bottle it',
        ]
    },
    {
        "name": "Veggie Pasta",
        "ingredients": [
            'Penne Pasta / 16oz',
            'Heavy Whipping Cream / 2c',
            'Butter / 1/2c',
            'Cream Cheese / 4oz',
            'Parmesan Cheese / 8oz',
            'White Mushrooms Sliced / 8oz',
            'Cherry Tomatoes / 10oz',
            'Baby Spinach / 5oz',
            'Red Pepper Flakes',
            'Cayenne Pepper',
            'Garlic Powder',
            'Onion Powder',
            'Italian Seasoning',
            'Black Pepper'
        ],
        "instructions": [
            'Begin boiling the pasta, make sure to salt the water.',
            'Begin sauteing the mushrooms a saucepan with olive oil & seasonings as preferred',
            'Cut the cherry tomatoes in half and add to the pan. Cook the vegetables both are wilted',
            'Once wilted, add the heavy whipping cream, butter, and cream cheese. Note: save some heavy cream for reheating leftovers, and save some parmesan for garnishing',
            'As it melts, this would be a good time to throw some texas toast in the oven',
            'Once the sauce is homogenous, add extra seasonings if needed and start adding the baby spinach slowly while stirring it in',
            'Assuming the pasta is done cooking by now, add it all together and plate',
            'Garnish with leftover parmesan cheese and cayenne pepper'
        ]
    },
    {
        "name": "Marinara Sauce",
        "ingredients": [
            'Olive Oil / 1/4c',
            'Garlic / 3 cloves',
            'Yellow Onion / 1/2',
            'Crushed Canned Tomatoes / 28oz',
            'Basil leaves',
            'Italian Seasoning',
            'Red Pepper Flakes',
            'Black Pepper'
        ],
        "instructions": [
            'Mince the 1/2 of the onion and start sauteing it in the pot with preferred seasonings',
            'Once they start to turn translucent, add the minced garlic',
            'Lower the heat and add the crushed tomatoes',
            'Salt to taste and add fresh juliened basil'
        ]
    },
    {
        "name": "White Balsamic Vinegarette",
        "ingredients": [
            'White Balsamic Vinegar / 1/3c',
            'Virgin Olive Oil / 1/2c',
            'Honey / 2tbsp',
            'Dijon Mustard / 1tsp',
            'Italian Seasoning / 1/2tsp',
            'Garlic Powder / 1/4tsp',
            'Black Pepper',
        ],
        "instructions": [
            'Mix that hoe in an immersion blender',
        ]
    },
]


// Unique recipe id number. Increases as more are created
let i = 1

// Adds recipes from the list to the html
recipes.forEach( function(recipe) {
    const mainContainer = document.getElementById('mainContainer')
    const recipeEl = document.createElement('div')
    recipeEl.setAttribute('class', 'container')
    recipeEl.setAttribute('id', `recipe${i}`)
    mainContainer.append(recipeEl)

    ingredientsList = recipe["ingredients"]
    instructionsList = recipe["instructions"]

    let ingredientEls = ''
    ingredientsList.forEach( function (x) {
        ingredientEls += `<li>${x}</li>\n`
    })
    
    let instructionEls = ''
    instructionsList.forEach( function (x) {
        instructionEls += `<li>${x}</li>\n`
    })

    recipeEl.innerHTML = generateRecipeElement(i, recipe["name"], instructionEls, ingredientEls)
    i += 1
})


let run = true
function createRecipe() {
    if (run) {
        // Gets elements and adds attributes
        const mainContainer = document.getElementById('mainContainer')
        const nameEl = document.createElement('div')
        nameEl.setAttribute('class', 'container')
        nameEl.setAttribute('id', `recipe${i}`)

        // Places the form/recipe element in the html
        mainContainer.prepend(nameEl)
        nameEl.innerHTML = `
            <form onsubmit="return false;">
            <p class="form">Name: <input type="text" id="name"></p>
            <p class="form">Ingredients ("name / value unit"): <textarea id="ingredients"></textarea></p>
            <p class="form">Instructions: <textarea id="instructions"></textarea></p>
            <button onclick="addRecipe()">Done</button>
            </form>`
        run = false
    }

}

function addRecipe() {
    // Inputs from form
    const nameInput = document.getElementById('name').value
    const ingredientsInput = document.getElementById('ingredients').value
    const instructionsInput = document.getElementById('instructions').value

    // Processing and creating list elements
    const ingredientsInputList = ingredientsInput.split('\n')
    const instructionsInputList = instructionsInput.split('\n')
    
    let ingredientEls = ''
    ingredientsInputList.forEach( function (x) {
        ingredientEls += `<li>${x}</li>\n`
    })
    
    let instructionEls = ''
    instructionsInputList.forEach( function (x) {
        instructionEls += `<li>${x}</li>\n`
    })


    // Changing form element to a recipe element
    let recipeEl = document.getElementById(`recipe${i}`)
    recipeEl.innerHTML = generateRecipeElement(i, nameInput, instructionEls, ingredientEls)

    i += 1
    run = true
}

function generateRecipeElement(i, nameInput, instructionEls, ingredientEls) {
    return `
    <button class="btn" onclick="deleteRecipe('recipe${i}')"><i class="fa fa-close"></i></button>
    <h1>${nameInput}</h1>
    <hr>
    <div class="recipe">
        <div class="instructions">
            <h2>Instructions</h2>
            <ol>
                ${instructionEls}
            </ol>
        </div>
        <div class="ingredients">
            <h2>Ingredients</h2>
            <ul>
                ${ingredientEls}
            </ul>
        </div>
    </div>
    `
}

function deleteRecipe(recipeId) {
    const recipeEl = document.getElementById(recipeId)
    recipeEl.remove()
}