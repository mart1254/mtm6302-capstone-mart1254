
// type object, will be used for pokemonList and caughtPokemonList
const types = {
    normal: '#ADA594',
    fire: '#F75231',
    water: '#399CFF',
    electric: '#FFC631',
    grass: '#7BCE52',
    ice: '#5ACEE7',
    fight: '#A55239',
    poison: '#B55AA5',
    ground: '#D6B55A',
    flying: '#9CADF7',
    psychc: '#FF73A5',
    bug: '#ADBD21',
    rock: '#BDA55A',
    ghost: '#6363B5',
    dragon: '#7B63E7',
    steel: '#ADADC6',
    dark: '#735A4A',
    fairy: '#F7B5F7'
}

// Array of pokemon objects
const pokemonList = [
    {
        "pokeIndex": "0001",
        "pokeImgSmall": "/img/pokemon-dex-1.png",
        "pokeImgBig": "/img/pokemon-dex-1-1.png",
        "name": "Bulbasaur",
        "typeOne": "Grass",
        "typeTwo": "Poison",
        "caught": "no"
    },
    {
        "pokeIndex": "0002",
        "pokeImgSmall": "/img/pokemon-dex-100.png",
        "pokeImgBig": "/img/pokemon-dex-100-1.png",
        "name": "Voltorb",
        "typeOne": "Electric",
        "typeTwo": "Electric",
        "caught": "no"
    },
    {
        "pokeIndex": "0003",
        "pokeImgSmall": "/img/pokemon-dex-15.png",
        "pokeImgBig": "/img/pokemon-dex-15-1.png",
        "name": "Beedril",
        "typeOne": "Bug",
        "typeTwo": "Poison",
        "caught": "no"
    },
    {
        "pokeIndex": "0017",
        "pokeImgSmall": "/img/pokemon-dex-11.png",
        "pokeImgBig": "/img/pokemon-dex-11-1.png",
        "name": "Metapod",
        "typeOne": "Bug",
        "typeTwo": "Bug",
        "caught": "no"
    },
    {
        "pokeIndex": "0019",
        "pokeImgSmall": "/img/pokemon-dex-16.png",
        "pokeImgBig": "/img/pokemon-dex-16-1.png",
        "name": "Pidgey",
        "typeOne": "Normal",
        "typeTwo": "Flying",
        "caught": "no"
    },
    {
        "pokeIndex": "0023",
        "pokeImgSmall": "/img/pokemon-dex-109.png",
        "pokeImgBig": "/img/pokemon-dex-109-1.png",
        "name": "Koffing",
        "typeOne": "Poison",
        "typeTwo": "Poison",
        "caught": "no"
    },
    {
        "pokeIndex": "0025",
        "pokeImgSmall": "/img/pokemon-dex-13.png",
        "pokeImgBig": "/img/pokemon-dex-13-1.png",
        "name": "Weedle",
        "typeOne": "Bug",
        "typeTwo": "Poison",
        "caught": "no"
    },
    {
        "pokeIndex": "0033",
        "pokeImgSmall": "/img/pokemon-dex-111.png",
        "pokeImgBig": "/img/pokemon-dex-111-1.png",
        "name": "Rhyhorn",
        "typeOne": "Ground",
        "typeTwo": "Rock",
        "caught": "no"
    },
    {
        "pokeIndex": "0038",
        "pokeImgSmall": "/img/pokemon-dex-130.png",
        "pokeImgBig": "/img/pokemon-dex-130-1.png",
        "name": "Gyarados",
        "typeOne": "Water",
        "typeTwo": "Flying",
        "caught": "no"
    },
    {
        "pokeIndex": "0041",
        "pokeImgSmall": "/img/pokemon-dex-128.png",
        "pokeImgBig": "/img/pokemon-dex-128-1.png",
        "name": "Tauros",
        "typeOne": "Normal",
        "typeTwo": "Normal",
        "caught": "no"
    },
    {
        "pokeIndex": "0044",
        "pokeImgSmall": "/img/pokemon-dex-114.png",
        "pokeImgBig": "/img/pokemon-dex-114-1.png",
        "name": "Tangela",
        "typeOne": "Grass",
        "typeTwo": "Grass",
        "caught": "no"
    },
    {
        "pokeIndex": "0049",
        "pokeImgSmall": "/img/pokemon-dex-146.png",
        "pokeImgBig": "/img/pokemon-dex-146-1.png",
        "name": "Moltres",
        "typeOne": "Fire",
        "typeTwo": "Flying",
        "caught": "no"
    },
    {
        "pokeIndex": "0050",
        "pokeImgSmall": "/img/pokemon-dex-144.png",
        "pokeImgBig": "/img/pokemon-dex-144-1.png",
        "name": "Articuno",
        "typeOne": "Ice",
        "typeTwo": "Flying",
        "caught": "no"
    },
    {
        "pokeIndex": "0053",
        "pokeImgSmall": "/img/pokemon-dex-129.png",
        "pokeImgBig": "/img/pokemon-dex-129-1.png",
        "name": "Magikarp",
        "typeOne": "Water",
        "typeTwo": "Water",
        "caught": "no"
    },
    {
        "pokeIndex": "0055",
        "pokeImgSmall": "/img/pokemon-dex-152.png",
        "pokeImgBig": "/img/pokemon-dex-152-1.png",
        "name": "Chikorita",
        "typeOne": "Grass",
        "typeTwo": "Grass",
        "caught": "no"
    },
    {
        "pokeIndex": "0067",
        "pokeImgSmall": "/img/pokemon-dex-131.png",
        "pokeImgBig": "/img/pokemon-dex-131-1.png",
        "name": "Lapras",
        "typeOne": "Water",
        "typeTwo": "Ice",
        "caught": "no"
    },
    {
        "pokeIndex": "0077",
        "pokeImgSmall": "/img/pokemon-dex-491.png",
        "pokeImgBig": "/img/pokemon-dex-491-1.png",
        "name": "Darkrai",
        "typeOne": "Dark",
        "typeTwo": "Dark",
        "caught": "no"
    },
    {
        "pokeIndex": "0079",
        "pokeImgSmall": "/img/pokemon-dex-337.png",
        "pokeImgBig": "/img/pokemon-dex-337-1.png",
        "name": "Lunatone",
        "typeOne": "Rock",
        "typeTwo": "Psychc",
        "caught": "no"
    },
    {
        "pokeIndex": "0083",
        "pokeImgSmall": "/img/pokemon-dex-568.png",
        "pokeImgBig": "/img/pokemon-dex-568-1.png",
        "name": "Trubbish",
        "typeOne": "Poison",
        "typeTwo": "Poison",
        "caught": "no"
    },
    {
        "pokeIndex": "0086",
        "pokeImgSmall": "/img/pokemon-dex-404.png",
        "pokeImgBig": "/img/pokemon-dex-404-1.png",
        "name": "Luxio",
        "typeOne": "Electric",
        "typeTwo": "Electric",
        "caught": "no"
    }
]

