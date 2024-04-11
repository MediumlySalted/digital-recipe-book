
let run = true
let i = 1
function createRecipe() {
    if (run) {
        const mainContainer = document.getElementById('mainContainer')
        const nameEl = document.createElement('div')
        nameEl.setAttribute('class', 'container')
        nameEl.setAttribute('id', `recipe${i}`)
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


    // Creating recipe element
    const recipeTemplate = `
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

    let recipeEl = document.getElementById(`recipe${i}`)
    recipeEl.innerHTML = recipeTemplate

    i += 1
    run = true
}

function deleteRecipe(recipeId) {
    const recipeEl = document.getElementById(recipeId)
    recipeEl.remove()
}