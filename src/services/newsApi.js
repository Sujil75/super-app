import axios from "axios"

const API_KEY = "ba62161b38694afca38ff9760111c331"
const URI = "https://api.worldnewsapi.com/search-news"

export const newsApi = async () => {
    try {
        const response = await axios.get(URI, {
            params: {
                text: 'technology',
                language: 'en',
                country: 'in',
            }, 
            headers: {
                "X-API-Key": API_KEY
            }
        })

        return response.data.news
    } catch (err) {
        console.log("News API error:", err.message)
        return []
    }
}