// console.log(pokemonList[0]['pokeImg'])

const $containerMainGrid = document.getElementById('container-main-grid')


for(const pokemon of pokemonList) {
    const $cardTwo = document.createElement('div')
    $cardTwo.className = 'card-two'
    $cardTwo.setAttribute('id', pokemon.name.toLowerCase())

    const $cardTwoBodyUp = document.createElement('div')
    $cardTwoBodyUp.className = 'card-two-body-up'

    const $containerCardIndex = document.createElement('div')
    $containerCardIndex.className = 'container-card-index'

    const $caughtIcon = document.createElement('img')
    $caughtIcon.className = 'caught-icon'
    $caughtIcon.src = 'img/poke-ball.png'
    $caughtIcon.alt = 'Red and white standard pokemon ball caught icon'

    const $pokeIndex = document.createElement('h4')
    $pokeIndex.textContent = pokemon.pokeIndex

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
    if(types[pokemon.typeOne.toLowerCase()] || types[pokemon.typeTwo.toLowerCase()]) {
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
    $cardTwoBodyUp.addEventListener('click', function(){
        window.location.href= 'profile.html'
    })
}

//Intialized 'caught' or saved array for code down below
const caughtPokemonList = []

/* For of loop that iterates over pokemonList and checks if Caught slider is in 'off' position, if checked on styles are added
to the caught icon pokeball beside poke-index number and the pokemon object added to a new array called caughtPokemonList[]
and if checked off style none is added */
for(const pokemon of pokemonList) {
    //Need to add the "+ '-toggle'" becasue element when created is created as "pokemon.name.toLowerCase() + '-toggle'" above
    const $togSlider = document.getElementById(pokemon.name.toLowerCase() + '-toggle')
    /* Using String concatination to specify the target by using the dynamic id of the cards to target the caught-icon pokeball 
    for each card */ 
    const $caughtIcon = document.querySelector('#' + pokemon.name.toLowerCase() + ' .caught-icon')

    //Used to add the class caught-icon-none - added a 0.8rem margin to the top
    const $pokeIndex = document.querySelector('#' + pokemon.name.toLowerCase() + ' .container-card-index')

    $togSlider.addEventListener('change', function() {
        if(!$togSlider.checked) {
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
            //Pushes caught pokemon to caughtPokemonList array, cannot be 'uncaught' or 'released'
            caughtPokemonList.push(pokemon)
            // Function is called that creates the html for the pokemon object in/from caughtPokemonList
            caughtPokemon(caughtPokemonList)
            // Removes the last pushed pokemon object from caughtPokemonList array, to avoid duplication when 'catching' pokemon
            caughtPokemonList.pop(pokemon)
        }
    }) // End of caught toggle-switch eventListener
} // End of for...of loop



const $containerCaughtGrid = document.getElementById('container-caught-grid')

function caughtPokemon() {

    for (const pokemon of caughtPokemonList) {
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
        $pokeIndex.textContent = pokemon.pokeIndex

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
        $cardTwoBodyUp.addEventListener('click', function () {
            window.location.href = 'profile.html'
        })

    } // End of caughtPokemonList for...of

} // End of caughtPokemon()

















// ================================ InnerHTML method ===================================
// const testA = []

// for(const pokemon of pokemonList) {
//     testA.push(`
//     <div class="card-two">
//                 <div class="card-two-body-up">
//                     <div class="container-card-index">
//                         <img class="caught-icon" src="img/poke-ball.png" alt="">
//                         <h4>#${pokemon.pokeIndex}</h4>
//                     </div>
//                     <img src="img/pokemon-dex-15.png" alt="" class="pokemon-img">
//                 </div>
//                 <div class="card-two-body-down">
//                     <h5 class="card-two-title">${pokemon.name}</h5>
//                     <div class="container-card-btn">
//                         <a href="#" class="type-one">${pokemon.typeOne}</a>
//                         <a href="#" class="type-two">${pokemon.typeTwo}</a>
//                     </div>
//                     <div class="container-card-switch">
//                         <label class="switch">
//                             <input type="checkbox">
//                             <span class="slider round"></span>
//                         </label>
//                         <p class="caught-text">Caught</p>
//                     </div>
//                 </div>
//             </div>
//     `)
// }

// $containerMainGrid.innerHTML = testA.join('')


//Old less effective code for typeOne button colour, keep just in case 

// for(const type in types) {
//     if(pokemon.typeTwo.toLowerCase() === type)
//     console.log(type)
//     console.log(types[type])
//     $typeTwoBtn.style.backgroundColor = types[type]
// }
