import axios from "axios"

const apiKey = "d49f66609bb71da0e200cfc2c8e43569"

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

const basicGet = async (endpoint) => {
    let json = {}
    await api
        .get(endpoint)
        .then(response => json = response.data)
        .catch(error => console.log(error))
    return json
}

export const Api = {
    api,
    apiKey,
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originais do Netflix",
                items: await basicGet(`/discover/movie?&language=pt-BR&api_key=${apiKey}&without_companies=420|34|33|5|3475|2|109755`)
            },
            {
                slug: "trending",
                title: "Recomendados para Você",
                items: await basicGet(`/trending/all/week?language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug: "toprated",
                title: "Em Alta",
                items: await basicGet(`/movie/top_rated?api_key=${apiKey}&language=pt-BR`)
            },
            {
                slug: "action",
                title: "Ação",
                items: await basicGet(`/discover/movie?with_genres=28&language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: await basicGet(`/discover/movie?with_genres=35&language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug: "horror",
                title: "Terror",
                items: await basicGet(`/discover/movie?with_genres=27&language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug: "romance",
                title: "Romance",
                items: await basicGet(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${apiKey}`)
            },
            {
                slug: "documentary",
                title: "Documentários",
                items: await basicGet(`/discover/movie?with_genres=99&language=pt-BR&api_key=${apiKey}`)
            }
        ]
    }
}
