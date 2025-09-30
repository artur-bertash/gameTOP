const API_Giphy = import.meta.env.VITE_GIPHY_API_KEY


async function getImages(characters) {
    for (const character of characters)
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=lBNalqIGSgB9UOZBe9jgXy6lFBvIhKTa&q=${character}&limit=1&offset=0&rating=g&lang=en&bundle=low_bandwidth`)
}



