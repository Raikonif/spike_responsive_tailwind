const BASE_URL = "http://localhost:3000/"


export interface article {
    id: number
    title: string
    author: string
    date: string
    content: string
    images: images[]
    type: string
}
export interface images {
    id: number
    url: string
}
const getArticles = async (): Promise<article[]> => {
    const response = await fetch(BASE_URL + "articles")
    return response.json() || []
}

const getArticle = async (id: number): Promise<article> => {
    const response = await fetch(BASE_URL + `articles/${id}`)
    return response.json() || []
}

const getArticlesFiltered = async (type: string): Promise<article[]> => {
    const articles = getArticles()
    const filteredArticles = (await articles).filter(article => article.date === type)
    return filteredArticles
}

export {
    getArticles,
    getArticle,
    getArticlesFiltered
}