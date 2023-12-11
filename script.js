// type object, will be used for pokemonList and caughtPokemonList
const types = {
    normal: '#ADA594',
    fire: '#F75231',
    water: '#399CFF',
    electric: '#FFC631',
    grass: '#7BCE52',
    ice: '#5ACEE7',
    fighting: '#A55239',
    poison: '#B55AA5',
    ground: '#D6B55A',
    flying: '#9CADF7',
    psychic: '#FF73A5',
    bug: '#ADBD21',
    rock: '#BDA55A',
    ghost: '#6363B5',
    dragon: '#7B63E7',
    steel: '#ADADC6',
    dark: '#735A4A',
    fairy: '#F7B5F7'
}




// --------------------------------------------------------------------------- new marker
// Variable that helps control the limit on neach new set of 20 pokemon being called.
let offset = 0

const $getMore = document.getElementById('more-btn') 

// Array of pokemon objects
const pokemonList = []
// Intializes the caughtPokemonList so it can be used further down the code and avoid undefined and/or null errors when caughtPokemonList array is called
let caughtPokemonList = JSON.parse(localStorage.getItem('caughtPokemonList')) || []

// Checks if there is a caughtPokemonList in localStorage, if there is then retreive it to be used again and avoid undefined and/or null errors when caughtPokemonList array is called

if(caughtPokemonList.length === null){
    caughtPokemonList = JSON.parse(localStorage.getItem('caughtPokemonList'))
}
else if(caughtPokemonList.length >= 0){
    console.log('EMPTY!')
}

let pokemonListUrl

function fetchPokemonOffset(offset){
    pokemonListUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=' + offset

    fetchPokemonArray()
}


/* Async function which retrives the pokemon array from the PokeAPI and builds a object from the API. Calls the two function responsible for buidling the pokemonList and caughtPokemonList. If more pokemon are called then the intial list that is built when the user first lands on the page is removed to avoid it being called everytime user wants to get more pokemon */
async function fetchPokemonArray() {
    try {
        const response = await fetch(pokemonListUrl)
        const data = await response.json()
        const index = data.results.length

        if(index > 20){
            data.results.splice(index, 20)
        }

        for (const pokemon of data.results) {

            const detailsResponse = await fetch(pokemon.url)
            const details = await detailsResponse.json()

            // console.log(details)

            if (!details.types[1]) {
                details.types[1] = details.types[0]
            }

            // "Custom" object that uses keys I set, retrives the values from the PokeAPI using custom paths
            pokemonList.push({
                "pokeIndex": details.id,
                "pokeImgSmall": details.sprites.front_default,
                "pokeImgBig": details.sprites.other['official-artwork'].front_default,
                "name": details.name,
                "typeOne": details.types[0].type.name,
                "typeTwo": details.types[1].type.name,
                "caught": "no"
            })  
        }
        // Build both pokemon lists
        buildPokemonList(pokemonList)
        caughtPokemon(caughtPokemonList)

        return pokemonList
    } catch (error) {
        console.error('Error fetching Pokémon:', error)
        return []
    }
}


