# mtm6302-capstone-mart1254
## Capstone Project 

**Name** Dominic Ty Martin
**Student Number** 040-999-928
**Capstone Project** The Capstone project I intend to complete is the **Pokedex** web application using the PokeApi

## Report - Mockup

To start off, I drew inspiration from the PokeDex in Pokemon HeartGold and SoulSilver – this is where I got the overall red, grey, and grid scheme. 

I wanted to keep my navbar very simple and not clutter it too much with tabs/buttons so I decided to simply have a search icon, the logo, and a symbol of a pokeball to indicate caught/favourite pokemon. My plan to make the caught/favourite list more accessible is to add a tooltip when hovered or focused on so users will have a better understanding if they are confused.
The web app will take the user to the home page on startup. Due to the fact that the PokeDex is supposed to display 20 pokemon at a time in a grid format, I opted to have cards with the most important information regarding the pokemon, which would be index/id of pokemon, pixelated image, name, type, and caught toggle.

I wanted the pokedex to resemble the older editions of the game which is why I used the pixelated sprites as the thumbnails. I also added a toggle so users can quickly mark pokemon they have caught with a toggle switch. The toggle switch in question is just a regular one when in the off position but when the user toggles on or “caught” the toggle switch turns into a pokeball to help signify it has been caught. Likewise, when the user toggles a pokeball icon will appear in the top left of the thumbnail to help better distinguish caught pokemon from uncaught pokemon.

If the user wants to see their caught or favourite pokemon, they can click the pokeball at the top left of the navbar to display all their caught pokemon in a grid, ordered from lowest index to highest.
If the user wants to know more information about their caught pokemon – or any pokemon for that matter, they simply click the thumbnail and will be sent to the pokemon’s profile page where they will get the standard information present on the thumbnail, with additional Description information to help give them a better idea about the pokemon. 
For the profile page I decided to use the artwork as I found the artwork to be a better physical representation of the pokemon.

For tablet I decided to use a grid with three columns for better accessibility of pokemon while also being able to use the larger screen real estate and display more on screen. Further, for the profile section I decided to enlarge the pokemon’s profile picture and move it to the side for better overall readability and less scrolling.

For desktop I debated adding more thumbnails by reducing their size but felt it was too difficult to see which pokemon were actually on screen, which is why I went with a five column grid and enlarged thumbnails so users would be able to better see the pokemon they were looking for while scrolling faster. For the profile page I wanted the image to take up a large portion of the screen so users could “study” the physical appearance of these pokemon (if we were in the world of pokemon).

I overall went with rounded edges to better give the pokedex a more modern feel while staying true to the Heart Gold and Soul Silver style of pokedex.

Here are the two reference images I drew inspiration from:

