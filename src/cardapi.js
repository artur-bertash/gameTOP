const API_Giphy = import.meta.env.VITE_GIPHY_API_KEY


export async function getImage(name) {
    console.log(API_Giphy)
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_Giphy}&q=${name}&limit=1&offset=0&rating=g&lang=en&bundle=low_bandwidth`)
    const responseData = await response.json()
    console.log(responseData)
    console.log(responseData.data[0].images.fixed_width_small.url)
    return responseData.data[0].images.fixed_width_small_still?.url ?? responseData.data[0].images.fixed_width_small?.url ?? responseData.data[0].images.original?.url ?? ""
}