// Creates the modal structure for each pokemon, uses the PokeAPI and does not use my fetchPokemonArray() function but the API directly  
function createPokemonModalContent(details) {

    if (!details.types[1]) {
        details.types[1] = details.types[0]
    }

    const firstType = details.types[0].type.name
    const secondType = details.types[1].type.name
    
    const backgroundColorOne = types[firstType.toLowerCase()]
    const backgroundColorTwo = types[secondType.toLowerCase()]

    return `
    <div id="section-pokemon-profile">
    <div class="card-profile">
        <div class="container-profile-img" style="background-color: ${backgroundColorOne};">
           <!-- <img class="profile-caught-icon" src="img/poke-ball.png" alt=""> -->
            <img src="${details.sprites.other['official-artwork'].front_default}" alt="" class="profile-img">
        </div>
        <div class="profile-content-spacing">
            <div class="container-profile-info">
                <div class="container-profile-middle">
                    <div class="container-name-index-profile-btns">
                        <div class="container-name-index">
                            <h1>${details.name}</h1>
                            <h2>${details.id}</h2>
                        </div>
                        <div class="container-profile-btn">
                            <a href="#" class="type-one" style="background-color: ${backgroundColorOne};">${firstType}</a>
                            <a href="#" class="type-two" style="background-color: ${backgroundColorTwo};">${secondType}</a>
                        </div>
                    </div>
                    <div class="container-profile-switch">
                    <!-- <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                        <p class="caught-text">Caught</p> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="profile-content-spacing">
            <div class="profile-description">
                <h3>Description</h3>
                <p>${details.name}'s weight is ${details.weight} hectograms and has a base experience of ${details.base_experience}.</p>
            </div>
        </div>
    </div>
</div>
    `
}


// -------------------------------------------------------------------------------------------------------------------

let $containerMainGrid = document.getElementById('container-main-grid')


// Async function which retrives information from the PokeAPI to be used in the modal for the pokemon's addtional details
async function fetchPokemonDetails(pokemonId){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    const details = await response.json()
    return details
} // End of fetchPokemonDetails()