[Pokedex artwork](https://cdn.discordapp.com/attachments/395293697052377088/1158227623483289750/Pokedex_Johto_M_Gen_IV.png?ex=651d7548&is=651c23c8&hm=1a9eabbfd0531f523cf6de64120f5465c1dd6f5b1c33d8f01c0632529bbfbc54&)

and 

[Heart Gold & Soul Silver Pokedex UI](https://cdn.discordapp.com/attachments/395293697052377088/1158227623235829850/04-pokemon-hgss-feraligatr-screenshot.jpg?ex=651d7548&is=651c23c8&hm=3d87663c5932c68817eed0ffa5ca1227fc2d7d675eab4711a7c5bf5038b299eb&)


## Web Development III Capstone Part-3

**Steps Taken and Challenges faced**

To start off, the steps I outlined for the creation of the Part-3 prototype is to put more focus on the JavaScript. To further explain I understand the JS was not a markable aspect of the project but due to the repeition of my prototype I wanted to take advange of the use of arrays and the createElement methods to essentially create my cards once, as well as freeing up code.

I also figured it would be best to use JavaScript to try and mimick the PokeAPI, which is alos why I really emphasesed the use of JS arrays and objects - so that way I would hopefully be in a better position when it's time to start using the API.

I encourted numerous challenges - most simply mistakes regarding CSS, such as appling a width of 50% to one of my images and later wondering why my image in the profile page doesn'take 100% of it's container, then 'debugging' only to find I never incraesed the width from 50%.

Another is my apprent forgetfullness of the usage of CSS grids, I apptempted a Flex layout but using CSS grids for the mayjor layout of the profile page would have made my life a lot easier, I only seemed to remember when I was on my desktop media query and due to time constraints didn't re-code the tablet and mobile layouts with CSS grid.

One issue I couldn't seem to deal with is the boarder width of the 'middle-section' part of the pokemon profile - this is mainly due to the flex layout.

I also had an issue on line 497 of my style.css where I needed to have the parent of an h2 to be 25%, the smaller the better as there seemed to be some margin: 0 auto effect where my h2 would move to the right side dispite there being no property (to my knowldge at least)

An issue realted to JS I had that I am quite proud of myself for solving: 

I had an issue where I wanted to target each independent pokémon card from the Pokemon array but had no unique identifiers, so what I did is I used the toLowerCase function and the setAttributeFunction on the card-two div to give each pokemon card a unique ID which would allow them to be targeted independently. 

I also had an issue on line 369 where adding my function caused the pushe object to duplicate every object before, I sloved this issue by adding the pop method to the conditional statment to remove the duplicate whenever the toggle is switched on for the first time (Does not solve adding multiple pokemon to the caught-list)

I also had another JS issue I was unable to solve which was my sliders not removing the pokeball icon on the first slide, causing the user to have to toggle twice (adding two of the same pokemon to the caught-list). I believe the issue might be a CSS issues where I need to set the default state to display none but due to time constraints the issue was never resloved 

## Citation

All of my pokemon images are from the PokeAPI GitHub as I wanted to mimick the API and design accordingly. [Pokemon sprites](https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon) 

[Large Pokemon sprites](https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon/other/official-artwork)

[Pokeball](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png)

I have used multiple sources to help me with my JavaScript such as StackedOverflow, MDM Web Docs, ChatGPT, and school resources such as the Rocket and Crazy Cates codepen plus the IMDAC BUT would like to clairify my use of ChatGPT. 

I did not use it to write my code, more to ask questions if what I was thinkning was possible and for niche examples - I understand my code and am able to explain my logic, I also did not copy paste any code from ChatGPT that I did not understand, like mentioned before - my code and logic is the product of me with some assitance from ChatGPT. Most of my resuources were documentation and school resources.

That being said I am/did not link the resources as I wasn't studying them but taking small bits of logic and trying to apply it to my thinking and code. I believe I had roughly 90 tabs open for examples and such but really only used the resources listed above. Plus not every example or documentation had what I was looking for and I lost track of what resuource were actually good.


## Notes

There is no third page as my orginal idea behind my design was to have a filtered list, I was not able to get around to using the navbar icon to display ONLY the caught-pokemon but was able to push the objects into the caught list and display that, I was also unsure if adding that array to a page would actually save the objects in the array when the user left the home page, so I played it safe and just added the list to the bottom of the homepage.

The slider buttons require the user to toggle twice, there were some stylic changes as I wanted to keep things consistant, such as not having the profile padding anymore and displaying the same type button twice IF there was only one type (I found one button was odd looking, even if streched)

There is also an issue regarding sizing of the pokemon profile in the profile page when the screen is between 1000px and 1500px, I believe this is a width issue but am unsure how to properly deal with it.

As of right now there is no way to remove or 'release' pokemon from the caughtList other than refreshing. The list will be displayed at the bottom of the main grid when you 'catch' pokemon. 

Clicking on the upper body of the pokemon cards will bring the user to only ONE pokemon profile page, looking at dynamic pages seemed out of my scope for now with fetch requests being a commonality (which I don't understand at this point).

I also remember there being discussion on the use of dynamic IDs being frowned upon (I may be misremembering) but just wanted to say I did dynamic IDs since that way made the most sense for me at this time. 


## Web Development III Capstone Part-4

**Steps Taken and Challenges faced**

To start off, I first wanted to focus on retriving the PokeAPI, displaying it using my pokemonList array and then storing the "caught" pokemon in my caughtPokemonList array. I also wanted to use a custom object that used the same keys as my mock API to avoid me having to change code already present.

I made my two arrays into functions which my async function fetchPokemonArray() called everytime fetchPokemonArray() was called. After this I was I wanted poth list function to be able to remove pokemon stored in local storage for ease of access.

I faced numerous callenges throughout, which I don't remember all of but a few main ones were:

I was unable to do my orginal plan of displaying the caughtPokemonList on a seperate page, so I had to settle using a modal and function to toggle the display of both arrays to show only one or the other.

I was also unable to make the toggle and caught icons stay in their caught posistions after refreshing the page, every attempt lead to my program crashing and a multitude of errors occuring. 

Due to time constraints, I was unable to focus on the search bar within my program and thus is left complete with it not being able to search anything. 

I also had difficulty in general keeping up with the asynchronous functions' paths, leading me to encounter errors at different locations and different times.