/* Function which builds the Pokemon list using the createElement method */
function buildPokemonList(pokemonList) {

    $containerMainGrid.innerHTML = '';

    // console.log(pokemonList[0]['pokeImg'])
    const $modal = document.getElementById('pokemonModal')
    const $modalContent = document.getElementById('modalContent')
    const $backBtn = document.querySelector('.back-btn')

    // const $containerMainGrid = document.getElementById('container-main-grid')

    for (const pokemon of pokemonList) {
        
        const $cardTwo = document.createElement('div')
        $cardTwo.className = 'card-two'
        $cardTwo.setAttribute('id', pokemon.name.toLowerCase())

        const $cardTwoBodyUp = document.createElement('div')
        $cardTwoBodyUp.className = 'card-two-body-up'

        const $containerCardIndex = document.createElement('div')
        $containerCardIndex.className = 'container-card-index'

        const $caughtIcon = document.createElement('img')
        $caughtIcon.className = 'caught-icon'
        // $caughtIcon.src = 'img/poke-ball.png'
        // $caughtIcon.alt = 'Red and white standard pokemon ball caught icon'

        const $pokeIndex = document.createElement('h4')
        $pokeIndex.textContent = '#' + pokemon.pokeIndex

        // Adds the Pokeball icon and index number to the index container
        $containerCardIndex.appendChild($caughtIcon)
        $containerCardIndex.appendChild($pokeIndex)


        const $pokemonImg = document.createElement('img')
        $pokemonImg.className = 'pokemon-img'
        $pokemonImg.src = pokemon.pokeImgSmall
        $pokemonImg.alt = pokemon.name

        // Adds the the index container and the image of the pokemon to the upper body of the card
        $cardTwoBodyUp.appendChild($containerCardIndex)
        $cardTwoBodyUp.appendChild($pokemonImg)

        const $cardTwoBodyDown = document.createElement('div')
        $cardTwoBodyDown.className = 'card-two-body-down'

        const $cardTwoTitle = document.createElement('h5')
        $cardTwoTitle.className = 'card-two-title'
        $cardTwoTitle.textContent = pokemon.name

        const $containerCardBtn = document.createElement('div')
        $containerCardBtn.className = 'container-card-btn'

        const $typeOneBtn = document.createElement('a')
        $typeOneBtn.className = 'type-one'
        $typeOneBtn.href = '#'
        $typeOneBtn.textContent = pokemon.typeOne

        const $typeTwoBtn = document.createElement('a')
        $typeTwoBtn.className = 'type-two'
        $typeTwoBtn.href = '#'
        $typeTwoBtn.textContent = pokemon.typeTwo


        //Adds the two buttons to the button container
        $containerCardBtn.appendChild($typeOneBtn)
        $containerCardBtn.appendChild($typeTwoBtn)

        /* If statement which checks if types object has a property that matches the first and second type properties of pokemon 
        objects located in the pokemonList array and sets the background colour of the upper body of the card and the type-one 
        buttons to the property value found in the types object. The toLowerCase() function converts the string value of the
        pokemon object to lower case to find a match since the type string is displayed with different casing */
        if (types[pokemon.typeOne.toLowerCase()] || types[pokemon.typeTwo.toLowerCase()]) {
            $cardTwoBodyUp.style.backgroundColor = types[pokemon.typeOne.toLowerCase()]
            $typeOneBtn.style.backgroundColor = types[pokemon.typeOne.toLowerCase()]
            $typeTwoBtn.style.backgroundColor = types[pokemon.typeTwo.toLowerCase()]
        }


        const $containerCardSwitch = document.createElement('div')
        $containerCardSwitch.className = 'container-card-switch'

        // Adds dynamic ID to toggle switch, concatenated since dynamic is is being used for card element
        const $toggleId = pokemon.name.toLowerCase() + '-toggle'

        const $label = document.createElement('label')
        $label.className = 'switch'
        // Adds for attrbute to toggle switch using dynamic id
        $label.setAttribute('for', $toggleId)

        const $input = document.createElement('input')

        // Adds type checkbox to toggle switch, dynamic switch id is being set for switch id
        $input.setAttribute('type', 'checkbox')
        $input.setAttribute('id', $toggleId)


        const $sliderRound = document.createElement('span')
        $sliderRound.className = 'slider round'

        const $caughtText = document.createElement('p')
        $caughtText.className = 'caught-text'
        $caughtText.textContent = 'Caught'

        // Adds the the slider-switch input (button and it's slider) to the label container
        $label.appendChild($input)
        $label.appendChild($sliderRound)

        //Adds the label container and Caught text to the container-card-switch container
        $containerCardSwitch.appendChild($label)
        $containerCardSwitch.appendChild($caughtText)

        //Adds the pokemon name, button container, and slider conatiner to the bottom half section of the pokemon card
        $cardTwoBodyDown.appendChild($cardTwoTitle)
        $cardTwoBodyDown.appendChild($containerCardBtn)
        $cardTwoBodyDown.appendChild($containerCardSwitch)


        //Adds the upper section of the card and the lower section of cards to the whole card container
        $cardTwo.appendChild($cardTwoBodyUp)
        $cardTwo.appendChild($cardTwoBodyDown)

        //Adds the whole card to the container-main-grid 
        $containerMainGrid.appendChild($cardTwo)

        //Makes all the upper cards bodies clickable, only goes to one pokemon profile right now as dynamic pages is a little out of scope
        $cardTwoBodyUp.addEventListener('click', async function() {
            // Gets the details of selected Pokemon 
            const details = await fetchPokemonDetails(pokemon.pokeIndex)

            console.log('Details: ', details)

            $modalContent.innerHTML = createPokemonModalContent(details)

            $modal.style.display = 'block'

        })
    }

    //Intialized 'caught' or saved array for code down below
    // const caughtPokemonList = []

    /* For of loop that iterates over pokemonList and checks if Caught slider is in 'off' position, if checked on styles are added
    to the caught icon pokeball beside poke-index number and the pokemon object added to a new array called caughtPokemonList[]
    and if checked off style none is added */
    for (const pokemon of pokemonList) {
        //Need to add the "+ '-toggle'" becasue element when created is created as "pokemon.name.toLowerCase() + '-toggle'" above
        const $togSlider = document.getElementById(pokemon.name.toLowerCase() + '-toggle')
        /* Using String concatination to specify the target by using the dynamic id of the cards to target the caught-icon pokeball 
        for each card */
        const $caughtIcon = document.querySelector('#' + pokemon.name.toLowerCase() + ' .caught-icon')

        //Used to add the class caught-icon-none - added a 0.8rem margin to the top
        const $pokeIndex = document.querySelector('#' + pokemon.name.toLowerCase() + ' .container-card-index')

        $togSlider.addEventListener('change', function () {
           
            /* Looks at caughtPokemonList and then find out if pokemon exitsts on caught list, sets toggle to true, and if the pokemon already exists in the caughtPokemonList and you want to release or "uncatch" pokemon the pokemon will be spliced or removed from the list when clicking on the switch and then the caughtPokemon list is saved to localStorage again to store the list WITHOUT the removed pokemon */
            if (!$togSlider.checked) {

                if(caughtPokemonList.includes(pokemon)){

                    // what index is the pokemon to remove
                    let index = caughtPokemonList.indexOf(pokemon)
                
                    // remove pokemon object
                    caughtPokemonList.splice(index , 1)

                    // Saves updated list to local storage
                    localStorage.setItem('caughtPokemonList', JSON.stringify(caughtPokemonList))

                    // recall to display updated list
                    caughtPokemon(caughtPokemonList)
                }

                $caughtIcon.style.display = 'none'

                $pokeIndex.classList.add('caught-icon-none')
                //Updates caught property of pokemon to no
                pokemon.caught = 'no'

            }
            else {

                $caughtIcon.style.display = 'inline-block'
                $pokeIndex.classList.remove('caught-icon-none')
                //Updates caught property of pokemon to yes
                pokemon.caught = 'yes'
                $caughtIcon.src = 'img/poke-ball.png'

                //Pushes caught pokemon to caughtPokemonList array
                caughtPokemonList.push(pokemon)

                // Saves updated list to local storage
                localStorage.setItem('caughtPokemonList', JSON.stringify(caughtPokemonList))
                
                // Function is called that creates the html for the pokemon object in/from caughtPokemonList to be displayed
                caughtPokemon(caughtPokemonList)

                // console.log("lenght: " + caughtPokemonList.length);
                // Removes the last pushed pokemon object from caughtPokemonList array, to avoid duplication when 'catching' pokemon
                //caughtPokemonList.pop(pokemon)
                // console.log("lenght: " + caughtPokemonList.length);
            }
        }) // End of caught toggle-switch eventListener
    } // End of for...of loop

    // eventListeners which allows user to exit modal by clicking button or clicking in empty space 
    $backBtn.addEventListener('click', function(event){
        // event.target.preventDefault()
        if(event.target === $backBtn){
            $modal.style.display = 'none'
        }
    })

    window.addEventListener('click', function(event){
        if(event.target === $modal) {
            $modal.style.display = 'none'
        }
    })
} // End of buildPokemonList() function



// Function which 
async function fetchData(offset) {
    const result = await fetchPokemonOffset(offset)
    console.log(result)
}

// Calls the first 20 pokemon at loadtime
fetchData(offset)

// Calls the eventListener using the button, and adds 20 addtional pokemon to the offset variable which is called in the fetchPokemonArray() function
$getMore.addEventListener('click', function(){

    offset = offset + 20
console.log("offset: " + offset)

    fetchData(offset)
})


const $containerCaughtGrid = document.getElementById('container-caught-grid')

function caughtPokemon(caughtPokemonList) {

    $containerCaughtGrid.innerHTML = ''

    for (const pokemon of caughtPokemonList) {

        const $modal = document.getElementById('pokemonModal')
        const $modalContent = document.getElementById('modalContent')
        const $backBtn = document.querySelector('.back-btn')

        const $cardTwo = document.createElement('div')
        $cardTwo.className = 'card-two'
        // $cardTwo.setAttribute('id', pokemon.name.toLowerCase() + '-caught')

        const $cardTwoBodyUp = document.createElement('div')
        $cardTwoBodyUp.className = 'card-two-body-up'

        const $containerCardIndex = document.createElement('div')
        $containerCardIndex.className = 'container-card-index'

        const $caughtIcon = document.createElement('img')
        $caughtIcon.className = 'caught-icon'
        $caughtIcon.src = 'img/poke-ball.png'
        $caughtIcon.alt = 'Red and white standard pokemon ball caught icon'

        const $pokeIndex = document.createElement('h4')
        $pokeIndex.textContent = '#' + pokemon.pokeIndex

        // Adds the Pokeball icon and index number to the index container
        $containerCardIndex.appendChild($caughtIcon)
        $containerCardIndex.appendChild($pokeIndex)


        const $pokemonImg = document.createElement('img')
        $pokemonImg.className = 'pokemon-img'
        $pokemonImg.src = pokemon.pokeImgSmall
        $pokemonImg.alt = pokemon.name

        // Adds the the index container and the image of the pokemon to the upper body of the card
        $cardTwoBodyUp.appendChild($containerCardIndex)
        $cardTwoBodyUp.appendChild($pokemonImg)


        const $cardTwoBodyDown = document.createElement('div')
        $cardTwoBodyDown.className = 'card-two-body-down'

        const $cardTwoTitle = document.createElement('h5')
        $cardTwoTitle.className = 'card-two-title'
        $cardTwoTitle.textContent = pokemon.name

        const $containerCardBtn = document.createElement('div')
        $containerCardBtn.className = 'container-card-btn'

        const $typeOneBtn = document.createElement('a')
        $typeOneBtn.className = 'type-one'
        $typeOneBtn.href = '#'
        $typeOneBtn.textContent = pokemon.typeOne

        const $typeTwoBtn = document.createElement('a')
        $typeTwoBtn.className = 'type-two'
        $typeTwoBtn.href = '#'
        $typeTwoBtn.textContent = pokemon.typeTwo


        //Adds the two buttons to the button container
        $containerCardBtn.appendChild($typeOneBtn)
        $containerCardBtn.appendChild($typeTwoBtn)

        /* If statement which checks if types object has a property that matches the first and second type properties of pokemon 
        objects located in the pokemonList array and sets the background colour of the upper body of the card and the type-one 
        buttons to the property value found in the types object. The toLowerCase() function converts the string value of the
        pokemon object to lower case to find a match since the type string is displayed with different casing */
        if (types[pokemon.typeOne.toLowerCase()] || types[pokemon.typeTwo.toLowerCase()]) {
            $cardTwoBodyUp.style.backgroundColor = types[pokemon.typeOne.toLowerCase()]
            $typeOneBtn.style.backgroundColor = types[pokemon.typeOne.toLowerCase()]
            $typeTwoBtn.style.backgroundColor = types[pokemon.typeTwo.toLowerCase()]
        }


        const $containerCardSwitch = document.createElement('div')
        $containerCardSwitch.className = 'container-card-switch'

        // test =====================================================================
        const $toggleId = pokemon.name.toLowerCase() + '-toggle-caught'

        const $label = document.createElement('label')
        $label.className = 'switch'
        // test =====================================================================
        $label.setAttribute('for', $toggleId)

        const $input = document.createElement('input')
        // $input.type = 'checkbox'
        // test =====================================================================
        $input.setAttribute('type', 'checkbox')
        $input.setAttribute('id', $toggleId)
        $input.checked = true // Sets switch to true since pokemon is already caught


        const $sliderRound = document.createElement('span')
        $sliderRound.className = 'slider round'

        const $caughtText = document.createElement('p')
        $caughtText.className = 'caught-text'
        $caughtText.textContent = 'Caught'

        // Adds the the slider-switch input (button and it's slider) to the label container
        $label.appendChild($input)
        $label.appendChild($sliderRound)

        //Adds the label container and Caught text to the container-card-switch container
        $containerCardSwitch.appendChild($label)
        $containerCardSwitch.appendChild($caughtText)

        //Adds the pokemon name, button container, and slider conatiner to the bottom half section of the pokemon card
        $cardTwoBodyDown.appendChild($cardTwoTitle)
        $cardTwoBodyDown.appendChild($containerCardBtn)
        $cardTwoBodyDown.appendChild($containerCardSwitch)


        //Adds the upper section of the card and the lower section of cards to the whole card container
        $cardTwo.appendChild($cardTwoBodyUp)
        $cardTwo.appendChild($cardTwoBodyDown)

        //Adds the whole card to the container-main-grid 
        $containerCaughtGrid.appendChild($cardTwo)

        //Makes all the upper card bodies clickable, only goes to one pokemon profile right now as dynamic pages is a little out of scope
        $cardTwoBodyUp.addEventListener('click', async function() {
            // Gets the details of selected Pokemon 
            const details = await fetchPokemonDetails(pokemon.pokeIndex)

            console.log('Details: ', details)

            $modalContent.innerHTML = createPokemonModalContent(details)

            $modal.style.display = 'block'

        })

        const $togSlider2 = document.getElementById(pokemon.name.toLowerCase() + '-toggle-caught')
        
        $togSlider2.addEventListener('change', function () {
             if (!$togSlider2.checked) {

                console.log("unselected");
                if(caughtPokemonList.includes(pokemon)){

                    // what index is the pokemon to remove
                    let index = caughtPokemonList.indexOf(pokemon)
                
                    // remove pokemon object
                    caughtPokemonList.splice(index , 1)

                    localStorage.setItem('caughtPokemonList', JSON.stringify(caughtPokemonList))

                    // recall to display updated list
                    caughtPokemon(caughtPokemonList)
                }

                $caughtIcon.style.display = 'none'

                $pokeIndex.classList.add('caught-icon-none')
                //Updates caught property of pokemon to no
                pokemon.caught = 'no'

             }
             else {

                console.log("selected");
                $caughtIcon.style.display = 'inline-block'
                $pokeIndex.classList.remove('caught-icon-none')
                //Updates caught property of pokemon to yes
                pokemon.caught = 'yes'
                //Pushes caught pokemon to caughtPokemonList array, cannot be 'uncaught' or 'released'

                caughtPokemonList.push(pokemon)
                // Function is called that creates the html for the pokemon object in/from caughtPokemonList
                caughtPokemon(caughtPokemonList)

            }
        }) // End of caught toggle-switch eventListener
        
    } // End of caughtPokemonList for...of

    // $backBtn.addEventListener('click', function(event){
    //     // event.target.preventDefault()
    //     if(event.target === $backBtn){
    //         $modal.style.display = 'none'
    //     }
        
    // })

    // window.addEventListener('click', function(event){
    //     if(event.target === $modal) {
    //         $modal.style.display = 'none'
    //     }
    // })

} // End of caughtPokemon()



const $caughtListIcon = document.querySelector('.caught-list-icon')
console.log($caughtListIcon)

const $sectionPokemon = document.getElementById('section-pokemon')
console.log($sectionPokemon)

const $sectionCaughtPokemon = document.getElementById('section-caught-pokemon')
console.log($sectionCaughtPokemon)





function toggleCaughtList(){
    if($sectionCaughtPokemon.classList.contains('display-none')){
        $sectionCaughtPokemon.classList.remove('display-none')
        $sectionCaughtPokemon.classList.add('display-display')
        $sectionPokemon.classList.remove('display-display')
        $sectionPokemon.classList.add('display-none')
    }
    else {
        $sectionPokemon.classList.remove('display-none')
        $sectionPokemon.classList.add('display-display')
        $sectionCaughtPokemon.classList.remove('display-display')
        $sectionCaughtPokemon.classList.add('display-none')

    }
}

$caughtListIcon.addEventListener('click', toggleCaughtList)